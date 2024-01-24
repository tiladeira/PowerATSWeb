import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Dashboard', link:"/dashboard"},
    { label: 'Vagas', link: "/listagemVagas" },
    { label: 'Candidatos', link: "/listagemCandidatos" },
    { label: 'Currículos', link: "/listagemCurriculos" },
    { label: 'Candidatos Vagas', link: "/listagemCandidatosVagas" }
  ];
}
