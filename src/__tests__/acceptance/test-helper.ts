import {NotifyBcApplication} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';

process.env['NODE_ENV'] = 'test';
export async function setupApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
  });

  const app = new NotifyBcApplication({
    rest: restConfig,
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: NotifyBcApplication;
  client: Client;
}
