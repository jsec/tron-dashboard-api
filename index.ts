import app from './src/app';
import databaseConnection from './src/connections/db.connection';

const PORT: number = Number(process.env.PORT) || 3000;

databaseConnection.then(() => app.listen(PORT)).catch(console.error);

console.log('Server listening on port 3000...');
