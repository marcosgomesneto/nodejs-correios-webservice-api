import { Auth } from "../auth";
import { ClientConfig, CorreiosClient } from "../client";
import { Endpoint } from "../endpoint";
import { ProductCode } from "../types";

interface AdditionalService {
  coServAdicional: string;
  pcServicoAdicional: string;
};

interface PriceNacionalRequest {
  cepDestino: string;
  cepOrigem: string;
  nuRequisicao?: string;
  nuContrato?: string;
  nuDR?: string;
  psObjeto?: string;
  nuUnidade?: string;
  tpObjeto?: string;
  comprimento?: string;
  altura?: string;
  largura?: string;
  diametro?: string;
  psCubico?: string;
  servicosAdicionais?: string;
  criterios?: string;
  vlDeclarado?: string;
  dtEvento?: string;
  coUnidadeOrigem?: string;
  dtArmazenagem?: string;
  vlRemessa?: string;
}

interface PriceNacionalResponse {
  coProduto: string;
  pcBase: string;
  pcBaseGeral: string;
  peVariacao: string;
  pcReferencia: string;
  vlBaseCalculoImposto: string;
  inPesoCubico: string;
  psCobrado: string;
  peAdValorem: string;
  vlSeguroAutomatico: string;
  qtAdicional: string;
  servicoAdicional?: AdditionalService[];
  pcFaixa: string;
  pcFaixaVariacao: string;
  pcProduto: string;
  pcFinal: string;
}

class Nacional extends Endpoint {
  public async get(productCode: ProductCode, params: PriceNacionalRequest) {
    return await this.http.get<PriceNacionalRequest, PriceNacionalResponse>(
      `/nacional/${productCode}`,
      params
    );
  }

  protected getPrefix(): string {
    return "/preco";
  }
}

class Price {
  public nacional: Nacional;

  constructor(auth: Auth, config: ClientConfig) {
    this.nacional = new Nacional(auth, config);
  }
}

export { Price, PriceNacionalRequest };
