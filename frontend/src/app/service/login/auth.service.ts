import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {BehaviorSubject, catchError, Observable} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ɵElement} from "@angular/forms";
import {API_BASE_URL} from "../../type/constant";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: string = '';
  public password: string = '';
  private cookieService: any;
  private jSessionIdValue: string = "";
  private jSessionIdTemp: string = "";

  constructor(private http: HttpClient, private fb: FormBuilder) {


  }

  private submissionStatusSubject = new BehaviorSubject<boolean>(false);


  authenticationService(username: string, password: string):Observable<any> {
      const headers = new HttpHeaders()
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0')
        .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8')
        .set('Accept-Language', 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3')
        .set('Accept-Encoding', 'gzip, deflate, br')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Origin', API_BASE_URL)
        .set('DNT', '1')
        .set('Connection', 'keep-alive')
        .set('Referer', `${API_BASE_URL}/login`)
        .set('Upgrade-Insecure-Requests', '1')
        .set('Sec-Fetch-Dest', 'document')
        .set('Sec-Fetch-Mode', 'navigate')
        .set('Sec-Fetch-Site', 'same-origin')
        .set('Sec-Fetch-User', '?1')
        .set('Pragma', 'no-cache')
        .set('Cache-Control', 'no-cache');

      const body = new URLSearchParams();
      body.set('username', username);
      body.set('password', password);

      return this.http.post(`${API_BASE_URL}/login`, body.toString(), { headers, responseType: 'text' });
    }


  get submissionStatus$(): Observable<boolean> {
    return this.submissionStatusSubject.asObservable();
  }

  postWithJSessionId(jSessionIdValue: string, username: string, password: string): Observable<any> {
    const url = API_BASE_URL + '/login';
    const headers = new HttpHeaders({
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    });
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(url, body.toString(), {headers, observe: 'response'});
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = '';
    this.password = '';
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

}
