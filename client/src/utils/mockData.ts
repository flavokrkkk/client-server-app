import { IDescription } from "../models/IDescription";
import { IDevice } from "../models/IDevice";

export const device = <IDevice>{
  id: 1,
  name: "IPhone 15",
  price: 90000,
  rating: 5,
  img: "https://app-room44.ru/wp-content/uploads/2023/09/image_2023-11-09_11-07-25-600x600.png",
};

export const description = <IDescription[]>[
  { id: 1, title: "Оперативная память", description: "128гб" },
  { id: 2, title: "Оперативная память", description: "128гб" },
  { id: 3, title: "Оперативная память", description: "128гб" },
  { id: 4, title: "Оперативная память", description: "128гб" },
];
