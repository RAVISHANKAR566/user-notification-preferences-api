import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from 'src/schemas/notification-log.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(NotificationLog.name)
    private notificationLogModel: Model<NotificationLog>,
  ) {}

  async sendNotification(
    userId: string,
    type: string,
    channel: string,
    content: any,
  ) {
    // Simulate sending notification (e.g., via email, SMS, etc.)
    const notificationLog = new this.notificationLogModel({
      userId,
      type,
      channel,
      metadata: content,
      status: 'sent', // Simulate success
      sentAt: new Date(),
    });
    await notificationLog.save();
    return notificationLog;
  }

  async getNotificationLogs(userId: string) {
    return this.notificationLogModel.find({ userId });
  }

  async getNotificationStats() {
    // Get stats such as number of sent/failed notifications
    return this.notificationLogModel.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
  }
}
