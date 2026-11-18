import axios from 'axios';

describe('MSW setup', () => {
  it('intercepts Met API requests and returns mock data', async () => {
    const { data } = await axios.get('https://api.example.com/hello');
    expect(data.message).toBe('Hello from MSW');
  });
});
