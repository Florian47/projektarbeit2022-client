import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AccountService, AlertService} from 'src/app/_services';
import {Role, User} from "../_models";
import * as bcrypt from "bcryptjs";


@Component({templateUrl: 'add-edit.component.html'})
/**
 * Stellt die Nutzer-Bearbeiten-Ansicht bereit. Sowohl die Oberfläche als auch die Logik ist in dieser Komponente
 * verankert.
 * Hier können die Werte des Nutzers (Anmeldename, Passwort, Rollen, etc.) geändert werden.
 * @author Florian Weinert
 */
export class AddEditComponent implements OnInit {
  model: User = new User();
  id: number | undefined;
  isAddMode: boolean | undefined;
  loading = false;
  submitted = false;
  rolelist: Role[] = [];

  /**
   * Wird beim Erzeugen der Komponente ausgeführt.
   * @param route ist die aktuelle Route. Wird verwendet um die Id aus der Url zu erhalten.
   * @param router ist das Objekt worüber die Route verändert werden kann. Wird verwendet um nach Bearbeiten eines
   * Nutzers zu der Listenansicht der Nutzer zurück zu kehren.
   * @param accountService bietet Funktionen um mit Nutzern zu arbeiten. Wird verwendet um die Rollen eines Nutzers
   * zu erhalten und Http-Calls abzusetzen um Nutzer zu erstellen und aktualisieren.
   * @param alertService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {
  }

  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Holt die verfügbaren Rollen und falls ein vorhandener Nutzer
   * bearbeitet wird auch dessen Werte.
   */
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.accountService.getRoles()
      .pipe(first())
      .subscribe(roles => this.rolelist = roles);

    if (!this.isAddMode) {
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(user => this.model = user);
    }
  }

  /**
   * Wird beim Klicken auf den Speichern-Button ausgelöst. Aktualisiert oder erzeugt einen Nutzer.
   */
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  /**
   * Wird im Html verwendet. Sorgt dafür, dass beim Laden der Rolle des Nutzers diese mit den bereits geholten
   * Rollen vom Server verglichen werden können.
   * @param role1 ist die erste Rolle die verglichen werden soll.
   * @param role2 ist die zweite Rolle die verglichen werden soll.
   */
  compareRole(role1: Role, role2: Role) {
    return role1.id === role2.id;
  }

  /**
   * Wird beim Klicken auf den Speichern-Button ausgelöst, wenn ein neuer Nutzer erzeugt werden soll. Verschlüsselt
   * sein Passwort und verwendet den AccountService um diese Daten an einen Server zu senden. Bei erfolgreicher
   * Erzeugung wird zu der Listenansicht zurück navigiert.
   * @private
   */
  private createUser() {
    const salt = bcrypt.genSaltSync(12);
    this.model.password = bcrypt.hashSync(this.model.password, salt);
    this.accountService.register(this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User hinzufuegen erfolgreich', {keepAfterRouteChange: true});
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
  /**
   * Wird beim Klicken auf den Speichern-Button ausgelöst, wenn ein vorhandener Nutzer bearbeitet werden soll.
   * Verschlüsselt sein Passwort und verwendet den AccountService um diese Daten an einen Server zu senden. Bei erfolgreicher
   * Aktualisierung wird zu der Listenansicht zurück navigiert.
   * @private
   */
  private updateUser() {
    if(this.model.password.indexOf("$2a$12$") == -1) {
      const salt = bcrypt.genSaltSync(12);
      this.model.password = bcrypt.hashSync(this.model.password, salt);
    }
    this.accountService.update(this.id, this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update erfolgreich', {keepAfterRouteChange: true});
          this.router.navigate(['../../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
