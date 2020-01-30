
# 实用但小众的 MarkDown 技巧


汇总偏门但实用的 MarkDown 技巧：

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [内容编辑](#%E5%86%85%E5%AE%B9%E7%BC%96%E8%BE%91)
  - [在线协同编辑](#%E5%9C%A8%E7%BA%BF%E5%8D%8F%E5%90%8C%E7%BC%96%E8%BE%91)
  - [快速创建表格](#%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA%E8%A1%A8%E6%A0%BC)
  - [高效插入图片-七牛图床使用技巧](#%E9%AB%98%E6%95%88%E6%8F%92%E5%85%A5%E5%9B%BE%E7%89%87-%E4%B8%83%E7%89%9B%E5%9B%BE%E5%BA%8A%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7)
  - [设置组块折叠](#%E8%AE%BE%E7%BD%AE%E7%BB%84%E5%9D%97%E6%8A%98%E5%8F%A0)
  - [显示红绿对比的 diff](#%E6%98%BE%E7%A4%BA%E7%BA%A2%E7%BB%BF%E5%AF%B9%E6%AF%94%E7%9A%84-diff)
  - [设置脚注](#%E8%AE%BE%E7%BD%AE%E8%84%9A%E6%B3%A8)
  - [设置文内锚点](#%E8%AE%BE%E7%BD%AE%E6%96%87%E5%86%85%E9%94%9A%E7%82%B9)
    - [方法一：使用 bookmark 标记](#%E6%96%B9%E6%B3%95%E4%B8%80%E4%BD%BF%E7%94%A8-bookmark-%E6%A0%87%E8%AE%B0)
    - [方法二：借助 HTML 标记](#%E6%96%B9%E6%B3%95%E4%BA%8C%E5%80%9F%E5%8A%A9-html-%E6%A0%87%E8%AE%B0)
    - [方法三：生成 TOC](#%E6%96%B9%E6%B3%95%E4%B8%89%E7%94%9F%E6%88%90-toc)
  - [把 HTML 样式的文本转译为 MarkDown 格式](#%E6%8A%8A-html-%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%91%E4%B8%BA-markdown-%E6%A0%BC%E5%BC%8F)
- [展示](#%E5%B1%95%E7%A4%BA)
  - [以幻灯的形式播放 MarkDown 文档](#%E4%BB%A5%E5%B9%BB%E7%81%AF%E7%9A%84%E5%BD%A2%E5%BC%8F%E6%92%AD%E6%94%BE-markdown-%E6%96%87%E6%A1%A3)
  - [把 MarkDown 文档发布到其它平台](#%E6%8A%8A-markdown-%E6%96%87%E6%A1%A3%E5%8F%91%E5%B8%83%E5%88%B0%E5%85%B6%E5%AE%83%E5%B9%B3%E5%8F%B0)
  - [把系列 MarkDown 文档发布为电子书](#%E6%8A%8A%E7%B3%BB%E5%88%97-markdown-%E6%96%87%E6%A1%A3%E5%8F%91%E5%B8%83%E4%B8%BA%E7%94%B5%E5%AD%90%E4%B9%A6)
  - [在正文中引入别处内容、获取该内容的实时更新（embed）](#%E5%9C%A8%E6%AD%A3%E6%96%87%E4%B8%AD%E5%BC%95%E5%85%A5%E5%88%AB%E5%A4%84%E5%86%85%E5%AE%B9%E8%8E%B7%E5%8F%96%E8%AF%A5%E5%86%85%E5%AE%B9%E7%9A%84%E5%AE%9E%E6%97%B6%E6%9B%B4%E6%96%B0embed)
  - [其它](#%E5%85%B6%E5%AE%83)
- [CHANGELOG](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

注意：在 GitHub 网页查看可能看不出效果，建议把这个仓库 clone 到本地使用。且我会随手更新这个仓库的资源，建议 star 以便查找调取最新版。

## 内容编辑

MarkDown 编辑器有很多，推荐选择带目录栏、支持加载本地文件夹、可自行设定 CSS 渲染样式的。比如：

- [Typora — a markdown editor, markdown reader.](https://typora.io/)：Mac/Win 均支持，免费，界面美观
- [MWeb](http://zh.mweb.im/)：Mac ，100+ CNY ，个人感觉很值
- [Markdown Monster - A better Markdown Editor for Windows](https://markdownmonster.west-wind.com/)：Win ，免费，界面比较 geek 

或者选择一些不错的全能编辑器，比如 [Atom](https://atom.io/) /  [TextMate](http://macromates.com/) 。总之挑 1-2 个你用得顺手的就好。


### 在线协同编辑

推荐 [StackEdit – In-browser Markdown editor](https://stackedit.io/)。其实你若不嫌弃，也可以直接在 Google docs 等支持在线协同编辑的平台，以  MarkDown 源码格式协同创作……

### 快速创建表格

表格建议直接在 Google sheet / Numbers  等表格工具中先建好，再用 [Markdown Tables generator - TablesGenerator.com](http://www.tablesgenerator.com/markdown_tables) 一键转化为 MarkDown 格式 ，而非自己手动创建。

如果你的表格会持续更新，更建议你直接给出在线表格链接，这样你不必每次都更新 MarkDown 的表格，大伙儿也都能实时看到最新版。

如果你的表格是发布在支持 HTML 的页面，更优雅的方式是直接 embed ：https://github.com/ishanshan/CollaborationGuide4Shaper/tree/master/CONTENT/HbWorkingEfficiently.md#embed-something 。

### 优雅又省心地插入图片

技巧太多，另起一篇，详见 [这样用七牛，插图优雅又省心 · MarkDown 码字发文最佳实践 | ishanshan's blog](https://ishanshan.im/tool/community/HbMarkdownImage) 。

### 换行

<br>

`<br>`

### 设置组块折叠

效果：

<details>
<summary>Why aren't routes I have for my static export accessible in the development server?</summary>

This is a known issue with the architecture of Next.js. Until a solution is built into the framework, take a look at [this example solution](https://github.com/zeit/next.js/wiki/Centralizing-Routing) to centralize your routing.
</details>

实现方式：

	<details>
	<summary> 这里是不想被折叠的文字</summary>

	这里是被折叠的文字。

	看不同平台，不一定能正常换行、使用 MarkDown 语法。
	</details>

### 显示红绿对比的 diff

代码效果：

```diff
---
+++
@@ -7,7 +7,7 @@
 c = conn.cursor()

 for row in c.execute('SELECT * FROM weather_result'):
-     print(row)
+    print(row)

 # delete all records in the table
 c.execute('DELETE FROM weather_result')
@@ -19,8 +19,6 @@
 # search_weather.weather_query(city)
 # in_database = [(user_input, weather_condition, temperature)]
 # c.executemany('INSERT INTO weather_result VALUES(?,?,?)', in_database)
-
-

 # c.execute("INSERT INTO demo VALUES('2017-9-9', 198)")
 #
```


文字效果：

```diff

- 作品和作品的差别，源于卡片。人和人的差异，来自习惯。
+ 作品和作品的差别，源于卡片。人和人的差异，垒于习惯。一切皆时间的函数，时间最可怕的是复利效应。

- 怎么做？你看着办吧。
+ 怎么做？小女子我先干为敬，你看着办。

```

实现方法

	```diff

	- 减号后是原来的字符。
	+ 加号后是改后的字符。

	```

### 设置脚注

**Example:**

```
This is a footnote:[^sample_footnote]
```

**Result:**

This is a footnote:[^sample_footnote]

[^sample_footnote]: footnote text detail...

This is a footnote:[^2]

[^2]: footnote text detail...

（GitHub 渲染不支持，不过 Jekyll blog 支持，多数 MarkDown 编辑器也支持）





### 设置文内锚点

#### 方法一：使用 bookmark 标记

效果：点击标记字段便可直接跳转到文中指定位置。

设置方法：


1. 建立一个跳转的链接，标记方式为 `[说明文字](#jump)`：

	[说明文字](#jump)（你点击一下看效果？）

2. 标记要跳转到什么位置即可，标记方式为 `<span id = "jump">跳转到这里：</span>` ：


	<span id = "jump">跳转到这里：</span>



#### 方法二：借助 HTML 标记

HTML 中的 `<a>` 标签最重要的属性是 href ，它指示的链接目标，既可以是外部站点，也可以是页内锚点。页内锚点可以实现类似书签跳转的功能，最典型的就是点击 TOC 中的目录书签跳转到指定章节阅读。

构建页内锚点的语法，类似参考式链接：



1. 先定义锚点id：`<a href="#auchor_id">bookmark_text</a>`
2. 再定义一个id为auchor_id的对象（这里以`<p>`为例）：`<p id="auchor_id">auchor_text</p>`



例如，在文末定义了id为end的 EOF（End Of File）：`<p id="end">The end！</p>`，然后通过`<a href="#end">Goto the End!</a>`指定书签“Goto the End!”跳转到文末“The End!”处。

#### 方法三：生成 TOC

若想建当前文档目录，对于只在本地使用的 MarkDown 文档，可直接另起一行插入 `[TOC]` ，多数编辑器都可以如此渲染出当前文档目录，如：

[TOC]

但多数网页的 CSS （比如 GitHub 、GitBook 、gist 等）并不支持此 MarkDown 标记。无妨，此时可借助这个小脚本 [thlorenz/doctoc: Generates table of contents for markdown files inside local git repository. Links are compatible with anchors generated by github or other sites.](https://github.com/thlorenz/doctoc) 生成支持网页浏览的 MarkDown 目录；不过这种方式生成的目录在 MarkDown 编辑器里又不起作用了……你根据使用场景自行取用吧。

我一般都直接用后者，便于他人网页浏览。本地自己查看的话，就借助 MarkDown 编辑器 [MWeb](http://zh.mweb.im/) 自带的大纲视图，直接显示文档目录：

![sampleissueassignmenthandup.png](http://ishanshan.zoomquiet.top/share/sampleissueassignmenthandup.png?imageslim)



### 把 HTML 样式的文本转译为 MarkDown 格式

复制你想转译的内容，粘贴到这个 MarkDown 编辑器 [Typora — a minimal markdown reading & writing app](https://typora.io/) 中。然后全选、右键选择 `copy as MarkDown` ，再粘贴到其它编辑器，bingo！

在网页上遇到想进一步编辑使用的内容，这招特省事儿。



## 展示




### 以幻灯的形式播放 MarkDown 文档

本地展示的话，可直接用 [Marp - Markdown Presentation Writer](https://yhatt.github.io/marp/) ；在线展示可试试  [Remark](https://remarkjs.com/#1) 。

更多相关平台，见 [List of markdown presentation tools](https://gist.github.com/johnloy/27dd124ad40e210e91c70dd1c24ac8c8) 。



### 把 MarkDown 文档发布到其它平台

MarkDown 格式的文章如何发布到只支持 HTML 样式的平台，比如邮箱、公众号、知乎专栏等？

两种方案：

1. 直接粘贴 MarkDown 编辑器里渲染后的文本。
2. 浏览器里安装 [Markdown Here](https://markdown-here.com/) 插件，把 MarkDown 未渲染的内容粘贴过去后，一键渲染成指定样式。具体如何操作？可看 [利用 Markdown here 排版微信公众号](https://mp.weixin.qq.com/s?__biz=MzAwOTY0MTc3OA==&mid=2650253401&idx=1&sn=a1ceddeb552b65aab905c4a958955b60&chksm=835f8204b4280b129be1d8f3a71ad7fd182318be27bc7b52d88f75ccb26434c2d32ee347a77c#rd) 。

注意：

这样用 MarkDown Here 发布到公众号的文章，图片需要 5-10 分钟才能正常在后台显示，因为微信后台还要将你的这些图片重新上传到微信的服务器，先压缩，再打水印，需要一些时间。等 10 分钟再回来预览看看吧~

### 把系列 MarkDown 文档发布为电子书

可直接用 [GitBook](http://help.gitbook.com/) 来处理，常用以下操作：

- 把 GitHub 仓库内容发布为 GitBook 形式：https://github.com/OpenMindClub/Share/wiki/HbGitBookSetting
- [给 GitBook 添加全篇评论插件](https://github.com/OpenMindClub/Share/wiki/HbGitBookSetting#%E7%BB%99-gitbook-%E6%B7%BB%E5%8A%A0%E5%85%A8%E7%AF%87%E8%AF%84%E8%AE%BA%E5%B7%A5%E5%85%B7)
- 将 GitBook 内容导出为 PDF 文档： [eBook and PDF · GitBook Toolchain Documentation](https://toolchain.gitbook.com/ebook.html)

### 在正文中引入别处内容、获取该内容的实时更新（embed）

如果你想在正文中引入别处内容、获取该内容的实时更新，并展示得更丰富些，可以用 embed 的方式。

详见 https://github.com/ishanshan/CollaborationGuide4Shaper/blob/master/CONTENT/HbWorkingEfficiently.md#embed-something 。

### 其它

更多技巧，比如如何用 MarkDown 写论文，可见 [Markdown生态链整理 - 阳志平的网志](http://www.yangzhiping.com/tech/markdown-ecosystem.html)。

## CHANGELOG

- 200130 闪闪更新换行标记
- 181216 闪闪更新 MarkDown 编辑器推荐
- 180724 闪闪修改插图技巧链接
- 180715 闪闪增补如何显示红绿对比的 diff
- 180324 闪闪整理发布到外部仓库
