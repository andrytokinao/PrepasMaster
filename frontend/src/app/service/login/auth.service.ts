import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {BehaviorSubject, catchError, Observable, Subject} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ɵElement} from "@angular/forms";
import {API_BASE_URL} from "../../type/constant";
import {GET_STUDENTS} from "../../graphql.operations";
import {Apollo} from "apollo-angular";
import {UserApp} from "../../index/index-student";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: string = '';
  public password: string = '';
  public connected:{}={} ;
  public authorities: string[] = [
    "LOGED",
    "CAN_EDIT_PROFILE",
    "CAN_VIEW_LIST_COMPANY",
    "CAN_AFFECT_ROLE_RESPONSABLE",
    "CAN_AFFECT_ROLE_ADMIN",
    "CAN_ADD_NEW_PARCOURS",
    "CAN_EDIT_COMPANY",
    "CAN_VIEW_LIST_USER",
    "CAN_ADD_USER",
    "CAN_CONTROLE_USER",
    "CAN_ADD_PAROURS_USER",
    "CAN_VIEW_COMPANY",
    "CAN_ADD_NEW_COMPANY",
    "CAN_VIEW_TRANSACTION",
    "CAN_VIEW_ETAT_FINANCIER"
  ];

  private connectedObservable: Subject<any> = new Subject<any>();
  private autoritiesObservable: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient, private fb: FormBuilder,private apollo:Apollo) {
    this.loadConnectes();
  }

  private submissionStatusSubject = new BehaviorSubject<boolean>(false);


  authenticationService(username: string, password: string):void {
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

      this.http.post(`${API_BASE_URL}/login`, body.toString(), { headers, responseType: 'text' }).subscribe(
        (result)=>{
          this.loadConnectes();
        }
      );
    }


  get submissionStatus$(): Observable<boolean> {
    return this.submissionStatusSubject.asObservable();
  }
  logout() {
    this.http.get(API_BASE_URL + '/logout').subscribe(
      data => {
        this.setConnected({});
      });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    this.http.get(API_BASE_URL + '/logout').subscribe(
      data => {
        this.setAutorities(data);
        this.loadAutorities();
      });
  }
  loadConnectes(){
    this.http.get(API_BASE_URL + '/api/username').subscribe(
      data => {
        this.setConnected(data);
        this.loadAutorities();
      });
  }
  loadAutorities(){
    this.http.get(API_BASE_URL + '/api/autorities').subscribe(
      data => {
       // TODO  this.setAutorities(data);
      });
  }
  setConnected(c: any) {
    this.connected = c;
    this.connectedObservable.next(this.connected);
  }
  setAutorities(e: any) {
    this.authorities = e;
    this.autoritiesObservable.next(this.authorities);
  }
  getConnectedObservable(): Observable<any> {
    return this.connectedObservable.asObservable();
  }
  getAutoritiesObservable() :Observable<any>{
    return this.autoritiesObservable.asObservable();
  }
  hasAutorities(autorities:string[]):boolean{
   return this.authorities.some(element => autorities.includes(element));
  }
}
