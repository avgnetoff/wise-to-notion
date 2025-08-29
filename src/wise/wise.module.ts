import { Module } from '@nestjs/common';
import { WiseWebhookController } from './wise.webhook.controller.js';

@Module({
  controllers: [WiseWebhookController],
})
export class WiseModule {}
