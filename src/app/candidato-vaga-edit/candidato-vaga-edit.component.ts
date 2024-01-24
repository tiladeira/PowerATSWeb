import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-candidato-vaga-edit',
  templateUrl: './candidato-vaga-edit.component.html',
  styleUrls: ['./candidato-vaga-edit.component.css']
})
export class CandidatoVagaEditComponent implements OnInit {

  readonly apiService = environment.service + "/CandidatoVaga";

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/listagemCandidatosVagas',
    save: '/listagemCandidatosVagas',
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: "idCandidatoVaga", label: "idCandidatoVaga", key: true, visible: false },
    { property: "idCandidato", label: "Candidato", required: true },
    { property: "idVaga", label: "Vaga", required: true },
    { property: "id", label: "Id", visible: false},
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() { }

}
