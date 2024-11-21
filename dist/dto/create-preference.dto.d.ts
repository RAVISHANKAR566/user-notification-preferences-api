declare class NotificationChannelsDto {
    email: boolean;
    sms: boolean;
    push: boolean;
}
declare class PreferencesDto {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: NotificationChannelsDto;
}
export declare class CreatePreferenceDto {
    userId: string;
    email: string;
    preferences: PreferencesDto;
    timezone: string;
}
export {};
