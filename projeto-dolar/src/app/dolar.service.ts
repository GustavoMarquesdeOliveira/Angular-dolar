import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DolarService {
  constructor(private readonly http: HttpClient) { }

  getadress(dolar: number){
    return this.http.get<any>("https://economia.awesomeapi.com.br/last/" + dolar)
}
}
