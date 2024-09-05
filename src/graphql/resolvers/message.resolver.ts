import { Resolver, Query, Mutation, Subscription, Args } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { MessageType } from '../schemas/message-type.schema';
import { MessageService } from '../services/message.service';

const pubSub = new PubSub();

@Resolver(() => MessageType)
export class MessageResolver {
    constructor(private readonly messageService: MessageService) {}

    @Query(() => [MessageType])
    async getMessages() {
        return this.messageService.findAll();
    }

    @Mutation(() => MessageType)
    async addMessage(@Args('message') message: string) {
        const newMessage = this.messageService.create(message);
        console.log('Publishing message:', newMessage);
        pubSub.publish('messageAdded', { messageAdded: newMessage });
        return newMessage;
    }

    @Subscription(() => MessageType)
    messageAdded() {
        return pubSub.asyncIterator('messageAdded');
    }
}
