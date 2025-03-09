/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Group as PrismaGroup,
  GroupOverlap as PrismaGroupOverlap,
  ProfessorAssignment as PrismaProfessorAssignment,
  Schedule as PrismaSchedule,
  WeeklyTeachingLoad as PrismaWeeklyTeachingLoad,
} from "@prisma/client";

export class GroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GroupCountArgs, "select">): Promise<number> {
    return this.prisma.group.count(args);
  }

  async groups(args: Prisma.GroupFindManyArgs): Promise<PrismaGroup[]> {
    return this.prisma.group.findMany(args);
  }
  async group(args: Prisma.GroupFindUniqueArgs): Promise<PrismaGroup | null> {
    return this.prisma.group.findUnique(args);
  }
  async createGroup(args: Prisma.GroupCreateArgs): Promise<PrismaGroup> {
    return this.prisma.group.create(args);
  }
  async updateGroup(args: Prisma.GroupUpdateArgs): Promise<PrismaGroup> {
    return this.prisma.group.update(args);
  }
  async deleteGroup(args: Prisma.GroupDeleteArgs): Promise<PrismaGroup> {
    return this.prisma.group.delete(args);
  }

  async findGroupOverlaps1(
    parentId: number,
    args: Prisma.GroupOverlapFindManyArgs
  ): Promise<PrismaGroupOverlap[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .groupOverlaps1(args);
  }

  async findGroupOverlaps2(
    parentId: number,
    args: Prisma.GroupOverlapFindManyArgs
  ): Promise<PrismaGroupOverlap[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .groupOverlaps2(args);
  }

  async findProfessorAssignments(
    parentId: number,
    args: Prisma.ProfessorAssignmentFindManyArgs
  ): Promise<PrismaProfessorAssignment[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .professorAssignments(args);
  }

  async findSchedule(
    parentId: number,
    args: Prisma.ScheduleFindManyArgs
  ): Promise<PrismaSchedule[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .schedule(args);
  }

  async findWeeklyTeachingLoads(
    parentId: number,
    args: Prisma.WeeklyTeachingLoadFindManyArgs
  ): Promise<PrismaWeeklyTeachingLoad[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .weeklyTeachingLoads(args);
  }
}
