import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatGptModule } from './modules/chatgpt/chatgpt.module';

@Module({
  imports: [ChatGptModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
