// @flow
export type Order = {
  id: string,
  no: number,
  warehouse: ?Warehouse
};

export type Warehouse = {
  id: ?string,
  name: ?string
};
