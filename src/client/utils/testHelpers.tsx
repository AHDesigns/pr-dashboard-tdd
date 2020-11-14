/**
 * Stub console.error with jest.fn().
 * Use inside beforeAll or beforeEach hooks
 */
export function disableTestConsoleErrors(): void {
  console.error = jest.fn();
}

export const childComponentThatThrowsError = (): void => {
  throw new Error('poop');
};
