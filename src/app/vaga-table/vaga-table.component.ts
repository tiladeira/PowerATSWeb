import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-vaga-table',
  templateUrl: './vaga-table.component.html',
  styleUrls: ['./vaga-table.component.css']
})
export class VagaTableComponent implements OnInit {

  readonly apiService = environment.service + "/Vaga";

  readonly actions: PoPageDynamicTableActions = {
    new: "/novaVaga",
    edit: "/editarVaga/:id",
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: "id", label: "Id", visible: false},
    { property: "idVaga", label: "Código", key: true },
    { property: "titulo", label: "Título" },
    { property: "descricao", label: "Descrição" },
    { property: "valor", label: "Valor" }
  ];

  constructor() { }

  ngOnInit() { }

}
