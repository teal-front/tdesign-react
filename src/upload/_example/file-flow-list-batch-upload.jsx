import React, { useState } from 'react';
import { Upload } from 'tdesign-react';

export default function FileFlowListBatchUpload() {
  const [files, setFiles] = useState([]);

  function handleUploadSuccess(e, files) {
    console.log('batch upload', e, files);
  }

  function handleChange(files) {
    console.log(files);
    setFiles(files);
  }

  return (
    <div className="t-upload__file-flow-demo">
      <Upload
        files={files}
        onChange={handleChange}
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        placeholder="批量合并上传，会通过一个接口上传所有的文件"
        theme="file-flow"
        multiple
        isBatchUpload
        uploadAllFilesInOneRequest
        auto-upload={false}
        max={10}
        success={handleUploadSuccess}
      />
    </div>
  );
}
