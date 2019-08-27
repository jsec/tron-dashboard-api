module.exports = {
  type: 'sqlite',
  database: './data/audio.sqlite',
  entities: ['./src/models/**/*.ts'],
  logging: true,
  synchronize: true,
  seeds: ['src/db/seeds/**/*.ts'],
};
