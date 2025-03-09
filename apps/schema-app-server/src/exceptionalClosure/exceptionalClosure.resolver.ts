import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExceptionalClosureResolverBase } from "./base/exceptionalClosure.resolver.base";
import { ExceptionalClosure } from "./base/ExceptionalClosure";
import { ExceptionalClosureService } from "./exceptionalClosure.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExceptionalClosure)
export class ExceptionalClosureResolver extends ExceptionalClosureResolverBase {
  constructor(
    protected readonly service: ExceptionalClosureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
