const handler = require('../handler');

test('expect handler to return statuscode 200', async () => {
  const event = new Event('handlerEvent');
  await handler.hello(event).then((response) => {
    expect(response.statusCode).toEqual(200);
  });
});
