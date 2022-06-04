import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';
import { AccountService, AlertService } from 'src/app/_services';

/**
 * Stellt die Registrierungs-Komponente bereit. Sowohl die Oberfläche als auch die Logik ist in dieser Komponente
 * verankert.
 * @author Florian Weinert
 */
@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  role = new FormControl();
  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Setzt Validatoren für alle Attribute des Nutzers. Bis auf die
   * Rolle des Nutzers muss jedes Feld gefüllt sein.
   */
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Setzt Validatoren für alle Attribute des Nutzers. Bis auf die
   * Rolle des Nutzers muss jedes Feld gefüllt sein.
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Macht den Zugriff auf die Form-Controls einfacher. Wird im HTML verwendet.
   */
  get f() { return this.form.controls; }
  /**
   * Wir beim Klicken auf den Speichern-Button ausgelöst. Erstellt ein Objekt mit allen Werte aus der Html-Form und
   * nutzt den AccountService um damit einen Http-Call an den Server zu schicken. Wenn die Registrierung erfolgreich
   * ist, wird zu der Login-Seite zurück navigiert.
   */
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    const salt = bcrypt.genSaltSync(12);
    this.form.value.password = bcrypt.hashSync(this.form.value.password, salt);

    this.loading = true;
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Regestrierung erfolgreich', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}

