interface ILoginParams {
  account: string;
  password: string;
}

interface IChangePwdParams {
  phoneNumber?: string;
  checkCode?: string;
  pwd?: string;
  conformPwd?: string;
}

interface IOrg extends ICommon {
  agencyName?: string;
  agencyCode?: string;
  tenantName?: string;
  tenantCode?: string;
  parentId?: string;
  zcyUserPos?: IUser[];
  children?: IOrg[];
  personNum?: number;
}

interface IGetPersonsParams {
  realName?: string;
}

interface ISwitchOrgParams {
  account?: string;
  tenantCode?: string;
}

interface IDdUser {
  account: string;
  accountId: string;
  clientId: string;
  employeeCode: string;
  lastName: string;
  namespace: string;
  nickNameCn: string;
  realmId: string;
  realmName: string;
  tenantUserId: string;
  openid: string;
  roleCatalogues: any[];
}
