import * as graphql from "@nestjs/graphql";
import { DeliveryStatusResolverBase } from "./base/deliveryStatus.resolver.base";
import { DeliveryStatus } from "./base/DeliveryStatus";
import { DeliveryStatusService } from "./deliveryStatus.service";

@graphql.Resolver(() => DeliveryStatus)
export class DeliveryStatusResolver extends DeliveryStatusResolverBase {
  constructor(protected readonly service: DeliveryStatusService) {
    super(service);
  }
}
