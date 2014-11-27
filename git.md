---
layout: page
title: "代码管理"
permalink: /git/
---

暂时将代码部署在[Bitbucket]的git仓库中，代码工具使用[Sourcetree]。

<h3>准备工作</h3>
注册[Bitbucket]账号，下载git代码工具[Sourcetree]。

<h3>加入项目</h3>
告知[Bitbucket]用户名或注册邮箱即可通过邀请加入项目。

<h3>获取代码</h3>
登录[Bitbucket]选择代码仓库，点击"Clone"即可获取git仓库地址，可以通过命令行或者代码工具来拉取代码，如果已安装代码工具[Sourcetree]可以点击 “Clone in SourceTree” 来获取代码。

<img src="/public/upload/2014-11-26-01.jpg"/>

<h3>基本操作</h3>
使用[Bitbucket]拉取代码到本地后，即可看到项目代码视图。

1.点击"`Commit`"，勾选修改的文件并填写说明即可提交代码到`本地仓库`。<br>（建议完成一个功能或者一个页面的时候“Commit”一次）。

2.点击"`Push`"即可将"Commit"的本地代码推送到`服务器仓库`。

3.当"Push"时，如果提示代码不是最新可以尝试点击“`Fetch`”抓取服务器端的代码更新。

4.当有服务器端代码有更新时，点击“`Pull`”可以将服务器端的代码更新到本地。

如果想查看更多操作请访问[sourcetree]官网。


<img src="/public/upload/2014-11-26-02.jpg"/>

<h3>简单说明</h3>
请将不需要提交的文件比如：PSD源文件、测试目录或文件，使用.gitignore排除掉。

关于[Git]。


[bitbucket]:https://bitbucket.org/
[sourcetree]:http://www.sourcetreeapp.com/
[git]:http://git-scm.com/