import { DeliveryStatus as TDeliveryStatus } from "../api/deliveryStatus/DeliveryStatus";

export const DELIVERYSTATUS_TITLE_FIELD = "statusName";

export const DeliveryStatusTitle = (record: TDeliveryStatus): string => {
  return record.statusName?.toString() || String(record.id);
};
