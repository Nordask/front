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

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});
    let options = {headers: headers};  
    //--------------------put data------------------------------------------------
    return this.http.post<Person>('http://localhost:3000/post', JSON.stringify(newPerson));
    
    //---------------------get data-----------------------------------------------
    /*
    return this.http.get('/assets/data/people.json',
                          {params: params}); 
    */
    }

}
