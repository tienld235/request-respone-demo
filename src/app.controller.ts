import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { FreezePipe } from './pipes/freeze.pipe';
import { ValidationPipe } from './pipes/validation.pipe';
import { RequestService } from './utils/request.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestService: RequestService,
  ) {}

  @Get()
  // @UseGuards(AuthGuard)
  // @UseInterceptors(LoggingInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UsePipes(ValidationPipe)
  postExample(@Body() body: CreateExampleDto) {
    this.appService.postExample();
  }

  @Get('error')
  throwError() {
    throw new InternalServerErrorException();
  }
}
