import { Module } from '@nestjs/common';
import { PrismaService } from '../services';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DashboardApiSharedModule {}
