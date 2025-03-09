import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AcademicWeekModuleBase } from "./base/academicWeek.module.base";
import { AcademicWeekService } from "./academicWeek.service";
import { AcademicWeekController } from "./academicWeek.controller";
import { AcademicWeekResolver } from "./academicWeek.resolver";

@Module({
  imports: [AcademicWeekModuleBase, forwardRef(() => AuthModule)],
  controllers: [AcademicWeekController],
  providers: [AcademicWeekService, AcademicWeekResolver],
  exports: [AcademicWeekService],
})
export class AcademicWeekModule {}
