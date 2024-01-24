import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-candidato-vaga-table',
  templateUrl: './candidato-vaga-table.component.html',
  styleUrls: ['./candidato-vaga-table.component.css']
})
export class CandidatoVagaTableComponent implements OnInit {

  readonly apiService = environment.service + "/CandidatoVaga";

  readonly actions: PoPageDynamicTableActions = {
    new: "/novoCandidatoVaga",
    edit: "/editarCandidatoVaga/:id",
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: "id", label: "Id" ,key: true , visible: false},
    { property: "idCandidatoVaga", label: "Código" },
    { property: "idCandidato", label: "Candidato" },
    { property: "idVaga", label: "Vaga" },
  ];

  constructor() { }

  ngOnInit() { }

}
