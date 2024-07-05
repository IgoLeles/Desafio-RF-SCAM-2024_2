import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../../../services/empregado.service';

@Component({
  selector: 'app-empregado-list',
  templateUrl: './empregado-list.component.html',
  styleUrls: ['./empregado-list.component.css']
})
export class EmpregadoListComponent implements OnInit {
  empregados: any = [];

  constructor(private empregadoService: EmpregadoService) {}

  ngOnInit(): void {
    this.loadEmpregados();
  }

  loadEmpregados() {
    this.empregadoService.getEmpregados().subscribe((data: {}) => {
      this.empregados = data;
    });
  }

  deleteEmpregado(id: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.empregadoService.deleteEmpregado(id).subscribe(() => {
        this.loadEmpregados();
      });
    }
  }
}
