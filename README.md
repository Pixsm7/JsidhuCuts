JsidhuCuts – Production Booking System

JsidhuCuts is a production-ready full-stack booking platform developed for a real client to replace third-party scheduling software (Booksy). The system provides a responsive web interface for appointment scheduling and integrates automated Discord notifications for real-time booking management.

The application was deployed using AWS cloud infrastructure and delivered as a live, client-approved product.

Live Site

https://www.jsidhucuts.com/

Project Background

The client previously relied on Booksy for appointment scheduling, which introduced recurring costs and limited branding control. This project was developed to provide:

A cost-free custom booking solution

Full branding ownership

Automated scheduling workflows

Improved operational efficiency

The final system was approved by the client and fully replaced their prior booking platform.

Core Features

Responsive mobile-first booking interface

Real-time Discord notifications for new and canceled appointments

SQLite database-backed persistent booking storage

AWS EC2 cloud hosting

Secure access management using AWS IAM roles

Cross-platform compatibility

Automated booking confirmation system

Tech Stack

Frontend
HTML5
CSS3
JavaScript

Backend
Node.js
Express.js

Database
SQLite

Cloud Infrastructure
AWS EC2 (Application hosting)
AWS S3 (Static assets)
AWS IAM (Access control and security policies)

Automation
Discord.js integration for appointment notifications

System Architecture

User submits booking request through web interface
Express backend processes request
Booking data stored in SQLite database
Discord bot sends automated notification to client
Application hosted on AWS EC2

<img width="740" height="433" alt="System Architecture Diagram" src="https://github.com/user-attachments/assets/bbda191b-73fe-4b84-b368-a84fe7a02910" />
Security Implementation

IAM roles configured using least-privilege principles

Environment variables used for credential protection

Backend input validation implemented

EC2 instance secured using appropriate security groups

Project Impact

Eliminated third-party booking service dependency

Reduced manual scheduling coordination

Improved booking efficiency and accessibility

Delivered scalable AWS-hosted infrastructure

Successfully deployed and approved by live client

Installation and Local Setup

Clone repository:

git clone https://github.com/Pixsm7/JsidhuCuts.git

cd JsidhuCuts

Install dependencies:

npm install

Create a .env file with:

DISCORD_TOKEN=your_token
PORT=3000

Run application:

node server.js

Access locally:

http://localhost:PORT

Future Enhancements

Admin dashboard for appointment management

Role-based authentication system

Migration to AWS RDS for production-scale database management

CI/CD pipeline for automated deployments

Docker containerization

Author

Karman Sohal
Bachelor of Science in Information Technology
CompTIA A+ Certified
