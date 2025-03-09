import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroupOverlapModuleBase } from "./base/groupOverlap.module.base";
import { GroupOverlapService } from "./groupOverlap.service";
import { GroupOverlapController } from "./groupOverlap.controller";
import { GroupOverlapResolver } from "./groupOverlap.resolver";

@Module({
  imports: [GroupOverlapModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroupOverlapController],
  providers: [GroupOverlapService, GroupOverlapResolver],
  exports: [GroupOverlapService],
})
export class GroupOverlapModule {}
