import { registerAs } from '@nestjs/config';
import { KeycloakConnectConfig, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

export const keycloakConfig = (config: string) =>
  registerAs(
    config,
    (): KeycloakConnectConfig => ({
      authServerUrl: process.env.AUTHORIZATION_URL,
      realm: process.env.AUTHORIZATION_APP_NAME,
      clientId: process.env.AUTHORIZATION_CLIENT_ID,
      secret: process.env.AUTHORIZATION_CLIENT_SECRET,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE, // optional
      tokenValidation: TokenValidation.ONLINE // optional
    })
  );
