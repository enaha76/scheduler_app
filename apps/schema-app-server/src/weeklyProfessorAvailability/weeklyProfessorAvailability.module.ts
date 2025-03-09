import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeeklyProfessorAvailabilityModuleBase } from "./base/weeklyProfessorAvailability.module.base";
import { WeeklyProfessorAvailabilityService } from "./weeklyProfessorAvailability.service";
import { WeeklyProfessorAvailabilityController } from "./weeklyProfessorAvailability.controller";
import { WeeklyProfessorAvailabilityResolver } from "./weeklyProfessorAvailability.resolver";

@Module({
  imports: [
    WeeklyProfessorAvailabilityModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [WeeklyProfessorAvailabilityController],
  providers: [
    WeeklyProfessorAvailabilityService,
    WeeklyProfessorAvailabilityResolver,
  ],
  exports: [WeeklyProfessorAvailabilityService],
})
export class WeeklyProfessorAvailabilityModule {}
