const questions = [
  {
    question: "当你面对新的挑战时，你的第一反应是：",
    options: [
      { text: "感到害怕，想逃避", score: 0 },
      { text: "有些担心，但愿意尝试", score: 1 },
      { text: "感到兴奋，期待挑战", score: 2 },
      { text: "充满信心，准备迎接", score: 3 }
    ]
  },
  {
    question: "在团队讨论中，你通常会：",
    options: [
      { text: "很少发言，担心说错", score: 0 },
      { text: "偶尔发言，但不太自信", score: 1 },
      { text: "积极参与，表达观点", score: 2 },
      { text: "主动引导，自信表达", score: 3 }
    ]
  },
  {
    question: "当你犯错时，你通常会：",
    options: [
      { text: "过度自责，长时间无法释怀", score: 0 },
      { text: "感到沮丧，但能恢复", score: 1 },
      { text: "承认错误，从中学习", score: 2 },
      { text: "坦然接受，视为成长机会", score: 3 }
    ]
  },
  {
    question: "对于自己的外貌，你通常感到：",
    options: [
      { text: "非常不满意，经常自卑", score: 0 },
      { text: "有些不满意", score: 1 },
      { text: "基本满意", score: 2 },
      { text: "非常满意，自信满满", score: 3 }
    ]
  },
  {
    question: "在社交场合中，你通常会：",
    options: [
      { text: "感到紧张，尽量避免", score: 0 },
      { text: "有些不自在，但能应付", score: 1 },
      { text: "轻松自如，享受交流", score: 2 },
      { text: "成为焦点，引领话题", score: 3 }
    ]
  },
  {
    question: "当你需要做重要决定时，你会：",
    options: [
      { text: "犹豫不决，难以选择", score: 0 },
      { text: "反复权衡，担心出错", score: 1 },
      { text: "果断决定，承担责任", score: 2 },
      { text: "自信决策，毫不怀疑", score: 3 }
    ]
  },
  {
    question: "面对失败时，你通常会：",
    options: [
      { text: "一蹶不振，怀疑自己", score: 0 },
      { text: "感到沮丧，需要时间恢复", score: 1 },
      { text: "分析原因，重新尝试", score: 2 },
      { text: "视为学习，继续前进", score: 3 }
    ]
  },
  {
    question: "对于自己的能力，你通常：",
    options: [
      { text: "经常怀疑，缺乏信心", score: 0 },
      { text: "有时怀疑", score: 1 },
      { text: "基本信任", score: 2 },
      { text: "非常信任，充满信心", score: 3 }
    ]
  },
  {
    question: "在工作中，你通常会：",
    options: [
      { text: "担心做不好，压力很大", score: 0 },
      { text: "认真完成，但不太自信", score: 1 },
      { text: "高效完成，有成就感", score: 2 },
      { text: "主动承担，追求卓越", score: 3 }
    ]
  },
  {
    question: "当别人赞美你时，你会：",
    options: [
      { text: "感到不自在，认为不配", score: 0 },
      { text: "有些怀疑，但能接受", score: 1 },
      { text: "欣然接受，感到开心", score: 2 },
      { text: "自信接受，认为实至名归", score: 3 }
    ]
  },
  {
    question: "在公开场合发言时，你通常感到：",
    options: [
      { text: "极度紧张，声音颤抖", score: 0 },
      { text: "有些紧张，但能完成", score: 1 },
      { text: "基本放松，表达清晰", score: 2 },
      { text: "自信从容，侃侃而谈", score: 3 }
    ]
  },
  {
    question: "对于未来，你通常感到：",
    options: [
      { text: "迷茫焦虑，缺乏方向", score: 0 },
      { text: "有些担忧，但能应对", score: 1 },
      { text: "充满期待，积极规划", score: 2 },
      { text: "信心满满，相信会更好", score: 3 }
    ]
  },
  {
    question: "当你与他人比较时，你通常会：",
    options: [
      { text: "感到自卑，觉得自己不如人", score: 0 },
      { text: "有些羡慕，但能接受自己", score: 1 },
      { text: "客观看待，关注自身成长", score: 2 },
      { text: "欣赏他人，也认可自己", score: 3 }
    ]
  },
  {
    question: "在学习新技能时，你通常会：",
    options: [
      { text: "担心学不会，缺乏动力", score: 0 },
      { text: "认真学习，但不太自信", score: 1 },
      { text: "积极学习，相信能掌握", score: 2 },
      { text: "充满热情，快速掌握", score: 3 }
    ]
  },
  {
    question: "对于自己的缺点，你通常会：",
    options: [
      { text: "非常在意，经常自卑", score: 0 },
      { text: "有些在意，但能接受", score: 1 },
      { text: "客观看待，努力改进", score: 2 },
      { text: "坦然接受，视为特点", score: 3 }
    ]
  },
  {
    question: "在竞争环境中，你通常会：",
    options: [
      { text: "感到压力，担心失败", score: 0 },
      { text: "有些紧张，但能参与", score: 1 },
      { text: "积极竞争，享受过程", score: 2 },
      { text: "充满斗志，自信取胜", score: 3 }
    ]
  },
  {
    question: "当你被拒绝时，你会：",
    options: [
      { text: "极度沮丧，怀疑自己", score: 0 },
      { text: "感到失落，但能恢复", score: 1 },
      { text: "坦然接受，继续尝试", score: 2 },
      { text: "不以为意，寻找其他机会", score: 3 }
    ]
  },
  {
    question: "对于自己的价值，你通常会：",
    options: [
      { text: "经常怀疑，觉得自己没用", score: 0 },
      { text: "有时怀疑", score: 1 },
      { text: "基本认可", score: 2 },
      { text: "非常认可，觉得自己有价值", score: 3 }
    ]
  },
  {
    question: "在压力下工作时，你通常会：",
    options: [
      { text: "感到焦虑，效率下降", score: 0 },
      { text: "有些紧张，但能完成", score: 1 },
      { text: "保持冷静，高效完成", score: 2 },
      { text: "激发潜能，表现更好", score: 3 }
    ]
  },
  {
    question: "总体来说，你对自己的信心程度是：",
    options: [
      { text: "非常缺乏信心", score: 0 },
      { text: "信心不足", score: 1 },
      { text: "比较有信心", score: 2 },
      { text: "非常有信心", score: 3 }
    ]
  }
];