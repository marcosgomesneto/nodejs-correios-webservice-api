<p align="center">
  <a href="https://www.npmjs.com/package/correios-webservice"><img src="https://badgen.net/npm/v/correios-webservice" alt="npm package"></a>
</p>

# Correios Webservice API para NodeJS & TypeScript

Cliente NodeJS para consumir a api nova dos Correios (CWS).

_O pacote está em desenvolvimento, contribua para o projeto no github._

## Contribua com:

- ⭐ De uma estrela no repositório
- [Me siga](https://github.com/marcosgomesneto) no github
- Reporte [Problemas](https://github.com/marcosgomesneto/nodejs-correios-webservice-api/issues)

---

## Instalação

```bash
#Using npm
npm install correios-webservice

#Using yarn
yarn add correios-webservice
```

## Uso

```typescript
import { CorreiosClient, AuthPostcard } from "correios-webservice";
import { ProductCode } from "correios-webservice/dist/types";

//Para autenticação com Cartão Postagem
const auth = new AuthPostcard({
  userName: "<your-user-name>",
  accessToken: "<your-access-token>",
  postCardNumber: "<your-post-card>",
});

const client = new CorreiosClient(auth);

//Calcular preço de frete nacional para Sedex
const price = await client.preco.nacional.get(ProductCode.Sedex, {
  cepDestino: "00000000",
  cepOrigem: "00000000",
  psObjeto: "300",
});
```

### Suporte e Contribuição

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir um [issue](https://github.com/marcosgomesneto/nodejs-correios-webservice-api/issues) no repositório do GitHub.

Se você quiser contribuir, abra um [pull request](https://github.com/marcosgomesneto/nodejs-correios-webservice-api/pulls) no repositório.
