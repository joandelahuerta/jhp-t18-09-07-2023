import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('Error:', error);
    return throwError('Something went wrong, please try again later.');
  }

  getCharacters(): Observable<any> {
    const randomPage = Math.floor(Math.random() * 34) + 1;  //revisar aleatoriedad
    const url = `${this.apiUrl}?page=${randomPage}`;
    return this.http.get(url);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
