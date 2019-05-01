import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders, HttpResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}
    
  putPeople(): Observable<Object> { 

    const newPerson = {
      name: 'Pete'
    };

    //const data = JSON.stringify({body: newPerson})

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});
    let options = {headers: headers};  
    //--------------------put data------------------------------------------------
    console.log(newPerson);
    console.log(JSON.stringify(newPerson));
    return this.http.post<Object>('http://localhost:3000/post', newPerson);
  
    //-------------------------AJAX reques-------------------------------------  
    /*
    var data = {name:"John"}
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", 'http://localhost:3000/post', false); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    console.log(JSON.stringify(data));
    xmlHttp.send(JSON.stringify(data));
    */  
  }


    fetchPeople(): Observable</*HttpResponse<Person>*/Object> { 
      // equals ?id=123 concatenate with url
    //const params = new HttpParams().set('id', '123').set('includeAddress', 'true');
      
      //---------------------get data-----------------------------------------------
      
      return this.http
                 .get<Person[]>('http://localhost:3000/get'/*,
                 { observe: 'response'}*/ // for gettin all response
                 /*{headers: new HttpHeaders().set('app-language', 'it')}*/)
                 .retryWhen(err => {
                   let retries = 3;

                   return err.delay(1000)
                             .flatMap((err) => {
                               if(retries-- > 0) {
                                 return Observable.of(err);
                               } else {
                                 return Observable.throw(err);
                               }
                             })
                 });
      //return this.http.get('assets/data/people.json', {responseType: 'text'});          
      //{params: params}); 
    }

    uploadFile(data): Observable<HttpEvent<Object>> {
      const req = new HttpRequest(
        'POST',
        'http://localhost:3000/upload',
        data,
        {reportProgress: true}
      );

      return this.http.request(req);
    }

    succesReq() {
      return this.http.get('/assets/data/people.json');
    }

    raiseError() {
      return this.http.get('/assets/data/people1.json');
    }

    testPeople(): Observable<Person[]> {
      return this.http.get<Person[]>('/api/v1/people');
    }
}
