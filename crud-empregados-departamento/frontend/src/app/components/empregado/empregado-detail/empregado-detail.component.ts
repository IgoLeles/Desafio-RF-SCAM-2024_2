import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoService } from '../../../services/empregado.service';

@Component({
  selector: 'app-empregado-detail',
  templateUrl: './empregado-detail.component.html',
  styleUrls: ['./empregado-detail.component.css']
})
export class EmpregadoDetailComponent implements OnInit {
  id!: number;
  empregado: any;

  constructor(private route: ActivatedRoute, private router: Router, private empregadoService: EmpregadoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadEmpregado();
  }

  loadEmpregado() {
    this.empregadoService.getEmpregado(this.id).subscribe((data: {}) => {
      this.empregado = data;
    });
  }

  updateEmpregado() {
    this.empregadoService.updateEmpregado(this.id, this.empregado).subscribe(() => {
      this.router.navigate(['/empregados']);
    });
  }
}
