import { DeviceType } from "./deviceType";

export class Device {
  constructor(
    public id: number = 0,
    public type: DeviceType,
    public uniqueNumber: number
  ) {}
}
