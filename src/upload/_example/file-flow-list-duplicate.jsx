import React, {useState} from "react";
import {Switch, Upload} from "tdesign-react";

export default function FileFlowListDuplicate() {
	const [files, setFiles] = useState([]);
	const [allowUploadDuplicateFile, setAllowUploadDuplicateFile] = useState(false);

	return (
		<div className="t-upload__file-flow-demo">
			<div>
				是否重复文件上传：
				<Switch value={allowUploadDuplicateFile} onChange={(value) => setAllowUploadDuplicateFile(value)}/>
			</div>
			<Upload
				files={files}
				onChange={(files) => setFiles(files)}
				action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
				placeholder="支持批量上传文件，文件格式不限，最多只能上传 10 份文件"
				theme="file-flow"
				multiple
				allowUploadDuplicateFile={allowUploadDuplicateFile}
				auto-upload={false}
				max={10}
			/>
		</div>
	);
}
