const env = envy();

export default {
  db: env.dbHost || 'mongodb://localhost:27017/development'
}