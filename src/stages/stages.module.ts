import { Module } from '@nestjs/common';
import { StageResolvers } from './stages.resolvers';
import { StageService } from './stages.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [StageResolvers, StageService, PrismaService],
})
export class StageModule {}