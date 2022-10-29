import { Paginated, PaginationMetaData } from '@elpida/shared/nest-libs';
import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from '../entities';

@ObjectType({
  implements: () => Paginated,
})
export class PaginatedProducts implements Paginated {
  meta: PaginationMetaData;

  @Field(() => [Product])
  data: Product[];
}
