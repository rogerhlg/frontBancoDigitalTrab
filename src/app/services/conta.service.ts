import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Conta } from "../models/Conta";

@Injectable({
  providedIn: "root",
})
export class ContaService {

  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listar(): Observable<Conta[]> {
    return this.http.get<Conta[]>(`${this.baseURL}conta/listar/`);
  }

  cadastrar(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(`${this.baseURL}conta/cadastrar/`, conta);
  }
}
