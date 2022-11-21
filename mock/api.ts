const delay = require('mocker-api/lib/delay');
const userApi = require('./user.ts');
const smsApi = require('./sms.ts');
const claimApi = require('./claim.ts');
const subscribeApi = require('./subscribe.ts');
const locationApi = require('./location.ts');
const categoryApi = require('./category.ts');
const disposeApi = require('./dispose.ts');
const transferApi = require('./transfer.ts');
const assetApi = require('./asset.ts');
const approveApi = require('./approve.ts');
const checkApi = require('./check.ts');

const proxy = {
  ...userApi,
  ...smsApi,
  ...claimApi,
  ...locationApi,
  ...categoryApi,
  ...subscribeApi,
  ...disposeApi,
  ...transferApi,
  ...assetApi,
  ...approveApi,
  ...checkApi,
};

module.exports = delay(proxy, 1000);
