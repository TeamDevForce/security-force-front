import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class BuscaEstadosCidadesService {
  private readonly baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) {}

  public buscarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.baseUrl);
  }

  public buscarCidades(estadoId: number): Observable<Cidade[]> {
    const url = `${this.baseUrl}/${estadoId}/municipios`;
    return this.http.get<Cidade[]>(url);
  }
}