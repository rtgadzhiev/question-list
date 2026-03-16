import { BASE_URL } from '../constants/constants';

export async function apiRequest(pathname, params) {
  const url = new URL(pathname, BASE_URL);

  if (params) {
    const searchParams = params;
    url.search = searchParams;
  }

  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
