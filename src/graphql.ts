
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewApplication {
    id: string;
    name: string;
}

export class UpdateApplication {
    id: string;
    name?: Nullable<string>;
}

export class NewEvent {
    id: string;
    appId?: Nullable<string>;
    stageId?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    image?: Nullable<string>;
    startsAt?: Nullable<number>;
    endsAt?: Nullable<number>;
}

export class UpdateEvent {
    id: string;
    appId?: Nullable<string>;
    stageId?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    image?: Nullable<string>;
    startsAt?: Nullable<number>;
    endsAt?: Nullable<number>;
}

export class FromAndEnd {
    from?: Nullable<number>;
    to?: Nullable<number>;
}

export class NewStage {
    id: string;
    name: string;
}

export class UpdateStage {
    id: string;
    name?: Nullable<string>;
}

export class Application {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract apps(): Application[] | Promise<Application[]>;

    abstract app(id: string): Nullable<Application> | Promise<Nullable<Application>>;

    abstract events(): Event[] | Promise<Event[]>;

    abstract event(id: string): Nullable<Event> | Promise<Nullable<Event>>;

    abstract searchEvent(name: string): Nullable<Nullable<Event>[]> | Promise<Nullable<Nullable<Event>[]>>;

    abstract searchEventByAppId(appId: string): Nullable<Nullable<Event>[]> | Promise<Nullable<Nullable<Event>[]>>;

    abstract searchEventByStageId(stageId: string): Nullable<Nullable<Event>[]> | Promise<Nullable<Nullable<Event>[]>>;

    abstract searchEventBetween(dates: FromAndEnd): Nullable<Nullable<Event>[]> | Promise<Nullable<Nullable<Event>[]>>;

    abstract stages(): Stage[] | Promise<Stage[]>;

    abstract stage(id: string): Nullable<Stage> | Promise<Nullable<Stage>>;

    abstract searchStage(name: string): Nullable<Nullable<Stage>[]> | Promise<Nullable<Nullable<Stage>[]>>;

    abstract searchStageByAppId(appId: string): Nullable<Nullable<Stage>[]> | Promise<Nullable<Nullable<Stage>[]>>;

    abstract searchStageByEventId(eventId: string): Nullable<Stage> | Promise<Nullable<Stage>>;
}

export abstract class IMutation {
    abstract createApp(input?: Nullable<NewApplication>): Application | Promise<Application>;

    abstract updateApp(input?: Nullable<UpdateApplication>): Nullable<Application> | Promise<Nullable<Application>>;

    abstract deleteApp(id: string): Nullable<Application> | Promise<Nullable<Application>>;

    abstract createEvent(input?: Nullable<NewEvent>): Event | Promise<Event>;

    abstract updateEvent(input?: Nullable<UpdateEvent>): Nullable<Event> | Promise<Nullable<Event>>;

    abstract deleteEvent(id: string): Nullable<Event> | Promise<Nullable<Event>>;

    abstract createStage(input?: Nullable<NewStage>): Stage | Promise<Stage>;

    abstract updateStage(input?: Nullable<UpdateStage>): Nullable<Stage> | Promise<Nullable<Stage>>;

    abstract deleteStage(id: string): Nullable<Stage> | Promise<Nullable<Stage>>;
}

export class Event {
    id: string;
    appId: string;
    stageId: string;
    name: string;
    description: string;
    image: string;
    startsAt: number;
    endsAt: number;
}

export class Stage {
    id: string;
    name: string;
}

type Nullable<T> = T | null;
