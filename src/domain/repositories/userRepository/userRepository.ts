import { UserRepositoryIF } from "@/adapter/userRepository";
import fetch from "node-fetch";

export class UserRepository implements UserRepositoryIF {
  private requestURL: string;

  constructor() {
    this.requestURL = process.env.AUTH0_DOMAIN;
  }

  private async getToken(): Promise<string> {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `${this.requestURL}/api/v2/`,
        grant_type: "client_credentials",
      }),
    };

    const res = await fetch(`${this.requestURL}/oauth/token`, options);

    const json = await res.json();
    return json.access_token;
  }

  async isExist(id: string): Promise<boolean> {
    const accessToken = await this.getToken();

    const url = `${this.requestURL}/api/v2/users/${id}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        method: "GET",
      },
    });

    const resp = await response.json();

    console.log({ resp });
    return response.status === 200;
  }
}
