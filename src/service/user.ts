import { HOST } from '@/constants';
import request from '@/utils/request';

export function zzdLogin(code: string): IResponse<ICommonResponse<any>> {
  return request.post({ path: `${HOST}/login`, data: { authCode: code } });
}
