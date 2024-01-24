import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-vaga-edit',
  templateUrl: './vaga-edit.component.html',
  styleUrls: ['./vaga-edit.component.css']
})
export class VagaEditComponent implements OnInit {

  readonly apiService = environment.service + "/Vaga";

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/listagemVagas',
    save: '/listagemVagas',
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: "idVaga", label: "idVaga", key: true, visible: false },
    { property: "titulo", label: "Título", required: true },
    { property: "descricao", label: "Descrição", required: true },
    { property: "valor", label: "Valor", required: true },
    { property: "tipoContratacao", label: "Tipo Contratação", visible:false },
    { property: "status", label: "Status", visible:false },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() { }

}
