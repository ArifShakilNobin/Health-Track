import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router, private http: HttpClient, private notification: NotificationService) {
  }
  async canActivate() {
    const token = localStorage.getItem("accessToken");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }

    const isRefreshSuccess = await this.refreshingTokens(token);
    if (!isRefreshSuccess) {
      this.router.navigate(["login"]);
    }

    return isRefreshSuccess;
  }

  private async refreshingTokens(token: string | null): Promise<boolean> {
    const refreshToken: string | null = localStorage.getItem("refreshToken");

    if (!token || !refreshToken) {
      return false;
    }

    const tokenModel = JSON.stringify({ accessToken: token, refreshToken: refreshToken });

    let isRefreshSuccess: boolean;
    try {

      const response = await lastValueFrom(this.http.post(environment.baseApiUrl + "authenticate/refresh-token", tokenModel));
      const newToken = (<any>response).accessToken;
      const newRefreshToken = (<any>response).refreshToken;
      localStorage.setItem("accessToken", newToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      this.notification.showSuccess("Token renewed successfully", "Success")
      isRefreshSuccess = true;
    }
    catch (ex) {
      isRefreshSuccess = false;
    }
    return isRefreshSuccess;
  }

}