import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private readonly baseUrl: string = "https://localhost:7284/api/App";

  constructor(public http: HttpClient) { }

  public pesuisar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  public buscarPedidosPorId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}`);
  }


}
