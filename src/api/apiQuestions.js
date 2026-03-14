import { apiRequest } from './apiRequest';

export async function getPublicQuestions(params) {
  return apiRequest('questions/public-questions/', params);
}

export async function getSpecializations(params) {
  return apiRequest('specializations', params);
}

export async function getSkills(filters) {
  return apiRequest('skills', filters);
}

export async function getSpecialization(id) {
  return apiRequest(`specializations/${id || ''}`);
}
