import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const DeliveryStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="statusName"
          label="statusName"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
