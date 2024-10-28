import { Auth } from "../auth";
import { ClientConfig } from "../client";
import { Endpoint } from "../endpoint";

interface PostcodeAddressResponse {
    cep: string;
    uf: string;
    numeroLocalidade: number;
    localidade: string;
    logradouro: string;
    tipoLogradouro: string;
    nomeLogradouro: string;
    complemento: string;
    abreviatura: string;
    bairro: string;
    tipoCEP: number;
    lado: string;
    numeroInicial: number;
    numeroFinal: number;
}

class Address extends Endpoint {
    public async get(postcode: string) {
        return await this.http.get<any, PostcodeAddressResponse>(
            `/enderecos/${postcode}`,
            {},
            true,
            "v2"
        );
    }

    protected getPrefix(): string {
        return "/cep";
    }
}

class Postcode {
    public enderecos: Address;

    constructor(auth: Auth, config: ClientConfig) {
        this.enderecos = new Address(auth, config);
    }
}


export { Postcode, Address };
