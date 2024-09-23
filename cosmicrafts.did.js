export const idlFactory = ({ IDL }) => {
  const PlayerId = IDL.Principal;
  const MissionType__1 = IDL.Variant({
    'UnitsDeployed' : IDL.Null,
    'DamageDealt' : IDL.Null,
    'DamageTaken' : IDL.Null,
    'XPEarned' : IDL.Null,
    'Kills' : IDL.Null,
    'FactionPlayed' : IDL.Null,
    'GamesCompleted' : IDL.Null,
    'EnergyUsed' : IDL.Null,
    'GamesWon' : IDL.Null,
    'GameModePlayed' : IDL.Null,
  });
  const RewardType = IDL.Variant({
    'Flux' : IDL.Null,
    'Shards' : IDL.Null,
    'Chest' : IDL.Null,
  });
  const AdminFunction = IDL.Variant({
    'MintChest' : IDL.Tuple(IDL.Principal, IDL.Nat),
    'CreateMissionsPeriodically' : IDL.Null,
    'CreateMission' : IDL.Tuple(
      IDL.Text,
      MissionType__1,
      RewardType,
      IDL.Nat,
      IDL.Nat,
      IDL.Nat64,
    ),
  });
  const AchievementRewardsType = IDL.Variant({
    'Flux' : IDL.Null,
    'CosmicPower' : IDL.Null,
    'Shards' : IDL.Null,
    'Chest' : IDL.Null,
  });
  const AchievementReward = IDL.Record({
    'rewardType' : AchievementRewardsType,
    'amount' : IDL.Nat,
  });
  const AchievementType = IDL.Variant({
    'WeeklyMissionsCompleted' : IDL.Null,
    'UnitsDeployed' : IDL.Null,
    'ShardsMinted' : IDL.Null,
    'DailyMissionsCompleted' : IDL.Null,
    'GamesPlayed' : IDL.Null,
    'DamageDealt' : IDL.Null,
    'ChestsOpened' : IDL.Null,
    'LevelReached' : IDL.Null,
    'RewardsClaimed' : IDL.Null,
    'NFTsMinted' : IDL.Null,
    'DamageTaken' : IDL.Null,
    'AchievementsUnlocked' : IDL.Null,
    'ChestsMinted' : IDL.Null,
    'XPEarned' : IDL.Null,
    'Kills' : IDL.Null,
    'GamesWithFaction' : IDL.Null,
    'GamesCompleted' : IDL.Null,
    'EnergyUsed' : IDL.Null,
    'GamesWon' : IDL.Null,
    'GameModePlayed' : IDL.Null,
    'FluxMinted' : IDL.Null,
    'TimePlayed' : IDL.Null,
    'GamesWithCharacter' : IDL.Null,
    'FriendsAdded' : IDL.Null,
    'UserMissionsCompleted' : IDL.Null,
  });
  const AchievementTier = IDL.Variant({
    'Diamond' : IDL.Null,
    'Gold' : IDL.Null,
    'Platinum' : IDL.Null,
    'Bronze' : IDL.Null,
    'Legend' : IDL.Null,
    'Silver' : IDL.Null,
    'Master' : IDL.Null,
  });
  const AchievementCategory = IDL.Record({
    'id' : IDL.Nat,
    'reward' : IDL.Vec(AchievementReward),
    'requiredProgress' : IDL.Nat,
    'name' : IDL.Text,
    'tier' : AchievementTier,
    'completed' : IDL.Bool,
    'progress' : IDL.Nat,
    'achievements' : IDL.Vec(IDL.Nat),
  });
  const Achievement = IDL.Record({
    'id' : IDL.Nat,
    'categoryId' : IDL.Nat,
    'individualAchievements' : IDL.Vec(IDL.Nat),
    'reward' : IDL.Vec(AchievementReward),
    'requiredProgress' : IDL.Nat,
    'name' : IDL.Text,
    'tier' : AchievementTier,
    'completed' : IDL.Bool,
    'progress' : IDL.Nat,
  });
  const IndividualAchievement = IDL.Record({
    'id' : IDL.Nat,
    'reward' : IDL.Vec(AchievementReward),
    'achievementId' : IDL.Nat,
    'requiredProgress' : IDL.Nat,
    'name' : IDL.Text,
    'completed' : IDL.Bool,
    'achievementType' : AchievementType,
    'progress' : IDL.Nat,
  });
  const IndividualAchievementProgress = IDL.Record({
    'completed' : IDL.Bool,
    'progress' : IDL.Nat,
    'individualAchievement' : IndividualAchievement,
  });
  const PlayerId__2 = IDL.Principal;
  const Username__1 = IDL.Text;
  const Description__1 = IDL.Text;
  const Level__1 = IDL.Nat;
  const RegistrationDate = IDL.Int;
  const AvatarID__1 = IDL.Nat;
  const FriendDetails = IDL.Record({
    'username' : Username__1,
    'playerId' : PlayerId__2,
    'avatar' : AvatarID__1,
  });
  const Player = IDL.Record({
    'id' : PlayerId__2,
    'elo' : IDL.Float64,
    'username' : Username__1,
    'description' : Description__1,
    'level' : Level__1,
    'registrationDate' : RegistrationDate,
    'friends' : IDL.Vec(FriendDetails),
    'avatar' : AvatarID__1,
  });
  const MMStatus = IDL.Variant({
    'Ended' : IDL.Null,
    'Reserved' : IDL.Null,
    'Searching' : IDL.Null,
    'Accepted' : IDL.Null,
    'InGame' : IDL.Null,
    'Accepting' : IDL.Null,
  });
  const MatchID__1 = IDL.Nat;
  const MMInfo = IDL.Record({
    'id' : PlayerId__2,
    'elo' : IDL.Float64,
    'username' : Username__1,
    'lastPlayerActive' : IDL.Nat64,
    'matchAccepted' : IDL.Bool,
    'playerGameData' : IDL.Text,
  });
  const MatchData = IDL.Record({
    'status' : MMStatus,
    'matchID' : MatchID__1,
    'player1' : MMInfo,
    'player2' : IDL.Opt(MMInfo),
  });
  const OverallGamesWithGameMode = IDL.Record({
    'gameModeID' : IDL.Nat,
    'gamesPlayed' : IDL.Nat,
  });
  const OverallGamesWithCharacter = IDL.Record({
    'gamesPlayed' : IDL.Nat,
    'characterID' : IDL.Nat,
  });
  const OverallGamesWithFaction = IDL.Record({
    'gamesPlayed' : IDL.Nat,
    'factionID' : IDL.Nat,
  });
  const OverallStats = IDL.Record({
    'totalEnergyGenerated' : IDL.Nat,
    'totalGamesMP' : IDL.Nat,
    'totalGamesSP' : IDL.Nat,
    'totalGamesGameMode' : IDL.Vec(OverallGamesWithGameMode),
    'totalGamesPlayed' : IDL.Nat,
    'totalDamageDealt' : IDL.Nat,
    'totalEnergyUsed' : IDL.Nat,
    'totalTimePlayed' : IDL.Nat,
    'totalEnergyWasted' : IDL.Nat,
    'totalKills' : IDL.Nat,
    'totalXpEarned' : IDL.Nat,
    'totalGamesWithCharacter' : IDL.Vec(OverallGamesWithCharacter),
    'totalGamesWithFaction' : IDL.Vec(OverallGamesWithFaction),
  });
  const GamesWithGameMode = IDL.Record({
    'gameModeID' : IDL.Nat,
    'gamesPlayed' : IDL.Nat,
    'gamesWon' : IDL.Nat,
  });
  const GamesWithCharacter = IDL.Record({
    'gamesPlayed' : IDL.Nat,
    'characterID' : IDL.Nat,
    'gamesWon' : IDL.Nat,
  });
  const GamesWithFaction = IDL.Record({
    'gamesPlayed' : IDL.Nat,
    'gamesWon' : IDL.Nat,
    'factionID' : IDL.Nat,
  });
  const PlayerGamesStats = IDL.Record({
    'gamesLost' : IDL.Nat,
    'energyGenerated' : IDL.Nat,
    'gamesPlayed' : IDL.Nat,
    'totalGamesGameMode' : IDL.Vec(GamesWithGameMode),
    'totalDamageDealt' : IDL.Nat,
    'totalDamageCrit' : IDL.Nat,
    'totalDamageTaken' : IDL.Nat,
    'energyUsed' : IDL.Nat,
    'totalDamageEvaded' : IDL.Nat,
    'energyWasted' : IDL.Nat,
    'gamesWon' : IDL.Nat,
    'totalKills' : IDL.Nat,
    'totalXpEarned' : IDL.Nat,
    'totalGamesWithCharacter' : IDL.Vec(GamesWithCharacter),
    'totalGamesWithFaction' : IDL.Vec(GamesWithFaction),
  });
  const AverageStats = IDL.Record({
    'averageDamageDealt' : IDL.Nat,
    'averageEnergyGenerated' : IDL.Nat,
    'averageEnergyUsed' : IDL.Nat,
    'averageKills' : IDL.Nat,
    'averageEnergyWasted' : IDL.Nat,
    'averageXpEarned' : IDL.Nat,
  });
  const MissionType = IDL.Variant({
    'UnitsDeployed' : IDL.Null,
    'DamageDealt' : IDL.Null,
    'DamageTaken' : IDL.Null,
    'XPEarned' : IDL.Null,
    'Kills' : IDL.Null,
    'FactionPlayed' : IDL.Null,
    'GamesCompleted' : IDL.Null,
    'EnergyUsed' : IDL.Null,
    'GamesWon' : IDL.Null,
    'GameModePlayed' : IDL.Null,
  });
  const MissionRewardType = IDL.Variant({
    'Flux' : IDL.Null,
    'Shards' : IDL.Null,
    'Chest' : IDL.Null,
  });
  const MissionsUser = IDL.Record({
    'total' : IDL.Nat,
    'missionType' : MissionType,
    'reward_amount' : IDL.Nat,
    'reward_type' : MissionRewardType,
    'start_date' : IDL.Nat64,
    'progress' : IDL.Nat,
    'finish_date' : IDL.Nat64,
    'expiration' : IDL.Nat64,
    'finished' : IDL.Bool,
    'id_mission' : IDL.Nat,
  });
  const MatchID = IDL.Nat;
  const PlayerStats = IDL.Record({
    'secRemaining' : IDL.Nat,
    'energyGenerated' : IDL.Nat,
    'damageDealt' : IDL.Nat,
    'wonGame' : IDL.Bool,
    'playerId' : PlayerId__2,
    'botMode' : IDL.Nat,
    'deploys' : IDL.Nat,
    'damageTaken' : IDL.Nat,
    'damageCritic' : IDL.Nat,
    'damageEvaded' : IDL.Nat,
    'energyChargeRate' : IDL.Nat,
    'faction' : IDL.Nat,
    'energyUsed' : IDL.Nat,
    'gameMode' : IDL.Nat,
    'energyWasted' : IDL.Nat,
    'xpEarned' : IDL.Nat,
    'characterID' : IDL.Nat,
    'botDifficulty' : IDL.Nat,
    'kills' : IDL.Nat,
  });
  const BasicStats = IDL.Record({ 'playerStats' : IDL.Vec(PlayerStats) });
  const MMSearchStatus = IDL.Variant({
    'Available' : IDL.Null,
    'NotAvailable' : IDL.Null,
    'Assigned' : IDL.Null,
  });
  const TokenID = IDL.Nat;
  const FullMatchData = IDL.Record({
    'status' : MMStatus,
    'matchID' : MatchID__1,
    'player1' : IDL.Record({
      'id' : PlayerId__2,
      'elo' : IDL.Float64,
      'username' : Username__1,
      'level' : Level__1,
      'matchAccepted' : IDL.Bool,
      'playerGameData' : IDL.Text,
      'avatar' : AvatarID__1,
    }),
    'player2' : IDL.Opt(
      IDL.Record({
        'id' : PlayerId__2,
        'elo' : IDL.Float64,
        'username' : Username__1,
        'level' : Level__1,
        'matchAccepted' : IDL.Bool,
        'playerGameData' : IDL.Text,
        'avatar' : AvatarID__1,
      })
    ),
  });
  const ItemType = IDL.Variant({
    'Flux' : IDL.Null,
    'Shards' : IDL.Null,
    'GameNFTs' : IDL.Null,
    'Chest' : IDL.Null,
  });
  const LogEntry = IDL.Record({
    'tokenID' : IDL.Opt(TokenID),
    'user' : IDL.Principal,
    'timestamp' : IDL.Nat64,
    'itemType' : ItemType,
    'amount' : IDL.Opt(IDL.Nat),
  });
  const Username = IDL.Text;
  const AvatarID = IDL.Nat;
  const Level = IDL.Nat;
  const Description = IDL.Text;
  const PlayerId__1 = IDL.Principal;
  const AchievementProgress = IDL.Record({
    'achievementId' : IDL.Nat,
    'playerId' : PlayerId__1,
    'completed' : IDL.Bool,
    'progress' : IDL.Nat,
  });
  const Cosmicrafts = IDL.Service({
    'addFriend' : IDL.Func([PlayerId], [IDL.Bool, IDL.Text], []),
    'adminManagement' : IDL.Func([AdminFunction], [IDL.Bool, IDL.Text], []),
    'assignAchievementsToUser' : IDL.Func([PlayerId], [], []),
    'cancelMatchmaking' : IDL.Func([], [IDL.Bool, IDL.Text], []),
    'claimAchievementReward' : IDL.Func([IDL.Nat], [IDL.Bool, IDL.Text], []),
    'claimGeneralReward' : IDL.Func([IDL.Nat], [IDL.Bool, IDL.Text], []),
    'claimUserReward' : IDL.Func([IDL.Nat], [IDL.Bool, IDL.Text], []),
    'createAchievement' : IDL.Func(
        [
          IDL.Text,
          IDL.Vec(IDL.Nat),
          IDL.Nat,
          IDL.Nat,
          IDL.Vec(AchievementReward),
        ],
        [IDL.Bool, IDL.Text, IDL.Nat],
        [],
      ),
    'createCategory' : IDL.Func(
        [IDL.Text, IDL.Vec(IDL.Nat), IDL.Nat, IDL.Vec(AchievementReward)],
        [IDL.Bool, IDL.Text, IDL.Nat],
        [],
      ),
    'createIndividualAchievement' : IDL.Func(
        [
          IDL.Text,
          AchievementType,
          IDL.Nat,
          IDL.Vec(AchievementReward),
          IDL.Nat,
        ],
        [IDL.Bool, IDL.Text, IDL.Nat],
        [],
      ),
    'createUserMission' : IDL.Func(
        [PlayerId],
        [IDL.Bool, IDL.Text, IDL.Nat],
        [],
      ),
    'getAchievements' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(
              AchievementCategory,
              IDL.Vec(Achievement),
              IDL.Vec(IndividualAchievementProgress),
            )
          ),
        ],
        [],
      ),
    'getAllPlayers' : IDL.Func([], [IDL.Vec(Player)], ['query']),
    'getAllSearching' : IDL.Func([], [IDL.Vec(MatchData)], ['query']),
    'getCosmicraftsStats' : IDL.Func([], [OverallStats], ['query']),
    'getFriendsList' : IDL.Func([], [IDL.Opt(IDL.Vec(PlayerId))], ['query']),
    'getFullUserProfile' : IDL.Func(
        [PlayerId],
        [IDL.Opt(IDL.Tuple(Player, PlayerGamesStats, AverageStats))],
        ['query'],
      ),
    'getGeneralMissionProgress' : IDL.Func(
        [IDL.Principal, IDL.Nat],
        [IDL.Opt(MissionsUser)],
        ['query'],
      ),
    'getGeneralMissions' : IDL.Func([], [IDL.Vec(MissionsUser)], []),
    'getMatchDetails' : IDL.Func(
        [MatchID],
        [
          IDL.Opt(
            IDL.Tuple(MatchData, IDL.Vec(IDL.Tuple(Player, PlayerGamesStats)))
          ),
        ],
        ['query'],
      ),
    'getMatchHistoryByPrincipal' : IDL.Func(
        [PlayerId],
        [IDL.Vec(IDL.Tuple(MatchID, IDL.Opt(BasicStats)))],
        ['query'],
      ),
    'getMatchIDsByPrincipal' : IDL.Func(
        [PlayerId],
        [IDL.Vec(MatchID)],
        ['query'],
      ),
    'getMatchParticipants' : IDL.Func(
        [MatchID],
        [IDL.Opt(IDL.Tuple(IDL.Principal, IDL.Opt(IDL.Principal)))],
        ['query'],
      ),
    'getMatchSearching' : IDL.Func(
        [IDL.Text],
        [MMSearchStatus, IDL.Nat, IDL.Text],
        [],
      ),
    'getMatchStats' : IDL.Func([MatchID], [IDL.Opt(BasicStats)], ['query']),
    'getMintedInfo' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Record({
            'shards' : IDL.Nat,
            'flux' : IDL.Nat,
            'gameNFTs' : IDL.Record({
              'tokenIDs' : IDL.Vec(TokenID),
              'quantity' : IDL.Nat,
            }),
            'chests' : IDL.Record({
              'tokenIDs' : IDL.Vec(TokenID),
              'quantity' : IDL.Nat,
            }),
          }),
        ],
        ['query'],
      ),
    'getMyMatchData' : IDL.Func(
        [],
        [IDL.Opt(FullMatchData), IDL.Nat],
        ['composite_query'],
      ),
    'getMyProfile' : IDL.Func([], [IDL.Opt(Player)], []),
    'getPlayerAverageStats' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(AverageStats)],
        ['query'],
      ),
    'getPlayerElo' : IDL.Func([IDL.Principal], [IDL.Float64], ['query']),
    'getPlayerStats' : IDL.Func(
        [PlayerId],
        [IDL.Opt(PlayerGamesStats)],
        ['query'],
      ),
    'getProfile' : IDL.Func([PlayerId], [IDL.Opt(Player)], ['query']),
    'getTransactionLogs' : IDL.Func(
        [IDL.Principal, ItemType],
        [IDL.Vec(LogEntry)],
        ['query'],
      ),
    'getUserMissionProgress' : IDL.Func(
        [PlayerId, IDL.Nat],
        [IDL.Opt(MissionsUser)],
        ['query'],
      ),
    'getUserMissions' : IDL.Func([], [IDL.Vec(MissionsUser)], []),
    'isGameMatched' : IDL.Func([], [IDL.Bool, IDL.Text], ['query']),
    'openChest' : IDL.Func([IDL.Nat], [IDL.Bool, IDL.Text], []),
    'registerPlayer' : IDL.Func(
        [Username, AvatarID],
        [IDL.Bool, PlayerId, IDL.Bool, IDL.Text, IDL.Nat],
        [],
      ),
    'saveFinishedGame' : IDL.Func(
        [
          MatchID,
          IDL.Record({
            'secRemaining' : IDL.Nat,
            'energyGenerated' : IDL.Nat,
            'damageDealt' : IDL.Nat,
            'wonGame' : IDL.Bool,
            'botMode' : IDL.Nat,
            'deploys' : IDL.Nat,
            'damageTaken' : IDL.Nat,
            'damageCritic' : IDL.Nat,
            'damageEvaded' : IDL.Nat,
            'energyChargeRate' : IDL.Nat,
            'faction' : IDL.Nat,
            'energyUsed' : IDL.Nat,
            'gameMode' : IDL.Nat,
            'energyWasted' : IDL.Nat,
            'xpEarned' : IDL.Nat,
            'characterID' : IDL.Nat,
            'botDifficulty' : IDL.Nat,
            'kills' : IDL.Nat,
          }),
        ],
        [IDL.Bool, IDL.Text],
        [],
      ),
    'searchActiveGeneralMissions' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(MissionsUser)],
        ['query'],
      ),
    'searchActiveUserMissions' : IDL.Func(
        [PlayerId],
        [IDL.Vec(MissionsUser)],
        ['query'],
      ),
    'searchUserByUsername' : IDL.Func([Username], [IDL.Vec(Player)], ['query']),
    'setPlayerActive' : IDL.Func([], [IDL.Bool], []),
    'test' : IDL.Func(
        [PlayerId],
        [
          IDL.Opt(
            IDL.Record({
              'xp' : IDL.Nat,
              'elo' : IDL.Float64,
              'gamesLost' : IDL.Nat,
              'username' : Username,
              'level' : Level,
              'gamesWon' : IDL.Nat,
            })
          ),
        ],
        ['query'],
      ),
    'updateAndGetAchievements' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(
              AchievementCategory,
              IDL.Vec(Achievement),
              IDL.Vec(IndividualAchievementProgress),
            )
          ),
        ],
        [],
      ),
    'updateAvatar' : IDL.Func([AvatarID], [IDL.Bool, PlayerId], []),
    'updateCategoryProgress' : IDL.Func(
        [PlayerId, IDL.Nat],
        [IDL.Bool, IDL.Text],
        [],
      ),
    'updateDescription' : IDL.Func([Description], [IDL.Bool, PlayerId], []),
    'updateGeneralAchievementProgress' : IDL.Func(
        [PlayerId, IDL.Nat],
        [IDL.Bool, IDL.Text],
        [],
      ),
    'updateIndividualAchievementProgress' : IDL.Func(
        [PlayerId, IDL.Vec(AchievementProgress)],
        [IDL.Bool, IDL.Text],
        [],
      ),
    'updateUsername' : IDL.Func([Username], [IDL.Bool, PlayerId], []),
    'upgradeNFT' : IDL.Func([TokenID], [IDL.Bool, IDL.Text], []),
  });
  return Cosmicrafts;
};
export const init = ({ IDL }) => { return []; };
