import { createActor } from '../modules/actor.js';
import { callActorFunction } from '../modules/apiHandler.js';
import { parseBigIntAndPrincipalValues } from './utils.js';

const getNotifications = async (userId) => {
  const actor = await createActor(userId);
  const notifications = await callActorFunction(actor, 'getNotifications');
  return notifications.map(notification => ({
    ...parseBigIntAndPrincipalValues(notification),
    from: convertPrincipalToString(notification.from)
  }));
};

export { getNotifications };
