import { fetchData } from './api';
jest.mock('./api');

test('mocks the fetchData function', async () => {
  // Setup the mock to return a specific value
  fetchData.mockResolvedValue({ key: 'value' });

  const data = await fetchData();
  expect(data).toEqual({ key: 'value' });
});