import { Module } from '@nestjs/common';
import { DiscordService } from './discord/discord.service';
import { RolesService } from './roles/roles.service';
import { PermissionsService } from './permissions/permissions.service';

@Module({
  providers: [DiscordService, RolesService, PermissionsService]
})
export class CommonModule {}
