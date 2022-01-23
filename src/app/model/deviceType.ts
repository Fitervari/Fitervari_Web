import { Device } from "./device";

export class DeviceType {
  constructor(
    public id: number = 0,
    public name: string,
    public description: string = "",
    public devices: Device[] = []
  ) {}
}
