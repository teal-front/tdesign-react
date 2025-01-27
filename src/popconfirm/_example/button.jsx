import React from 'react';
import { Button, PopConfirm } from 'tdesign-react';

export default function ButtonExample() {
  return (
    <div className="tdesign-demo-block-row">
      <PopConfirm
        theme={'default'}
        content={'您确定要提交吗'}
        confirmBtn={'确认提交'}
        cancelBtn={'我再想想'}
      >
        <Button theme="default" variant="outline">按钮样式（属性-字符串）</Button>
      </PopConfirm>
      <PopConfirm
        theme={'default'}
        content="您确定要提交吗"
        confirmBtn={<Button theme={'warning'} size={'small'}>确定提交</Button>}
        cancelBtn={<Button theme={'default'} size={'small'} variant={'outline'}>我再想想</Button>}
      >
        <Button theme="default" variant="outline">按钮样式（TNode）</Button>
      </PopConfirm>
    </div>
  );
}
