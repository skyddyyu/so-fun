这是soFun项目。主要想做一个工具站。欢迎贡献commit或提出宝贵意见。

我们的口号是：**构建快乐，发现趣味。**

> 这是一个工具网站，用于创建有用好玩的实用工具。

## 快速上手

```bash
# 打开项目请先运行下面命令初始化husky以保证代码风格
npm run prepare

# 项目启动
npm run dev
# or
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000).

## 首次启动

1. 统一使用yarn管理依赖

   ```bash
   # 请统一使用yarn做包管理 且确保yarn不是1.x版本

   # 查看yarn版本
   yarn --version

   # 使用如下命令可以更新yarn到最新版本
   corepack enable
   yarn set version berry
   # 设置新版yarn依旧使用node_modules
   # 新建.yarnrc.yml文件 内容为 nodeLinker: node-modules
   # 最后
   yarn install
   ```

2. 初始化数据库和数据

## 了解更多

要了解 Next.js, 可以看下面如下资源:

- [Next.js Documentation](https://nextjs.org/docs) - 学习了解Next.js的功能和API.
- [Learn Next.js实战项目](https://github.com/vercel/next-learn/tree/main/dashboard/final-example) - 一个渐进式的练习实战. [Learn Next.js文档](https://nextjs.org/learn)

## Git规范（重要哦）

- 开发时请多建分支，对于主要Task级别的功能任务，请建立 feat/用户名/功能任务简写的分支，如feat/kaiwen/addHome

- 提交时恰到好处的描述。

- 使用emoji 来标识每次提交的主要意图。[gitmoji](https://gitmoji.js.org/)

  ![emoji](https://blog.sofun.fun/images/other/gitmoji.png)

## 使用到的技术栈

项目主要使用next.js做全栈,入门上手前大致了解服务端组件和客户端组件、服务端Action即可。以及React的一些入门基础即可。

本项目运行在 Node 18.20.1(推荐)

1. 数据库相关

   [Prisma](https://www.prisma.io/docs)和Postgresql

2. 后端参数校验

   [Zod](https://zod.dev/?id=basic-usage)

3. CSS相关

   [TailwindCss](https://tailwindcss.com)和Less版本的CSS Module(喜欢CSS和模板分离的可以使用这种。)

4. 全局状态管理

   [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

5. Hook相关

   [AHook](https://ahooks.js.org/zh-CN/hooks/use-request/index)

6. 其他

   图标：[lucide-react](https://lucide.dev/)
