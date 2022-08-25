import { IProduct } from "../types";

const findItemInArray = (array: IProduct[], item: IProduct) =>
  array
    .map(function (x: any) {
      return x.id;
    })
    .indexOf(item.id);

export { findItemInArray };
