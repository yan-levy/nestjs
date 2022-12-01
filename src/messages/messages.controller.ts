import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from './IMessage';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messageService.findById(+params.id);
  }

  @Post()
  create(@Body() message: Message) {
    return this.messageService.create(message);
  }
}
