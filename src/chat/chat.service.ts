import { Injectable } from '@nestjs/common';
import { ChatGptService } from './modules/chatgpt/chatgpt.service';

@Injectable()
export class ChatService {
  constructor(private readonly chatGptService: ChatGptService) {}
  create(prompt: string) {
    const apiKey = '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';
    return this.chatGptService.generateText({ prompt, apiKey });
  }
}
