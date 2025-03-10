/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GroupOverlapService } from "../groupOverlap.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GroupOverlapCreateInput } from "./GroupOverlapCreateInput";
import { GroupOverlap } from "./GroupOverlap";
import { GroupOverlapFindManyArgs } from "./GroupOverlapFindManyArgs";
import { GroupOverlapWhereUniqueInput } from "./GroupOverlapWhereUniqueInput";
import { GroupOverlapUpdateInput } from "./GroupOverlapUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GroupOverlapControllerBase {
  constructor(
    protected readonly service: GroupOverlapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GroupOverlap })
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGroupOverlap(
    @common.Body() data: GroupOverlapCreateInput
  ): Promise<GroupOverlap> {
    return await this.service.createGroupOverlap({
      data: {
        ...data,

        group1: {
          connect: data.group1,
        },

        group2: {
          connect: data.group2,
        },
      },
      select: {
        canOverlap: true,

        group1: {
          select: {
            id: true,
          },
        },

        group2: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GroupOverlap] })
  @ApiNestedQuery(GroupOverlapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async groupOverlaps(@common.Req() request: Request): Promise<GroupOverlap[]> {
    const args = plainToClass(GroupOverlapFindManyArgs, request.query);
    return this.service.groupOverlaps({
      ...args,
      select: {
        canOverlap: true,

        group1: {
          select: {
            id: true,
          },
        },

        group2: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GroupOverlap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async groupOverlap(
    @common.Param() params: GroupOverlapWhereUniqueInput
  ): Promise<GroupOverlap | null> {
    const result = await this.service.groupOverlap({
      where: params,
      select: {
        canOverlap: true,

        group1: {
          select: {
            id: true,
          },
        },

        group2: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GroupOverlap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGroupOverlap(
    @common.Param() params: GroupOverlapWhereUniqueInput,
    @common.Body() data: GroupOverlapUpdateInput
  ): Promise<GroupOverlap | null> {
    try {
      return await this.service.updateGroupOverlap({
        where: params,
        data: {
          ...data,

          group1: {
            connect: data.group1,
          },

          group2: {
            connect: data.group2,
          },
        },
        select: {
          canOverlap: true,

          group1: {
            select: {
              id: true,
            },
          },

          group2: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GroupOverlap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GroupOverlap",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGroupOverlap(
    @common.Param() params: GroupOverlapWhereUniqueInput
  ): Promise<GroupOverlap | null> {
    try {
      return await this.service.deleteGroupOverlap({
        where: params,
        select: {
          canOverlap: true,

          group1: {
            select: {
              id: true,
            },
          },

          group2: {
            select: {
              id: true,
            },
          },

          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
