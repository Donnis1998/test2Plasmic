const defaultColumnsGridControl = [
  { field: "ProductID", width: 250 },
  { field: "ProductName", width: 250 },
  { field: "QuantityPerUnit", width: 250 },
  { field: "PurchaseDate", width: 250 },
  { field: "UnitPrice", width: 250 },
  { field: "UnitsInStock", width: 250 },
];

const defaultDataGridControl = [
  {
    ProductID: 10250,
    ProductName: "Sandia",
    QuantityPerUnit: 12,
    PurchaseDate: "2022-07-1",
    UnitPrice: 30.5,
    UnitsInStock: 20,
  },
  {
    ProductID: 10251,
    ProductName: "Manzana",
    QuantityPerUnit: 20,
    PurchaseDate: "2022-07-2",
    UnitPrice: 15.5,
    UnitsInStock: 25,
  },
];

export { defaultColumnsGridControl, defaultDataGridControl };
