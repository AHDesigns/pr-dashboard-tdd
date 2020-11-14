import app from './app';
import { example } from 's-utils/types';

it('runs test', () => {
  const a: example = { num: 3, str: 'hello' };
  expect(app).toStrictEqual(a);
});
