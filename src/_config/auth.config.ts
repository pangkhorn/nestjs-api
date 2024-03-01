export const authConfig = {
  baseUrl: process.env.AUTH_BASE_URL || 'http://localhost:3000',
  endpoint: process.env.AUTH_ENDPOINT || '/tokeninfo'
};
