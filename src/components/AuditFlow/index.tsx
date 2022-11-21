import { View } from '@tarojs/components';
import moment from 'moment';
import React, { useState } from 'react';
import { AtFloatLayout, AtIcon, AtTimeline } from 'taro-ui';
import { APPROVE_TYPE, MUTI_APPROVER_WAYS } from '@/constants';
import './index.less';

interface Props {
  data: IApproveNode[];
}

const AuditFlow = (props: Props) => {
  const { data } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<IApproveNode>({});
  const {
    auditorList: sList = [],
    approvalStatus: sStatus,
    multiApprovalWay: sMulitType = 1,
  } = selectedNode;

  const onExpand = (_node: IApproveNode) => {
    setIsOpen(true);
    setSelectedNode(_node);
  };

  const getItems: () => any[] = () => {
    return (data || [])
      .filter((item) => item.approvalStatus !== APPROVE_TYPE.NOT_ACTIVE)
      .reverse()
      .map((item, idx: number) => {
        const {
          applyRemark, // 申请备注
          approvalStatus, // 审批状态：0-未激活，1-发起审批，2-驳回，3-同意，4-审批中，5-无需审批，6-不同意
          gmtCreate, // 提交时间
          approvalCompleteTime, // 审批时间
          level,
          multiApprovalWay = 1,
          auditorList = [],
          submitterName,
        } = item;
        const auditorL = (auditorList || []).length;
        const {
          auditorName: fN,
          auditorRoles: fJ,
          approvalRemark: fR,
        } = (auditorList || [])[0] || {};
        let singleName;
        let singleJob;
        if (!level) {
          singleName = submitterName;
        } else {
          singleName = fN;
          singleJob = fJ;
        }
        return {
          color: !idx ? APPROVE_TYPE.toColor(approvalStatus) : 'grey',
          title: (
            <View className={`m-line f-${idx ? 'first-line' : 'other-line'}`}>
              <View className="m-left">
                <View className="m-status">
                  <View
                    className={`u-status f-${APPROVE_TYPE.toKey(
                      approvalStatus,
                    )}`}
                  >
                    {APPROVE_TYPE.toString(approvalStatus)}
                  </View>
                  {APPROVE_TYPE.checkIsFinish(approvalStatus) && !idx && (
                    <View className="u-ok">审批完成</View>
                  )}
                </View>
                <View className="u-time">
                  {gmtCreate || approvalCompleteTime
                    ? moment(gmtCreate || approvalCompleteTime).format(
                        'MM/DD HH:mm:ss',
                      )
                    : ''}
                </View>
              </View>
              <View className="m-right">
                {
                  // 一个或0个审批人
                  auditorL <= 1 ? (
                    <View className="m-name">
                      <View className="u-name">{singleName}</View>
                      <View className="u-jobs f-ellipsis">{singleJob}</View>
                    </View>
                  ) : (
                    ''
                  )
                }
                {
                  // 大于一个审批人
                  auditorL > 1 ? (
                    <>
                      <View className="m-expand" onClick={() => onExpand(item)}>
                        <View className="u-txt">
                          {auditorL}人
                          {MUTI_APPROVER_WAYS.toName(multiApprovalWay)}
                        </View>
                        <View className="m-arrow-btn">
                          <AtIcon
                            className="u-right-arrow"
                            color="grey"
                            value="chevron-right"
                          />
                        </View>
                      </View>
                    </>
                  ) : (
                    ''
                  )
                }
                {auditorL === 1 &&
                approvalStatus !== APPROVE_TYPE.NOT_ACTIVE ? (
                  <View className="u-remark f-ellipsis">
                    {!level ? applyRemark : fR}
                  </View>
                ) : (
                  ''
                )}
              </View>
            </View>
          ),
        };
      });
  };
  return (
    <View className="g-auditFlow">
      <AtTimeline items={getItems()} />
      <AtFloatLayout onClose={() => setIsOpen(false)} isOpened={isOpen}>
        <View className="m-header">
          <View className={`u-tag f-${APPROVE_TYPE.toKey(sStatus)}`}>
            {APPROVE_TYPE.toString(sStatus)}
          </View>
          <View className="u-title">
            {(sList || []).length}人{MUTI_APPROVER_WAYS.toName(sMulitType)}-详细
          </View>
          <View
            className="at-icon at-icon-close u-close-btn"
            onClick={() => setIsOpen(false)}
          />
        </View>
        <View className="m-inner f-safe-pb">
          {(sList || []).map((item: IAuditor) => {
            const {
              auditorId,
              approvalStatus,
              auditorName,
              auditorRoles,
              approvalRemark,
              approvalTime,
            } = item;
            return (
              <View
                className={`m-wrapper f-${APPROVE_TYPE.toKey(approvalStatus)}`}
                key={auditorId}
              >
                <View className="m-auditor">
                  <View className="m-left">
                    <View className="u-status">
                      {APPROVE_TYPE.toString(approvalStatus)}
                    </View>
                    <View className="u-time">
                      {approvalStatus === APPROVE_TYPE.NO_APPROVE
                        ? ''
                        : approvalTime
                        ? moment(approvalTime).format('MM/DD HH:mm:ss')
                        : ''}
                    </View>
                  </View>
                  <View className="m-right">
                    <View className="m-name">
                      <View className="u-name">{auditorName}</View>
                      <View className="u-jobs f-ellipsis">{auditorRoles}</View>
                    </View>
                    <View className="u-remark f-ellipsis">
                      {approvalRemark}
                    </View>
                  </View>
                </View>
                <View className="u-divider" />
              </View>
            );
          })}
        </View>
      </AtFloatLayout>
    </View>
  );
};
export default React.memo(AuditFlow);
