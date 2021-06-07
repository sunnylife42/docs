
# 命名用英文，烦恼少大半 · 团队文档命名指南

发布于 2016-02-10

<br> 

文件命名看似简单，但其实体现**你对你的对象在当前体系中的关系/作用的理解**，往大了说，命名还直接反映**你对整个资源结构的理解**。

<!-- more -->

统一的命名规约，对团队，尤其对团队知识管理和异步协作来说，非常重要。否则创建一文件，队友难以识别所含内容，他他他他他都要多花一点时间来查找、确认，这不是找事么？

为减少此类不必要的团队协作成本，特整理一份团队文档命名规约，文件命名也可参考。

## 命名原则

以下原则规则较多，协作新人可先通览心中有数，具体操作时，多问自己一个问题即可：

>这样命名，我队友能快速调取他要的文件吗，一年/三年/五年后还能吗？

### 1. 用 ASCII 码命名

**[ASCII](https://en.wikipedia.org/wiki/ASCII)** 是 American Standard Code for Information Interchange 的简写，即美国信息互换标准代码。这套编码字符在大部分环境下都可以正常显示，不会乱码。

于国人，只要记住不用中文命名就好，尤其在取 WikiName 时。这不仅可以叫生成的 URL 干净清晰，还方便文件在同一目录下顺次呈现。且脱离了最熟悉的中文，大家在命名时会更慎重，更易遵守命名规则。

要而言之，用 ASCII 码命名，既叫机器可读，人的观感也好不少，一举多得何乐不为？当然，别用汉语拼音。

### 2. 尽量简明

简明的命名，能省不少识别取用的时间。命名时尽量注意：

- ~~[采用大驼峰式命名法](https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB)，比如 `HbDocName`~~ 210422 更新：采用**下划线命名法（underscore case）**，比如 hb_docname
    - 驼峰命名在一些情况下容易出错，比如有时候会被自动转为全小写，容错性不如下划线命名法好
    - 下面的例子就不一一修改了，你能理解意思就好
- 尽量不要混用多种命名法，错误例子比如 `HbDoc_Name`
- 日期使用 6 位数字标注，默认忽略年份前两位以减少字符，比如 `151203`（2015年 12 月 3 日）
- 避免语意重复，比如面对用户的 wiki 里 `HbAppUserGuide` 文档，命名简写为 `HbApp` 也并不会影响理解，加上 `UserGuide` 反倒叫人多反应一会儿，还让这个 wiki 链接长了不少，大可放心去掉

### 3. 追求不必改动

文件一旦释放到团队界面，就默认进入了团队记忆，命名每次更新，都意味着需要团队成员重新识别、知会。不轻易更改命名，便能减少这类不必要的认知负荷。 GitHub wiki 更是如此——版本记录以文件为单位，一旦更改文件名，便再难比对版本。

想叫文件名在大时间周期内不必变更，摸索一年，发现要点有三：

其一，**命名尽量选用[基本层次范畴(Basic level categories)](https://en.wikipedia.org/wiki/Prototype_theory#Basic_level_categories)词汇**，而非下位层次范畴(subordinate categories)词汇。

这个理解起来较简单，看几个例子你就明白了：

- HbStuGroup VS InfoPy103WeChatGroupRule

	之前有同事主动把建 Py103 学员群的一些固定动作、常用话术整理成了指南，命名 `InfoPy103WeChatGroupRule `，我问下期课程咋办，再建一个 `InfoPy104WeChatGroupRule `？且这文档里不止含群规吧？她把文档名改为`HbWeChatGroup` 。不久，我们 App 里有了自己的群组，即将不再用 微信 作学员群，这个指南就不得不改文件名或者新建一个文档（但公共界面有内容重复的文档更后患无穷，使不得使不得，新建同类文档为下策）。

	如果一开始就以 `HbStuGroup` 甚至 `HbUserGroup` 这类 基本层次范畴 的词汇命名，更换啥群组平台也无妨啦。

- HbUserService VS HbYixiu

	我们有个用户服务助理角色叫「一休」，这是个直接面对用户的角色，处理起来要点良多。同事很尽责，主动整理这个角色的工作指南，起名 `HbYixiu` ……文档整理得很好，命名如果看长远点就更出彩了——半年之后如果我们的用户服务角色多起来，比如有「阿西莫夫」等，这个文档命名还妥当吗？一年两年之后，新加入的同事，如果没人和他介绍，他能否快速找到这个角色的工作指南？

	如果进一步思考这个角色/指南的定位，用  `HbUserService`  这类 基本层次范畴 词汇命名，纵团队更迭再多亦无碍。

- HbAdminSystemOMCApp VS HbAdminSystem

	命名偏上位层次范畴(superordinate categories)时，建议修正一下标注更明确。比如今年团队只上线了一个产品的管理后台，看到团队 wiki 中 `HbAdminSystem` 文档，谁都知道是这个产品的管理后台使用指南。但如果明年又上线一款产品的管理后台，这个文档就不得不改名让大家更易识别。

	不如一开始就直接清晰命名 `HbOMCAppAdminSystem`，或 `HbAdminSystemOMCApp` 。

其二， **直接创建可交付的文件，以最终要交付的状态来命名**，不必拿过程文档来交流。

这个不仅是命名更是协作习惯，比较反常识，多数新人甚至有些职场老手也不习惯。我也用了近一年才慢慢习得。

比如当时我们做用户回访，想出些稿件聊聊某门课程这一年对学员有什么影响，决定发邮件给学员，邀请他们回答一些问题。按照惯例，在 GitHub 协作；A 同事先起草了学员七问，并通过一个名为 `ContentPyStudentsSevenquestion` 的 wiki page 给出；B 同事基于这个版本，又增补了自己的版本； C 同事根据自己的理解一合并，再起草一个面对学员的邮件 `MlStuReviewInvitaiton` ，大家基于这个邮件继续修订措辞；最后发现 `ContentPyStudentsSevenquestion`  这个过程文档没什么再用的价值，删去。

回顾下来，你会发现很多交互和迭代没必要，完全可以更高效干脆——一上来就以最终要交付的结果 `MlStuReviewInvitaiton` 命名，并以面对用户的口吻起草内容，哪怕只是加上邮件标题、称呼、结尾，完成封邮件的 MVP ，也能让团队省去大半一来二去确认意思、转换表达的麻烦，留出更多时间打磨交付用户的结果。

再如，日常开产品优化讨论会，新人多会每次会议创建一个纪要文档。但同主题的频繁讨论，尤其形成的决议，直接增补到行动指南比如 `Hb` 或 `Plan` 开头的文档更省力。毕竟反复讨论，其实是为形成更明确的行动共识；未来会频繁调用的，也是这类文档，而非 `Log` 开头的会议纪要文档。


其三， **同一主题内容持续积累到同一指定文档**。

协作越久文档越多，不想信息过载，最好一个场景只保留唯一可用文档，大家都只更新这唯一可用文档。否则内部必会混乱，或维护者不知还有其它版本需要更新，或使用者所用并非新版，烦恼不断。

此时，提前长远考虑你创建的文件/文档解决什么问题、怎么命名更为重要。

比如你想通过一个页面告诉用户你家 App 怎么使，那这个 HbApp 页面会包含哪些内容，用户常见问题自检解决方案，是放在这个页面，还是另起一个 InfoAppFAQ 的页面？

再如，用户界面已经有了 HbApp 页面告诉用户怎么使用，常见问题如何自检，那内部协作界面，是否还需要一个文档说明内部同事如何处理收到的 App 使用问题？这个文档应该怎么写，怎么命名，才更方便同事长期调用、维护？

还如，如果已有供内部同事参考的用户常见问题解决指南，内容越积越多，各类问题是否需要拆分单独文档，如何命名方便长期调用、维护？

这一切都在锻炼和体现 你对你的对象 在当前体系中的关系/作用的理解。这一切又有点像软件工程中的架构设计，你需要考虑如何拆分模块，接口怎么设计更合理简洁。




## 命名规则

在同一路径下，文件一般可以根据文件名自动排序，进而呈现出树状结构，方便其他伙伴查找。知晓这点，命名方法要点很简单——**按你想要呈现的树状结构来命名**。

具体方式如下：

### 约定、遵循一组常用缩写

既然以英文命名，缩写不可避免，特此约定一组 [团队常用缩写](https://github.com/OpenMindClub/Share/wiki/HbShortRule)，以建立共识方便协作。

### 常规命名结构：文件属性-类别/项目/使用者


**起名或起草文档前，先明确文档属性**，比如是 `Idx` `info` `Hb` 还是 `Log`（这其实在思考所建内容的整体结构和关联）：

- `Hb` 里一般会链接到 `Idx` `Info` 等以便进一步参考调用的内容
- `Idx` ，注意这是**索引索引索引！**里面一般会有较多链接，尤其是 `info` 文档链接
- `Info` 一般里头是可直接复制使用或者不需再进一步点击的内容
- `Log` 沟通纪要、会议备忘等

如此，在一个目录下浏览时，文档按类似树状的结构展开，比如 `Hb` ：

 - HbDoc ~ 文档创建规约
 - HbDocName ~ 文档命名规约
 - HbMentor ~ 教练手册
 - HbPM ~ 项目经理手册

一些系列文档不前缀文档属性代号也 OK 。比如我们课程每周都有微信群答疑，答疑记录文档，新手一般会延续中文文档命名习惯（ `0w 微信群答疑纪要` ）以 `Log0wQA`命名，但更合适的应该是`LogQAw0`。若此，在同一个目录下，可以快速定位这个系列文档下的所有内容。若目录下，并无其它 QA 系列文档的需求，根据简明原则，还可直接命名为 `QAw0`。

文档属性确定，便可**根据具体情境和想达成的效果确定单词的先后顺序**。

那如果单词不同先后次序都能叫人知晓这是什么文档，比如`HbBrandOM` VS `HbOMBrand`两种命名方式，都可以让人一眼识别这是 OM 品牌使用手册，如何确定单词先后顺序？

此时哪个命名更优雅，就取决于这个文档出现在什么情境下，及自己想干嘛：比如这个 OM 品牌使用手册，如果在集团的 wiki 下，希望兄弟公司在同一个事务上有更多的借鉴，就以前者命名；如果各公司相对独立，希望每个子公司的同事更方便找到本公司的内容，则后者命名更妥当。

### 版本号标注规则

手册等反复修改使用的文档，版本号采用[语义化版本控制](http://semver.org/lang/zh-CN/)的命名方式。但其实基于 git 进行文档管理后，不标注版本号也无妨。

会议纪要等基于时间的文档，以日期进行命名，比如：

- LM2015Q3 ~ 2015年第3季度季会纪要
- LMApp151203 ~ 2015年12月3日产品会议纪要
	- 如果经常开产品会或其它某个主题的会，就把主题放日期前形成一个单独序列
	- 如果是临时的主题，就放在日期后面，一目了然以便日后查找，比如 LM151205Community ~ 2015年12月5日社群运营讨论纪要

### 请勿出现「@」「#」等符号

咱们经常通过链接传递 GitHub 里的内容。而在 GitHub 机制里，文档名直接体现在文档链接中，比如仓库 [OpenMindClub/Share](https://github.com/OpenMindClub/Share) wiki 下的 `InfoJob.md` 文件，地址是 https://github.com/OpenMindClub/Share/wiki/InfoJob 。

而传递链接的微信/企业微信等 IM 对话窗口比较特殊，无法将 `@` 符号后头的内容自动识别为链接。所以，为了不给别人添麻烦 —— 比如把链接复制到浏览器中才能打开，**请你命名文件时尽量不带 `@`、`#` 等特殊字符**。

**如果想突出标记人名，在人名前加下划线**即可，比如  `ReviewPy101_yixiu` 。其它特殊分隔也可用下划线。但如果你在用非下划线命名法的项目团队，比如用 [大驼峰式命名法（upper camel case） - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB) 的开智，请注意：若非特殊情况，请勿在命名中使用下划线（敲黑板！）—— **一个系统中最好不要混用两种命名法则**。

**更不建议命名中同时出现 `@` 和` .`** ，比如 `Ml2017@con.openmind` ，这样把文档地址（比如 https://github.com/AILearners/con.openmindclub.com/wiki/MI2017@con.openmind ） 发在 IM 对话窗口里可能被识别为邮箱，无法直接点击访问得复制到浏览器就罢了，点击还会触发启动邮箱遭人嫌……

## 命名示例

若刚接触这样的命名规约，难免不知所措。不必担心，多看别人怎么命名,根据命名猜测文档内容并验证，慢慢就轻车熟路啦，比如可以看看看这些示例：


- [Home · OpenMindClub/Share Wiki](https://github.com/OpenMindClub/Share/wiki) 右侧 pages ：

	![sampledocname.jpeg](http://ishanshan.zoomquiet.top/share/sampledocname.jpeg)
- [CollaborationGuide4Shaper/CONTENT at master · ishanshan/CollaborationGuide4Shaper](https://github.com/ishanshan/CollaborationGuide4Shaper/tree/master/CONTENT) 所含文件：

	![sampledocname2.jpeg](http://ishanshan.zoomquiet.top/share/sampledocname2.jpeg)
- [HbCollaborateWikiandCode · OpenMindClub/Share Wiki](https://github.com/OpenMindClub/Share/wiki/HbCollaborateWikiandCode) 所举案例：

		HbCollaborate.md                  InfoShow.md                       LogMeeting171226PrepareforShow.md
		Home.md                           InfoShowQA.md                     ReviewFinalProject_Serena333.md
		IndexReference.md                 InfoVedio.md                      ReviewFinalProject_ishanshan.md
		InfoLost.md                       LogMeeting171205BrandName.md      ReviewFinalProject_yixiu.md
		InfoProjectIdea.md                LogMeeting171213VedioIdea.md      _Sidebar.md

怎样，是不是十分优雅干净？（不是？来人呐拖出去胖揍一顿~）

--

不管怎样，文档命名规则没有对错之分。如果单看某个文件名，队友现在和未来能明白其中所含内容，协作需要时能即时调取，这就是好规则。

祝你远离「各人用词、命名习惯不一样，难以形成共识，徒增团队协作成本」的烦恼（比如俺在[《GitHub 协作五大业余姿势》](https://ishanshan.im/community/HbGitHubCooperate.html) 提到的现象）！


## CHANGELOG

- 210422 删去大驼峰命名法，改为推荐下划线命名法
- 180327 更新命名示例
- 170826 增补 `请勿出现「@」「#」符号` 组块
- 170318 删减细节修订措辞
- 170201 增补原则及示例
- 160210 增补完善后在 Blog 发布
- 151220 在团队仓库创建
