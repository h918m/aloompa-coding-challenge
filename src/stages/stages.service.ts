import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Stage, Event } from '@prisma/client';
import { NewStage, UpdateStage } from 'src/graphql';

@Injectable()
export class StageService {
  constructor(private prisma: PrismaService) { }

  // Get a single stage
  async stage(id: string): Promise<Stage | null> {
    return this.prisma.stage.findUnique({
      where: {
        id: id,
      },
    });
  }

  // Get multiple stages
  async stages(): Promise<Stage[]> {
    return this.prisma.stage.findMany({});
  }

  // Create a stage
  async createStage(input: NewStage): Promise<Stage> {
    return this.prisma.stage.create({
      data: input,
    });
  }

  // Update a stage
  async updateStage(params: UpdateStage): Promise<Stage> {
    const { id, name } = params;
    return this.prisma.stage.update({
      where: {
        id: id,
      },
      data: {
        ...(name && { name }),
      },
    });
  }

  // Search a single stage by name
  async searchStage(name: string): Promise<Stage[] | null> {
    return this.prisma.stage.findMany({
      where: {
        name: name,
      },
    });
  }

  // Search a single stage by app
  async searchStageByAppId(appId: string): Promise<Stage[] | null> {
    const events = await this.prisma.event.findMany({
      where: {
        appId: appId
      },
    });
    const stageIds = events.reduce((ret, cur) => ret?.some(ele => ele === cur?.stageId) ? ret : [...ret, cur.stageId], [])
    const promises = stageIds.map(async stageId => await this.prisma.stage.findUnique({ where: { id: stageId } }));
    return Promise.all(promises);
  }

  // Search a single stage by event
  async searchStageByEventId(eventId: string): Promise<Stage | null> {
    const event = await this.prisma.event.findUnique({
      where: {
        id: eventId
      },
    });
    return this.prisma.stage.findUnique({
      where: {
        id: event.stageId,
      },
    });
  }

  // delete a stage
  async deleteStage(id: string): Promise<Stage> {
    return this.prisma.stage.delete({
      where: {
        id: id,
      },
    });
  }
}