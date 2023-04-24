import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisEmployeeComponent } from './detalis-employee.component';

describe('DetalisEmployeeComponent', () => {
  let component: DetalisEmployeeComponent;
  let fixture: ComponentFixture<DetalisEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalisEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
