export const loopTreeData = (
  originData: Array<any>,
  name: string,
  code: string,
  childrenName: string,
  tierNum = 0,
): Array<any> => {
  if (!originData) return [];
  tierNum += 1;
  const mark = name === 'categoryName';
  const isPerson = childrenName === 'zcyUserPos';
  return originData.map((item) => {
    let childName = item[name];
    let childCode = isPerson
      ? `${item[code] || item.agencyName}-${item.id}`
      : item[code];
    let childList = item[childrenName] || [];
    const parentCode = `${item.parentId}-${item.parentCode}-${item.id}`; // key值唯一
    if (isPerson) {
      // 因为组织、人员，子集字段不同。为了递归遍历。把组织和人员数据做合并。
      const concatArr = (item.children || []).concat(childList);
      if (concatArr.length) {
        const deps = (item.children || []).map((v: any) => ({
          ...v,
          realName: v.agencyName,
          userId: v.agencyCode,
          depFlag: true, // 添加是否是部门的标识，以便区分
        }));
        childList = [...deps, ...childList].map((v) => ({
          ...v,
          parentCode,
        }));
      }
      childName = item[name] || item.agencyName;
      childCode = `${parentCode}-${item[code]}`;
    }

    if (childList.length) {
      return {
        ...item,
        title: mark ? `${childName}(${childCode})` : childName,
        key: childCode,
        tierNum,
        [childrenName]: undefined,
        children: loopTreeData(childList, name, code, childrenName, tierNum),
      };
    }
    return {
      ...item,
      title: mark ? `${childName}(${childCode})` : childName,
      key: childCode,
      tierNum,
    };
  });
};

/**
 *
 * @param originData
 * @param targetKey
 * @returns 获取人员所属的部门信息
 */
export const getParentNode = (originData: Array<any>, targetKey: string) => {
  let parentNode: any = null;
  for (const item of originData) {
    const { children = [] } = item;
    if (children) {
      if (children.some((cur: any) => cur?.userId === targetKey)) {
        parentNode = item;
      } else if (getParentNode(children, targetKey)) {
        parentNode = getParentNode(children, targetKey);
      }
    }
  }
  return parentNode;
};
