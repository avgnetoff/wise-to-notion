import { Module } from '@nestjs/common';
import { WiseModule } from './wise/wise.module';

@Module({
  imports: [WiseModule],
})
export class AppModule {}
