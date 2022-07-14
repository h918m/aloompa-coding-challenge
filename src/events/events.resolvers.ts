import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventService } from './events.service';
import { Event, FromAndEnd, NewEvent, UpdateEvent } from 'src/graphql';

@Resolver('Event')
export class EventResolvers {
  constructor(private readonly eventService: EventService) {}

  @Query('events')
  async events() {
    return this.eventService.events();
  }

  @Query('event')
  async event(@Args('id') args: string) {
    return this.eventService.event(args);
  }

  @Query('searchEvent')
  async searchEvent(@Args('name') args: string) {
    return this.eventService.searchEvent(args);
  }

  @Query('searchEventByAppId')
  async searchEventByAppId(@Args('appId') args: string) {
    return this.eventService.searchEventByAppId(args);
  }

  @Query('searchEventByStageId')
  async searchEventByStageId(@Args('stageId') args: string) {
    return this.eventService.searchEventByStageId(args);
  }

  @Query('searchEventBetween')
  async searchEventBetween(@Args('dates') args: FromAndEnd) {
    return this.eventService.searchEventBetween(args);
  }

  @Mutation('createEvent')
  async create(@Args('input') args: NewEvent) {
    return this.eventService.createEvent(args);
  }

  @Mutation('updateEvent')
  async update(@Args('input') args: UpdateEvent) {
    return this.eventService.updateEvent(args);
  }

  @Mutation('deleteEvent')
  async delete(@Args('id') args: string) {
    return this.eventService.deleteEvent(args);
  }
}