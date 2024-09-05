/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DeliveryStatus as PrismaDeliveryStatus } from "@prisma/client";

export class DeliveryStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliveryStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryStatus.count(args);
  }

  async deliveryStatuses(
    args: Prisma.DeliveryStatusFindManyArgs
  ): Promise<PrismaDeliveryStatus[]> {
    return this.prisma.deliveryStatus.findMany(args);
  }
  async deliveryStatus(
    args: Prisma.DeliveryStatusFindUniqueArgs
  ): Promise<PrismaDeliveryStatus | null> {
    return this.prisma.deliveryStatus.findUnique(args);
  }
  async createDeliveryStatus(
    args: Prisma.DeliveryStatusCreateArgs
  ): Promise<PrismaDeliveryStatus> {
    return this.prisma.deliveryStatus.create(args);
  }
  async updateDeliveryStatus(
    args: Prisma.DeliveryStatusUpdateArgs
  ): Promise<PrismaDeliveryStatus> {
    return this.prisma.deliveryStatus.update(args);
  }
  async deleteDeliveryStatus(
    args: Prisma.DeliveryStatusDeleteArgs
  ): Promise<PrismaDeliveryStatus> {
    return this.prisma.deliveryStatus.delete(args);
  }
}
