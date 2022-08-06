import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  lista: string[]=["Frigorifico","Television"];
  hability : Boolean=false;
  habiliityex : Boolean=false;
  select: string;
  constructor() { }

  ngOnInit(): void {
  }
  formateaValor(valor) {
    // si no es un número devuelve el valor, o lo convierte a número con 2 decimales
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }
  sumar(valor1:number, valor2:number): number {
    result : Number;
    return this.formateaValor((valor1*valor2)*0.28);
  }
  sumarMes(valor1:number, valor2:number): number {
    result : Number;
    return this.formateaValor(((valor1*valor2)*0.28)*30);
  }

}
