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
import { RoomService } from "../room.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RoomCreateInput } from "./RoomCreateInput";
import { Room } from "./Room";
import { RoomFindManyArgs } from "./RoomFindManyArgs";
import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";
import { RoomUpdateInput } from "./RoomUpdateInput";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RoomControllerBase {
  constructor(
    protected readonly service: RoomService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Room })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRoom(@common.Body() data: RoomCreateInput): Promise<Room> {
    return await this.service.createRoom({
      data: data,
      select: {
        capacity: true,
        id: true,
        name: true,
        typeField: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Room] })
  @ApiNestedQuery(RoomFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rooms(@common.Req() request: Request): Promise<Room[]> {
    const args = plainToClass(RoomFindManyArgs, request.query);
    return this.service.rooms({
      ...args,
      select: {
        capacity: true,
        id: true,
        name: true,
        typeField: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async room(
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Room | null> {
    const result = await this.service.room({
      where: params,
      select: {
        capacity: true,
        id: true,
        name: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRoom(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() data: RoomUpdateInput
  ): Promise<Room | null> {
    try {
      return await this.service.updateRoom({
        where: params,
        data: data,
        select: {
          capacity: true,
          id: true,
          name: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRoom(
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Room | null> {
    try {
      return await this.service.deleteRoom({
        where: params,
        select: {
          capacity: true,
          id: true,
          name: true,
          typeField: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/schedule")
  @ApiNestedQuery(ScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "any",
  })
  async findSchedule(
    @common.Req() request: Request,
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Schedule[]> {
    const query = plainToClass(ScheduleFindManyArgs, request.query);
    const results = await this.service.findSchedule(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,

        professor: {
          select: {
            id: true,
          },
        },

        room: {
          select: {
            id: true,
          },
        },

        teachingType: true,

        timeSlot: {
          select: {
            id: true,
          },
        },

        week: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/schedule")
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "update",
    possession: "any",
  })
  async connectSchedule(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        connect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schedule")
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "update",
    possession: "any",
  })
  async updateSchedule(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        set: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schedule")
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "update",
    possession: "any",
  })
  async disconnectSchedule(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        disconnect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}
