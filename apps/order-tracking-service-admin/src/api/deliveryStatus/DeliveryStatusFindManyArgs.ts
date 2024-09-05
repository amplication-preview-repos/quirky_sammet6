import { DeliveryStatusWhereInput } from "./DeliveryStatusWhereInput";
import { DeliveryStatusOrderByInput } from "./DeliveryStatusOrderByInput";

export type DeliveryStatusFindManyArgs = {
  where?: DeliveryStatusWhereInput;
  orderBy?: Array<DeliveryStatusOrderByInput>;
  skip?: number;
  take?: number;
};
