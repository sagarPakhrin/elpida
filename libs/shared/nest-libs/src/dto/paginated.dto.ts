import { Field, InterfaceType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginationMetaData {
  @Field(() => Number)
  total: number;

  @Field(() => Number)
  itemsPerPage: number;
}

@InterfaceType()
export abstract class Paginated {
  @Field(() => PaginationMetaData)
  meta: PaginationMetaData;
}
