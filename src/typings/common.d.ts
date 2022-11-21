interface ICommon {
  id?: string;
  name?: string;
  [key: string]: any;
}

// 单据公用请求数据类型
interface IDListParams extends ICommonListParams {
  type: number; // 单据类型
  documentsNumber?: string; // 单据编号
}

// 单据基础类型
interface IDocumentBase {
  documentsNumber?: string; // 单据编号
  companyId?: string; // 单位id
  submitterId?: string; // 提交人id
  submitterName?: string; // 提交人名称
  editStatus?: number; // 0草稿1提交
  readStatus?: number; // 0未读1已读
  approvalStatus?: number; // 审批状态2退回3通过4审批中6不通过
  createTime?: string; // 创建时间
  updateTime?: string; // 更新时间
  type?: number; // 审批类型:1-资产申领；2-资产变动；3-资产处置；4资产申购；5-资产移交

  status?: number; // 传值status
  id?: string; // id,这个没用
}

interface IDSubmitParams<T> {
  id?: string;
  documentsNumber?: string;
  editStatus?: number;
  applyRemark?: string;
  type?: number;
  approvalDocument: T;
  userIdList?: string[];
}

interface IDGetDetailParams {
  type: number;
  documentsNumber: string;
}

interface IDDelParams {
  type: number;
  documentsNumber: string;
}

interface IGetEnumObjParams {
  fieldName?: string; // ZICHANFLBM：资产分类编码  SHIYONG_GLBMID：使用部门 SHIYONGRID： 使用人 CUNFANGDDID: 存放地点
}

interface IGetOuterResponse {
  count: number;
}

interface Window {
  // eslint-disable-next-line camelcase
  aplus_queue: any;
  zzd: any;
}

type IMyEnv = 'weapp' | 'dd' | 'zzd_nk' | 'zzd_sjj' | 'h5' | 'other';
