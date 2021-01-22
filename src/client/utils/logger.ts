/* eslint-disable no-console */
export interface Logger {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(...args: any[]): void;
}

const logger: Logger = {
  error(...args) {
    console.error(...args);
  },
};

export default logger;
