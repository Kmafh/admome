import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent{

  listarCurso: string[] = ['TypeScript','JavaScript','Java SE'];
  habilitar: boolean = false;
  constructor() { }

}
