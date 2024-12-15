import { Auth, AuthContract, AuthPostcard } from "./auth";
import { Postcode } from "./endpoints/postcode";
import { Price } from "./endpoints/price";
import { Time } from "./endpoints/time";
import { Country } from "./endpoints/country";
import { Tracking } from "./endpoints/tracking";

type ApiVersion = "v1" | "v2";

export interface ClientConfig {
  apiVersion?: ApiVersion;
  baseUrl?: string;
}

class CorreiosClient {
  public preco: Price;
  public prazo: Time;
  public cep: Postcode;
  public pais: Country;
  public rastro: Tracking;

  constructor(auth: Auth, config: Partial<ClientConfig> = {}) {
    this.preco = new Price(auth, config);
    this.prazo = new Time(auth, config);
    this.cep = new Postcode(auth, config);
    this.pais = new Country(auth, config);
    this.rastro = new Tracking(auth, config);
  }
}

export { CorreiosClient };
