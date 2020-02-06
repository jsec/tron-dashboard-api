module.exports = {
  type: "sqlite",
  database: "./data/audio.sqlite",
  entities: ["dist/models/**/*.js"],
  logging: false,
  synchronize: true,
  seeds: ["src/seeds/**/*.ts"]
};
