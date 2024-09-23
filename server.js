import express from 'express';
import bodyParser from 'body-parser';
import { registerPlayer, getAllPlayers, getPlayer, getProfile, updateUsername, updateAvatar, updateDescription } from './modules/player.js';
import { sendFriendRequest, acceptFriendRequest, getFriendsList, getFriendRequests } from './modules/friends.js';
import { setPrivacySetting, getMyPrivacySettings } from './modules/privacy.js';
import { getNotifications } from './modules/notifications.js';
import { Principal } from '@dfinity/principal';
import { customJsonSerializer, parseBigIntAndPrincipalValues } from './modules/utils.js';
import axios from 'axios';
const app = express();
const port = 3000;

app.use(bodyParser.json());

const logRequest = (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log(`Request body: ${JSON.stringify(req.body)}`);
  next();
};

app.use(logRequest);

app.post('/api/getUserByUsername', async (req, res) => {
  const { username } = req.body;

  // Check if username is provided
  if (!username) {
    return res.status(400).json({ error: 'Missing username parameter' });
  }

  try {
    // X API v2 endpoint to get user by username
    const searchUrl = `https://api.twitter.com/2/users/by/username/${encodeURIComponent(username)}`;
    const ACCESS_TOKEN = '840305705747861504-jgI0BCyAlDAlxlUNDRMnZNv2sQyVS2C';

    const searchResponse = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    });

    // Check if the user was found
    const foundUser = searchResponse.data.data;
    if (!foundUser) {
      return res.status(404).json({ error: 'User not found on X API' });
    }

    // Return the user information
    res.json(foundUser);
  } catch (error) {
    console.error(`Error fetching user by username:`, error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Player Endpoints
app.post('/api/registerPlayer', async (req, res) => {
  const { userId, username, avatarId } = req.body;
  if (!userId || !username || avatarId === undefined) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const result = await registerPlayer(userId, username, avatarId);
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error registering player:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getAllPlayers', async (req, res) => {
  try {
    const players = await getAllPlayers();
    res.json(parseBigIntAndPrincipalValues(players));
  } catch (error) {
    console.error(`Error getting all players:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/getPlayer', async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  try {
    const player = await getPlayer(userId);
    res.json(parseBigIntAndPrincipalValues(player));
  } catch (error) {
    console.error(`Error getting player:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getProfile/:principalId', async (req, res) => {
  const principalId = req.params.principalId;
  try {
    const profile = await getProfile(Principal.fromText(principalId));
    res.json(parseBigIntAndPrincipalValues(profile));
  } catch (error) {
    console.error(`Error getting profile for principal ${principalId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/updateUsername', async (req, res) => {
  const { userId, newUsername } = req.body;
  if (!userId || !newUsername) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const result = await updateUsername(userId, newUsername);
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error updating username:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/updateAvatar', async (req, res) => {
  const { userId, newAvatarId } = req.body;
  if (!userId || newAvatarId === undefined) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const result = await updateAvatar(userId, newAvatarId);
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error updating avatar:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/updateDescription', async (req, res) => {
  const { userId, newDescription } = req.body;
  if (!userId || !newDescription) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const result = await updateDescription(userId, newDescription);
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error updating description:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Friend Endpoints
app.post('/api/sendFriendRequest', async (req, res) => {
  const { userId, friendId } = req.body;
  if (!userId || !friendId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const result = await sendFriendRequest(userId, friendId);
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error sending friend request from ${userId} to ${friendId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/acceptFriendRequest', async (req, res) => {
  const { userId, friendId } = req.body;
  if (!userId || !friendId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const result = await acceptFriendRequest(userId, Principal.fromText(friendId));
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error accepting friend request from ${userId} to ${friendId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/getFriendsList', async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const friends = await getFriendsList(userId);
    res.json(parseBigIntAndPrincipalValues(friends));
  } catch (error) {
    console.error(`Error getting friends list for ${userId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/getFriendRequests', async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const requests = await getFriendRequests(userId);
    res.json(parseBigIntAndPrincipalValues(requests));
  } catch (error) {
    console.error(`Error getting friend requests for ${userId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Privacy Endpoints
app.post('/api/setPrivacySetting', async (req, res) => {
  const { userId, setting } = req.body;
  if (!userId || !setting) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const validSetting = setting === "acceptAll" ? { acceptAll: null } :
      setting === "blockAll" ? { blockAll: null } :
        { friendsOfFriends: null };
    const result = await setPrivacySetting(userId, validSetting);
    res.json(parseBigIntAndPrincipalValues(result));
  } catch (error) {
    console.error(`Error setting privacy setting for ${userId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/getMyPrivacySettings', async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const setting = await getMyPrivacySettings(userId);
    res.json(parseBigIntAndPrincipalValues(setting));
  } catch (error) {
    console.error(`Error getting privacy settings for ${userId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Notification Endpoints
app.post('/api/getNotifications', async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const notifications = await getNotifications(userId);
    res.json(parseBigIntAndPrincipalValues(notifications));
  } catch (error) {
    console.error(`Error getting notifications for ${userId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
