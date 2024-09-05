import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MessageType {
  @Field(() => Int)
  id: number;

  @Field()
  message: string;
}