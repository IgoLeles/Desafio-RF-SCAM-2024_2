import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../../services/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {
  departamento = {
    nome: ''
  };

  constructor(private departamentoService: DepartamentoService, private router: Router) {}

  ngOnInit(): void {}

  saveDepartamento() {
    this.departamentoService.createDepartamento(this.departamento).subscribe(() => {
      this.router.navigate(['/departamentos']);
    });
  }
}
