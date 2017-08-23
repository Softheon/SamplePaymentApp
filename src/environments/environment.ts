// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  paymentApiBaseAddress: "https://hack.softheon.io/api/payments/v1",
  authorizationBaseAddress: "https://hack.softheon.io/oauth2",
  clientId: "09dec990-dd27-426e-86d9-5a2fb426203d",
  clientSecret: "f993dddd-7d42-462b-8726-6d36aa19c61d",
  scopes: "paymentapi"
};
