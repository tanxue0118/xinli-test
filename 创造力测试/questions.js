const questions = [
  {
    question: "面对问题时，你通常会：",
    options: [
      { text: "按照常规方法解决", score: 0 },
      { text: "尝试一两种新方法", score: 1 },
      { text: "经常思考创新的解决方案", score: 2 },
      { text: "总是寻找独特的解决途径", score: 3 }
    ]
  },
  {
    question: "你对新事物的态度是：",
    options: [
      { text: "倾向于保持现状", score: 0 },
      { text: "偶尔尝试新事物", score: 1 },
      { text: "喜欢尝试新事物", score: 2 },
      { text: "热衷于探索未知领域", score: 3 }
    ]
  },
  {
    question: "你在空闲时间喜欢：",
    options: [
      { text: "做熟悉的事情", score: 0 },
      { text: "偶尔尝试新活动", score: 1 },
      { text: "经常参加创意活动", score: 2 },
      { text: "总是寻找新的创意体验", score: 3 }
    ]
  },
  {
    question: "你如何看待失败？",
    options: [
      { text: "尽量避免", score: 0 },
      { text: "视为挫折", score: 1 },
      { text: "视为学习机会", score: 2 },
      { text: "视为创新的必经之路", score: 3 }
    ]
  },
  {
    question: "你是否经常产生新的想法？",
    options: [
      { text: "很少", score: 0 },
      { text: "偶尔", score: 1 },
      { text: "经常", score: 2 },
      { text: "几乎每天都有", score: 3 }
    ]
  },
  {
    question: "你对艺术的态度是：",
    options: [
      { text: "不太感兴趣", score: 0 },
      { text: "偶尔欣赏", score: 1 },
      { text: "经常接触艺术", score: 2 },
      { text: "热衷于艺术创作", score: 3 }
    ]
  },
  {
    question: "你是否喜欢头脑风暴？",
    options: [
      { text: "不喜欢", score: 0 },
      { text: "可以接受", score: 1 },
      { text: "比较喜欢", score: 2 },
      { text: "非常喜欢", score: 3 }
    ]
  },
  {
    question: "你如何看待规则？",
    options: [
      { text: "必须严格遵守", score: 0 },
      { text: "一般会遵守", score: 1 },
      { text: "有时会挑战规则", score: 2 },
      { text: "认为规则可以被改变", score: 3 }
    ]
  },
  {
    question: "你是否喜欢动手制作东西？",
    options: [
      { text: "不喜欢", score: 0 },
      { text: "偶尔会做", score: 1 },
      { text: "经常动手", score: 2 },
      { text: "非常喜欢DIY", score: 3 }
    ]
  },
  {
    question: "你解决问题的方式是：",
    options: [
      { text: "按部就班", score: 0 },
      { text: "偶尔尝试新方法", score: 1 },
      { text: "经常寻找新思路", score: 2 },
      { text: "总是寻找创新方案", score: 3 }
    ]
  },
  {
    question: "你是否喜欢写作或绘画？",
    options: [
      { text: "不喜欢", score: 0 },
      { text: "偶尔会做", score: 1 },
      { text: "经常创作", score: 2 },
      { text: "这是我的爱好", score: 3 }
    ]
  },
  {
    question: "你如何看待不同的观点？",
    options: [
      { text: "坚持自己的观点", score: 0 },
      { text: "可以倾听", score: 1 },
      { text: "喜欢听取不同意见", score: 2 },
      { text: "积极寻求多元观点", score: 3 }
    ]
  },
  {
    question: "你是否经常改变日常习惯？",
    options: [
      { text: "从不改变", score: 0 },
      { text: "偶尔改变", score: 1 },
      { text: "经常尝试新方式", score: 2 },
      { text: "喜欢不断变化", score: 3 }
    ]
  },
  {
    question: "你对科技产品的态度是：",
    options: [
      { text: "只用基本功能", score: 0 },
      { text: "会学习新功能", score: 1 },
      { text: "喜欢探索新功能", score: 2 },
      { text: "热衷于尝试最新科技", score: 3 }
    ]
  },
  {
    question: "你是否喜欢即兴发挥？",
    options: [
      { text: "不喜欢，喜欢计划", score: 0 },
      { text: "偶尔可以", score: 1 },
      { text: "比较喜欢", score: 2 },
      { text: "非常喜欢即兴", score: 3 }
    ]
  },
  {
    question: "你如何看待传统？",
    options: [
      { text: "必须尊重传统", score: 0 },
      { text: "一般会尊重", score: 1 },
      { text: "有时会质疑传统", score: 2 },
      { text: "认为传统可以被革新", score: 3 }
    ]
  },
  {
    question: "你是否经常提出新建议？",
    options: [
      { text: "很少", score: 0 },
      { text: "偶尔", score: 1 },
      { text: "经常", score: 2 },
      { text: "几乎每次会议都会", score: 3 }
    ]
  },
  {
    question: "你对冒险的态度是：",
    options: [
      { text: "尽量避免", score: 0 },
      { text: "谨慎对待", score: 1 },
      { text: "愿意尝试", score: 2 },
      { text: "喜欢冒险", score: 3 }
    ]
  },
  {
    question: "你是否喜欢解决复杂问题？",
    options: [
      { text: "不喜欢", score: 0 },
      { text: "可以接受", score: 1 },
      { text: "比较喜欢", score: 2 },
      { text: "非常喜欢挑战", score: 3 }
    ]
  },
  {
    question: "你认为自己是一个有创造力的人吗？",
    options: [
      { text: "不是", score: 0 },
      { text: "一般", score: 1 },
      { text: "比较有创造力", score: 2 },
      { text: "非常有创造力", score: 3 }
    ]
  }
];
