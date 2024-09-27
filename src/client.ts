import { Auth, AuthContract, AuthPostcard } from "./auth";
import { Price } from "./endpoints/price";
import { Time } from "./endpoints/time";

type ApiVersion = "v1" | "v2";

export interface ClientConfig {
  apiVersion?: ApiVersion;
  baseUrl?: string;
}

class CorreiosClient {
  public preco: Price;
  public prazo: Time;

  constructor(auth: Auth, config: Partial<ClientConfig> = {}) {
    this.preco = new Price(auth, config);
    this.prazo = new Time(auth, config);
  }
}

export { CorreiosClient };
