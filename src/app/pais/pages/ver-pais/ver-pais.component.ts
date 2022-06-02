import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent  {

  termino : string  = ""
  hayError: boolean = false;
  paises  : Country [] = []



  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    console.log("oeee si funciona")
    /* console.log(this.termino) */
    this.paisService.buscarPais(this.termino).subscribe((pais)=>{
      console.log(pais);
      console.log("RESPUESTA DE TAMAÑO" + pais.length)
      console.log("RESPUESTA DE TAMAÑO" + pais[0].name.official)
      this.paises = pais;
    },(err)=>{
      this.hayError = true;
      this.paises = [];

    });
  }



  constructor(private paisService:PaisesService) { }



}
