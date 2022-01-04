import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DeviceType } from "./model/deviceType";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = "http://localhost:8080/fitervari";

  //private url = "https://fitervari.free.beeceptor.com";

  constructor(private http: HttpClient) { }

  public getDevices() {
    return this.http.get<DeviceType[]>(`${this.url}/devices`);
  }
}
