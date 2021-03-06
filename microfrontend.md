# 微前端（Micro-Frontend）

## 概念

> **微前端是一种架构风格，其中众多独立交付的前端应用组合成一个大型整体。**

整体可以概括为：

- 代码解耦，应用聚合
- 功能解耦，产品聚合
- 开发解耦，交付聚合
- 项目解耦，运营聚合

## 微前端优点

传统 SPA 开发模式：

	- 随着产品迭代， 逐渐发展为巨石应用；
	- 技术栈不断变迁升级，多框架多版本/同框架多版本的情况难以避免；
	- 跨团队合作困难；

而微前端架构的优点就呼之欲出：

- 增量开发，（在不受单体架构拖累的前提下，一次性重写整个系统的风险下，以及改写匆忙写成的代码）

 - 独立开发
   	- 微前端体系下，每个小模块的代码库要比一个单体前端的代码库小很多。对于开发者而言较小的代码库维护起来更简单方便，而且微前端还能避免无关组件之间不必要的耦合，让代码更简洁；
      	- 微前端会让开发者更审慎的把数据和事件在应用的各个部分之间流动的方式，就算没有微前端我们也应该如此
 - 独立部署
    - 每个微前端都应该有自己的持续交付管道，这些管道可以将微前端构建,测试并部署到生产环境中。
 - 独立运行
 - 团队自治
    - 一支独立的团队可以自主完成从产品构思到最终发布的完整流程，有足够的能力独立向客户交付价值，从而可以更高效的工作；
    - 团队凝聚力更高

## 发展历程

1. 技术栈的迭代与升级
   - web时代的发展，技术栈层出不穷，三大主流（React/Vue/Angular）框架。随着技术的发展，必然存在持续不断地迭代我们的技术体系，同时也要兼容老项目的运行
2. 巨石应用的维护困难
   - 有些项目经过多年的持续迭代，已经变得非常庞大，维护起来也越来越难，甚至一次编译部署都需要花费很长的时间，这就是所谓的巨石应用
3. 新的前端服用模式探索
   - 各个系统至今啊有很多的功能需要复用
     - 可以通过复制代码来实现模块复用，但这种方式low，而且难以维护。NPM?但是也会存在诸多问题。比如现实中存在一个业务模块，将这个模块整体发布成 npm 包，然后在项目中引用，但是业务功能就伴随着频繁的需求迭代，我们需要不断的调整这个npm包，然后再到各个项目中更新，构建，部署。这个过程效率低容易反复和遗漏
   - 跨系统的某个功能模块开发
     - 这个功能模块涉及多个系统，导致开发周期长，效率低
     - 可能会请第三方团队协同开发，这种跨团队合作就存在很多问题
       	1. 容易引起代码冲突；
        	2. 各团队开发的模块之间没有隔离，容易互相影响，从而遇到各种不可预知的问题。
        	3. 合并代码后仍然需要花费不少时间进行回归测试

## 建设方案

微前端其实是一个完整的技术应用架构体系

1. 应用开发链路闭环

   - “零成本接入”

2. 主框架的关键技术点

   - MPA + 路由分发
   - 类Single-SPA
   - 基座式SPA，主从应用设计
   - 传统SPA+组件化（比如 Web Components） + 私有 npm源

   | 方式                                             | 优点                                                         | 缺点                                                         |
   | ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | MPA + 路由分发                                   | - 框架无关；<br />- 独立开发、部署、运行；<br /> - 应用之间 100% 隔离。 | - 应用之间的彻底割裂导致复用困难。<br />- 每个独立的spa应用加载时间较长，容易出现白屏，影响用户体；<br />- 后续如果要做同屏多应用，不便于扩展 |
   | 类 Single-SPA                                    | - 框架无关；<br />- 独立开发，部署，运行；<br />- 项目自由切割，应用可以自由组合，方便复用 | - 子应用需要实现mount,unmount等钩子，侵入式的代码开发体验并不是特别友好<br />- 全局污染和资源竞争 |
   | 基座式SPA，主从应用设计                          | 打包出来的子应用只包含了业务代码，体积小，加载快，用户体验好 | - 基座就决定了它是框架强相关的，哪怕是基座的版本升级迭代，非常容易造成子应用造成break-change<br />- 这种方式对规范的依赖最强，我们必须遵循一定的规范来开发项目，从dev到build，无一不需要建设自己的开发体系来实现上述效果。 |
   | 传统SPA + 组件化（如Web Components） + 私有npm源 | 对现有项目渐进式增强，逐步改进                               | - 随着业务中组件数的爆发式增加，组件粒度通信，以及组件的维护成本都急剧增加<br />- 并不能走到真正的独立开发，测试，部署 |


3. 配置中心等相关配置配套设施

## 最终成果

*To be Continued..*

<!--
1. 巨石应用减负
2. 模块复用
3. 跨系统开发模式革新
4. 多团队合作模式优化
-->

## 参考链接

- [可能是你见过的最完美的微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)
- [MicroFrontend & MircoServer, Genesis 对远程组件的实践](https://juejin.im/post/5eec1bb6518825657a3e1817)

## 示例链接
- [single-spa Example](https://react.microfrontends.app/)
- [feed me](https://demo.microfrontends.com/)
 
