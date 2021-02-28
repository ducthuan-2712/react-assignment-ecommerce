export const showNotifyErrorCatch = (error: any) => {
  // debug apply only for developer
  if (process.env.NODE_ENV !== 'production') {
    console.log('error', error);
    throw error;
  }
};