import { apiRequest } from './apiRequest';

export async function getPublicQuestions(params) {
  return apiRequest('questions/public-questions/', params);
}

export async function getSpecializations(filters) {
  return apiRequest('specializations', filters);
}

export async function getSkills(filters) {
  return apiRequest('skills', filters);
}

export async function getSpecialization({ id }) {
  return apiRequest(`specializations/${id ? id : ''}`);
}
