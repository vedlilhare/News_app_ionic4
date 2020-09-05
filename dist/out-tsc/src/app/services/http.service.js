import { __decorate, __metadata } from "tslib";
// http.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
let HttpService = /** @class */ (() => {
    let HttpService = class HttpService {
        constructor(http) {
            this.http = http;
            this.API_KEY = "5151bffff9114c08bfb410b3191a90d8";
            this.apiUrl = "https://hrm.cyfuture.com/webapi/RestController.php";
            this.newsapi = "https://newsapi.org/v2/top-headlines?country=in";
        }
        //get token
        gettoken() {
            let url = this.apiUrl + '?action=token';
            return this.http.get(url).pipe(tap(_ => this.log("response received")), catchError(this.handleError("getDetails", [])));
        }
        //userlogin
        userlogin(username, user_password, token) {
            let url = this.apiUrl + '?action=login';
            let postData = 'username=' + username + '&password=' + user_password + '&token=' + token;
            return this.http.post(url, postData).pipe(tap(_ => this.log("response received")), catchError(this.handleError("getDetails", [])));
        }
        getDetails() {
            return this.http.get(this.apiUrl + "?action=token").pipe(tap(_ => this.log("response received")), catchError(this.handleError("getDetails", [])));
        }
        getNews() {
            return this.http.get(this.newsapi + "&apiKey=" + this.API_KEY);
        }
        getcategorynews(category) {
            return this.http.get(this.newsapi + "&category=" + category + "&apiKey=" + this.API_KEY);
        }
        handleError(operation = "operation", result) {
            return (error) => {
                // TODO: send the error to remote logging infrastructure
                console.error(error); // log to console instead
                // TODO: better job of transforming error for user consumption
                this.log(`${operation} failed: ${error.message}`);
                // Let the app keep running by returning an empty result.
                return of(result);
            };
        }
        /** Log a HeroService message with the MessageService */
        log(message) {
            console.log(message);
        }
    };
    HttpService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpService);
    return HttpService;
})();
export { HttpService };
//# sourceMappingURL=http.service.js.map