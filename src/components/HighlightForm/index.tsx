import { View, Image, Input } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import './index.less';
import Taro from '@tarojs/taro';
import { objUtils, regexpUtils } from '@szsk/utils';
import { SmsService } from '@/service';

type IFormType = 'input' | 'password' | 'sms';

export interface IFormItem {
  type: IFormType;
  key: string;
  icon: string;
  placeholder?: string;
  depKey?: string;
}

interface Props {
  formItems: IFormItem[];
  setData: any;
  data: any;
  className?: string;
}

const HighlightForm = (props: Props) => {
  const { formItems, className = '', setData, data = {} } = props;
  const [fKeys, setFKeys] = useState<string[]>([formItems[0].key]);

  const onInput = (key: string, v: any) => {
    const _newD = {
      ...data,
      [key]: v,
    };
    objUtils.removeNull(_newD);
    setData(_newD);
    onFocus(key);
  };

  const onFocus = (key: string) => {
    setFKeys([...Object.keys(data), key]);
  };

  const getInputItem = (type: IFormType, item: IFormItem) => {
    const { placeholder, key, depKey = '' } = item;
    const input = () => {
      return (
        <Input
          className="u-input"
          maxlength={20}
          onInput={(e) => onInput(key, e.detail.value)}
          placeholder={placeholder}
        />
      );
    };

    const password = () => {
      const [isEyeOpen, setIsOpen] = useState<boolean>(false);
      return (
        <>
          <Input
            type={isEyeOpen ? 'text' : 'password'}
            className="u-input"
            maxlength={20}
            onInput={(e) => onInput(key, e.detail.value)}
            placeholder={placeholder}
          />
          {/* <Image
            className="u-suffix-icon"
            onClick={() => setIsOpen(!isEyeOpen)}
            src={
              isEyeOpen
                ? 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/eye-open.png'
                : 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/eye-close.png'
            }
          /> */}
        </>
      );
    };

    const sms = () => {
      const [text, setText] = useState<number | string>('发送验证码');
      useEffect(() => {
        if (typeof text === 'number') {
          if (text === 0) {
            setText('发送验证码');
          } else {
            setTimeout(() => {
              setText(text - 1);
            }, 995);
          }
        }
      }, [text]);
      const onSend = async () => {
        const phone = data[depKey];
        if (regexpUtils.phone().test(phone)) {
          if (typeof text === 'string') {
            const [err] = await SmsService.getSms(phone);
            if (!err) {
              setText(60);
            }
          }
        } else {
          Taro.showToast({ icon: 'none', title: '请输入正确的手机号！' });
        }
      };

      return (
        <>
          <Input
            className="u-input"
            maxlength={8}
            onInput={(e) => onInput(key, e.detail.value)}
            placeholder={placeholder}
          />
          <View className="u-send-btn" onClick={onSend}>
            {typeof text === 'number' ? `${text}s` : text}
          </View>
        </>
      );
    };

    return { input, password, sms }[type];
  };
  return (
    <View className={`g-highlight-form ${className}`}>
      {formItems.map((item: IFormItem) => {
        const { type, key, icon } = item;
        return (
          <View
            key={key}
            className={`m-input ${fKeys.includes(key) ? 'f-active' : ''}`}
            onClick={() => onFocus(key)}
          >
            {icon ? <Image className="u-icon" src={icon} /> : ''}
            {getInputItem(type, item)()}
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(HighlightForm);
