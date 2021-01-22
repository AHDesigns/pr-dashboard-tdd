/**
 * Stub console.error with jest.fn().
 * Use inside beforeAll or beforeEach hooks
 */
export function disableTestConsoleErrors(): void {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
}
