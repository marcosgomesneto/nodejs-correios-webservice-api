const { AuthPostcard, CorreiosClient } = require("./dist/index");
const { ProductCode } = require("./dist/types");

const auth = new AuthPostcard({
  userName: "0",
  accessToken: "0",
  postCardNumber: "0",
});
const client = new CorreiosClient(auth);

client.preco.nacional
  .get(ProductCode.Sedex, {
    cepDestino: "0",
    cepOrigem: "0",
    psObjeto: "0",
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });
