import nacl from 'tweetnacl';
import { encode as base64Encode, decode as base64Decode } from 'base64-arraybuffer';
import { Principal } from '@dfinity/principal';

const generateKeysFromSub = async (sub) => {
  const encoder = new TextEncoder();
  const encodedSub = encoder.encode(sub);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedSub);
  const seed = new Uint8Array(hashBuffer.slice(0, 32));
  const keyPair = nacl.sign.keyPair.fromSeed(seed);
  const publicKeyBase64 = base64Encode(keyPair.publicKey);
  const privateKeyBase64 = base64Encode(keyPair.secretKey);
  return { publicKeyBase64, privateKeyBase64 };
};

const customJsonSerializer = (key, value) => {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  if (value && value._isPrincipal) {
    return Principal.fromUint8Array(value._arr).toText();
  }
  return value;
};

const convertBigIntToString = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, typeof v === 'bigint' ? v.toString() : convertBigIntToString(v)]));
  }
  return obj;
};

const convertPrincipalToString = (principal) => {
  if (principal && principal._isPrincipal) {
    return Principal.fromUint8Array(principal._arr).toText();
  }
  return principal;
};

const parseBigIntAndPrincipalValues = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(parseBigIntAndPrincipalValues);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, typeof v === 'bigint' ? v.toString() : (v && v._isPrincipal ? convertPrincipalToString(v) : parseBigIntAndPrincipalValues(v))]));
  }
  return obj;
};

export { generateKeysFromSub, customJsonSerializer, convertBigIntToString, convertPrincipalToString, parseBigIntAndPrincipalValues, base64Decode, base64Encode };
