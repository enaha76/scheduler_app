import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfessorAssignmentModuleBase } from "./base/professorAssignment.module.base";
import { ProfessorAssignmentService } from "./professorAssignment.service";
import { ProfessorAssignmentController } from "./professorAssignment.controller";
import { ProfessorAssignmentResolver } from "./professorAssignment.resolver";

@Module({
  imports: [ProfessorAssignmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfessorAssignmentController],
  providers: [ProfessorAssignmentService, ProfessorAssignmentResolver],
  exports: [ProfessorAssignmentService],
})
export class ProfessorAssignmentModule {}
