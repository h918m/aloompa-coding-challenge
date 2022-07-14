import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Event } from '@prisma/client';
import { FromAndEnd, NewEvent, UpdateEvent } from 'src/graphql';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  // Get a single event
  async event(id: string): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: {
        id: id,
      },
    });
  }

  // Get multiple events
  async events(): Promise<Event[]> {
    return this.prisma.event.findMany({});
  }

  // Create a event
  async createEvent(input: NewEvent): Promise<Event> {
    return this.prisma.event.create({
      data: input,
    });
  }

  // Update a event
  async updateEvent(params: UpdateEvent): Promise<Event> {
    const { id, appId, stageId, description, name, image, startsAt, endsAt } = params;
    return this.prisma.event.update({
      where: {
        id: id,
      },
      data: {
        ...(appId && { appId }),
        ...(stageId && { stageId }),
        ...(description && { description }),
        ...(name && { name }),
        ...(image && { image }),
        ...(startsAt && { startsAt }),
        ...(endsAt && { endsAt }),
      },
    });
  }

  // Search a single event by name
  async searchEvent(name: string): Promise<Event[] | null> {
    return this.prisma.event.findMany({
      where: {
        name: name,
      },
    });
  }

  // Search a single event by appId
  async searchEventByAppId(appId: string): Promise<Event[] | null> {
    return this.prisma.event.findMany({
      where: {
        appId: appId,
      },
    });
  }

  // Search a single event by stageId
  async searchEventByStageId(stageId: string): Promise<Event[] | null> {
    return this.prisma.event.findMany({
      where: {
        stageId: stageId,
      },
    });
  }

  // Search a single event by stageId
  async searchEventBetween(dates: FromAndEnd): Promise<Event[] | null> {
    return this.prisma.event.findMany({
      where: {
        startsAt: {
          lte: dates.to
        },
        endsAt: {
          gte: dates.from
        }
      },
    });
  }

  // delete a event
  async deleteEvent(id: string): Promise<Event> {
    return this.prisma.event.delete({
      where: {
        id: id,
      },
    });
  }
}