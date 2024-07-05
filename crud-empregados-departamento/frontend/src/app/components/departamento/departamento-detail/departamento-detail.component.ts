import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from '../../../services/departamento.service';

@Component({
  selector: 'app-departamento-detail',
  templateUrl: './departamento-detail.component.html',
  styleUrls: ['./departamento-detail.component.css']
})
export class DepartamentoDetailComponent implements OnInit {
  id!: number;
  departamento: any;

  constructor(private route: ActivatedRoute, private router: Router, private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadDepartamento();
  }

  loadDepartamento() {
    this.departamentoService.getDepartamento(this.id).subscribe((data: {}) => {
      this.departamento = data;
    });
  }

  updateDepartamento() {
    this.departamentoService.updateDepartamento(this.id, this.departamento).subscribe(() => {
      this.router.navigate(['/departamentos']);
    });
  }
}
