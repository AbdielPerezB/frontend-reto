import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { GeminiService } from 'src/modules/gemini/gemini.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly geminiService: GeminiService
  ){}

  async chatWithGemini(chatDto: CreateChatDto){
    const {message_from_client} = chatDto;
    const messageIA = await this.geminiService.simpleChat(message_from_client);
    return {
      message_from_server: messageIA
    }

  }
}
