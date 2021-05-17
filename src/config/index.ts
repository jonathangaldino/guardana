import dotenv from 'dotenv-safe'
dotenv.config()

interface AppConfig {
  PORT: string
  DATABASE_URL: string
}

const config: AppConfig = {
  PORT: <string>process.env.PORT,
  DATABASE_URL: <string>process.env.MONGO_URL,
}

export default config
