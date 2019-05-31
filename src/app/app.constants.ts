import { environment } from '../environments/environment';

export class AppConstants {
  public static ApiEndPoint = {
    baseUrl : environment.baseUrl + 'api/merryMove/'
  };
}
