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
import { WeeklyTeachingLoad } from "./WeeklyTeachingLoad";
import { WeeklyTeachingLoadCountArgs } from "./WeeklyTeachingLoadCountArgs";
import { WeeklyTeachingLoadFindManyArgs } from "./WeeklyTeachingLoadFindManyArgs";
import { WeeklyTeachingLoadFindUniqueArgs } from "./WeeklyTeachingLoadFindUniqueArgs";
import { CreateWeeklyTeachingLoadArgs } from "./CreateWeeklyTeachingLoadArgs";
import { UpdateWeeklyTeachingLoadArgs } from "./UpdateWeeklyTeachingLoadArgs";
import { DeleteWeeklyTeachingLoadArgs } from "./DeleteWeeklyTeachingLoadArgs";
import { Course } from "../../course/base/Course";
import { Group } from "../../group/base/Group";
import { AcademicWeek } from "../../academicWeek/base/AcademicWeek";
import { WeeklyTeachingLoadService } from "../weeklyTeachingLoad.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WeeklyTeachingLoad)
export class WeeklyTeachingLoadResolverBase {
  constructor(
    protected readonly service: WeeklyTeachingLoadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "read",
    possession: "any",
  })
  async _weeklyTeachingLoadsMeta(
    @graphql.Args() args: WeeklyTeachingLoadCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WeeklyTeachingLoad])
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "read",
    possession: "any",
  })
  async weeklyTeachingLoads(
    @graphql.Args() args: WeeklyTeachingLoadFindManyArgs
  ): Promise<WeeklyTeachingLoad[]> {
    return this.service.weeklyTeachingLoads(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WeeklyTeachingLoad, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "read",
    possession: "own",
  })
  async weeklyTeachingLoad(
    @graphql.Args() args: WeeklyTeachingLoadFindUniqueArgs
  ): Promise<WeeklyTeachingLoad | null> {
    const result = await this.service.weeklyTeachingLoad(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WeeklyTeachingLoad)
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "create",
    possession: "any",
  })
  async createWeeklyTeachingLoad(
    @graphql.Args() args: CreateWeeklyTeachingLoadArgs
  ): Promise<WeeklyTeachingLoad> {
    return await this.service.createWeeklyTeachingLoad({
      ...args,
      data: {
        ...args.data,

        course: {
          connect: args.data.course,
        },

        group: {
          connect: args.data.group,
        },

        week: {
          connect: args.data.week,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WeeklyTeachingLoad)
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "update",
    possession: "any",
  })
  async updateWeeklyTeachingLoad(
    @graphql.Args() args: UpdateWeeklyTeachingLoadArgs
  ): Promise<WeeklyTeachingLoad | null> {
    try {
      return await this.service.updateWeeklyTeachingLoad({
        ...args,
        data: {
          ...args.data,

          course: {
            connect: args.data.course,
          },

          group: {
            connect: args.data.group,
          },

          week: {
            connect: args.data.week,
          },
        },
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

  @graphql.Mutation(() => WeeklyTeachingLoad)
  @nestAccessControl.UseRoles({
    resource: "WeeklyTeachingLoad",
    action: "delete",
    possession: "any",
  })
  async deleteWeeklyTeachingLoad(
    @graphql.Args() args: DeleteWeeklyTeachingLoadArgs
  ): Promise<WeeklyTeachingLoad | null> {
    try {
      return await this.service.deleteWeeklyTeachingLoad(args);
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
  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async getCourse(
    @graphql.Parent() parent: WeeklyTeachingLoad
  ): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Group, {
    nullable: true,
    name: "group",
  })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async getGroup(
    @graphql.Parent() parent: WeeklyTeachingLoad
  ): Promise<Group | null> {
    const result = await this.service.getGroup(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AcademicWeek, {
    nullable: true,
    name: "week",
  })
  @nestAccessControl.UseRoles({
    resource: "AcademicWeek",
    action: "read",
    possession: "any",
  })
  async getWeek(
    @graphql.Parent() parent: WeeklyTeachingLoad
  ): Promise<AcademicWeek | null> {
    const result = await this.service.getWeek(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
