import axios, { AxiosError, AxiosInstance } from "axios";
import { Auth, AuthPostcard } from "./auth";

interface HttpConfig {
  baseURL: string;
  prefix?: string;
  apiVersion: string;
}

class Http {
  private _http: AxiosInstance;
  private apiVersion: string;
  private baseUrl: string;

  constructor(private auth: Auth, config: HttpConfig) {
    this.apiVersion = config.apiVersion;
    this.baseUrl = config.baseURL;
    this._http = axios.create({
      baseURL: `${config.baseURL}${config.prefix}`,
    });
    this._http.interceptors.request.use((config: any) => {
      if (this.auth.getToken())
        config.headers.Authorization = `Bearer ${this.auth.getToken()}`;
      return config;
    });
  }

  public async get<T = any, R = any>(
    endpoint: string,
    params: T = {} as T,
    retry: boolean = true,
    apiVersion: string = this.apiVersion
  ): Promise<R> {
    try {
      if (!this.auth.getToken()) await this.authenticate();
      const response = await this._http.get(`/${apiVersion}${endpoint}`, {
        params,
      });
      return response.data as R;
    } catch (e: any) {
      const error = e as AxiosError;
      if (error.status === 403 && retry) {
        await this.authenticate();
        return await this.get(endpoint, params, false);
      }
      throw error;
    }
  }

  protected async authenticate() {
    if (this.auth instanceof AuthPostcard) {
      const response = await axios.post(
        `/token/${this.apiVersion}/autentica/cartaopostagem`,
        {
          numero: this.auth.postCardNumber,
        },
        {
          baseURL: this.baseUrl,
          auth: {
            username: this.auth.userName,
            password: this.auth.accessToken,
          },
        }
      );

      this.auth.setToken(response.data.token);
    }
  }
}

export { Http };
