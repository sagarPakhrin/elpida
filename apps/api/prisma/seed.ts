import { faker } from '@faker-js/faker';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedProducts = async (len = 100) => {
  console.log('Seeding Products: Initiating');
  const products: Prisma.ProductCreateManyInput[] = [];
  for (let i = 0; i < len; i++) {
    const name = faker.commerce.productName();
    const description = faker.commerce.productDescription();
    products.push({
      brand: faker.company.name(),
      description: description,
      meta_description: description,
      meta_keywords: faker.random.words(5),
      name: name,
      price: parseFloat(faker.commerce.price()),
      quantity: faker.datatype.number(500),
      sku: faker.datatype.string(32),
      slug: faker.datatype.string(32),
    });
  }
  await prisma.product.createMany({
    data: products,
  });
  console.log('Seeding Products: Completed');
};
async function main() {
  console.log('Seeding...');
  await seedProducts(1000);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
