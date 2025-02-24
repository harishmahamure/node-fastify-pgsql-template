import app from './app';
import './config/env';
import './config/db';
import { ResponseUtil } from './utils/response';
import { TestDto } from './dto/test';

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  return ResponseUtil.success<TestDto>(res, 'Hello World', {
    name: 'harish',
  });
});

app.listen({ port: Number(PORT) }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
