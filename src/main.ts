import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environmentConfig from './common/configs/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environmentConfig.LOCAL_DOMAIN);
}
bootstrap();
