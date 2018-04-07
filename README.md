# vue-thinking

> 关于vue组件化思考和实践:smile:
## 1. 如何运行

> node版本大于 `[6.0]` npm版本大于 `[3.0]`

```sh
npm i
```

### 1.1 开发过程

#### 1.1.1 命令

```sh
# 开发
npm start

# 打包
npm run build

# 打包分析
npm run analyz
```

## git commit规范
- feat：新功能（feature）
- opt：优化（optimization）
- fix：修补bug
- docs：仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等（documentation）
- style： 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- chore：构建过程或辅助工具的变动
- ignore 比如.eslintignore .gitignore等

## 规范
- 2空格缩进
- js使用单引号，HTML属性使用双引号
- 除微信端需长按解析识别图片使用<img>外，静态图片(图标，背景灯)禁止使用```<img>```加载，统一是用css
- background-image(<url>), url不需要引号，统一使用相对路径
