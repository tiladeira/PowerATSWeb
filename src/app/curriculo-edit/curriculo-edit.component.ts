import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-curriculo-edit',
  templateUrl: './curriculo-edit.component.html',
  styleUrls: ['./curriculo-edit.component.css']
})
export class CurriculoEditComponent implements OnInit {

  readonly apiService = environment.service + "/Curriculo";

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/listagemCurriculos',
    save: '/listagemCurriculos',
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: "idCurriculo", label: "idCurriculo", key: true, visible: false },
    { property: "idCandidato", label: "idCandidato",  visible: false },
    { property: "curriculoDocumento", label: "Documento", required: true },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() { }

}
