export async function getPublicQuestions(filters) {
  const { page, limit, specializationId } = filters;

  try {
    const response = await fetch(
      `https://api.yeatwork.ru/questions/public-questions?page=${page}&limit=${limit}${specializationId ? `&specializationId=${specializationId}` : ''}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecializations(filters) {
  const { page, limit } = filters;

  try {
    const response = await fetch(
      `https://api.yeatwork.ru/specializations?page=${page}&limit=${limit}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
