import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdepartementComponent } from './newdepartement.component';

describe('NewdepartementComponent', () => {
  let component: NewdepartementComponent;
  let fixture: ComponentFixture<NewdepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
