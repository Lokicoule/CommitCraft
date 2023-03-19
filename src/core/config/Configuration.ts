import { loadConfig } from "./configUtils";
import { Config } from "./types";

export class Configuration {
  private static instance: Configuration;
  private static config: Config;

  private constructor() {}

  public static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }

    return Configuration.instance;
  }

  public static initialize(userConfigPath?: string): Config {
    const config = loadConfig(userConfigPath);
    Configuration.setConfig(config);
    return config;
  }

  public static getConfig(): Config {
    return this.config;
  }

  private static setConfig(config: Config): void {
    this.config = config;
  }
}
