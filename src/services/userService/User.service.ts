import {httpClient} from '../httpClient';

interface meResponse {
  name: string;
  email: string;
}

export class UserService {
  static async me() {
    const {data} = await httpClient.get<meResponse>('/me');

    return data;
  }
}
