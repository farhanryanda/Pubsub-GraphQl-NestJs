import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MessageResolver } from './resolvers/message.resolver';
import { MessageService } from './services/message.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/graphql/graphql.schema.gql'),
            subscriptions: {
                'graphql-ws': true, 
            },
            path: '/graphql-api'
        }),
    ],
    providers: [MessageResolver, MessageService],
})
export class GraphQLServerModule {}
