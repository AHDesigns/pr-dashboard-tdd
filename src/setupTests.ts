// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import '@testing-library/jest-dom/extend-expect';

/* disabling these errors as they are also logged to console.error, and there are tests
 * in place for the ErrorBoundary component. This just adds noise to the tests
 * referenced from
 * https://stackoverflow.com/questions/48786254/jest-test-passes-but-error-not-caught-and-logs-to-console
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _virtualConsole = (window as any)._virtualConsole;

_virtualConsole.removeAllListeners('jsdomError');
