import { BASE_URL } from '../constants/constants';

export async function apiRequest(pathname, filters = null) {
  const url = new URL(pathname, BASE_URL);

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            url.searchParams.append(key, value.join(', '));
          }
        } else {
          url.searchParams.append(key, value);
        }
      }
    });
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
