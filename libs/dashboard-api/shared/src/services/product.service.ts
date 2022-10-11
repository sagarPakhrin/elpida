import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne<T extends Prisma.ProductFindUniqueOrThrowArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindUniqueOrThrowArgs>
  ) {
    return this.prisma.product.findUniqueOrThrow(args);
  }

  async findMany<T extends Prisma.ProductFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ) {
    return this.prisma.product.findMany(args);
  }

  async filterProducts<T extends Prisma.ProductFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ) {
    const total = await this.prisma.product.count();
    const data = await this.prisma.product.findMany(args);

    return {
      data,
      meta: {
        total,
        itemsPerPage: args.take,
      },
    };
  }
}
