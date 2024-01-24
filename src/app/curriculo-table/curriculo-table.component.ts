import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-curriculo-table',
  templateUrl: './curriculo-table.component.html',
  styleUrls: ['./curriculo-table.component.css']
})
export class CurriculoTableComponent implements OnInit {

  readonly apiService = environment.service + "/Curriculo";

  readonly actions: PoPageDynamicTableActions = {
    new: "/novoCurriculo",
    edit: "/editarCurriculo/:id",
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: "id", label: "Id", visible: false},
    { property: "idCurriculo", label: "Código", key: true },
    { property: "idCandidato", label: "Candidato" },
    { property: "curriculoDocumento", label: "Documento Currículo" }
  ];

  constructor() { }

  ngOnInit() { }

}
