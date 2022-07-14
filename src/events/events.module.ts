import { Module } from '@nestjs/common';
import { EventResolvers } from './events.resolvers';
import { EventService } from './events.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EventResolvers, EventService, PrismaService],
})
export class EventModule {}