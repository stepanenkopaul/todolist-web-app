import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getItems`);
  }

  addItem(item: any): Observable<any> {
    console.log("addItem")
    return this.http.post(`${this.apiUrl}/addItem`, item);
  }

  deleteItem(id: any): Observable<any> {
    console.log("deleteItem:" + id);
    return this.http.post(`${this.apiUrl}/deleteItem`, { id: id });
  }
}
