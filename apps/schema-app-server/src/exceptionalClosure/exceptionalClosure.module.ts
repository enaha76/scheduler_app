import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExceptionalClosureModuleBase } from "./base/exceptionalClosure.module.base";
import { ExceptionalClosureService } from "./exceptionalClosure.service";
import { ExceptionalClosureController } from "./exceptionalClosure.controller";
import { ExceptionalClosureResolver } from "./exceptionalClosure.resolver";

@Module({
  imports: [ExceptionalClosureModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExceptionalClosureController],
  providers: [ExceptionalClosureService, ExceptionalClosureResolver],
  exports: [ExceptionalClosureService],
})
export class ExceptionalClosureModule {}
