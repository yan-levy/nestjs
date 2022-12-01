import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Message } from './IMessage';
import { MessageDTO } from './MessageDTO';
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
    return this.messageService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDTO: MessageDTO) {
    return this.messageService.create(messageDTO);
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messageService.update(+params.id, message);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messageService.delete(+params.id);
  }
}
