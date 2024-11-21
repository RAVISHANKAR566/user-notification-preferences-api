"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('User Notification Preferences API')
        .setDescription('API for managing user notification preferences and sending notifications.')
        .setVersion('1.0')
        .addTag('preferences')
        .addTag('notifications')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
exports.default = async (req, res) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    return app.getHttpAdapter().getInstance()(req, res);
};
//# sourceMappingURL=main.js.map