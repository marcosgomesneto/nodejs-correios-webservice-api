import { AuthPostcard } from "../src/auth";
import { CorreiosClient } from "../src/client";
import { ProductCode } from "../src/types";

describe("Math Operations", () => {
  test("teting calculate price", () => {
    const auth = new AuthPostcard({
      userName: "52051468000109",
      accessToken: "T5XnU4mJ8PHgyZ0nNRQYwnAVSlS9nYg3VwSnmHKm",
      postCardNumber: "0078380251",
    });
    const client = new CorreiosClient(auth);
    expect(
      client.preco.nacional.get(ProductCode.Sedex, {
        cepDestino: "81510630",
        cepOrigem: "81510630",
      })
    ).toBe(10);
  });
});
