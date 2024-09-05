import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryStatusServiceBase } from "./base/deliveryStatus.service.base";

@Injectable()
export class DeliveryStatusService extends DeliveryStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
