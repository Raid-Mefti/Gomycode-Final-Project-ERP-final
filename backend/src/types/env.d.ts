declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      MONGODB_URI: string;
      MONGODB_DB_NAME: string;
      MONGODB_USERNAME?: string;
      MONGODB_PASSWORD?: string;
      JWT_SECRET: string;
      CLIENT_URL: string;
      EMAIL_USER: string;
      EMAIL_PASS: string;
    }
  }
}

export {};
