import express from 'express';
import animaisRoutes from './routes/animais.routes';

const app = express();
const PORT = 8080;

app.use(express.json());

// API Routes
app.use('/api/animais', animaisRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
