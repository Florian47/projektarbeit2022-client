import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AccountService, AlertService} from 'src/app/_services';
import {Role, RoleType, User} from "../_models";
import * as bcrypt from "bcryptjs";


@Component({templateUrl: 'add-edit.component.html'})
export class AddEditComponent implements OnInit {
  model: User;
  id: number | undefined;
  isAddMode: boolean | undefined;
  loading = false;
  submitted = false;
  rolelist: Role[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {
    this.model = new User();
  }

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

  compareRole(role1: Role, role2: Role) {
    return role1.id === role2.id;
  }

  private createUser() {
    const salt = bcrypt.genSaltSync(12);
    this.model.password = bcrypt.hashSync(this.model.password, salt);
    this.accountService.register(this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User added successfully', {keepAfterRouteChange: true});
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateUser() {
    const salt = bcrypt.genSaltSync(12);
    this.model.password = bcrypt.hashSync(this.model.password, salt);
    this.accountService.update(this.id, this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', {keepAfterRouteChange: true});
          this.router.navigate(['../../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
