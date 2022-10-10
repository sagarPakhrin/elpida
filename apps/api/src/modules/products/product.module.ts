import { PrismaService, ProductService } from '@elpida/dashboard-api/shared';
import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [],
  providers: [ProductResolver, ProductService, PrismaService],
})
export class ProductModule {}
