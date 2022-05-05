import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CreateTrainingComponent} from "./createTraining.component";



describe('CreateTaskComponent', () => {
  let component: CreateTrainingComponent;
  let fixture: ComponentFixture<CreateTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
