import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentHandlerService {
  constructor() {}

  public getCurrentApiUrl(): string {
    console.log(window.location.hostname);

    return `${window.location.hostname}:8080`;
  }
}
