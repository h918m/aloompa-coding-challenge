import { Module } from '@nestjs/common';
import { ApplicationResolvers } from './applications.resolvers';
import { ApplicationService } from './applications.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ApplicationResolvers, ApplicationService, PrismaService],
})
export class ApplicationModule {}