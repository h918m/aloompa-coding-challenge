import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StageService } from './stages.service';
import { Stage, NewStage, UpdateStage } from 'src/graphql';

@Resolver('Stage')
export class StageResolvers {
  constructor(private readonly stageService: StageService) {}

  @Query('stages')
  async stages() {
    return this.stageService.stages();
  }

  @Query('stage')
  async stage(@Args('id') args: string) {
    return this.stageService.stage(args);
  }

  @Query('searchStage')
  async searchStage(@Args('name') args: string) {
    return this.stageService.searchStage(args);
  }

  @Query('searchStageByAppId')
  async searchStageByAppId(@Args('appId') args: string) {
    return this.stageService.searchStageByAppId(args);
  }

  @Query('searchStageByEventId')
  async searchStageByEventId(@Args('eventId') args: string) {
    return this.stageService.searchStageByEventId(args);
  }

  @Mutation('createStage')
  async create(@Args('input') args: NewStage) {
    return this.stageService.createStage(args);
  }

  @Mutation('updateStage')
  async update(@Args('input') args: UpdateStage) {
    return this.stageService.updateStage(args);
  }

  @Mutation('deleteStage')
  async delete(@Args('id') args: string) {
    return this.stageService.deleteStage(args);
  }
}