---
lang: zh-CN
title: 笔记
description: 个人笔记
route: /myBlog/note
fullScreen: false
---

# 常用代码片段

## Common

```json
"my console": {
	"prefix": "clog",
		"body": [
			"console.log(\"$0 ===> \",$0)"
		],
		"description": "console custom variable"
}
```

##  React

``` json
"build a FC": {
		"prefix": "react-fc",
		"body": [
			"import React from 'react';",
			"",
			"export interface ComponentProps {",
			"",
			"}",
			"",
			"const $0: React.FC<ComponentProps> = (props: ComponentProps) => {",
			"    return (",
			"        <div></div>",
			"    )",
			"}",
			"",
			"export default $0"
		],
		"description": "build a react fc"
	},
```