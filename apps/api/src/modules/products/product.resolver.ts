import {
  FindProductArgs,
  PaginatedProducts,
  ProductService,
} from '@elpida/dashboard-api/shared';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Query(() => PaginatedProducts)
  products(@Args() args?: FindProductArgs) {
    return this.service.filterProducts(args);
  }
}
