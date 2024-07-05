import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../../services/departamento.service';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent implements OnInit {
  departamentos: any = [];

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos() {
    this.departamentoService.getDepartamentos().subscribe((data: {}) => {
      this.departamentos = data;
    });
  }

  deleteDepartamento(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.departamentoService.deleteDepartamento(id).subscribe(() => {
        this.loadDepartamentos();
      });
    }
  }
}
