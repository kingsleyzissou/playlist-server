import { createLogger, transports, format } from 'winston';

const { combine, colorize, simple, json } = format;

const logger = createLogger({
  level: 'silly',
  format: json(),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      colorize(),
      simple(),
    ),
  }));
}

export default logger;
