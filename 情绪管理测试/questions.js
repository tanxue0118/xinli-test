const questions = [
  {
    question: "当你感到愤怒时，你通常会：",
    options: [
      { text: "立即爆发，难以控制", score: 0 },
      { text: "压抑愤怒，不表现出来", score: 1 },
      { text: "冷静分析，寻找原因", score: 2 },
      { text: "表达感受，寻求解决", score: 3 }
    ]
  },
  {
    question: "在面对压力时，你通常会：",
    options: [
      { text: "感到崩溃，无法应对", score: 0 },
      { text: "逃避问题，不愿面对", score: 1 },
      { text: "寻找方法，积极应对", score: 2 },
      { text: "保持冷静，有效管理", score: 3 }
    ]
  },
  {
    question: "当你感到悲伤时，你通常会：",
    options: [
      { text: "长时间沉浸在悲伤中", score: 0 },
      { text: "压抑情绪，装作没事", score: 1 },
      { text: "允许自己悲伤，但能恢复", score: 2 },
      { text: "寻找支持，积极调节", score: 3 }
    ]
  },
  {
    question: "在与他人发生冲突时，你会：",
    options: [
      { text: "情绪激动，难以沟通", score: 0 },
      { text: "避免冲突，委屈自己", score: 1 },
      { text: "冷静沟通，表达观点", score: 2 },
      { text: "寻求双赢，有效解决", score: 3 }
    ]
  },
  {
    question: "当你感到焦虑时，你通常会：",
    options: [
      { text: "焦虑加剧，无法控制", score: 0 },
      { text: "逃避焦虑源", score: 1 },
      { text: "深呼吸，让自己冷静", score: 2 },
      { text: "分析原因，采取行动", score: 3 }
    ]
  },
  {
    question: "在面对批评时，你通常会：",
    options: [
      { text: "情绪崩溃，感到委屈", score: 0 },
      { text: "表面接受，内心抵触", score: 1 },
      { text: "虚心接受，反思改进", score: 2 },
      { text: "感谢批评，从中学习", score: 3 }
    ]
  },
  {
    question: "当你感到开心时，你会：",
    options: [
      { text: "担心快乐不会持久", score: 0 },
      { text: "独自享受，不分享", score: 1 },
      { text: "与他人分享快乐", score: 2 },
      { text: "珍惜当下，感恩生活", score: 3 }
    ]
  },
  {
    question: "在面对失败时，你通常会：",
    options: [
      { text: "一蹶不振，怀疑自己", score: 0 },
      { text: "逃避失败，不愿面对", score: 1 },
      { text: "分析原因，重新尝试", score: 2 },
      { text: "视为学习，继续前进", score: 3 }
    ]
  },
  {
    question: "当你需要等待时，你通常会：",
    options: [
      { text: "极度不耐烦，烦躁不安", score: 0 },
      { text: "有些不耐烦", score: 1 },
      { text: "保持耐心，利用时间", score: 2 },
      { text: "享受等待，心态平和", score: 3 }
    ]
  },
  {
    question: "在面对不确定性时，你通常会：",
    options: [
      { text: "极度焦虑，无法接受", score: 0 },
      { text: "感到不安，但能应对", score: 1 },
      { text: "保持冷静，积极应对", score: 2 },
      { text: "接受不确定性，灵活应对", score: 3 }
    ]
  },
  {
    question: "当你感到嫉妒时，你通常会：",
    options: [
      { text: "嫉妒加剧，影响关系", score: 0 },
      { text: "压抑嫉妒，但内心难受", score: 1 },
      { text: "分析嫉妒原因", score: 2 },
      { text: "转化为动力，提升自己", score: 3 }
    ]
  },
  {
    question: "在与他人交往时，你通常会：",
    options: [
      { text: "情绪波动大，影响交往", score: 0 },
      { text: "压抑情绪，保持距离", score: 1 },
      { text: "适度表达情绪", score: 2 },
      { text: "真诚表达，建立连接", score: 3 }
    ]
  },
  {
    question: "当你感到孤独时，你通常会：",
    options: [
      { text: "极度痛苦，无法忍受", score: 0 },
      { text: "逃避孤独感", score: 1 },
      { text: "享受独处时光", score: 2 },
      { text: "利用独处，提升自己", score: 3 }
    ]
  },
  {
    question: "在面对变化时，你通常会：",
    options: [
      { text: "极度抗拒，感到恐慌", score: 0 },
      { text: "不适应，但能接受", score: 1 },
      { text: "积极适应，寻找机会", score: 2 },
      { text: "欢迎变化，灵活应对", score: 3 }
    ]
  },
  {
    question: "当你需要拒绝别人时，你会：",
    options: [
      { text: "感到极度内疚", score: 0 },
      { text: "难以拒绝，勉强答应", score: 1 },
      { text: "委婉拒绝，表达立场", score: 2 },
      { text: "坚定拒绝，不伤害关系", score: 3 }
    ]
  },
  {
    question: "在面对误解时，你通常会：",
    options: [
      { text: "极度愤怒，难以沟通", score: 0 },
      { text: "感到委屈，不愿解释", score: 1 },
      { text: "冷静解释，澄清误解", score: 2 },
      { text: "理解对方，有效沟通", score: 3 }
    ]
  },
  {
    question: "当你感到疲惫时，你通常会：",
    options: [
      { text: "情绪低落，影响生活", score: 0 },
      { text: "强撑着，不愿休息", score: 1 },
      { text: "适当休息，恢复精力", score: 2 },
      { text: "合理安排，平衡生活", score: 3 }
    ]
  },
  {
    question: "在面对挑战时，你通常会：",
    options: [
      { text: "感到恐惧，想要逃避", score: 0 },
      { text: "有些担心，但能面对", score: 1 },
      { text: "积极应对，寻找方法", score: 2 },
      { text: "视为机会，充满动力", score: 3 }
    ]
  },
  {
    question: "当你与他人意见不同时，你会：",
    options: [
      { text: "坚持己见，难以妥协", score: 0 },
      { text: "避免争论，保持沉默", score: 1 },
      { text: "尊重差异，求同存异", score: 2 },
      { text: "开放讨论，达成共识", score: 3 }
    ]
  },
  {
    question: "总体来说，你的情绪管理能力是：",
    options: [
      { text: "很差，经常被情绪控制", score: 0 },
      { text: "一般，有时能控制", score: 1 },
      { text: "较好，基本能管理情绪", score: 2 },
      { text: "很好，能有效管理情绪", score: 3 }
    ]
  }
];