import { http, HttpResponse } from 'msw';

const API = 'https://api.example.com';

export const handlers = [
  http.get(`${API}/hello`, () => {
    return HttpResponse.json({ message: 'Hello from MSW' });
  }),
];
