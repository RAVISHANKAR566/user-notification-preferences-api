import { Document } from 'mongoose';
export type UserPreferenceDocument = UserPreference & Document;
export declare class UserPreference {
    userId: string;
    email: string;
    preferences: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: 'daily' | 'weekly' | 'monthly' | 'never';
        channels: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
    timezone: string;
    createdAt: Date;
    lastUpdated: Date;
}
export declare const UserPreferenceSchema: import("mongoose").Schema<UserPreference, import("mongoose").Model<UserPreference, any, any, any, Document<unknown, any, UserPreference> & UserPreference & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPreference, Document<unknown, {}, import("mongoose").FlatRecord<UserPreference>> & import("mongoose").FlatRecord<UserPreference> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
