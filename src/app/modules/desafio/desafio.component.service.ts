import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesafioService {
  private apiUrl = 'https://6467a872e99f0ba0a814b5ff.mockapi.io/api/Pessoas';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  saveStudents(students: any[]): void {
    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));
  }

  getLocalStudents(): any[] {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
  }
}