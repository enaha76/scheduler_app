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
import { TimeSlotService } from "../timeSlot.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TimeSlotCreateInput } from "./TimeSlotCreateInput";
import { TimeSlot } from "./TimeSlot";
import { TimeSlotFindManyArgs } from "./TimeSlotFindManyArgs";
import { TimeSlotWhereUniqueInput } from "./TimeSlotWhereUniqueInput";
import { TimeSlotUpdateInput } from "./TimeSlotUpdateInput";
import { ExceptionalClosureFindManyArgs } from "../../exceptionalClosure/base/ExceptionalClosureFindManyArgs";
import { ExceptionalClosure } from "../../exceptionalClosure/base/ExceptionalClosure";
import { ExceptionalClosureWhereUniqueInput } from "../../exceptionalClosure/base/ExceptionalClosureWhereUniqueInput";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { WeeklyProfessorAvailabilityFindManyArgs } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailabilityFindManyArgs";
import { WeeklyProfessorAvailability } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailability";
import { WeeklyProfessorAvailabilityWhereUniqueInput } from "../../weeklyProfessorAvailability/base/WeeklyProfessorAvailabilityWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TimeSlotControllerBase {
  constructor(
    protected readonly service: TimeSlotService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TimeSlot })
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTimeSlot(
    @common.Body() data: TimeSlotCreateInput
  ): Promise<TimeSlot> {
    return await this.service.createTimeSlot({
      data: data,
      select: {
        dayOfWeek: true,
        endTime: true,
        id: true,
        slotIndex: true,
        startTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TimeSlot] })
  @ApiNestedQuery(TimeSlotFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async timeSlots(@common.Req() request: Request): Promise<TimeSlot[]> {
    const args = plainToClass(TimeSlotFindManyArgs, request.query);
    return this.service.timeSlots({
      ...args,
      select: {
        dayOfWeek: true,
        endTime: true,
        id: true,
        slotIndex: true,
        startTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TimeSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async timeSlot(
    @common.Param() params: TimeSlotWhereUniqueInput
  ): Promise<TimeSlot | null> {
    const result = await this.service.timeSlot({
      where: params,
      select: {
        dayOfWeek: true,
        endTime: true,
        id: true,
        slotIndex: true,
        startTime: true,
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
  @swagger.ApiOkResponse({ type: TimeSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTimeSlot(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() data: TimeSlotUpdateInput
  ): Promise<TimeSlot | null> {
    try {
      return await this.service.updateTimeSlot({
        where: params,
        data: data,
        select: {
          dayOfWeek: true,
          endTime: true,
          id: true,
          slotIndex: true,
          startTime: true,
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
  @swagger.ApiOkResponse({ type: TimeSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTimeSlot(
    @common.Param() params: TimeSlotWhereUniqueInput
  ): Promise<TimeSlot | null> {
    try {
      return await this.service.deleteTimeSlot({
        where: params,
        select: {
          dayOfWeek: true,
          endTime: true,
          id: true,
          slotIndex: true,
          startTime: true,
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
  @common.Get("/:id/exceptionalClosures")
  @ApiNestedQuery(ExceptionalClosureFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ExceptionalClosure",
    action: "read",
    possession: "any",
  })
  async findExceptionalClosures(
    @common.Req() request: Request,
    @common.Param() params: TimeSlotWhereUniqueInput
  ): Promise<ExceptionalClosure[]> {
    const query = plainToClass(ExceptionalClosureFindManyArgs, request.query);
    const results = await this.service.findExceptionalClosures(params.id, {
      ...query,
      select: {
        id: true,
        reason: true,

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

  @common.Post("/:id/exceptionalClosures")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async connectExceptionalClosures(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ExceptionalClosureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exceptionalClosures: {
        connect: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/exceptionalClosures")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async updateExceptionalClosures(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ExceptionalClosureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exceptionalClosures: {
        set: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/exceptionalClosures")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async disconnectExceptionalClosures(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ExceptionalClosureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exceptionalClosures: {
        disconnect: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: TimeSlotWhereUniqueInput
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
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async connectSchedule(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        connect: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schedule")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async updateSchedule(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        set: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schedule")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async disconnectSchedule(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        disconnect: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/weeklyProfessorAvailability")
  @ApiNestedQuery(WeeklyProfessorAvailabilityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WeeklyProfessorAvailability",
    action: "read",
    possession: "any",
  })
  async findWeeklyProfessorAvailability(
    @common.Req() request: Request,
    @common.Param() params: TimeSlotWhereUniqueInput
  ): Promise<WeeklyProfessorAvailability[]> {
    const query = plainToClass(
      WeeklyProfessorAvailabilityFindManyArgs,
      request.query
    );
    const results = await this.service.findWeeklyProfessorAvailability(
      params.id,
      {
        ...query,
        select: {
          id: true,
          isAvailable: true,

          professor: {
            select: {
              id: true,
            },
          },

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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/weeklyProfessorAvailability")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async connectWeeklyProfessorAvailability(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: WeeklyProfessorAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyProfessorAvailability: {
        connect: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/weeklyProfessorAvailability")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async updateWeeklyProfessorAvailability(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: WeeklyProfessorAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyProfessorAvailability: {
        set: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/weeklyProfessorAvailability")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async disconnectWeeklyProfessorAvailability(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: WeeklyProfessorAvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weeklyProfessorAvailability: {
        disconnect: body,
      },
    };
    await this.service.updateTimeSlot({
      where: params,
      data,
      select: { id: true },
    });
  }
}
