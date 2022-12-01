import { Injectable } from '@nestjs/common';
import { Message } from './IMessage';
import { MessageDTO } from './MessageDTO';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  async findById(id: number) {
    const message = this.messages.find((msg) => msg.id === id);

    if (!message) {
      throw Error(`Mensagem com o ID '${id}' não encontrada`);
    }

    return message;
  }

  create(messageDTO: MessageDTO) {
    const id = this.messages.length + 1;
    const message: Message = {
      id,
      ...messageDTO,
    };
    this.messages.push(message);
    return message;
  }

  update(id: number, message: Message) {
    const index = this.messages.findIndex(
      (message: Message) => message.id === id,
    );

    this.messages[index] = message;

    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((messages) => messages.id === id);

    delete this.messages[index];
  }
}
