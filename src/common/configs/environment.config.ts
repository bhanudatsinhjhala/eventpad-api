import * as dotenv from 'dotenv';

/**
 * Description - Get env file common function
 * @returns env file path
 */
const getEnvFile = (): string => `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: getEnvFile() });

/**
 * Description: Environments config variables
 */
export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USERNAME: process.env.SMTP_USERNAME,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  FRONT_END_URL: process.env.FRONT_END_URL,
  DOMAIN: process.env.DOMAIN,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  LOCAL_DOMAIN: 'http://localhost:4200',
};
