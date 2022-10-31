import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { FreezePipe } from './pipes/freeze.pipe';
import { RequestService } from './utils/request.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // add here is ok, but if we use dependencies injection -> this will not work
  // app.use(new AuthenticationMiddleware());
  // app.useGlobalGuards(new AuthGuard());
  // app.useGlobalPipes(new FreezePipe());
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(12345);
}
bootstrap();
