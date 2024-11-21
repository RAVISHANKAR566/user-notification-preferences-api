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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesController = void 0;
const common_1 = require("@nestjs/common");
const preference_service_1 = require("./preference.service");
const create_preference_dto_1 = require("../dto/create-preference.dto");
const swagger_1 = require("@nestjs/swagger");
let PreferencesController = class PreferencesController {
    constructor(preferencesService) {
        this.preferencesService = preferencesService;
    }
    async createPreferences(createPreferenceDto) {
        return this.preferencesService.createOrUpdate(createPreferenceDto.userId, createPreferenceDto);
    }
    async getPreferences(userId) {
        return this.preferencesService.getPreferences(userId);
    }
    async updatePreferences(userId, createPreferenceDto) {
        return this.preferencesService.createOrUpdate(userId, createPreferenceDto);
    }
    async deletePreferences(userId) {
        return this.preferencesService.deletePreferences(userId);
    }
};
exports.PreferencesController = PreferencesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create user preferences' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User preferences created successfully.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preference_dto_1.CreatePreferenceDto]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "createPreferences", null);
__decorate([
    (0, common_1.Get)(':userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user preferences' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User preferences retrieved successfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Preferences not found for the given user ID.',
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "getPreferences", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user preferences' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User preferences updated successfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Preferences not found for the given user ID.',
    }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_preference_dto_1.CreatePreferenceDto]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "updatePreferences", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user preferences' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User preferences deleted successfully.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Preferences not found for the given user ID.',
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "deletePreferences", null);
exports.PreferencesController = PreferencesController = __decorate([
    (0, swagger_1.ApiTags)('preferences'),
    (0, common_1.Controller)('api/preferences'),
    __metadata("design:paramtypes", [preference_service_1.PreferencesService])
], PreferencesController);
//# sourceMappingURL=preferences.controller.js.map