import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteMisisonComponent } from './ajoute-misison.component';

describe('AjouteMisisonComponent', () => {
  let component: AjouteMisisonComponent;
  let fixture: ComponentFixture<AjouteMisisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteMisisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteMisisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
