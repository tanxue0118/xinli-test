const questions = [
  {
    id: 1,
    text: "伴侣一整天没有回你消息，你会：",
    dimensions: { anxiety: true, trust: true },
    options: [
      { label: "觉得TA可能在忙，等TA回复就好", scores: { anxiety: 1, trust: 3 } },
      { label: "有点担心，但不会想太多", scores: { anxiety: 2, trust: 2 } },
      { label: "非常焦虑，不断查看手机", scores: { anxiety: 3, trust: 1 } }
    ]
  },
  {
    id: 2,
    text: "当伴侣想要和你聊聊你们的关系时，你会：",
    dimensions: { avoidance: true, communication: true },
    options: [
      { label: "很乐意敞开心扉交流", scores: { avoidance: 1, communication: 3 } },
      { label: "愿意聊但会有些紧张", scores: { avoidance: 2, communication: 2 } },
      { label: "感到压力，想转移话题", scores: { avoidance: 3, communication: 1 } }
    ]
  },
  {
    id: 3,
    text: "你更倾向于哪种相处模式？",
    dimensions: { avoidance: true, dependency: true },
    options: [
      { label: "和伴侣形影不离，分享一切", scores: { avoidance: 1, dependency: 3 } },
      { label: "保持适当距离，偶尔粘在一起", scores: { avoidance: 2, dependency: 2 } },
      { label: "各自有独立空间，定期见面就好", scores: { avoidance: 3, dependency: 1 } }
    ]
  },
  {
    id: 4,
    text: "吵架后伴侣摔门而出，你会：",
    dimensions: { anxiety: true, trust: true },
    options: [
      { label: "等双方冷静后再沟通", scores: { anxiety: 1, trust: 3 } },
      { label: "有些难过，但相信会和好", scores: { anxiety: 2, trust: 2 } },
      { label: "极度恐慌，害怕TA不回来了", scores: { anxiety: 3, trust: 1 } }
    ]
  },
  {
    id: 5,
    text: "你在关系中最看重的是：",
    dimensions: { anxiety: true, dependency: true },
    options: [
      { label: "相互信任和安全感", scores: { anxiety: 1, dependency: 2 } },
      { label: "陪伴和理解", scores: { anxiety: 2, dependency: 3 } },
      { label: "对方的承诺和忠诚", scores: { anxiety: 3, dependency: 1 } }
    ]
  },
  {
    id: 6,
    text: "你会检查伴侣的手机或社交媒体吗？",
    dimensions: { anxiety: true, trust: true },
    options: [
      { label: "从不会，我相信TA", scores: { anxiety: 1, trust: 3 } },
      { label: "偶尔会好奇看一下", scores: { anxiety: 2, trust: 2 } },
      { label: "经常忍不住想查看", scores: { anxiety: 3, trust: 1 } }
    ]
  },
  {
    id: 7,
    text: "你向伴侣表达「我爱你」的频率是：",
    dimensions: { communication: true, dependency: true },
    options: [
      { label: "自然而然，不需要频繁表达", scores: { communication: 1, dependency: 1 } },
      { label: "适当时会说", scores: { communication: 2, dependency: 2 } },
      { label: "经常说，需要确认对方也爱我", scores: { communication: 3, dependency: 3 } }
    ]
  },
  {
    id: 8,
    text: "当伴侣向你倾诉烦恼时，你会：",
    dimensions: { avoidance: true, communication: true },
    options: [
      { label: "耐心倾听，给予情感支持", scores: { avoidance: 1, communication: 3 } },
      { label: "会听但不知道说什么好", scores: { avoidance: 2, communication: 2 } },
      { label: "感到不自在，想帮TA解决问题", scores: { avoidance: 3, communication: 1 } }
    ]
  },
  {
    id: 9,
    text: "你认为依赖别人是：",
    dimensions: { dependency: true, avoidance: true },
    options: [
      { label: "很正常，人需要互相支持", scores: { dependency: 1, avoidance: 1 } },
      { label: "看情况，适度依赖没问题", scores: { dependency: 2, avoidance: 2 } },
      { label: "一种软弱，应该自己解决", scores: { dependency: 3, avoidance: 3 } }
    ]
  },
  {
    id: 10,
    text: "你觉得自己值得被爱吗？",
    dimensions: { anxiety: true, trust: true },
    options: [
      { label: "当然，我很有自信", scores: { anxiety: 1, trust: 3 } },
      { label: "大多数时候觉得还行", scores: { anxiety: 2, trust: 2 } },
      { label: "经常怀疑自己是否足够好", scores: { anxiety: 3, trust: 1 } }
    ]
  },
  {
    id: 11,
    text: "你对亲密关系的整体态度是：",
    dimensions: { avoidance: true, dependency: true },
    options: [
      { label: "渴望并享受亲密关系", scores: { avoidance: 1, dependency: 2 } },
      { label: "喜欢但有时觉得累", scores: { avoidance: 2, dependency: 3 } },
      { label: "既想要又害怕受伤", scores: { avoidance: 3, dependency: 1 } }
    ]
  },
  {
    id: 12,
    text: "伴侣说「我们需要谈谈」，你的第一反应是：",
    dimensions: { anxiety: true, communication: true },
    options: [
      { label: "好啊，可能是有重要的事", scores: { anxiety: 1, communication: 3 } },
      { label: "有点紧张，不知道要谈什么", scores: { anxiety: 2, communication: 2 } },
      { label: "心跳加速，担心是不是要分手", scores: { anxiety: 3, communication: 1 } }
    ]
  },
  {
    id: 13,
    text: "你和伴侣发生亲密接触时，你会：",
    dimensions: { avoidance: true, communication: true },
    options: [
      { label: "感到温暖和连接", scores: { avoidance: 1, communication: 3 } },
      { label: "享受但不会太主动", scores: { avoidance: 2, communication: 2 } },
      { label: "有些不自在，需要保持距离", scores: { avoidance: 3, communication: 1 } }
    ]
  },
  {
    id: 14,
    text: "伴侣生病了，你会：",
    dimensions: { dependency: true, communication: true },
    options: [
      { label: "放下一切去照顾TA", scores: { dependency: 1, communication: 3 } },
      { label: "关心TA但不太知道怎么照顾", scores: { dependency: 2, communication: 2 } },
      { label: "会关心但更希望有人帮忙", scores: { dependency: 3, communication: 1 } }
    ]
  },
  {
    id: 15,
    text: "约会迟到半小时，伴侣还没到，你会：",
    dimensions: { anxiety: true, trust: true },
    options: [
      { label: "继续等，可能有事耽搁了", scores: { anxiety: 1, trust: 3 } },
      { label: "有点不耐烦，发个消息问问", scores: { anxiety: 2, trust: 2 } },
      { label: "非常生气，觉得不被重视", scores: { anxiety: 3, trust: 1 } }
    ]
  },
  {
    id: 16,
    text: "你更喜欢哪种约会方式？",
    dimensions: { avoidance: true, communication: true },
    options: [
      { label: "深度交流，促膝长谈", scores: { avoidance: 1, communication: 3 } },
      { label: "一起做些有趣的事", scores: { avoidance: 2, communication: 2 } },
      { label: "保持轻松，不要太腻在一起", scores: { avoidance: 3, communication: 1 } }
    ]
  },
  {
    id: 17,
    text: "伴侣想要见你的父母，你会：",
    dimensions: { avoidance: true, dependency: true },
    options: [
      { label: "很开心，觉得关系更进一步", scores: { avoidance: 1, dependency: 2 } },
      { label: "有些紧张但愿意安排", scores: { avoidance: 2, dependency: 3 } },
      { label: "感到压力，觉得还不到时候", scores: { avoidance: 3, dependency: 1 } }
    ]
  },
  {
    id: 18,
    text: "看到伴侣和异性朋友聊天，你会：",
    dimensions: { anxiety: true, trust: true },
    options: [
      { label: "不在意，TA有自己的社交圈", scores: { anxiety: 1, trust: 3 } },
      { label: "有点在意但不会说什么", scores: { anxiety: 2, trust: 2 } },
      { label: "感到嫉妒和不安", scores: { anxiety: 3, trust: 1 } }
    ]
  },
  {
    id: 19,
    text: "伴侣称赞你时，你会：",
    dimensions: { anxiety: true, communication: true },
    options: [
      { label: "欣然接受，很开心", scores: { anxiety: 1, communication: 3 } },
      { label: "有点不好意思但心里高兴", scores: { anxiety: 2, communication: 2 } },
      { label: "怀疑TA是不是在敷衍我", scores: { anxiety: 3, communication: 1 } }
    ]
  },
  {
    id: 20,
    text: "你更害怕哪种情况？",
    dimensions: { anxiety: true, dependency: true },
    options: [
      { label: "失去自我，被关系束缚", scores: { anxiety: 1, dependency: 1 } },
      { label: "两个人渐行渐远", scores: { anxiety: 2, dependency: 2 } },
      { label: "被抛弃，独自一人", scores: { anxiety: 3, dependency: 3 } }
    ]
  },
  {
    id: 21,
    text: "和伴侣意见不合时，你通常会：",
    dimensions: { avoidance: true, communication: true },
    options: [
      { label: "坚持表达自己的观点", scores: { avoidance: 1, communication: 3 } },
      { label: "尝试找到折中方案", scores: { avoidance: 2, communication: 2 } },
      { label: "选择退让或回避冲突", scores: { avoidance: 3, communication: 1 } }
    ]
  },
  {
    id: 22,
    text: "伴侣做了让你失望的事，你会：",
    dimensions: { anxiety: true, communication: true },
    options: [
      { label: "直接告诉TA我的感受", scores: { anxiety: 1, communication: 3 } },
      { label: "有些难过，但会试着理解", scores: { anxiety: 2, communication: 2 } },
      { label: "怀疑TA是不是不在乎我了", scores: { anxiety: 3, communication: 1 } }
    ]
  },
  {
    id: 23,
    text: "分手后，你通常会：",
    dimensions: { anxiety: true, dependency: true },
    options: [
      { label: "接受现实，慢慢放下", scores: { anxiety: 1, dependency: 1 } },
      { label: "难过一段时间，但会走出来", scores: { anxiety: 2, dependency: 2 } },
      { label: "长时间无法释怀，反复回忆", scores: { anxiety: 3, dependency: 3 } }
    ]
  },
  {
    id: 24,
    text: "伴侣说「我永远爱你」，你会：",
    dimensions: { trust: true, anxiety: true },
    options: [
      { label: "感到幸福和安心", scores: { trust: 3, anxiety: 1 } },
      { label: "觉得甜蜜但保持理性", scores: { trust: 2, anxiety: 2 } },
      { label: "想相信但不敢完全相信", scores: { trust: 1, anxiety: 3 } }
    ]
  },
  {
    id: 25,
    text: "你认为承诺是：",
    dimensions: { dependency: true, trust: true },
    options: [
      { label: "关系中很重要的一部分", scores: { dependency: 2, trust: 3 } },
      { label: "有意义但不必太较真", scores: { dependency: 2, trust: 2 } },
      { label: "一种束缚，让人有压力", scores: { dependency: 1, trust: 1 } }
    ]
  },
  {
    id: 26,
    text: "伴侣需要出差一个月，你会：",
    dimensions: { anxiety: true, dependency: true },
    options: [
      { label: "支持TA的工作，保持联系就好", scores: { anxiety: 1, dependency: 1 } },
      { label: "会想念但能理解", scores: { anxiety: 2, dependency: 2 } },
      { label: "非常不舍，担心感情会变淡", scores: { anxiety: 3, dependency: 3 } }
    ]
  },
  {
    id: 27,
    text: "你会和伴侣分享自己的秘密吗？",
    dimensions: { communication: true, trust: true },
    options: [
      { label: "会，我们之间没有秘密", scores: { communication: 3, trust: 3 } },
      { label: "会选择性分享", scores: { communication: 2, trust: 2 } },
      { label: "不太愿意，怕被看透", scores: { communication: 1, trust: 1 } }
    ]
  },
  {
    id: 28,
    text: "伴侣想要更深入了解你的过去，你会：",
    dimensions: { avoidance: true, communication: true },
    options: [
      { label: "乐意分享，希望TA了解我", scores: { avoidance: 1, communication: 3 } },
      { label: "会说一些，但保留一些", scores: { avoidance: 2, communication: 2 } },
      { label: "感到不适，不想提起过去", scores: { avoidance: 3, communication: 1 } }
    ]
  },
  {
    id: 29,
    text: "你在伴侣面前哭泣会感到：",
    dimensions: { communication: true, avoidance: true },
    options: [
      { label: "自然，这是表达情感的方式", scores: { communication: 3, avoidance: 1 } },
      { label: "有点不好意思但可以接受", scores: { communication: 2, avoidance: 2 } },
      { label: "很不自在，觉得暴露了脆弱", scores: { communication: 1, avoidance: 3 } }
    ]
  },
  {
    id: 30,
    text: "谈到未来，你更倾向于：",
    dimensions: { anxiety: true, dependency: true },
    options: [
      { label: "顺其自然，活在当下", scores: { anxiety: 1, dependency: 1 } },
      { label: "有一些规划但保持灵活", scores: { anxiety: 2, dependency: 2 } },
      { label: "需要明确的承诺和计划", scores: { anxiety: 3, dependency: 3 } }
    ]
  },
  {
    id: 31,
    text: "伴侣提出同居，你会：",
    dimensions: { avoidance: true, dependency: true },
    options: [
      { label: "很期待，想每天在一起", scores: { avoidance: 1, dependency: 3 } },
      { label: "可以考虑，需要商量细节", scores: { avoidance: 2, dependency: 2 } },
      { label: "觉得太快了，需要更多时间", scores: { avoidance: 3, dependency: 1 } }
    ]
  },
  {
    id: 32,
    text: "你认为理想的亲密关系是：",
    dimensions: { dependency: true, avoidance: true },
    options: [
      { label: "两个人保持独立又相互支持", scores: { dependency: 2, avoidance: 2 } },
      { label: "亲密无间，彼此是最好的朋友", scores: { dependency: 3, avoidance: 1 } },
      { label: "完全融合，成为彼此的全部", scores: { dependency: 3, avoidance: 1 } }
    ]
  },
  {
    id: 33,
    text: "当你感到脆弱时，你会：",
    dimensions: { communication: true, dependency: true },
    options: [
      { label: "向伴侣寻求安慰和支持", scores: { communication: 3, dependency: 2 } },
      { label: "自己消化，不太想麻烦别人", scores: { communication: 1, dependency: 1 } },
      { label: "既想靠近又怕被拒绝", scores: { communication: 2, dependency: 3 } }
    ]
  },
  {
    id: 34,
    text: "你对独处的态度是：",
    dimensions: { dependency: true, avoidance: true },
    options: [
      { label: "享受独处时光，这是充电的方式", scores: { dependency: 1, avoidance: 2 } },
      { label: "偶尔需要，但不要太久", scores: { dependency: 2, avoidance: 2 } },
      { label: "害怕独处，会觉得孤独", scores: { dependency: 3, avoidance: 1 } }
    ]
  },
  {
    id: 35,
    text: "总体来说，你在亲密关系中感到：",
    dimensions: { anxiety: true, trust: true, communication: true },
    options: [
      { label: "安全和满足", scores: { anxiety: 1, trust: 3, communication: 3 } },
      { label: "有时开心有时困扰", scores: { anxiety: 2, trust: 2, communication: 2 } },
      { label: "焦虑和不确定", scores: { anxiety: 3, trust: 1, communication: 1 } }
    ]
  }
];

const dimensionInfo = {
  anxiety: {
    name: "焦虑维度",
    icon: " ",
    description: "反映你对被抛弃的恐惧程度",
    low: "安全感强，对关系有信心，不过度担忧",
    high: "容易焦虑，担心被抛弃，需要更多确认"
  },
  avoidance: {
    name: "回避维度",
    icon: " ",
    description: "反映你对亲密关系的回避程度",
    low: "享受亲密，愿意敞开心扉，情感表达自然",
    high: "保持距离，不太愿意亲近，重视独立空间"
  },
  dependency: {
    name: "依赖维度",
    icon: " ",
    description: "反映你对依赖他人的态度",
    low: "独立自主，喜欢自己解决问题",
    high: "渴望陪伴和支持，不喜独处"
  },
  trust: {
    name: "信任维度",
    icon: " ",
    description: "反映你对伴侣的信任程度",
    low: "容易怀疑，难以完全信任他人",
    high: "信任伴侣，给予空间和自由"
  },
  communication: {
    name: "沟通维度",
    icon: " ",
    description: "反映你的情感表达能力",
    low: "不善表达情感，回避深入交流",
    high: "善于沟通，能清晰表达感受和需求"
  }
};

const attachmentTypes = {
  secure: {
    name: "安全型依恋",
    icon: " ",
    color: "#059669",
    description: "你拥有健康、稳定的依恋模式。你能够自在地与伴侣建立亲密关系，同时也尊重彼此的独立空间。你相信自己值得被爱，也相信伴侣是可靠的。",
    characteristics: [
      "能够自在地表达情感和需求",
      "信任伴侣，不过度猜疑",
      "在关系中感到安全和满足",
      "能够处理冲突和分歧",
      "尊重伴侣的独立性"
    ],
    advice: [
      "继续保持开放、诚实的沟通",
      "珍惜并维护现有的健康关系模式",
      "在关系中保持适当的个人空间",
      "继续培养自我价值感"
    ]
  },
  anxious: {
    name: "焦虑型依恋",
    icon: " ",
    color: "#d97706",
    description: "你倾向于在关系中寻求高度的安全感和确认。你可能经常担心伴侣是否真的爱你，害怕被抛弃。你渴望亲密，但有时过度的担忧可能会影响关系的和谐。",
    characteristics: [
      "强烈需要伴侣的确认和关注",
      "对关系中的不确定性感到焦虑",
      "害怕被抛弃或不被重视",
      "可能过度解读伴侣的行为",
      "在关系中付出很多，期待同等回报"
    ],
    advice: [
      "学习自我安抚和情绪调节技巧",
      "培养独立的兴趣爱好和社交圈",
      "与伴侣坦诚沟通你的需求和担忧",
      "练习自我肯定，减少对外部确认的依赖"
    ]
  },
  avoidant: {
    name: "回避型依恋",
    icon: " ",
    color: "#7c3aed",
    description: "你倾向于保持情感上的独立和距离。你可能觉得过度亲密会让你失去自由或变得脆弱。你重视个人空间和自主性，但有时可能会让伴侣感到被疏远。",
    characteristics: [
      "重视独立和自主性",
      "不太愿意表达情感或脆弱",
      "在亲密关系中保持一定距离",
      "更倾向于自己解决问题",
      "可能觉得他人过于依赖"
    ],
    advice: [
      "尝试逐步向伴侣敞开心扉",
      "练习识别和表达自己的情感",
      "理解亲密不等于失去自我",
      "在关系中寻找安全与独立的平衡"
    ]
  },
  fearful: {
    name: "恐惧型依恋",
    icon: " ",
    color: "#dc2626",
    description: "你在关系中同时渴望亲密又害怕受伤。你可能有过被伤害或被忽视的经历，让你既想要靠近他人，又担心再次受伤。你的情感世界丰富而复杂，需要更多的安全感来建立信任。",
    characteristics: [
      "在亲密与回避之间摇摆不定",
      "既渴望连接又害怕受伤",
      "可能有不稳定的关系模式",
      "对信任他人有困难",
      "情绪反应可能较为强烈"
    ],
    advice: [
      "寻求专业心理咨询帮助",
      "学习建立安全感的方法",
      "练习自我关怀和自我接纳",
      "逐步建立对伴侣的信任"
    ]
  }
};