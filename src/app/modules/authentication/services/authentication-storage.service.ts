import { applicationUrls } from './../../../shared/application-constants/application-urls.const';
import { ServerResponse } from './../../../shared/shared/models/dto/server-response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationStorageService {
  constructor(private httpClient: HttpClient) {}

  login(login: Login): Observable<any> {
    return this.httpClient.post<ServerResponse>(`${applicationUrls.user.login}`,login );
    // .pipe(
    //   tap((res) => {
    //     if (res.data) {
    //       this.authorizationService.addDesignation(res.data);
    //     }
    //   })
    // );
  }
}
