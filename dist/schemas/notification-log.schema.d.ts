import { Document } from 'mongoose';
export type NotificationLogDocument = NotificationLog & Document;
export declare class NotificationLog {
    userId: string;
    type: 'marketing' | 'newsletter' | 'updates';
    channel: 'email' | 'sms' | 'push';
    status: 'pending' | 'sent' | 'failed';
    sentAt?: Date;
    failureReason?: string;
    metadata: Record<string, any>;
}
export declare const NotificationLogSchema: import("mongoose").Schema<NotificationLog, import("mongoose").Model<NotificationLog, any, any, any, Document<unknown, any, NotificationLog> & NotificationLog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NotificationLog, Document<unknown, {}, import("mongoose").FlatRecord<NotificationLog>> & import("mongoose").FlatRecord<NotificationLog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
