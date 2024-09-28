import { AuthPostcard } from "../src/auth";
import { CorreiosClient } from "../src/client";
import { ProductCode } from "../src/types";

describe("Math Operations", () => {
  test("teting calculate price", () => {
    const auth = new AuthPostcard({
      userName: "0",
      accessToken: "0",
      postCardNumber: "0",
    });
    const client = new CorreiosClient(auth);
    expect(
      client.preco.nacional.get(ProductCode.Sedex, {
        cepDestino: "0",
        cepOrigem: "0",
      })
    ).toBe(0);
  });
});
