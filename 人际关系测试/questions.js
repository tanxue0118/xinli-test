const questions = [
  {
    question: "在与他人交往时，你通常会：",
    options: [
      { text: "主动热情，容易建立关系", score: 3 },
      { text: "友好但保持距离", score: 2 },
      { text: "被动等待，不主动", score: 1 },
      { text: "避免交往，感到困难", score: 0 }
    ]
  },
  {
    question: "当朋友遇到困难时，你会：",
    options: [
      { text: "主动提供帮助和支持", score: 3 },
      { text: "询问是否需要帮助", score: 2 },
      { text: "等对方开口求助", score: 1 },
      { text: "保持距离，避免卷入", score: 0 }
    ]
  },
  {
    question: "在与他人发生矛盾时，你通常会：",
    options: [
      { text: "主动沟通，寻求和解", score: 3 },
      { text: "冷静后沟通", score: 2 },
      { text: "等待对方先道歉", score: 1 },
      { text: "避免接触，冷战处理", score: 0 }
    ]
  },
  {
    question: "对于自己的社交圈，你通常感到：",
    options: [
      { text: "非常满意，朋友很多", score: 3 },
      { text: "基本满意，有几个好朋友", score: 2 },
      { text: "不太满意，朋友较少", score: 1 },
      { text: "非常不满意，感到孤独", score: 0 }
    ]
  },
  {
    question: "在与他人交流时，你通常会：",
    options: [
      { text: "认真倾听，给予反馈", score: 3 },
      { text: "偶尔倾听，偶尔表达", score: 2 },
      { text: "主要表达自己", score: 1 },
      { text: "很少交流，感到困难", score: 0 }
    ]
  },
  {
    question: "当别人向你倾诉时，你会：",
    options: [
      { text: "耐心倾听，给予支持", score: 3 },
      { text: "听一会儿，给点建议", score: 2 },
      { text: "心不在焉，想自己的事", score: 1 },
      { text: "不想听，想结束话题", score: 0 }
    ]
  },
  {
    question: "在团队合作中，你通常会：",
    options: [
      { text: "积极参与，促进合作", score: 3 },
      { text: "完成自己的部分", score: 2 },
      { text: "被动参与，不太投入", score: 1 },
      { text: "避免参与，喜欢独自工作", score: 0 }
    ]
  },
  {
    question: "对于他人的缺点，你通常会：",
    options: [
      { text: "包容接受，理解差异", score: 3 },
      { text: "基本接受，偶尔在意", score: 2 },
      { text: "有些在意，难以接受", score: 1 },
      { text: "非常在意，经常批评", score: 0 }
    ]
  },
  {
    question: "在社交场合中，你通常会：",
    options: [
      { text: "享受社交，主动交流", score: 3 },
      { text: "基本放松，偶尔交流", score: 2 },
      { text: "有些紧张，不主动", score: 1 },
      { text: "非常紧张，尽量避免", score: 0 }
    ]
  },
  {
    question: "当需要帮助时，你会：",
    options: [
      { text: "主动向他人求助", score: 3 },
      { text: "犹豫后求助", score: 2 },
      { text: "不愿求助，自己硬撑", score: 1 },
      { text: "从不求助，觉得麻烦别人", score: 0 }
    ]
  },
  {
    question: "对于自己的家人，你通常会：",
    options: [
      { text: "经常联系，关系亲密", score: 3 },
      { text: "偶尔联系，关系良好", score: 2 },
      { text: "很少联系，关系一般", score: 1 },
      { text: "几乎不联系，关系疏远", score: 0 }
    ]
  },
  {
    question: "在与他人分享时，你通常会：",
    options: [
      { text: "乐于分享，不计较", score: 3 },
      { text: "适当分享", score: 2 },
      { text: "不太愿意分享", score: 1 },
      { text: "从不分享，觉得吃亏", score: 0 }
    ]
  },
  {
    question: "当别人取得成功时，你会：",
    options: [
      { text: "真心祝贺，为他们高兴", score: 3 },
      { text: "表面祝贺，内心有些羡慕", score: 2 },
      { text: "感到嫉妒或不平衡", score: 1 },
      { text: "感到不舒服，避免谈论", score: 0 }
    ]
  },
  {
    question: "在与他人相处时，你通常会：",
    options: [
      { text: "真诚坦率，不伪装", score: 3 },
      { text: "基本真诚，有所保留", score: 2 },
      { text: "经常伪装，迎合他人", score: 1 },
      { text: "很难真诚，感到不安全", score: 0 }
    ]
  },
  {
    question: "对于自己的承诺，你通常会：",
    options: [
      { text: "说到做到，守信用", score: 3 },
      { text: "基本能做到", score: 2 },
      { text: "经常食言", score: 1 },
      { text: "很少遵守承诺", score: 0 }
    ]
  },
  {
    question: "在与他人相处时，你是否经常感到被误解？",
    options: [
      { text: "很少，沟通顺畅", score: 3 },
      { text: "偶尔会感到", score: 2 },
      { text: "经常感到被误解", score: 1 },
      { text: "总是感到被误解", score: 0 }
    ]
  },
  {
    question: "对于自己的社交能力，你通常会：",
    options: [
      { text: "非常自信", score: 3 },
      { text: "基本自信", score: 2 },
      { text: "不太自信", score: 1 },
      { text: "非常不自信", score: 0 }
    ]
  },
  {
    question: "在与他人相处时，你是否经常感到疲惫？",
    options: [
      { text: "很少，享受社交", score: 3 },
      { text: "偶尔会感到", score: 2 },
      { text: "经常感到疲惫", score: 1 },
      { text: "总是感到疲惫", score: 0 }
    ]
  },
  {
    question: "对于自己的人际关系，你通常感到：",
    options: [
      { text: "非常满意", score: 3 },
      { text: "基本满意", score: 2 },
      { text: "不太满意", score: 1 },
      { text: "非常不满意", score: 0 }
    ]
  },
  {
    question: "总体来说，你的人际关系质量是：",
    options: [
      { text: "非常好", score: 3 },
      { text: "良好", score: 2 },
      { text: "一般", score: 1 },
      { text: "较差", score: 0 }
    ]
  }
];