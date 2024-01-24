import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { VagaTableComponent } from './app/vaga-table/vaga-table.component';
import { VagaEditComponent } from './app/vaga-edit/vaga-edit.component';
import { CandidatoEditComponent } from './app/candidato-edit/candidato-edit.component';
import { CandidatoTableComponent } from './app/candidato-table/candidato-table.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { CurriculoTableComponent } from './app/curriculo-table/curriculo-table.component';
import { CurriculoEditComponent } from './app/curriculo-edit/curriculo-edit.component';
import { CandidatoVagaEditComponent } from './app/candidato-vaga-edit/candidato-vaga-edit.component';
import { CandidatoVagaTableComponent } from './app/candidato-vaga-table/candidato-vaga-table.component';

@NgModule({
  declarations: [
    AppComponent,
    VagaTableComponent,
    VagaEditComponent,
    CandidatoEditComponent,
    CandidatoTableComponent,
    DashboardComponent,
    CurriculoTableComponent,
    CurriculoEditComponent,
    CandidatoVagaEditComponent,
    CandidatoVagaTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
