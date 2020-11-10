import app from './app';

it('runs test', () => {
  expect(app).toStrictEqual({ num: 3, str: 'hello' });
});
