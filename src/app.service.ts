import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './utils/request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly requestService: RequestService) {}
  getHello(): string {
    const userId = this.requestService.getUserId();
    this.logger.log(`getHello: Hello userId:  ${userId}`);
    return 'Hello World!';
  }

  postExample(): string {
    this.logger.log(`This is router handler`);
    return 'post success';
  }
}
