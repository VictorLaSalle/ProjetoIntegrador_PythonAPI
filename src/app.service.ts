import { Injectable } from '@nestjs/common';
import { GoogleApis } from 'googleapis';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
