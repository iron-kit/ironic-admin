
import request from '@/utils/request';

/**
 * POST Account Login
 */
export const fakeAccountLogin = (params) => {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}