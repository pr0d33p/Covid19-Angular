import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { ICases, GlobalCasesInterface } from './cases';

@Injectable({
	providedIn: 'root'
})


export class CasesServices {

	private casesUrl = 'https://coronavirus-19-api.herokuapp.com/countries';
	private globalUrl = 'https://coronavirus-19-api.herokuapp.com/all';
	constructor(private http: HttpClient) {

	}

	getGlobalCases(): Observable<GlobalCasesInterface[]> {
			return  this.http.get<GlobalCasesInterface[]>(this.globalUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
				);
	}

	getCases(): Observable<ICases[]> {
			return  this.http.get<ICases[]>(this.casesUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
				);
	}
private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}