import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CursorIdInput {
  @Field({ nullable: true })
  id?: number;
}

@ArgsType()
export class FindProductArgs {
  @Field({ nullable: true, defaultValue: 20 })
  take?: number;

  @Field(() => Number, { nullable: true })
  skip?: number;
}
