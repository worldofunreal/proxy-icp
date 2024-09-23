const callActorFunction = async (actor, functionName, ...args) => {
  try {
    const result = await actor[functionName](...args);
    return result;
  } catch (error) {
    console.error(`Error calling ${functionName}:`, error);
    throw new Error('Internal Server Error');
  }
};

export { callActorFunction };
