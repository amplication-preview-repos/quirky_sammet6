import { SortOrder } from "../../util/SortOrder";

export type DeliveryStatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  statusName?: SortOrder;
  updatedAt?: SortOrder;
};
