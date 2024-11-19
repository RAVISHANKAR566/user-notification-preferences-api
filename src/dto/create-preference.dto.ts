import {
  IsString,
  IsEmail,
  IsEnum,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Import Swagger decorators
import { Type } from 'class-transformer';

class NotificationChannelsDto {
  @ApiProperty({ description: 'Whether email notifications are enabled.' })
  @IsBoolean()
  email: boolean;

  @ApiProperty({ description: 'Whether SMS notifications are enabled.' })
  @IsBoolean()
  sms: boolean;

  @ApiProperty({ description: 'Whether push notifications are enabled.' })
  @IsBoolean()
  push: boolean;
}

class PreferencesDto {
  @ApiProperty({ description: 'Whether marketing notifications are enabled.' })
  @IsBoolean()
  marketing: boolean;

  @ApiProperty({ description: 'Whether newsletter notifications are enabled.' })
  @IsBoolean()
  newsletter: boolean;

  @ApiProperty({ description: 'Whether update notifications are enabled.' })
  @IsBoolean()
  updates: boolean;

  @ApiProperty({
    enum: ['daily', 'weekly', 'monthly', 'never'],
    description: 'Notification frequency.',
  })
  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency: 'daily' | 'weekly' | 'monthly' | 'never';

  @ValidateNested()
  @Type(() => NotificationChannelsDto)
  channels: NotificationChannelsDto;
}

export class CreatePreferenceDto {
  @ApiProperty({ description: 'User ID' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: PreferencesDto,
    description: 'User notification preferences',
  })
  @ValidateNested()
  @Type(() => PreferencesDto)
  preferences: PreferencesDto;

  @ApiProperty({ description: 'User timezone' })
  @IsString()
  timezone: string;
}
