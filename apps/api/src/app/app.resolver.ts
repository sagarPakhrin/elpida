import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  healthCheck() {
    return "I'm ok!!";
  }
}
