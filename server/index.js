import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: '🏭 ERP Backend radi!',
        timestamp: new Date().toISOString()
    });
});

// Socket.io
io.on('connection', (socket) => {
    console.log('🔌 Client connected:', socket.id);

    socket.emit('welcome', { message: 'Dobrodošli u ERP sistem!' });

    socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});