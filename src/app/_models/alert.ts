export class Alert {
  id: string = "";
  type: AlertType = AlertType.Error;
  message: string = "";
  autoClose: boolean = false;
  keepAfterRouteChange?: boolean;
  fade: boolean = false;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
