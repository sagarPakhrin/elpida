import { Product, ProductService } from '@elpida/dashboard-api/shared';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Query(() => [Product])
  products() {
    return this.service.findMany();
  }
}
