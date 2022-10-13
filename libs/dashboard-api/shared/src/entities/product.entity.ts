import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from './category.entity';

@ObjectType()
export class ProductCategories {
  @Field(() => Category)
  category: Category;
}

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [ProductCategories])
  product_categories: ProductCategories[];
}
