export const env = {
  NODE_ENV: process.env.NODE_ENV,

  DATABASE_URL: process.env.DATABASE_URL,

  REDIS_URL: process.env.REDIS_URL,

  JWT_SECRET: process.env.JWT_SECRET,

  JWT_REFRESH_SECRET:
    process.env.JWT_REFRESH_SECRET
};