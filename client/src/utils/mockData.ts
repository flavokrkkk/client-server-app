import { IBrand } from "../models/IBrand";
import { IDescription } from "../models/IDescription";
import { IDevice } from "../models/IDevice";
import { IType } from "../models/IType";

export const types = <IType[]>[
  { id: 1, name: "Смартфоны" },
  { id: 2, name: "Компьютеры" },
  { id: 4, name: "Ноутбуки" },
  { id: 3, name: "Телевизоры" },
];

export const brands = <IBrand[]>[
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Xiaomi" },
  { id: 4, name: "Lenovo" },
];

export const devices = <IDevice[]>[
  {
    id: 1,
    name: "IPhone 15",
    price: 90000,
    rating: 5,
    img: "https://app-room44.ru/wp-content/uploads/2023/09/image_2023-11-09_11-07-25-600x600.png",
  },
  {
    id: 2,
    name: "IPhone 15 ",
    price: 90000,
    rating: 5,
    img: "https://app-room44.ru/wp-content/uploads/2023/09/image_2023-11-09_11-07-04-600x600.png",
  },
  {
    id: 3,
    name: "Iphone 14",
    price: 90000,
    rating: 5,
    img: "https://app-room44.ru/wp-content/uploads/2022/09/Novyi-proekt10-1.png",
  },
  {
    id: 4,
    name: "IPhone 14 Pro Max",
    price: 90000,
    rating: 5,
    img: "https://app-room44.ru/wp-content/uploads/2022/09/telefon_iphone_14_128gb_dual_sim_purple_3-1000x1000-1-600x600.jpg",
  },
  {
    id: 5,
    name: "IPhone 13 Pro Max",
    price: 90000,
    rating: 5,
    img: "https://app-room44.ru/wp-content/uploads/2022/04/apple-iphone-13-pink-1000x1000-1-600x600.jpg",
  },
];

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
