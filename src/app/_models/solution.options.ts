/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier werden die SolutionOptions definiert.
 *Id = eindeutige definition
 * optionname= text der eine Mögliche lösng darstellt
 * notUniquiId = wird auf client seite nicht verwendet
 * right Answer = hier wird gespeichert ob der Text richtig oder falsch ist
 * @author Chris Leon Brinkhoff
 */

export class SolutionOptions {
  constructor(public id: number=0,
              public optionName: string='',
              public notUniqueId: string='',
              public rightAnswer: boolean=false,
  ) {
  }
}
