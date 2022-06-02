
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier wird der Alert für Programmlogik definiert
 *
 * @author Chris Leon Brinkhoff
 */

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
