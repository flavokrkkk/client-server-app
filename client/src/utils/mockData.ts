import { IBrand } from "../models/IBrand";
import { IDevice } from "../models/IDevice";
import { IType } from "../models/IType";

export const types = <IType[]>[
  { id: 1, name: "Смартфоны" },
  { id: 2, name: "Компьютеры" },
];

export const brands = <IBrand[]>[
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
];

export const devices = <IDevice[]>[
  {
    id: 1,
    name: "Iphone 14",
    price: 90000,
    rating: 5,
    img: "https://avatars.mds.yandex.net/get-marketpic/6953693/pic55bc87b7a5f32f933c156730f40b56e1/orig",
  },
  {
    id: 2,
    name: "Iphone 14",
    price: 90000,
    rating: 5,
    img: "https://avatars.mds.yandex.net/get-marketpic/6953693/pic55bc87b7a5f32f933c156730f40b56e1/orig",
  },
  {
    id: 3,
    name: "Iphone 14",
    price: 90000,
    rating: 5,
    img: "https://avatars.mds.yandex.net/get-marketpic/6953693/pic55bc87b7a5f32f933c156730f40b56e1/orig",
  },
  {
    id: 4,
    name: "Iphone 14",
    price: 90000,
    rating: 5,
    img: "https://avatars.mds.yandex.net/get-marketpic/6953693/pic55bc87b7a5f32f933c156730f40b56e1/orig",
  },
  {
    id: 5,
    name: "Iphone 14",
    price: 90000,
    rating: 5,
    img: "https://avatars.mds.yandex.net/get-marketpic/6953693/pic55bc87b7a5f32f933c156730f40b56e1/orig",
  },
];
