import { faker } from '@faker-js/faker';

export const generateProducts = (len = 1) => {
  return Array.from(Array(len)).map(() => ({
    id: faker.random.numeric(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
  }));
};
