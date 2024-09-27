interface AuthPostcardConfig {
  userName: string;
  accessToken: string;
  postCardNumber: string;
}

abstract class Auth {
  private token?: string;

  public getToken() {
    return this.token;
  }

  public setToken(token: string) {
    this.token = token;
  }
}

class AuthContract extends Auth {
  //Implement AuthContract
}

class AuthPostcard extends Auth {
  public userName: string;
  public accessToken: string;
  public postCardNumber: string;

  constructor(auth: AuthPostcardConfig) {
    super();
    this.userName = auth.userName;
    this.accessToken = auth.accessToken;
    this.postCardNumber = auth.postCardNumber;
  }
}

export { AuthContract, AuthPostcard, AuthPostcardConfig, Auth };
