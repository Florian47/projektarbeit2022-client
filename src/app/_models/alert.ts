export class Alert {
  id: string = "";
  type: AlertType = AlertType.Error;
  message: string = "";
  autoClose: boolean = true;
  keepAfterRouteChange?: boolean;
  fade: boolean = true;

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
