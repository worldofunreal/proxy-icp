import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Achievement {
  'id' : bigint,
  'categoryId' : bigint,
  'individualAchievements' : Array<bigint>,
  'reward' : Array<AchievementReward>,
  'requiredProgress' : bigint,
  'name' : string,
  'tier' : AchievementTier,
  'completed' : boolean,
  'progress' : bigint,
}
export interface AchievementCategory {
  'id' : bigint,
  'reward' : Array<AchievementReward>,
  'requiredProgress' : bigint,
  'name' : string,
  'tier' : AchievementTier,
  'completed' : boolean,
  'progress' : bigint,
  'achievements' : Array<bigint>,
}
export interface AchievementProgress {
  'achievementId' : bigint,
  'playerId' : PlayerId__1,
  'completed' : boolean,
  'progress' : bigint,
}
export interface AchievementReward {
  'rewardType' : AchievementRewardsType,
  'amount' : bigint,
}
export type AchievementRewardsType = { 'Flux' : null } |
  { 'CosmicPower' : null } |
  { 'Shards' : null } |
  { 'Chest' : null };
export type AchievementTier = { 'Diamond' : null } |
  { 'Gold' : null } |
  { 'Platinum' : null } |
  { 'Bronze' : null } |
  { 'Legend' : null } |
  { 'Silver' : null } |
  { 'Master' : null };
export type AchievementType = { 'WeeklyMissionsCompleted' : null } |
  { 'UnitsDeployed' : null } |
  { 'ShardsMinted' : null } |
  { 'DailyMissionsCompleted' : null } |
  { 'GamesPlayed' : null } |
  { 'DamageDealt' : null } |
  { 'ChestsOpened' : null } |
  { 'LevelReached' : null } |
  { 'RewardsClaimed' : null } |
  { 'NFTsMinted' : null } |
  { 'DamageTaken' : null } |
  { 'AchievementsUnlocked' : null } |
  { 'ChestsMinted' : null } |
  { 'XPEarned' : null } |
  { 'Kills' : null } |
  { 'GamesWithFaction' : null } |
  { 'GamesCompleted' : null } |
  { 'EnergyUsed' : null } |
  { 'GamesWon' : null } |
  { 'GameModePlayed' : null } |
  { 'FluxMinted' : null } |
  { 'TimePlayed' : null } |
  { 'GamesWithCharacter' : null } |
  { 'FriendsAdded' : null } |
  { 'UserMissionsCompleted' : null };
export type AdminFunction = { 'MintChest' : [Principal, bigint] } |
  { 'CreateMissionsPeriodically' : null } |
  {
    'CreateMission' : [
      string,
      MissionType__1,
      RewardType,
      bigint,
      bigint,
      bigint,
    ]
  };
export type AvatarID = bigint;
export type AvatarID__1 = bigint;
export interface AverageStats {
  'averageDamageDealt' : bigint,
  'averageEnergyGenerated' : bigint,
  'averageEnergyUsed' : bigint,
  'averageKills' : bigint,
  'averageEnergyWasted' : bigint,
  'averageXpEarned' : bigint,
}
export interface BasicStats { 'playerStats' : Array<PlayerStats> }
export interface Cosmicrafts {
  'acceptFriendRequest' : ActorMethod<[PlayerId], [boolean, string]>,
  'adminManagement' : ActorMethod<[AdminFunction], [boolean, string]>,
  'assignAchievementsToUser' : ActorMethod<[PlayerId], undefined>,
  'blockUser' : ActorMethod<[PlayerId], [boolean, string]>,
  'cancelMatchmaking' : ActorMethod<[], [boolean, string]>,
  'claimAchievementReward' : ActorMethod<[bigint], [boolean, string]>,
  'claimGeneralReward' : ActorMethod<[bigint], [boolean, string]>,
  'claimUserReward' : ActorMethod<[bigint], [boolean, string]>,
  'createAchievement' : ActorMethod<
    [string, Array<bigint>, bigint, bigint, Array<AchievementReward>],
    [boolean, string, bigint]
  >,
  'createCategory' : ActorMethod<
    [string, Array<bigint>, bigint, Array<AchievementReward>],
    [boolean, string, bigint]
  >,
  'createIndividualAchievement' : ActorMethod<
    [string, AchievementType, bigint, Array<AchievementReward>, bigint],
    [boolean, string, bigint]
  >,
  'createUserMission' : ActorMethod<[PlayerId], [boolean, string, bigint]>,
  'declineFriendRequest' : ActorMethod<[PlayerId], [boolean, string]>,
  'getAchievements' : ActorMethod<
    [],
    Array<
      [
        AchievementCategory,
        Array<Achievement>,
        Array<IndividualAchievementProgress>,
      ]
    >
  >,
  'getAllPlayers' : ActorMethod<[], Array<Player>>,
  'getAllSearching' : ActorMethod<[], Array<MatchData>>,
  'getBlockedUsers' : ActorMethod<[], Array<PlayerId>>,
  'getCosmicraftsStats' : ActorMethod<[], OverallStats>,
  'getFriendRequests' : ActorMethod<[], Array<FriendRequest>>,
  'getFriendsList' : ActorMethod<[], [] | [Array<PlayerId>]>,
  'getFullUserProfile' : ActorMethod<
    [PlayerId],
    [] | [[Player, PlayerGamesStats, AverageStats]]
  >,
  'getGeneralMissionProgress' : ActorMethod<
    [Principal, bigint],
    [] | [MissionsUser]
  >,
  'getGeneralMissions' : ActorMethod<[], Array<MissionsUser>>,
  'getMatchDetails' : ActorMethod<
    [MatchID],
    [] | [[MatchData, Array<[Player, PlayerGamesStats]>]]
  >,
  'getMatchHistoryByPrincipal' : ActorMethod<
    [PlayerId],
    Array<[MatchID, [] | [BasicStats]]>
  >,
  'getMatchIDsByPrincipal' : ActorMethod<[PlayerId], Array<MatchID>>,
  'getMatchParticipants' : ActorMethod<
    [MatchID],
    [] | [[Principal, [] | [Principal]]]
  >,
  'getMatchSearching' : ActorMethod<[string], [MMSearchStatus, bigint, string]>,
  'getMatchStats' : ActorMethod<[MatchID], [] | [BasicStats]>,
  'getMintedInfo' : ActorMethod<
    [Principal],
    {
      'shards' : bigint,
      'flux' : bigint,
      'gameNFTs' : { 'tokenIDs' : Array<TokenID>, 'quantity' : bigint },
      'chests' : { 'tokenIDs' : Array<TokenID>, 'quantity' : bigint },
    }
  >,
  'getMyMatchData' : ActorMethod<[], [[] | [FullMatchData], bigint]>,
  'getMyPrivacySettings' : ActorMethod<[], PrivacySetting>,
  'getMyStats' : ActorMethod<[], [] | [PlayerGamesStats]>,
  'getNotifications' : ActorMethod<[], Array<Notification>>,
  'getPlayer' : ActorMethod<[], [] | [Player]>,
  'getPlayerAverageStats' : ActorMethod<[Principal], [] | [AverageStats]>,
  'getPlayerElo' : ActorMethod<[Principal], number>,
  'getPlayerStats' : ActorMethod<[PlayerId], [] | [PlayerGamesStats]>,
  'getProfile' : ActorMethod<[PlayerId], [] | [Player]>,
  'getTransactionLogs' : ActorMethod<[Principal, ItemType], Array<LogEntry>>,
  'getUserMissionProgress' : ActorMethod<
    [PlayerId, bigint],
    [] | [MissionsUser]
  >,
  'getUserMissions' : ActorMethod<[], Array<MissionsUser>>,
  'isGameMatched' : ActorMethod<[], [boolean, string]>,
  'mintDeck' : ActorMethod<[Principal], [boolean, string]>,
  'openChest' : ActorMethod<[bigint], [boolean, string]>,
  'registerPlayer' : ActorMethod<
    [Username, AvatarID],
    [boolean, [] | [Player], string]
  >,
  'saveFinishedGame' : ActorMethod<
    [
      MatchID,
      {
        'secRemaining' : bigint,
        'energyGenerated' : bigint,
        'damageDealt' : bigint,
        'wonGame' : boolean,
        'botMode' : bigint,
        'deploys' : bigint,
        'damageTaken' : bigint,
        'damageCritic' : bigint,
        'damageEvaded' : bigint,
        'energyChargeRate' : bigint,
        'faction' : bigint,
        'energyUsed' : bigint,
        'gameMode' : bigint,
        'energyWasted' : bigint,
        'xpEarned' : bigint,
        'characterID' : bigint,
        'botDifficulty' : bigint,
        'kills' : bigint,
      },
    ],
    [boolean, string]
  >,
  'searchActiveGeneralMissions' : ActorMethod<[Principal], Array<MissionsUser>>,
  'searchActiveUserMissions' : ActorMethod<[PlayerId], Array<MissionsUser>>,
  'searchUserByUsername' : ActorMethod<[Username], Array<Player>>,
  'sendFriendRequest' : ActorMethod<[PlayerId], [boolean, string]>,
  'setPlayerActive' : ActorMethod<[], boolean>,
  'setPrivacySetting' : ActorMethod<[PrivacySetting], [boolean, string]>,
  'test' : ActorMethod<
    [PlayerId],
    [] | [
      {
        'xp' : bigint,
        'elo' : number,
        'gamesLost' : bigint,
        'username' : Username,
        'level' : Level,
        'gamesWon' : bigint,
      }
    ]
  >,
  'unblockUser' : ActorMethod<[PlayerId], [boolean, string]>,
  'updateAndGetAchievements' : ActorMethod<
    [],
    Array<
      [
        AchievementCategory,
        Array<Achievement>,
        Array<IndividualAchievementProgress>,
      ]
    >
  >,
  'updateAvatar' : ActorMethod<[AvatarID], [boolean, PlayerId, string]>,
  'updateCategoryProgress' : ActorMethod<[PlayerId, bigint], [boolean, string]>,
  'updateDescription' : ActorMethod<[Description], [boolean, PlayerId, string]>,
  'updateGeneralAchievementProgress' : ActorMethod<
    [PlayerId, bigint],
    [boolean, string]
  >,
  'updateIndividualAchievementProgress' : ActorMethod<
    [PlayerId, Array<AchievementProgress>],
    [boolean, string]
  >,
  'updateUsername' : ActorMethod<[Username], [boolean, PlayerId, string]>,
  'upgradeNFT' : ActorMethod<[TokenID], [boolean, string]>,
}
export type Description = string;
export type Description__1 = string;
export interface FriendDetails {
  'username' : Username__1,
  'playerId' : PlayerId__2,
  'avatar' : AvatarID__1,
}
export interface FriendRequest {
  'to' : PlayerId__2,
  'from' : PlayerId__2,
  'timestamp' : bigint,
}
export interface FullMatchData {
  'status' : MMStatus,
  'matchID' : MatchID__1,
  'player1' : {
    'id' : PlayerId__2,
    'elo' : number,
    'username' : Username__1,
    'level' : Level__1,
    'matchAccepted' : boolean,
    'playerGameData' : string,
    'avatar' : AvatarID__1,
  },
  'player2' : [] | [
    {
      'id' : PlayerId__2,
      'elo' : number,
      'username' : Username__1,
      'level' : Level__1,
      'matchAccepted' : boolean,
      'playerGameData' : string,
      'avatar' : AvatarID__1,
    }
  ],
}
export interface GamesWithCharacter {
  'gamesPlayed' : bigint,
  'characterID' : bigint,
  'gamesWon' : bigint,
}
export interface GamesWithFaction {
  'gamesPlayed' : bigint,
  'gamesWon' : bigint,
  'factionID' : bigint,
}
export interface GamesWithGameMode {
  'gameModeID' : bigint,
  'gamesPlayed' : bigint,
  'gamesWon' : bigint,
}
export interface IndividualAchievement {
  'id' : bigint,
  'reward' : Array<AchievementReward>,
  'achievementId' : bigint,
  'requiredProgress' : bigint,
  'name' : string,
  'completed' : boolean,
  'achievementType' : AchievementType,
  'progress' : bigint,
}
export interface IndividualAchievementProgress {
  'completed' : boolean,
  'progress' : bigint,
  'individualAchievement' : IndividualAchievement,
}
export type ItemType = { 'Flux' : null } |
  { 'Shards' : null } |
  { 'GameNFTs' : null } |
  { 'Chest' : null };
export type Level = bigint;
export type Level__1 = bigint;
export interface LogEntry {
  'tokenID' : [] | [TokenID],
  'user' : Principal,
  'timestamp' : bigint,
  'itemType' : ItemType,
  'amount' : [] | [bigint],
}
export interface MMInfo {
  'id' : PlayerId__2,
  'elo' : number,
  'username' : Username__1,
  'lastPlayerActive' : bigint,
  'matchAccepted' : boolean,
  'playerGameData' : string,
}
export type MMSearchStatus = { 'Available' : null } |
  { 'NotAvailable' : null } |
  { 'Assigned' : null };
export type MMStatus = { 'Ended' : null } |
  { 'Reserved' : null } |
  { 'Searching' : null } |
  { 'Accepted' : null } |
  { 'InGame' : null } |
  { 'Accepting' : null };
export interface MatchData {
  'status' : MMStatus,
  'matchID' : MatchID__1,
  'player1' : MMInfo,
  'player2' : [] | [MMInfo],
}
export type MatchID = bigint;
export type MatchID__1 = bigint;
export type MissionRewardType = { 'Flux' : null } |
  { 'Shards' : null } |
  { 'Chest' : null };
export type MissionType = { 'UnitsDeployed' : null } |
  { 'DamageDealt' : null } |
  { 'DamageTaken' : null } |
  { 'XPEarned' : null } |
  { 'Kills' : null } |
  { 'FactionPlayed' : null } |
  { 'GamesCompleted' : null } |
  { 'EnergyUsed' : null } |
  { 'GamesWon' : null } |
  { 'GameModePlayed' : null };
export type MissionType__1 = { 'UnitsDeployed' : null } |
  { 'DamageDealt' : null } |
  { 'DamageTaken' : null } |
  { 'XPEarned' : null } |
  { 'Kills' : null } |
  { 'FactionPlayed' : null } |
  { 'GamesCompleted' : null } |
  { 'EnergyUsed' : null } |
  { 'GamesWon' : null } |
  { 'GameModePlayed' : null };
export interface MissionsUser {
  'total' : bigint,
  'missionType' : MissionType,
  'reward_amount' : bigint,
  'reward_type' : MissionRewardType,
  'start_date' : bigint,
  'progress' : bigint,
  'finish_date' : bigint,
  'expiration' : bigint,
  'finished' : boolean,
  'id_mission' : bigint,
}
export interface Notification {
  'from' : PlayerId__2,
  'message' : string,
  'timestamp' : Time,
}
export interface OverallGamesWithCharacter {
  'gamesPlayed' : bigint,
  'characterID' : bigint,
}
export interface OverallGamesWithFaction {
  'gamesPlayed' : bigint,
  'factionID' : bigint,
}
export interface OverallGamesWithGameMode {
  'gameModeID' : bigint,
  'gamesPlayed' : bigint,
}
export interface OverallStats {
  'totalEnergyGenerated' : bigint,
  'totalGamesMP' : bigint,
  'totalGamesSP' : bigint,
  'totalGamesGameMode' : Array<OverallGamesWithGameMode>,
  'totalGamesPlayed' : bigint,
  'totalDamageDealt' : bigint,
  'totalEnergyUsed' : bigint,
  'totalTimePlayed' : bigint,
  'totalEnergyWasted' : bigint,
  'totalKills' : bigint,
  'totalXpEarned' : bigint,
  'totalGamesWithCharacter' : Array<OverallGamesWithCharacter>,
  'totalGamesWithFaction' : Array<OverallGamesWithFaction>,
}
export interface Player {
  'id' : PlayerId__2,
  'elo' : number,
  'username' : Username__1,
  'description' : Description__1,
  'level' : Level__1,
  'registrationDate' : RegistrationDate,
  'friends' : Array<FriendDetails>,
  'avatar' : AvatarID__1,
}
export interface PlayerGamesStats {
  'gamesLost' : bigint,
  'energyGenerated' : bigint,
  'gamesPlayed' : bigint,
  'totalGamesGameMode' : Array<GamesWithGameMode>,
  'totalDamageDealt' : bigint,
  'totalDamageCrit' : bigint,
  'totalDamageTaken' : bigint,
  'energyUsed' : bigint,
  'totalDamageEvaded' : bigint,
  'energyWasted' : bigint,
  'gamesWon' : bigint,
  'totalKills' : bigint,
  'totalXpEarned' : bigint,
  'totalGamesWithCharacter' : Array<GamesWithCharacter>,
  'totalGamesWithFaction' : Array<GamesWithFaction>,
}
export type PlayerId = Principal;
export type PlayerId__1 = Principal;
export type PlayerId__2 = Principal;
export interface PlayerStats {
  'secRemaining' : bigint,
  'energyGenerated' : bigint,
  'damageDealt' : bigint,
  'wonGame' : boolean,
  'playerId' : PlayerId__2,
  'botMode' : bigint,
  'deploys' : bigint,
  'damageTaken' : bigint,
  'damageCritic' : bigint,
  'damageEvaded' : bigint,
  'energyChargeRate' : bigint,
  'faction' : bigint,
  'energyUsed' : bigint,
  'gameMode' : bigint,
  'energyWasted' : bigint,
  'xpEarned' : bigint,
  'characterID' : bigint,
  'botDifficulty' : bigint,
  'kills' : bigint,
}
export type PrivacySetting = { 'blockAll' : null } |
  { 'acceptAll' : null } |
  { 'friendsOfFriends' : null };
export type RegistrationDate = bigint;
export type RewardType = { 'Flux' : null } |
  { 'Shards' : null } |
  { 'Chest' : null };
export type Time = bigint;
export type TokenID = bigint;
export type Username = string;
export type Username__1 = string;
export interface _SERVICE extends Cosmicrafts {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
