import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  chatWithGemini(chatDto: CreateChatDto){
    return chatDto;

  }
}
