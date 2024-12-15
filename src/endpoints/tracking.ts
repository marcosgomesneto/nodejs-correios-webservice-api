import { Auth } from "../auth";
import { ClientConfig } from "../client";
import { Endpoint } from "../endpoint";

interface TrackingObject {
    codObjeto: string,
    tipoPostal: {
        description: string
        sigla: string,
        nome: string,
        categoria: string,
        familia: string
    },
    mensagem?: string,
    dtPrevista: string,
    contrato: string,
    peso: number,
    eventos: {
        codigo: string,
        tipo: string,
        dtHrCriado: string,
        descricao: string,
        detalhe?: string,
        unidade: {
            nome: string,
            tipo: string,
            endereco: {
                cep?: string,
                logradouro?: string,
                complemento?: string,
                numero?: string,
                bairro?: string,
                cidade: string,
                uf: string,
                pais?: string,
                telefone?: string
            },
        },
    }[]
}

interface TrackingResponse {
    objetos: TrackingObject[];
}

class Objects extends Endpoint {
    public async get(trackingCode: string) {
        return await this.http.get<any, TrackingResponse>(
            `/objetos/${trackingCode}`,
            {},
            true,
            "v1"
        );
    }

    protected getPrefix(): string {
        return "/srorastro";
    }
}

class Tracking {
    public objetos: Objects;

    constructor(auth: Auth, config: ClientConfig) {
        this.objetos = new Objects(auth, config);
    }
}


export { Tracking, Objects, TrackingObject };
