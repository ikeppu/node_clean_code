const { Product } = require("../../entities");

module.exports = (dependecies) => {
  const { productRepository } = dependecies;

  if (!productRepository) {
    throw new Error("The product repository should be exist in dependicies");
  }

  const execute = ({ name, desc, images, price, color, meta }) => {
    const product = new Product({ name, desc, images, price, color, meta });

    return productRepository.add(product);
  };

  return { execute };
};
