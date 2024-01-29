import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagaEditComponent } from './vaga-edit/vaga-edit.component';
import { VagaTableComponent } from './vaga-table/vaga-table.component';
import { CandidatoEditComponent } from './candidato-edit/candidato-edit.component';
import { CandidatoTableComponent } from './candidato-table/candidato-table.component';
import { CandidatoVagaEditComponent } from './candidato-vaga-edit/candidato-vaga-edit.component';
import { CandidatoVagaTableComponent } from './candidato-vaga-table/candidato-vaga-table.component';
import { CurriculoEditComponent } from './curriculo-edit/curriculo-edit.component';
import { CurriculoTableComponent } from './curriculo-table/curriculo-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'novaVaga', component: VagaEditComponent },
  { path: 'editarVaga/:id', component: VagaEditComponent },
  { path: 'listagemVagas', component: VagaTableComponent },

  { path: 'novoCandidato', component: CandidatoEditComponent },
  { path: 'editarCandidato/:id', component: CandidatoEditComponent },
  { path: 'listagemCandidatos', component: CandidatoTableComponent },

  { path: 'novoCurriculo', component: CurriculoEditComponent },
  { path: 'editarCurriculo/:id', component: CurriculoEditComponent },
  { path: 'listagemCurriculos', component: CurriculoTableComponent },

  { path: 'novoCandidatoVaga', component: CandidatoVagaEditComponent },
  { path: 'editarCandidatoVaga/:id', component: CandidatoVagaEditComponent },
  { path: 'listagemCandidatosVagas', component: CandidatoVagaTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
