import {httpClient} from './httpClient';

interface ISignUpDTO {
  name: string;
  password: string;
  email: string;
}

interface ISignInDTO {
  email: string;
  password: string;
}

interface ISignInResponse {
  accessToken: string;
  refreshToken: string;
}

export class AuthService {
  static async signUp({name, password, email}: ISignUpDTO) {
    const {data} = await httpClient.post('/sign-up', {
      name,
      password,
      email,
    });

    return data;
  }

  static async signIn({password, email}: ISignInDTO) {
    const {data} = await httpClient.post<ISignInResponse>('/sign-in', {
      password,
      email,
    });

    return data;
  }
}
