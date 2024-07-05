import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../../../services/empregado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empregado-create',
  templateUrl: './empregado-create.component.html',
  styleUrls: ['./empregado-create.component.css']
})
export class EmpregadoCreateComponent implements OnInit {
  empregado = {
    nome: '',
    email: '',
    cargo: '',
    departamento_id: null
  };

  constructor(private empregadoService: EmpregadoService, private router: Router) {}

  ngOnInit(): void {}

  saveEmpregado() {
    this.empregadoService.createEmpregado(this.empregado).subscribe(() => {
      this.router.navigate(['/empregados']);
    });
  }
}
