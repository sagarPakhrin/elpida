import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  description: string;

  @Field()
  meta_keywords: string;

  @Field()
  meta_description: string;
}
