import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {
  private baseUrl = 'http://localhost:3000/api/empregados';

  constructor(private http: HttpClient) {}

  getEmpregados(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getEmpregado(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmpregado(empregado: Object): Observable<Object> {
    return this.http.post(this.baseUrl, empregado);
  }

  updateEmpregado(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmpregado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
