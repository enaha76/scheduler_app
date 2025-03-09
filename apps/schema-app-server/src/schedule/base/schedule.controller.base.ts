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
import { ScheduleService } from "../schedule.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScheduleCreateInput } from "./ScheduleCreateInput";
import { Schedule } from "./Schedule";
import { ScheduleFindManyArgs } from "./ScheduleFindManyArgs";
import { ScheduleWhereUniqueInput } from "./ScheduleWhereUniqueInput";
import { ScheduleUpdateInput } from "./ScheduleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScheduleControllerBase {
  constructor(
    protected readonly service: ScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Schedule })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSchedule(
    @common.Body() data: ScheduleCreateInput
  ): Promise<Schedule> {
    return await this.service.createSchedule({
      data: {
        ...data,

        course: {
          connect: data.course,
        },

        group: {
          connect: data.group,
        },

        professor: {
          connect: data.professor,
        },

        room: {
          connect: data.room,
        },

        timeSlot: {
          connect: data.timeSlot,
        },

        week: {
          connect: data.week,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Schedule] })
  @ApiNestedQuery(ScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async schedules(@common.Req() request: Request): Promise<Schedule[]> {
    const args = plainToClass(ScheduleFindManyArgs, request.query);
    return this.service.schedules({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async schedule(
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Schedule | null> {
    const result = await this.service.schedule({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSchedule(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() data: ScheduleUpdateInput
  ): Promise<Schedule | null> {
    try {
      return await this.service.updateSchedule({
        where: params,
        data: {
          ...data,

          course: {
            connect: data.course,
          },

          group: {
            connect: data.group,
          },

          professor: {
            connect: data.professor,
          },

          room: {
            connect: data.room,
          },

          timeSlot: {
            connect: data.timeSlot,
          },

          week: {
            connect: data.week,
          },
        },
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
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSchedule(
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Schedule | null> {
    try {
      return await this.service.deleteSchedule({
        where: params,
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
