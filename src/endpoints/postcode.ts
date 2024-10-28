import { Auth } from "../auth";
import { ClientConfig } from "../client";
import { Endpoint } from "../endpoint";

interface PostcodeAddressResponse {
    coProduto: string;
    prazoEntrega: number;
    dataMaxima: string;
    entregaDomiciliar: "S" | "N";
    entregaSabado: "S" | "N";
    entregaDomingo: "N" | "S";
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
