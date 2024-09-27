import { Auth } from "../auth";
import { ClientConfig, CorreiosClient } from "../client";
import { Endpoint } from "../endpoint";
import { ProductCode } from "../types";

interface TimeNacionalRequest {
  cepOrigem: string;
  cepDestino: string;
  dtEvento?: string;
}

interface TimeNacionalResponse {
  coProduto: string;
  prazoEntrega: number;
  dataMaxima: string;
  entregaDomiciliar: "S" | "N";
  entregaSabado: "S" | "N";
  entregaDomingo: "N" | "S";
}

class Nacional extends Endpoint {
  public async get(productCode: ProductCode, params: TimeNacionalRequest) {
    return await this.http.get<TimeNacionalRequest, TimeNacionalResponse>(
      `/nacional/${productCode}`,
      params
    );
  }

  protected getPrefix(): string {
    return "/prazo";
  }
}

class Time {
  public nacional: Nacional;

  constructor(auth: Auth, config: ClientConfig) {
    this.nacional = new Nacional(auth, config);
  }
}

export { Time, TimeNacionalRequest, TimeNacionalResponse };
