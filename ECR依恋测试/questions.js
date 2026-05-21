var ecrQuestions = [
  { id: 1, text: "总的来说，我不喜欢让恋人知道自己内心深处的感觉", dimension: "avoidance", reverse: false },
  { id: 2, text: "我担心我会被抛弃", dimension: "anxiety", reverse: false },
  { id: 3, text: "我觉得跟恋人亲近是一件惬意的事情", dimension: "avoidance", reverse: true },
  { id: 4, text: "我很担心我的恋爱关系", dimension: "anxiety", reverse: false },
  { id: 5, text: "当恋人开始要跟我亲近时，我发现我自己在退缩", dimension: "avoidance", reverse: false },
  { id: 6, text: "我担心恋人不会象我关心他（/她）那样地关心我", dimension: "anxiety", reverse: false },
  { id: 7, text: "当恋人希望跟我非常亲近时，我会觉得不自在", dimension: "avoidance", reverse: false },
  { id: 8, text: "我有点担心会失去恋人", dimension: "anxiety", reverse: false },
  { id: 9, text: "我觉得对恋人开诚布公，不是一件很舒服的事情", dimension: "avoidance", reverse: false },
  { id: 10, text: "我常常希望恋人对我的感情和我对恋人的感情一样强烈", dimension: "anxiety", reverse: false },
  { id: 11, text: "我想与恋人亲近，但我又总是会退缩不前", dimension: "avoidance", reverse: false },
  { id: 12, text: "我常常想与恋人形影不离，但有时这样会把恋人吓跑", dimension: "anxiety", reverse: false },
  { id: 13, text: "当恋人跟我过分亲密的时候，我会感到内心紧张", dimension: "avoidance", reverse: false },
  { id: 14, text: "我担心一个人独处", dimension: "anxiety", reverse: false },
  { id: 15, text: "我愿意把我内心的想法和感觉告诉恋人，我觉得这是一件自在的事情", dimension: "avoidance", reverse: true },
  { id: 16, text: "我想跟恋人非常亲密的愿望，有时会把恋人吓跑", dimension: "anxiety", reverse: false },
  { id: 17, text: "我试图避免与恋人变得太亲近", dimension: "avoidance", reverse: false },
  { id: 18, text: "我需要我的恋人一再地保证他/她是爱我的", dimension: "anxiety", reverse: false },
  { id: 19, text: "我觉得我比较容易与恋人亲近", dimension: "avoidance", reverse: true },
  { id: 20, text: "我觉得自己在要求恋人把更多的感觉，以及对恋爱关系的投入程度表现出来", dimension: "anxiety", reverse: false },
  { id: 21, text: "我发现让我依赖恋人，是一件困难的事情", dimension: "avoidance", reverse: false },
  { id: 22, text: "我并不是常常担心被恋人抛弃", dimension: "anxiety", reverse: true },
  { id: 23, text: "我倾向于不跟恋人过分亲密", dimension: "avoidance", reverse: false },
  { id: 24, text: "如果我无法得到恋人的注意和关心，我会心烦意乱或者生气", dimension: "anxiety", reverse: false },
  { id: 25, text: "我跟恋人什么事情都讲", dimension: "avoidance", reverse: true },
  { id: 26, text: "我发现恋人并不愿意象我所想的那样跟我亲近", dimension: "anxiety", reverse: false },
  { id: 27, text: "我经常与恋人讨论我所遇到的问题以及我关心的事情", dimension: "avoidance", reverse: true },
  { id: 28, text: "如果我还没有恋人的话，我会感到有点焦虑和不安", dimension: "anxiety", reverse: false },
  { id: 29, text: "我觉得依赖恋人是很自在的事情", dimension: "avoidance", reverse: true },
  { id: 30, text: "如果恋人不能象我所希望的那样在我身边时，我会感到灰心丧气", dimension: "anxiety", reverse: false },
  { id: 31, text: "我并不在意从恋人那里寻找安慰，听取劝告，得到帮助", dimension: "avoidance", reverse: true },
  { id: 32, text: "如果在我需要的时候，恋人却不在我身边，我会感到沮丧", dimension: "anxiety", reverse: false },
  { id: 33, text: "在需要的时候，我向恋人求助，是很有用的", dimension: "avoidance", reverse: true },
  { id: 34, text: "当恋人不赞同我时，我觉得确实是我不好", dimension: "anxiety", reverse: false },
  { id: 35, text: "我会在很多事情上向恋人求助，包括寻求安慰和得到承诺", dimension: "avoidance", reverse: true },
  { id: 36, text: "当恋人不花时间和我在一起时，我会感到怨恨", dimension: "anxiety", reverse: false }
];

var attachmentTypes = {
  secure: {
    name: "安全型依恋",
    nameEn: "Secure",
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
  fearful: {
    name: "恐惧型依恋",
    nameEn: "Fearful",
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
  },
  preoccupied: {
    name: "专注型依恋",
    nameEn: "Preoccupied",
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
  dismissing: {
    name: "冷漠型依恋",
    nameEn: "Dismissing",
    icon: "❄️",
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
  }
};