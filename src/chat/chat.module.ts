import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { GeminiModule } from 'src/modules/gemini/gemini.module';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
  imports: [GeminiModule]
})
export class ChatModule {}
