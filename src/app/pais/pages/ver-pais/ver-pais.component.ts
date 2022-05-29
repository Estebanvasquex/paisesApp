import { Component } from '@angular/core';
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



  buscar(){
    this.hayError = false;
    /* console.log(this.termino) */
    this.paisService.buscarPais(this.termino).subscribe((pais)=>{
      console.log(pais);
      console.log("RESPUESTA DE TAMAÑO" + pais.length)
      console.log("RESPUESTA DE TAMAÑO" + pais[0].name.official)
    },(err)=>{
      this.hayError = true;

    });
  }



  constructor(private paisService:PaisesService) { }



}
