import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './applications/applications.module';
import { EventModule } from './events/events.module';
import { StageModule } from './stages/stages.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ApplicationModule,
    EventModule,
    StageModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
