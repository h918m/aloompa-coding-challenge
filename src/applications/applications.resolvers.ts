import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApplicationService } from './applications.service';
import { Application, NewApplication, UpdateApplication } from 'src/graphql';

@Resolver('Application')
export class ApplicationResolvers {
  constructor(private readonly applicationService: ApplicationService) {}

  @Query('apps')
  async apps() {
    return this.applicationService.apps();
  }

  @Query('app')
  async app(@Args('id') args: string) {
    return this.applicationService.app(args);
  }

  @Mutation('createApp')
  async create(@Args('input') args: NewApplication) {
    return this.applicationService.createApp(args);
  }

  @Mutation('updateApp')
  async update(@Args('input') args: UpdateApplication) {
    return this.applicationService.updateApp(args);
  }

  @Mutation('deleteApp')
  async delete(@Args('id') args: string) {
    return this.applicationService.deleteApp(args);
  }
}