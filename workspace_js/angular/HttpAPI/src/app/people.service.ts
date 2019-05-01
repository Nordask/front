import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}
    
  fetchPeople(): Observable<Object> { 
                                    // equals ?id=123 concatenate with url
    //const params = new HttpParams().set('id', '123').set('includeAddress', 'true');

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
    return this.http.post<any>('http://localhost:3000/post', newPerson);
  
    //-------------------------AJAX reques-------------------------------------  
    /*
    var data = {name:"John"}
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", 'http://localhost:3000/post', false); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    console.log(JSON.stringify(data));
    xmlHttp.send(JSON.stringify(data));
    */  
    
    //---------------------get data-----------------------------------------------
    /*
    return this.http.get('/assets/data/people.json',
                          {params: params}); 
    */
    }

}
