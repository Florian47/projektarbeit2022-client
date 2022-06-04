/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier werden die SolutionOptions definiert.
 * @param Id = eindeutige definition
 * @param optionname = text der eine Mögliche lösng darstellt
 * @param notUniquiId = wird auf client seite nicht verwendet
 * @param checkedAnswer = hier wird gespeichert ob der Text richtig oder falsch ist
 * @author Chris Leon Brinkhoff
 */

export class SolutionOptions {
  constructor(public id: number=0,
              public optionName: string='',
              public notUniqueId: string='',
              public checkedAnswer: boolean=false,
  ) {
  }
}
