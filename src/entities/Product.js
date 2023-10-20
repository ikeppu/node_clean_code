module.exports.Product = class Product {
  constructor({
    id,
    name = null,
    desc = null,
    images = [],
    price = 0,
    color = null,
    meta,
  }) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.images = images;
    this.price = price;
    this.color = color;
    this.meta = meta;
  }
};
