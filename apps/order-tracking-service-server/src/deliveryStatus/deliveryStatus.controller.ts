import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryStatusService } from "./deliveryStatus.service";
import { DeliveryStatusControllerBase } from "./base/deliveryStatus.controller.base";

@swagger.ApiTags("deliveryStatuses")
@common.Controller("deliveryStatuses")
export class DeliveryStatusController extends DeliveryStatusControllerBase {
  constructor(protected readonly service: DeliveryStatusService) {
    super(service);
  }
}
