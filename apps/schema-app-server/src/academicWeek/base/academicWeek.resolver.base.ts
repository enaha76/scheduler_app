/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AcademicWeek } from "./AcademicWeek";
import { AcademicWeekCountArgs } from "./AcademicWeekCountArgs";
import { AcademicWeekFindManyArgs } from "./AcademicWeekFindManyArgs";
import { AcademicWeekFindUniqueArgs } from "./AcademicWeekFindUniqueArgs";
import { CreateAcademicWeekArgs } from "./CreateAcademicWeekArgs";
import { UpdateAcademicWeekArgs } from "./UpdateAcademicWeekArgs";
import { DeleteAcademicWeekArgs } from "./DeleteAcademicWeekArgs";
import { ExceptionalClosureFindManyArgs } from "../../exceptionalClosure/base/ExceptionalClosureFindManyArgs";
import { ExceptionalClosure } from "../../exceptionalClosure/base/ExceptionalClosure";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { WeeklyProfessorAvailabilityFindManyArgs } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailabilityFindManyArgs";
import { WeeklyProfessorAvailability } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailability";
import { WeeklyTeachingLoadFindManyArgs } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoadFindManyArgs";
import { WeeklyTeachingLoad } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoad";
import { AcademicWeekService } from "../academicWeek.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AcademicWeek)
export class AcademicWeekResolverBase {
  constructor(
    protected readonly service: AcademicWeekService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "read",
    possession: "any",
  })
  async _academicWeeksMeta(
    @graphql.Args() args: AcademicWeekCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AcademicWeek])
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "read",
    possession: "any",
  })
  async academicWeeks(
    @graphql.Args() args: AcademicWeekFindManyArgs
  ): Promise<AcademicWeek[]> {
    return this.service.academicWeeks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AcademicWeek, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "read",
    possession: "own",
  })
  async academicWeek(
    @graphql.Args() args: AcademicWeekFindUniqueArgs
  ): Promise<AcademicWeek | null> {
    const result = await this.service.academicWeek(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AcademicWeek)
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "create",
    possession: "any",
  })
  async createAcademicWeek(
    @graphql.Args() args: CreateAcademicWeekArgs
  ): Promise<AcademicWeek> {
    return await this.service.createAcademicWeek({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AcademicWeek)
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "update",
    possession: "any",
  })
  async updateAcademicWeek(
    @graphql.Args() args: UpdateAcademicWeekArgs
  ): Promise<AcademicWeek | null> {
    try {
      return await this.service.updateAcademicWeek({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AcademicWeek)
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "delete",
    possession: "any",
  })
  async deleteAcademicWeek(
    @graphql.Args() args: DeleteAcademicWeekArgs
  ): Promise<AcademicWeek | null> {
    try {
      return await this.service.deleteAcademicWeek(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ExceptionalClosure], {
    name: "exceptionalClosures",
  })
  @nestAccessControl.UseRoles({
    resource: "ExceptionalClosure",
    action: "read",
    possession: "any",
  })
  async findExceptionalClosures(
    @graphql.Parent() parent: AcademicWeek,
    @graphql.Args() args: ExceptionalClosureFindManyArgs
  ): Promise<ExceptionalClosure[]> {
    const results = await this.service.findExceptionalClosures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Schedule], { name: "schedule" })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "any",
  })
  async findSchedule(
    @graphql.Parent() parent: AcademicWeek,
    @graphql.Args() args: ScheduleFindManyArgs
  ): Promise<Schedule[]> {
    const results = await this.service.findSchedule(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [WeeklyProfessorAvailability], {
    name: "weeklyProfessorAvailability",
  })
  @nestAccessControl.UseRoles({
    resource: "WeeklyProfessorAvailability",
    action: "read",
    possession: "any",
  })
  async findWeeklyProfessorAvailability(
    @graphql.Parent() parent: AcademicWeek,
    @graphql.Args() args: WeeklyProfessorAvailabilityFindManyArgs
  ): Promise<WeeklyProfessorAvailability[]> {
    const results = await this.service.findWeeklyProfessorAvailability(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [WeeklyTeachingLoad], {
    name: "weeklyTeachingLoads",
  })
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "read",
    possession: "any",
  })
  async findWeeklyTeachingLoads(
    @graphql.Parent() parent: AcademicWeek,
    @graphql.Args() args: WeeklyTeachingLoadFindManyArgs
  ): Promise<WeeklyTeachingLoad[]> {
    const results = await this.service.findWeeklyTeachingLoads(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
