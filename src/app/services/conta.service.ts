import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Conta } from "../models/Conta";
import { Deposito } from "../models/Deposito";
import { Saque } from "../models/Saque";
import { Transferencia } from "../models/Transferencia";


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

  remover(cpf: String): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}conta/deletar/${cpf}`);
  }

  atualizar(conta: Conta, cpf: String): Observable<Conta> {
    return this.http.put<Conta>(`${this.baseURL}conta/atualizar/${cpf}`, conta);
  }

  saque(saque: Saque, pix: String): Observable<void> {
    return this.http.post<void>(`${this.baseURL}conta/saque/${pix}`, saque);
  }

  deposito(deposito: Deposito, pix: String): Observable<void> {
    return this.http.post<void>(`${this.baseURL}conta/deposito/${pix}`, deposito);
  }

  transferencia(transferencia: Transferencia, pix: String): Observable<void> {
    return this.http.post<void>(`${this.baseURL}conta/transferencia/${pix}`, transferencia);
  }

}