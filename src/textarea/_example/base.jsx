import React, { useState } from 'react';
import { Textarea } from 'tdesign-react';

export default function InputExample() {
  const [value, onChange] = useState('');
  const [value2, onChange2] = useState('');
  const [value3, onChange3] = useState('');

  return (
    <>
      <Textarea
        placeholder="请输入内容"
        value={value}
        onChange={(value) => {
          console.log(value);
          onChange(value);
        }}
      />
      <br />
      <Textarea
        placeholder="请输入内容, 高度可自适应，autosize=true"
        value={value2}
        autosize={true}
        onChange={(value) => {
          console.log(value);
          onChange2(value);
        }}
      />
      <br />
      <Textarea
        placeholder="请输入内容，高度可自适应，最少3行，最多10行，超过会出滚动条"
        value={value3}
        autosize={{ minRows: 3, maxRows: 10 }}
        onChange={(value) => {
          console.log(value);
          onChange3(value);
        }}
      />
    </>
  );
}
