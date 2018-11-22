import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcial } from './parcial';
const API_URL = '';
const parciales = '/';
@Injectable()
export class ParcialService {

  constructor() { }
createParcial(parcial): Observable<Parcial> 
    {
        //return this.http.post<Parcial>(API_URL + parciales, parciales);
    }
}