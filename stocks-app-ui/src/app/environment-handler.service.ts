import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentHandlerService {
  constructor() {}

  public getCurrentApiUrl(): string {
    console.log(window.location);
    console.log(window.location.origin);

    return window.location.origin;
  }
}
