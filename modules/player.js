import { Principal } from '@dfinity/principal';
import { createActor, createPublicActor } from './actor.js';
import { callActorFunction } from './apiHandler.js';
import { parseBigIntAndPrincipalValues, convertPrincipalToString } from './utils.js';

const registerPlayer = async (userId, username, avatarId) => {
  const actor = await createActor(userId);
  const result = await callActorFunction(actor, 'registerPlayer', username, avatarId);
  return parseBigIntAndPrincipalValues(result);
};

const getAllPlayers = async () => {
  const actor = await createPublicActor();
  const players = await callActorFunction(actor, 'getAllPlayers');
  return players.map(player => ({
    ...parseBigIntAndPrincipalValues(player),
    id: convertPrincipalToString(player.id),
    friends: player.friends.map(friend => ({
      ...friend,
      id: convertPrincipalToString(friend.id)
    }))
  }));
};

const getPlayer = async (userId) => {
  const actor = await createActor(userId);
  const player = await callActorFunction(actor, 'getPlayer');
  return player ? parseBigIntAndPrincipalValues(player) : null;
};

const getProfile = async (principalId) => {
  const actor = await createPublicActor();
  const profile = await callActorFunction(actor, 'getProfile', Principal.fromText(principalId));
  return profile ? parseBigIntAndPrincipalValues(profile) : null;
};

const updateUsername = async (userId, newUsername) => {
  const actor = await createActor(userId);
  const result = await callActorFunction(actor, 'updateUsername', newUsername);
  return parseBigIntAndPrincipalValues(result);
};

const updateAvatar = async (userId, newAvatarId) => {
  const actor = await createActor(userId);
  const result = await callActorFunction(actor, 'updateAvatar', newAvatarId);
  return parseBigIntAndPrincipalValues(result);
};

const updateDescription = async (userId, newDescription) => {
  const actor = await createActor(userId);
  const result = await callActorFunction(actor, 'updateDescription', newDescription);
  return parseBigIntAndPrincipalValues(result);
};

const addFriend = async (userId, friendId) => {
  const actor = await createActor(userId);
  const result = await callActorFunction(actor, 'addFriend', Principal.fromText(friendId));
  return parseBigIntAndPrincipalValues(result);
};

export { registerPlayer, getAllPlayers, getPlayer, getProfile, updateUsername, updateAvatar, updateDescription, addFriend };
