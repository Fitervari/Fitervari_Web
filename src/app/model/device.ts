import { DeviceType } from "./deviceType";

export class Device {
  constructor(
    public type: DeviceType,
    public uniqueNumber: number,
    public id: number = 0,
  ) {}
}
