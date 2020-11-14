import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AccountModule, CharacterModule, TypeOrmModule.forRoot({
    name: process.env.NODE_ENV || 'dev'
  }), CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
