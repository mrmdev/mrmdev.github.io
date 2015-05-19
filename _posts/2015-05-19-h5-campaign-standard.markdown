---
layout: post
title:  "H5 campaign 代码规范"
date:   2015-05-19 15:00:21
categories: rock 
---

##总规范
1. 忽略（Omit）协议：如 `background: url(http://www.baidu.com/images/)`; 应该写`background: url(//www.baidu.com/images/)`;以方便http与https协议切换，除非必须使用某个协议

2. 文件命名统一使用小写，不能使用中文命名，同时推荐” `-` ”而不是” `_` ”

3. 交付代码应格式化，并做适当注释,线上代码应压缩

4. 代码及库应优先使用冗余较低的，比如：手机网站优先考虑 `zepto.js` 而不是 `jquery`,只使用Bootstrap某个组件时，应只加载使用到的css及js文件而不是全部引入。尽量使用原生js实现功能
 

##HTML
1. 标签属性使用小写

2. 使用 UTF-8 ，文档中也加入` <meta charset=”utf-8″>`

3. 使用html5的规范`<!DOCTYPE html>`

4. 书写链接地址时, 必须避免重定向，例如：`href=”http://www.baidu.com/”`, 即须在URL地址后面加上“/”

5. 避免使用已过时标签，如：`<b>` 、`<u>`、 `<i>` 而用`<strong>` 、`<em>`等代替

6. 避免使用`style=“xxx:xxx;”`的内联样式表 

7. `Media query` 应使用 `<meta name=“viewport” content=“width=device-width,user-scalable=no” />`


##CSS
1. 每个样式属性后加 “ `;` ”方便压缩工具”断句”

2. Class命名，采用” `-` “[减号连接符] 对class中的字母分隔


##文件
1. 根目录基本文件夹应为 `images` `scripts` `styles` `fonts` `media` 等

2. `css` 和 `js` 每种文件数量不超过2个，`html` 根据需求而定，所有代码需压缩

3. 所有图片都需经过压缩处理，大小控制在200K以内

4. 小碎图片尽可能使用 `CSS Sprite` 处理，icon图标使用 `iconfont` 实现，以减少请求数

5. 多屏页面尽可能进行 `延迟加载` 处理,以及图片 `预加载` 等，如页面逻辑需求加载完所有图片或数据才体验，应加上`loading`
 
6. 由于大部分网站需加cdn,资源文件应用md5重命名

7. 所有图片 及 css js 分别用指定域名的绝对地址

8. 代码管理统一使用 `git`,每完成一个功能或一个页面提交一次


