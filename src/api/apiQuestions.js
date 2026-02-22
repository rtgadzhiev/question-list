export async function getPublicQuestions(filters) {
  const { page, limit, specializationId, skills, titleOrDescription } = filters;

  try {
    const response = await fetch(
      `https://api.yeatwork.ru/questions/public-questions?page=${page}&limit=${limit}${specializationId ? `&specializationId=${specializationId}` : ''}${skills.length ? `&skills=${skills}` : ''}${titleOrDescription ? `&titleOrDescription=${titleOrDescription}` : ''}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

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

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSkills(filters) {
  const { page, limit, specializations } = filters;

  try {
    const response = await fetch(
      `https://api.yeatwork.ru/skills?page=${page}&limit=${limit}${specializations ? `&specializations=${specializations}` : ''}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecialization(filters) {
  const { id } = filters;

  try {
    const response = await fetch(
      `https://api.yeatwork.ru/specializations/${id}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
