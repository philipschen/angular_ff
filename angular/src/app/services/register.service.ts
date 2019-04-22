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
  /*
  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint + 'products').pipe(
  //     map(this.extractData));
  // }

  // getProduct(id): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(this.extractData));
  // }
*/
  addprovider(provider): Observable<any> {
    console.log(provider);
    console.log(JSON.stringify(provider));
    console.log(this.http.post<providerModel>(endpoint, JSON.stringify(provider), httpOptions)
      .pipe(
        catchError(this.handleError('addHero', provider))
      ));
    return this.http.post<providerModel>(endpoint, JSON.stringify(provider), httpOptions)
      .pipe(
        catchError(this.handleError('addHero', provider))
      );
    // return this.http.post<any>(endpoint + 'provider', JSON.stringify(provider), httpOptions).pipe(
    //   // tslint:disable-next-line:no-shadowed-variable
    //   tap((provider) => console.log(`added provider w/ id=${provider.id}`)),
    //   catchError(this.handleError<any>('addprovider'))
    // );
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
const endpoint = 'http://localhost:5000/users/register_pro';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
