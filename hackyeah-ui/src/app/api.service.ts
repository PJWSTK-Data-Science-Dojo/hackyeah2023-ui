import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api'; 
  private isPremiumModelSubject = new BehaviorSubject<boolean>(false);
  isPremiumModel$ = this.isPremiumModelSubject.asObservable();

  constructor(private http: HttpClient) { }

  toggleModel(value: boolean): void {
    this.isPremiumModelSubject.next(value);
  }

  uploadSqliteFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.apiUrl}/api/Admin/upload-database`, formData);
  }

  generateSql(query: string): Observable<any> {
    const body = { NaturalLanguageInput: query,IsPremiumModel: this.isPremiumModelSubject.value }; 
    return this.http.post(`${this.apiUrl}/prompt`, body);
  }

  executeSql(sql: string): Observable<any> {
    const body = { SqlQuery: sql }; 
    return this.http.post(`${this.apiUrl}/execute`, body);
  }

  getDbName(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dbName`);
  }
}