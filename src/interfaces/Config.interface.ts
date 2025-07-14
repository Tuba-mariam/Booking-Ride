interface IConfig {
  port: number;
  mongoDbUrl: string;
  jwtSecret: string;
  googleApiKey: string;
}

export default IConfig;
