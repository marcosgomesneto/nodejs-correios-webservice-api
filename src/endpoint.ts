import { Auth } from "./auth";
import { ClientConfig } from "./client";
import { Http } from "./http";

const defaultConfig: Required<ClientConfig> = {
  apiVersion: "v1",
  baseUrl: "https://api.correios.com.br",
};

abstract class Endpoint {
  protected http: Http;
  protected config: Required<ClientConfig>;

  constructor(auth: Auth, config: Partial<ClientConfig> = {}) {
    const mergeConfig = {
      ...defaultConfig,
      ...config,
    };
    this.config = mergeConfig;

    this.http = new Http(auth, {
      baseURL: this.config.baseUrl,
      prefix: this.getPrefix(),
      apiVersion: this.config.apiVersion,
    });
  }

  protected getPrefix(): string {
    return "";
  }
}

export { Endpoint };
