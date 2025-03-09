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
import { Group } from "./Group";
import { GroupCountArgs } from "./GroupCountArgs";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupFindUniqueArgs } from "./GroupFindUniqueArgs";
import { CreateGroupArgs } from "./CreateGroupArgs";
import { UpdateGroupArgs } from "./UpdateGroupArgs";
import { DeleteGroupArgs } from "./DeleteGroupArgs";
import { GroupOverlapFindManyArgs } from "../../groupOverlap/base/GroupOverlapFindManyArgs";
import { GroupOverlap } from "../../groupOverlap/base/GroupOverlap";
import { ProfessorAssignmentFindManyArgs } from "../../professorAssignment/base/ProfessorAssignmentFindManyArgs";
import { ProfessorAssignment } from "../../professorAssignment/base/ProfessorAssignment";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { WeeklyTeachingLoadFindManyArgs } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoadFindManyArgs";
import { WeeklyTeachingLoad } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoad";
import { GroupService } from "../group.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Group)
export class GroupResolverBase {
  constructor(
    protected readonly service: GroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async _groupsMeta(
    @graphql.Args() args: GroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Group])
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async groups(@graphql.Args() args: GroupFindManyArgs): Promise<Group[]> {
    return this.service.groups(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Group, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "own",
  })
  async group(
    @graphql.Args() args: GroupFindUniqueArgs
  ): Promise<Group | null> {
    const result = await this.service.group(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Group)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "create",
    possession: "any",
  })
  async createGroup(@graphql.Args() args: CreateGroupArgs): Promise<Group> {
    return await this.service.createGroup({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Group)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updateGroup(
    @graphql.Args() args: UpdateGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
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

  @graphql.Mutation(() => Group)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "delete",
    possession: "any",
  })
  async deleteGroup(
    @graphql.Args() args: DeleteGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup(args);
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
  @graphql.ResolveField(() => [GroupOverlap], { name: "groupOverlaps1" })
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "read",
    possession: "any",
  })
  async findGroupOverlaps1(
    @graphql.Parent() parent: Group,
    @graphql.Args() args: GroupOverlapFindManyArgs
  ): Promise<GroupOverlap[]> {
    const results = await this.service.findGroupOverlaps1(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [GroupOverlap], { name: "groupOverlaps2" })
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "read",
    possession: "any",
  })
  async findGroupOverlaps2(
    @graphql.Parent() parent: Group,
    @graphql.Args() args: GroupOverlapFindManyArgs
  ): Promise<GroupOverlap[]> {
    const results = await this.service.findGroupOverlaps2(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProfessorAssignment], {
    name: "professorAssignments",
  })
  @nestAccessControl.UseRoles({
    resource: "ProfessorAssignment",
    action: "read",
    possession: "any",
  })
  async findProfessorAssignments(
    @graphql.Parent() parent: Group,
    @graphql.Args() args: ProfessorAssignmentFindManyArgs
  ): Promise<ProfessorAssignment[]> {
    const results = await this.service.findProfessorAssignments(
      parent.id,
      args
    );

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
    @graphql.Parent() parent: Group,
    @graphql.Args() args: ScheduleFindManyArgs
  ): Promise<Schedule[]> {
    const results = await this.service.findSchedule(parent.id, args);

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
    @graphql.Parent() parent: Group,
    @graphql.Args() args: WeeklyTeachingLoadFindManyArgs
  ): Promise<WeeklyTeachingLoad[]> {
    const results = await this.service.findWeeklyTeachingLoads(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
