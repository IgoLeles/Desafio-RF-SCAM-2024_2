import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpregadoCreateComponent } from './components/empregado/empregado-create/empregado-create.component';
import { EmpregadoListComponent } from './components/empregado/empregado-list/empregado-list.component';
import { EmpregadoDetailComponent } from './components/empregado/empregado-detail/Empregado-detail.component';
import { DepartamentoCreateComponent } from './components/departamento/departamento-create/departamento-create.component';
import { DepartamentoListComponent } from './components/departamento/departamento-list/departamento-list.component';
import { DepartamentoDetailComponent } from './components/departamento/departamento-detail/departamento-detail.component';

export const routes: Routes = [
    { path: 'empregado', component: EmpregadoListComponent },
    { path: 'empregado/create', component: EmpregadoCreateComponent },
    { path: 'empregado/:id', component: EmpregadoDetailComponent },
    { path: 'departamentos', component: DepartamentoListComponent },
    { path: 'departamentos/create', component: DepartamentoCreateComponent },
    { path: 'departamentos/:id', component: DepartamentoDetailComponent },
    { path: '', redirectTo: '/empregado', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
