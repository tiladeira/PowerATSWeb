import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-candidato-edit',
  templateUrl: './candidato-edit.component.html',
  styleUrls: ['./candidato-edit.component.css']
})
export class CandidatoEditComponent implements OnInit {

  readonly apiService = environment.service + "/Candidato";

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/listagemCandidatos',
    save: '/listagemCandidatos',
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: "id", label: "Id", visible: false},
    { property: "idCandidato", label: "Código", key: true, visible: false },
    { property: "nomeCompleto", label: "Nome Completo", required: true },
    { property: "email", label: "Email", required: true },
    { property: "idade", label: "Idade", required: true }
  ];

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() { }

}
