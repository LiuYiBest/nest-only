import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [UserModule, ListModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
