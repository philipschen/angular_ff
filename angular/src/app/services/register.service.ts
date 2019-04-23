import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { providerModel } from '../models/providerModel';
import { kitchenModel } from '../models/kitchenModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  addprovider(provider): Observable<any> {
    console.log(provider);
    console.log(this.http.post<providerModel>(endpoint, JSON.stringify(provider), httpOptions)
    .pipe(
      catchError(this.handleError('addHero', provider))
    ));
    return this.http.post<providerModel>(endpoint, JSON.stringify(provider), httpOptions)
    .pipe(
      catchError(this.handleError('addHero', provider))
      );
  }

  addprovider_kit(kitchen): Observable<any> {
    console.log(kitchen);
    console.log(JSON.stringify(kitchen))
    console.log(this.http.post<kitchenModel>(endpoint_kit, JSON.stringify(kitchen), httpOptions)
    .pipe(
      catchError(this.handleError('addHero', kitchen))
    ));
    return this.http.post<kitchenModel>(endpoint_kit, JSON.stringify(kitchen), httpOptions)
    .pipe(
      catchError(this.handleError('addHero', kitchen))
      );
  }

  getprovider(): Observable<any[]> {
    console.log(this.http.get<providerModel[]>(endpoint)
    .pipe(
      catchError(this.handleError('getHero', []))
    ));
    
    return this.http.get<providerModel[]>(endpoint)
    .pipe(
      catchError(this.handleError('getHero', []))
    );
  }
/*
  // updateProduct(id, product): Observable<any> {
  //   return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  // deleteProduct(id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<any>('deleteProduct'))
  //   );
  // }

  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint + 'products').pipe(
  //     map(this.extractData));
  // }

  // getProduct(id): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(this.extractData));
  // }
  */
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
