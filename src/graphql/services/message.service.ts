import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
    private data = [{ id: 1, message: 'Hello World!' }];

    findAll() {
        return this.data;
    }

    create(message: string) {
        const newMessage = { id: this.data.length + 1, message };
        this.data.push(newMessage);
        return newMessage;
    }
}
