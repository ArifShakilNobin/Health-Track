import { environment } from '../../../environments/environment';

export const applicationUrls = {
  authentication: {
    create: 'create-permission',
    read: 'read-permissions',
    update: 'update-permission',
    delete: 'delete-permission',
  },
  authorization: {
    create: 'create-permission',
    read: 'read-permissions',
    update: 'update-permission',
    delete: 'delete-permission',
  },
  user: {
    login: environment.baseApiUrl + '/api/Authenticate/login',
    registration: environment.baseApiUrl + '/api/Authenticate/register',
    user: environment.baseApiUrl + '/api/Users'
  },
  


};
