import { Body, Controller, Headers, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

// Simple DTO typing for flexibility while exploring payloads
type AnyRecord = Record<string, any>;

@Controller('webhooks/wise')
export class WiseWebhookController {
  // Wise sends POST requests; respond 200 to acknowledge receipt
  @Post()
  @HttpCode(200)
  handleWiseWebhook(
    @Body() body: AnyRecord,
    @Headers() headers: AnyRecord,
    @Req() req: Request & { rawBody?: string },
  ) {
    // For initial exploration, log headers and body
    // In production, replace logs with structured logging and signature verification.
    // eslint-disable-next-line no-console
    console.log('[Wise Webhook] headers:', headers);
    // eslint-disable-next-line no-console
    console.log('[Wise Webhook] raw:', req.rawBody ?? '<no raw body>');
    // eslint-disable-next-line no-console
    console.log('[Wise Webhook] json:', body);

    // Return minimal acknowledgment per Wise requirement
    return { ok: true };
  }
}
