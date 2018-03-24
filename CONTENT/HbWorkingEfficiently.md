

# 提升工作效率的小技巧

~ 汇总常用平台操作技巧，以备查阅：

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

  - [Mac 快捷键](#mac-%E5%BF%AB%E6%8D%B7%E9%94%AE)
  - [zotero 快捷键](#zotero-%E5%BF%AB%E6%8D%B7%E9%94%AE)
  - [Jekyll blog 发布预览](#jekyll-blog-%E5%8F%91%E5%B8%83%E9%A2%84%E8%A7%88)
  - [git](#git)
    - [删除大型文件](#%E5%88%A0%E9%99%A4%E5%A4%A7%E5%9E%8B%E6%96%87%E4%BB%B6)
    - [强制滚回某个版本](#%E5%BC%BA%E5%88%B6%E6%BB%9A%E5%9B%9E%E6%9F%90%E4%B8%AA%E7%89%88%E6%9C%AC)
  - [CHANGELOG](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Mac 快捷键

- 调出 emoji ：command + control + spacebar
- 截图：
	- 自带快捷键
	
		- 全屏截图：Command+Shift+3, 使用快捷键后会马上截获当前的全屏。
		- 区域截图：Command+Shift +4, 使用快捷键后会出现带坐标的瞄准器，拖拽选择要截图的区域。
		- 程序窗口截图： Command+Shift+4+Space, 使用快捷键后会出现一个照相机的图标， 选择程序窗口，然后单击截图。
	- 注意： 
		- 默认情况下，所有截图会保存在桌面上，也就是 Desktop 文件夹下。
		- 如果你在上述任意一套组合键中加上 Control 键，则截图会自动进入系统的剪切板记录，桌面不会再保存截图，此时你可以在 Pixelmator 这种图片编辑软件上直接 Command + V 进行粘贴。
	- 微信或企业微信截图快捷键：command + shift + a

更多 Mac 常用快捷键见 http://ishanshan.qiniudn.com/share/hbhotkeymac 。

## zotero 快捷键

Assign Colored Tag to an Item with 1 to 6 keys 
：[kb:keyboard_shortcuts [Zotero Documentation]](https://www.zotero.org/support/kb/keyboard_shortcuts)

## Jekyll blog 发布预览

若能在 commit 到 GitHub 前先实时预览 Jekyll Blog 发布效果，维护 blog 将省心不少。

如何实现？可以参考官方教程： http://jekyllcn.com/docs/installation/ 。

配置完后，每次只需进入 blog 目录，输入 `jekyll serve` 命令，即可通过网址（端口） http://127.0.0.1:4000/ 实时预览编辑效果。

## git 

### 删除大型文件

有时候新 clone 下来的仓库在 push 时会提示没有 push 权限，此时可以试试这个命令再 push :

	rm .git/hooks/pre-push 

或 rmlfs （已在 atext 配置缩略指令） 

### 强制滚回某个版本 

如果想滚回到某个版本、消除这个版本之后的修改记录，可以这么操作：

- 把那个版本的代号找出来
- 进入仓库目录，输入以下命令：

		git reset --hard <hash of version you need>
		
		git add .
		git commit -m "revert to XXX version"
		git push -f


## CHANGELOG 

- 180323 闪闪创建

