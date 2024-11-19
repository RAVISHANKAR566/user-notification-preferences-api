import { IsString, IsEnum, IsObject } from 'class-validator';

export class SendNotificationDto {
  @IsString()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: string;

  @IsEnum(['email', 'sms', 'push'])
  channel: string;

  @IsObject()
  content: Record<string, any>;
}
