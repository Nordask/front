import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleWriterService {
  public write(msg: string) {
    console.log(msg);
  }
}
