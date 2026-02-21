JsidhuCuts – Full-Stack Booking System

JsidhuCuts is a fully responsive booking website designed to streamline appointment scheduling and automate operational workflows. The application was developed and deployed using AWS cloud infrastructure with an integrated Discord bot for real-time booking notifications.

Project Overview

JsidhuCuts is a full-stack appointment booking platform built to reduce manual scheduling processes and improve efficiency. Users can book appointments through a responsive web interface. Booking data is stored in a SQLite database, and automated notifications are sent via a Discord bot whenever a new appointment is scheduled.

This project demonstrates hands-on experience with cloud deployment, backend development, database integration, automation workflows, and infrastructure security configuration.

Live Demo

Live Site: https://jsidhucuts.com

Tech Stack

Frontend
HTML5
CSS
JavaScript

Backend
Node.js
Express.js

Database
SQLite

Cloud Infrastructure
AWS EC2 (Application Hosting)
AWS S3 (Static Asset Storage)
AWS IAM (Role-based access control and permission management)

Automation
Discord.js (Real-time booking notifications)

System Architecture

User submits booking request through responsive frontend
Request is handled by Express backend running on AWS EC2
Booking data is stored in SQLite database
Backend triggers Discord bot notification
Static assets are served via AWS S3

(You can optionally insert an architecture diagram image here to visually demonstrate the flow.)

Security Implementation

IAM roles were configured following the principle of least privilege.
The EC2 instance was secured with proper security group configuration.
Backend input validation was implemented to reduce malformed data submissions.
Sensitive credentials were stored using environment variables instead of hardcoding.

Key Features

Responsive mobile-first booking interface
Database-backed persistent appointment storage
Automated Discord notifications for new bookings
Cloud-based deployment using AWS infrastructure
Reduced manual coordination processes through automation

Installation and Setup

Clone the repository:

git clone https://github.com/Pixsm7/JsidhuCuts.git

cd JsidhuCuts

Install dependencies:

npm install

Create a .env file and configure:

DISCORD_TOKEN=your_discord_token
PORT=3000

Start the server:

node server.js

Visit:

http://localhost:PORT

Project Impact

Reduced manual appointment coordination by approximately 50 percent
Improved accessibility through mobile-responsive design
Demonstrated production-style deployment on AWS infrastructure
Integrated automation to streamline operational workflows

Future Improvements

Admin dashboard for appointment management
Authentication and role-based user access control
Migration from SQLite to AWS RDS for scalability
Implementation of CI/CD pipeline for automated deployments
Containerization using Docker

Author

Karman Sohal
Bachelor of Science in Information Technology
CompTIA A+ Certified
