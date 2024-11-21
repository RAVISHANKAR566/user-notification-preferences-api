import { NotificationService } from './notification.service';
export declare class NotificationController {
    private notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(body: {
        userId: string;
        type: string;
        channel: string;
        content: any;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schemas/notification-log.schema").NotificationLog> & import("../schemas/notification-log.schema").NotificationLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getNotificationLogs(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/notification-log.schema").NotificationLog> & import("../schemas/notification-log.schema").NotificationLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getNotificationStats(): Promise<any[]>;
}
