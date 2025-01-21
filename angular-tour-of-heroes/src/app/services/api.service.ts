import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Options } from '../../types';
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private httpClient = inject(HttpClient);
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  post<T>(url: string, body: any, options: Options): Observable<T> {
      return this.httpClient.post<T>(url, body,  options) as Observable<T>;
  }
}
