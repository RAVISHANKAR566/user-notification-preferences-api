"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePreferenceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class NotificationChannelsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether email notifications are enabled.' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationChannelsDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether SMS notifications are enabled.' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationChannelsDto.prototype, "sms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether push notifications are enabled.' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationChannelsDto.prototype, "push", void 0);
class PreferencesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether marketing notifications are enabled.' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PreferencesDto.prototype, "marketing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether newsletter notifications are enabled.' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PreferencesDto.prototype, "newsletter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether update notifications are enabled.' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PreferencesDto.prototype, "updates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['daily', 'weekly', 'monthly', 'never'],
        description: 'Notification frequency.',
    }),
    (0, class_validator_1.IsEnum)(['daily', 'weekly', 'monthly', 'never']),
    __metadata("design:type", String)
], PreferencesDto.prototype, "frequency", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => NotificationChannelsDto),
    __metadata("design:type", NotificationChannelsDto)
], PreferencesDto.prototype, "channels", void 0);
class CreatePreferenceDto {
}
exports.CreatePreferenceDto = CreatePreferenceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreferenceDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email address' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePreferenceDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: PreferencesDto,
        description: 'User notification preferences',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PreferencesDto),
    __metadata("design:type", PreferencesDto)
], CreatePreferenceDto.prototype, "preferences", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User timezone' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreferenceDto.prototype, "timezone", void 0);
//# sourceMappingURL=create-preference.dto.js.map