import { Device } from "./device";

export class DeviceType {
  constructor(
    public name: string,
    public description: string = "",
    public devices: Device[] = [],
    public id: number = 0,
  ) {}
}
