import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empregado } from './empregado-detail.component';

describe('EmpregadoDetailComponent', () => {
  let component: EmpregadoDetailComponent;
  let fixture: ComponentFixture<EmpregadoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregadoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpregadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
