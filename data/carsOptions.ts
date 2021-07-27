import { CarOptions } from "types";

// **** Chose .ts over .json to keep type-safety ****

const carsOptions: CarOptions[] = [
  {
    model: {
      name: "BMW i3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
      basePrice: 42_400,
      imageUrl:
        "https://codyhouse.co/demo/product-builder/img/product01_col01.jpg",
    },
    accessories: [
      { name: "BMW Charging Station", price: 1_080 },
      { name: "BMW Maintenance Program Upgrade", price: 1_895 },
      { name: "1 Year BMW Maintenance Program Upgrade", price: 975 },
    ],
    colors: [
      {
        name: "white",
        price: 0,
        hexCode: "#FFFFFF",
        imageUrl:
          "https://codyhouse.co/demo/product-builder/img/product01_col01.jpg",
      },
      {
        name: "mineral grey",
        price: 550,
        hexCode: "#303539",
        imageUrl:
          "https://codyhouse.co/demo/product-builder/img/product01_col02.jpg",
      },
      {
        name: "orange metallic",
        price: 550,
        hexCode: "#CF5A16",
        imageUrl:
          "https://codyhouse.co/demo/product-builder/img/product01_col03.jpg",
      },
    ],
  },
  {
    model: {
      name: "BMW i8",
      basePrice: 140_700,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
      imageUrl:
        "https://codyhouse.co/demo/product-builder/img/product02_col01.jpg",
    },
    accessories: [
      { name: "BMW Laserlight", price: 6_300 },
      { name: "BMW Charging Station", price: 1_080 },
      { name: "BMW Maintenance Program Upgrade", price: 1_895 },
      { name: "1 Year BMW Maintenance Program Upgrade", price: 975 },
    ],
    colors: [
      {
        name: "grey metallic",
        price: 0,
        hexCode: "#303539",
        imageUrl:
          "https://codyhouse.co/demo/product-builder/img/product02_col01.jpg",
      },
      {
        name: "white perl metallic",
        price: 1_800,
        hexCode: "#D1D1D1",
        imageUrl:
          "https://codyhouse.co/demo/product-builder/img/product02_col02.jpg",
      },
    ],
  },
];

export default carsOptions;
