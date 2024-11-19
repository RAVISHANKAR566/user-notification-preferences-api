import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api/notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('send')
  async sendNotification(
    @Body()
    body: {
      userId: string;
      type: string;
      channel: string;
      content: any;
    },
  ) {
    return this.notificationService.sendNotification(
      body.userId,
      body.type,
      body.channel,
      body.content,
    );
  }

  @Get(':userId/logs')
  async getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationService.getNotificationLogs(userId);
  }

  @Get('stats')
  async getNotificationStats() {
    return this.notificationService.getNotificationStats();
  }
}
