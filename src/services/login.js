import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function login({ payload }) {
  console.log(payload)
  return request(`/api/login`, {
    method: 'POST',
    body: JSON.stringify({payload}),

  });

}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
