import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationLogDocument = NotificationLog & Document;

@Schema()
export class NotificationLog {
  @Prop({ required: true })
  userId: string;

  @Prop({ enum: ['marketing', 'newsletter', 'updates'], required: true })
  type: 'marketing' | 'newsletter' | 'updates';

  @Prop({ enum: ['email', 'sms', 'push'], required: true })
  channel: 'email' | 'sms' | 'push';

  @Prop({ enum: ['pending', 'sent', 'failed'], required: true })
  status: 'pending' | 'sent' | 'failed';

  @Prop({ required: false })
  sentAt?: Date;

  @Prop({ required: false })
  failureReason?: string;

  // Define the metadata field with a type of mixed
  @Prop({ type: Object, required: true })
  metadata: Record<string, any>;
}

// Create the schema from the NotificationLog class
export const NotificationLogSchema =
  SchemaFactory.createForClass(NotificationLog);
