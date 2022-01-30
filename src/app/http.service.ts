import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DeviceType } from "./model/deviceType";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseurl = "https://student.cloud.htl-leonding.ac.at/m.rausch-schott/fitervari/api";
  private deviceTypesUrl = `${this.baseurl}/deviceGroups`;

  constructor(private http: HttpClient) { }

  getDevices() {
    return this.http.get<DeviceType[]>(this.deviceTypesUrl);
  }

  createDevice(device: DeviceType) {
    return this.http.post(this.deviceTypesUrl, device);
  }

  updateDevice(device: DeviceType) {
    return this.http.put(this.deviceTypesUrl, device);
  }

  deleteDevice(id: number) {
    return this.http.delete(`${this.deviceTypesUrl}/${id}`);
  }
}
