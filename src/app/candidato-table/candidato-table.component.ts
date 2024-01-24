import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-candidato-table',
  templateUrl: './candidato-table.component.html',
  styleUrls: ['./candidato-table.component.css']
})
export class CandidatoTableComponent implements OnInit {

  readonly apiService = environment.service + "/Candidato";

  readonly actions: PoPageDynamicTableActions = {
    new: "/novoCandidato",
    edit: "/editarCandidato/:id",
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: "id", label: "Id", visible: false},
    { property: "idCandidato", label: "Código", key: true },
    { property: "nomeCompleto", label: "Nome Completo" },
    { property: "email", label: "Email" },
    { property: "idade", label: "Idade" }
  ];

  constructor() { }

  ngOnInit() { }

}
