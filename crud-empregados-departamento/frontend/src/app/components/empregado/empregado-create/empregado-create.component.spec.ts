import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoCreateComponent } from './empregado-create.component';

describe('EmpregadoCreateComponent', () => {
  let component: EmpregadoCreateComponent;
  let fixture: ComponentFixture<EmpregadoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregadoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpregadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
