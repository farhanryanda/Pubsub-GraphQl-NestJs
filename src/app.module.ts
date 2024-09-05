import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLServerModule } from './graphql/graphql.module';

@Module({
  imports: [GraphQLServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
