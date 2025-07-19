# Expense Tracker Dashboard

A modern expense tracking application built with React, Node.js, and MongoDB. This project implements DevOps best practices including CI/CD, testing, and containerization.

## Project Structure

```
expense-tracker/
├── frontend/                # React frontend application
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   └── pages/         # Page components
│   ├── public/            # Static assets
│   └── tests/             # Frontend tests
├── backend/                 # Node.js Express API
│   ├── src/               # Source code
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/       # API routes
│   │   └── middleware/   # Custom middleware
│   ├── tests/             # Backend tests
│   └── config/           # Configuration files
├── k8s/                     # Kubernetes deployment manifests
├── docker/                 # Docker configuration
└── docs/                  # Documentation
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Docker and Docker Compose
- Git
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/SLMakomazi/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
Create `.env` file in backend directory:
```
# Database
MONGO_URI=mongodb://localhost:27017/expense-tracker

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# Feature Flags
FEATURE_NEW_DASHBOARD=false
FEATURE_ADVANCED_REPORTS=false
```

4. Start the development servers:
```bash
# Start backend (in one terminal)
cd backend
npm run dev

# Start frontend (in another terminal)
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Features

### User Management
- User registration and login
- Password hashing and security
- JWT authentication
- Role-based access control

### Expense Tracking
- Add/Edit/Delete transactions
- Categorize expenses
- Income tracking
- Monthly/Yearly summaries

### Reports
- Monthly expense breakdown
- Income vs Expense charts
- Category-wise analysis
- Export reports

### Admin Panel
- User management
- Transaction review
- System metrics
- Feature flag management

## Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

### Performance Tests
```bash
cd tests/k6
k6 run transaction-test.js
```

## Deployment

### Docker
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Kubernetes
```bash
# Deploy to Kubernetes
kubectl apply -f k8s/
```

## Security

- JWT token authentication
- Password hashing (bcrypt)
- CORS configuration
- Rate limiting
- Input validation
- Security headers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.