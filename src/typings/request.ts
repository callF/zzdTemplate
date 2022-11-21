type IResponse<T> = Promise<[{ code: number; message: string } | null, T]>;
interface ICommonListResponse<T> {
  data: {
    total: number;
    list: T[];
  };
}

interface ICommonResponse<T> {
  data: T;
}

interface ICommonListParams {
  // 第几页
  current?: number;
  // 每页几条
  pageSize?: number;
  [key: string]: any;
}

interface IToken {
  accessToken: string;
  tokenType: string;
  avatar: string;
  account: string;
}
