import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfessorModuleBase } from "./base/professor.module.base";
import { ProfessorService } from "./professor.service";
import { ProfessorController } from "./professor.controller";
import { ProfessorResolver } from "./professor.resolver";

@Module({
  imports: [ProfessorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfessorController],
  providers: [ProfessorService, ProfessorResolver],
  exports: [ProfessorService],
})
export class ProfessorModule {}
