import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DoTrainingComponent} from "./doTraining.component";



describe('CreateTaskComponent', () => {
  let component: DoTrainingComponent;
  let fixture: ComponentFixture<DoTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
