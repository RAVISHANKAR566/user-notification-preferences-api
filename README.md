User Notification Preferences API
Description
This is a NestJS-based API for managing user notification preferences and sending notifications. The system allows users to manage their preferences for marketing, newsletter, and updates, and specify their preferred notification channels (email, SMS, push). It also supports the sending of notifications to users based on their preferences.

Features
User Preferences Management:
Create, read, update, and delete user preferences.
Manage preferences for different notification types and channels.
Notification Management:
Send notifications to users.
Log notifications with their status (sent/pending/failed).
Basic Error Handling and Input Validation.
API Endpoints
POST /api/preferences – Create or update user preferences.
GET /api/preferences/:userId – Get user preferences by userId.
PATCH /api/preferences/:userId – Update user preferences.
DELETE /api/preferences/:userId – Delete user preferences.
POST /api/notifications/send – Send a notification to a user.
GET /api/notifications/:userId/logs – Get notification logs for a user.
GET /api/notifications/stats – Get statistics for notifications.
Setup Instructions
Follow these steps to set up the project locally:

1. Clone the repository
Clone the repository to your local machine:
git clone https://github.com/RAVISHANKAR566/user-notification-preferences-api
cd your-repo-name


2. Install dependencies
Install the required dependencies:
npm install


4. MongoDB Setup
Since you already have a MongoDB instance, you'll need to configure the connection in your environment variables.
Go to your MongoDB Atlas or your local MongoDB instance and get the connection string.
Create a .env file in the root directory of your project and add the following environment variables:

MONGO_URI=your-mongodb-connection-string

4. Run the application
Start the application in development mode:
npm run start
Your application should now be running on http://localhost:3000.

5. Swagger API Documentation
Once the app is running, you can visit the Swagger API documentation at:
http://localhost:3000/api
This will provide an interactive UI where you can test the API endpoints.
