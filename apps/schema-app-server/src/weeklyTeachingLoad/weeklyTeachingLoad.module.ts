import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeeklyTeachingLoadModuleBase } from "./base/weeklyTeachingLoad.module.base";
import { WeeklyTeachingLoadService } from "./weeklyTeachingLoad.service";
import { WeeklyTeachingLoadController } from "./weeklyTeachingLoad.controller";
import { WeeklyTeachingLoadResolver } from "./weeklyTeachingLoad.resolver";

@Module({
  imports: [WeeklyTeachingLoadModuleBase, forwardRef(() => AuthModule)],
  controllers: [WeeklyTeachingLoadController],
  providers: [WeeklyTeachingLoadService, WeeklyTeachingLoadResolver],
  exports: [WeeklyTeachingLoadService],
})
export class WeeklyTeachingLoadModule {}
