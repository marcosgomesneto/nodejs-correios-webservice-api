import { Auth } from "../auth";
import { ClientConfig } from "../client";
import { Endpoint } from "../endpoint";

interface CountryData {
    "sigla": string,
    "nome": string
    "idioma": string
    "codigoSiscomex": string
}

type CountriesResponse = CountryData[]

type CitiesResponse = {
    "codigo": string
    "nome": string,
}[]

class Countries extends Endpoint {
    public async get() {
        return await this.http.get<any, CountriesResponse>(
            `/paises`
        );
    }

    protected getPrefix(): string {
        return "/pais";
    }
}

class Cities extends Endpoint {
    public async get(countryCode: string) {
        return await this.http.get<any, CitiesResponse>(
            `/paises/${countryCode}/cidades`
        );
    }

    protected getPrefix(): string {
        return "/pais";
    }
}


class Country {
    public paises: Countries;
    public cidades: Cities;

    constructor(auth: Auth, config: ClientConfig) {
        this.paises = new Countries(auth, config);
        this.cidades = new Cities(auth, config);
    }
}

export { Country, CountriesResponse };
