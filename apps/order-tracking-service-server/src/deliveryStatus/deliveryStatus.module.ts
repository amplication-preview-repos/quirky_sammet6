import { Module } from "@nestjs/common";
import { DeliveryStatusModuleBase } from "./base/deliveryStatus.module.base";
import { DeliveryStatusService } from "./deliveryStatus.service";
import { DeliveryStatusController } from "./deliveryStatus.controller";
import { DeliveryStatusResolver } from "./deliveryStatus.resolver";

@Module({
  imports: [DeliveryStatusModuleBase],
  controllers: [DeliveryStatusController],
  providers: [DeliveryStatusService, DeliveryStatusResolver],
  exports: [DeliveryStatusService],
})
export class DeliveryStatusModule {}
