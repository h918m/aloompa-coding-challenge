import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Application } from '@prisma/client';
import { NewApplication, UpdateApplication } from 'src/graphql';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  // Get a single application
  async app(id: string): Promise<Application | null> {
    return this.prisma.application.findUnique({
      where: {
        id: id,
      },
    });
  }

  // Get multiple applications
  async apps(): Promise<Application[]> {
    return this.prisma.application.findMany({});
  }

  // Create a application
  async createApp(input: NewApplication): Promise<Application> {
    return this.prisma.application.create({
      data: input,
    });
  }

  // Update a application
  async updateApp(params: UpdateApplication): Promise<Application> {
    const { id, name } = params;
    return this.prisma.application.update({
      where: {
        id: id,
      },
      data: {
        ...(name && { name }),
      },
    });
  }

  // delete a application
  async deleteApp(id: string): Promise<Application> {
    return this.prisma.application.delete({
      where: {
        id: id,
      },
    });
  }
}