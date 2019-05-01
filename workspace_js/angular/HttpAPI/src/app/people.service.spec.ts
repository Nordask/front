import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PeopleService]
  }));

  it('should fetch a list of people', inject(
    [PeopleService, HttpTestingController],
    (peopleService: PeopleService, httpMock: HttpTestingController) => {
      peopleService.testPeople()
                   .subscribe(people => {
                      expect(people.length).toBe(2);
                      expect(people[0].name).toEqual('Juri');
                   });
      
      const req = httpMock.expectOne('/api/v1/people', 'call to people api');
      expect(req.request.method).toBe('GET');

      req.flush([
        {
          name: 'Juri'
        },
        {
          name: 'Igor'
        }
      ]);

      httpMock.verify();
    }));           
});  
