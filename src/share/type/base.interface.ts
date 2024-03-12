export interface IPagination {
  page?: number;
  size?: number;
  sort?: string;
  keyword?: string;
}

export interface IAuthUser {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  acr: string;
  scope: string;
  realm_access: { roles: string[] };
  resource_access: { account: { roles: string[] } };
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  userId?: number;
  userUuid?: string;
  [key: string]: any;
}
