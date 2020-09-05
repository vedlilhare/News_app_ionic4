// http.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  API_KEY = "5151bffff9114c08bfb410b3191a90d8";
  apiUrl = "https://hrm.cyfuture.com/webapi/RestController.php";
  newsapi = "https://newsapi.org/v2/top-headlines?country=in";
  
  constructor(private http: HttpClient) {
    
  }


  //get token
  gettoken(): Observable<any> {
    let url = this.apiUrl + '?action=token';
    return this.http.get(url).pipe(
      tap(_ => this.log("response received")),
      catchError(this.handleError("getDetails", []))
    );
  }
  
//userlogin
  userlogin(username, user_password,token) : Observable<any>{
    let url  = this.apiUrl +'?action=login';
     
    let postData = 'username=' + username + '&password=' + user_password + '&token=' + token  ; 
    return this.http.post(url,postData).pipe(
      tap(_ => this.log("response received")),
      catchError(this.handleError("getDetails", []))
    );                 
  }

  getDetails(): Observable<any> {
    return this.http.get(this.apiUrl + "?action=token").pipe(
      tap(_ => this.log("response received")),
      catchError(this.handleError("getDetails", []))
    );
  }

  getNews(): Observable<any>  {
    return this.http.get(
      this.newsapi+"&apiKey="+this.API_KEY
    );
  }

  getcategorynews(category): Observable<any> {
    return this.http.get(
      this.newsapi+"&category="+category+"&apiKey="+this.API_KEY
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
