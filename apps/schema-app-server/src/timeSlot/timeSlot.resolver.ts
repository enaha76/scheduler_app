import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TimeSlotResolverBase } from "./base/timeSlot.resolver.base";
import { TimeSlot } from "./base/TimeSlot";
import { TimeSlotService } from "./timeSlot.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TimeSlot)
export class TimeSlotResolver extends TimeSlotResolverBase {
  constructor(
    protected readonly service: TimeSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
