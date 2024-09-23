import { Actor, HttpAgent } from '@dfinity/agent';
import { Ed25519KeyIdentity } from '@dfinity/identity';
import { idlFactory as cosmicraftsIdlFactory } from '../declarations/cosmicrafts/cosmicrafts.did.js';
import { generateKeysFromSub, base64Decode } from '../modules/utils.js';

const CANISTER_ID = 'fdaor-cqaaa-aaaao-ai7nq-cai';

const createActor = async (userId) => {
  const { publicKeyBase64, privateKeyBase64 } = await generateKeysFromSub(userId);
  const identity = Ed25519KeyIdentity.fromKeyPair(
    base64Decode(publicKeyBase64),
    base64Decode(privateKeyBase64)
  );
  const agent = new HttpAgent({ identity, host: 'https://ic0.app' });
  if (process.env.NODE_ENV !== 'production') {
    await agent.fetchRootKey();
  }
  return Actor.createActor(cosmicraftsIdlFactory, { agent, canisterId: CANISTER_ID });
};

const createPublicActor = async () => {
  const agent = new HttpAgent({ host: 'https://ic0.app' });
  if (process.env.NODE_ENV !== 'production') {
    await agent.fetchRootKey();
  }
  return Actor.createActor(cosmicraftsIdlFactory, { agent, canisterId: CANISTER_ID });
};

export { createActor, createPublicActor };
