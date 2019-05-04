import { Injectable } from '@angular/core';
import { ConsoleWriterService } from './console-writer.service';

export const loggerFactory = (writer: ConsoleWriterService, prefix: string) => {
  return () => new LoggerService(true, writer, prefix);
}

@Injectable()
export class LoggerService {
  constructor(private isEnabled: boolean, private writer: ConsoleWriterService, private prefix: string) {}

  log(msg: string) {
    if(this.isEnabled) {
      this.writer.write(msg);
      console.log(`Logger (${this.prefix}): ${msg}`);
    }  
  }
}
