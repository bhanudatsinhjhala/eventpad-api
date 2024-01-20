import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import environmentConfig from './common/configs/environment.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: environmentConfig.MONGO_URL,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
