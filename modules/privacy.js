import { createActor } from '../modules/actor.js';
import { callActorFunction } from '../modules/apiHandler.js';

const setPrivacySetting = async (userId, setting) => {
  const actor = await createActor(userId);
  const result = await callActorFunction(actor, 'setPrivacySetting', setting);
  return result;
};

const getMyPrivacySettings = async (userId) => {
  const actor = await createActor(userId);
  const setting = await callActorFunction(actor, 'getMyPrivacySettings');
  return setting;
};

export { setPrivacySetting, getMyPrivacySettings };
