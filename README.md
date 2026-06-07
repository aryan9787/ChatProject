# Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack with WebSocket-based communication powered by Socket.io. The application supports instant messaging, channel-based conversations, file sharing, authentication, and live user interaction in a responsive and scalable environment.

## Live Demo

🔗 [View Project](https://syncat.netlify.app)

## Features

- Real-time one-to-one and channel messaging
- WebSocket communication using Socket.io
- User authentication and authorization
- File and media sharing support
- Online/offline user status updates
- Persistent chat history storage
- Responsive UI for desktop and mobile devices
- RESTful API integration
- Scalable backend architecture

## Tech Stack

### Frontend
- React.js
- CSS / Tailwind CSS (if applicable)
- Axios

### Backend
- Node.js
- Express.js
- Socket.io

### Database
- MongoDB
- Mongoose

### Authentication
- JWT Authentication
- bcrypt.js

## Architecture Overview

```text
Client (React.js)
        |
REST APIs + WebSockets
        |
Server (Node.js + Express.js)
        |
Socket.io Real-Time Engine
        |
MongoDB Database
