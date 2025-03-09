import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeSlotModuleBase } from "./base/timeSlot.module.base";
import { TimeSlotService } from "./timeSlot.service";
import { TimeSlotController } from "./timeSlot.controller";
import { TimeSlotResolver } from "./timeSlot.resolver";

@Module({
  imports: [TimeSlotModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeSlotController],
  providers: [TimeSlotService, TimeSlotResolver],
  exports: [TimeSlotService],
})
export class TimeSlotModule {}
