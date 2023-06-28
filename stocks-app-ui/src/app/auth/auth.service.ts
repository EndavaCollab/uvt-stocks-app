import { EnvironmentHandlerService } from './../environment-handler.service';
import { UserService } from './../user-preview/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private environmentHandlerService: EnvironmentHandlerService
  ) {}

  public logIn(payload: { email: string; password: string }): Observable<any> {
    let body: any = {
      email: payload.email,
      password: payload.password,
    };
    console.log(
      `${this.environmentHandlerService.getCurrentApiUrl()}/api/auth/login`
    );

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.post(
      `${this.environmentHandlerService.getCurrentApiUrl()}/api/auth/login`,
      body,
      httpOptions
    );
  }

  public register(payload: {
    username: string;
    email: string;
    password: string;
    reTypePassword: string;
  }): Observable<any> {
    let body: any = {
      email: payload.email,
      username: payload.username,
      password: payload.password,
      reTypePassword: payload.reTypePassword,
    };
    return this.httpClient.post(
      `${this.environmentHandlerService.getCurrentApiUrl()}/api/auth/register`,
      body
    );
  }
}
