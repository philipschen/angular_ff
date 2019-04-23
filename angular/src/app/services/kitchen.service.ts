import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { providerModel } from '../models/providerModel';
import { kitchenModel } from '../models/kitchenModel';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getprovider(): Observable<any[]> {
    console.log(this.http.get<kitchenModel[]>(endpoint_kit)
    .pipe(
      catchError(this.handleError('getHero', []))
    ));
    
    return this.http.get<kitchenModel[]>(endpoint_kit)
    .pipe(
      catchError(this.handleError('getHero', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

const endpoint = 'http://localhost:5000/users/register_pro'
const endpoint_kit = 'http://localhost:5000/api/kitchen'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
