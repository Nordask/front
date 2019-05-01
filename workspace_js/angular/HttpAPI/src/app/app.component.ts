import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people;
  message;
  output;
  
  constructor(private peopleService: PeopleService) {}

  putPeople() {
    this.people = this.peopleService.putPeople();
  }

  fetchPeople() {
    this.peopleService.fetchPeople().subscribe(
      (data) => {
        this.message = null;
        //this.people = Object.values(data.headers);
        this.people = data;
        //console.log(data.body); when we use { observe: 'response'}
      },
      (err: HttpErrorResponse) => {
        if(err instanceof Error) {
          // client-side error
          this.message = `An error occured ${err.error.message}`;
        } else {
          this.message = `Backend returned err code ${err.status}, body was: ${err.message}`;
        }
      }
    );
  }

  uploadFile(fileUpload) {
    const formData = new FormData();
    formData.append('avatar', fileUpload.files[0], 'avatar.jpg');

    this.peopleService.uploadFile(formData)
                      .subscribe(res => {
                        if(res.type === HttpEventType.UploadProgress) {
                          const percentage = Math.round(100 * res.loaded / res.total);
                          this.output = `File is ${percentage}% uploaded`;  
                        } else if(res instanceof HttpResponse) {
                          this.output = `File is completely uploaded`;
                        }
                      });
  }

  successRequest() {
    this.peopleService.succesReq().subscribe(data => {
      this.output = data;
    });
  }

  raiseError() {
    this.peopleService.raiseError().subscribe(data => {
      this.output = data;
    });
  }
}
