import { Model } from 'mongoose';
import { NotificationLog } from 'src/schemas/notification-log.schema';
export declare class NotificationService {
    private notificationLogModel;
    constructor(notificationLogModel: Model<NotificationLog>);
    sendNotification(userId: string, type: string, channel: string, content: any): Promise<import("mongoose").Document<unknown, {}, NotificationLog> & NotificationLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getNotificationLogs(userId: string): Promise<(import("mongoose").Document<unknown, {}, NotificationLog> & NotificationLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getNotificationStats(): Promise<any[]>;
}
