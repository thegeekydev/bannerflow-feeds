import { Injectable } from "@angular/core";

// RxJs
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

import { GlobalVariable } from "src/app/configs/global";

@Injectable()
export class FeedsRepositoryService {
  constructor(private http: HttpClient) {}

  getFeeds(limit: number, pagination: any): Observable<any> {
    let url = `${GlobalVariable.BASE_API_URL}r/sweden.json?limit=${limit}`;
    if (pagination && pagination.hasOwnProperty('id')) {
      url = `${url}&${pagination.type}=${pagination.id}`;
    }
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched feeds list`)),
      catchError(this.handleError("getFeeds", []))
    );
  }

  getFeedByURL(url: string): Observable<any> {
    return this.http.get<any>(`${GlobalVariable.BASE_API_URL}${url}`).pipe(
      tap(_ => console.log(`fetched feed with url=${url}`)),
      catchError(this.handleError<any>(`getFeedByURL url=${url}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
