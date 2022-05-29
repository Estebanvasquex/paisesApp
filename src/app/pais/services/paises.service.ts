import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  /* VARIABLE URL CONEXIÓN A LA API */
  private apiUrl: string = ' https://restcountries.com/v3.1'

  /* SE INJECTA LA DEPENDENCIA HTTP PARA HACER CONEXIONES A LA API */
  constructor(private http: HttpClient ) { };

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);

  }


}
