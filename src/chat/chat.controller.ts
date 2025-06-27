import { Body, Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  chatWithGemini(@Body() chatDto: CreateChatDto) {
    return this.chatService.chatWithGemini(chatDto);
  }
}
