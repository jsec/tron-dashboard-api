import * as vm from 'azure-devops-node-api';

export async function getApi(): Promise<vm.WebApi> {
  return new Promise<vm.WebApi>(async (resolve, reject) => {
    try {
      const url = process.env.AZURE_API_URL;
      const token = process.env.AZURE_API_TOKEN;
      const authHandler = vm.getPersonalAccessTokenHandler(token);
      const connection = new vm.WebApi(url, authHandler, null);
      await connection.connect();
      resolve(connection);
    } catch (e) {
      reject(e);
    }
  });
}
