const questions = [
  {
    question: "对于自己的价值，你通常会：",
    options: [
      { text: "非常认可，觉得自己有价值", score: 3 },
      { text: "基本认可", score: 2 },
      { text: "有时怀疑", score: 1 },
      { text: "经常怀疑，觉得自己没用", score: 0 }
    ]
  },
  {
    question: "当别人赞美你时，你会：",
    options: [
      { text: "自信接受，认为实至名归", score: 3 },
      { text: "欣然接受，感到开心", score: 2 },
      { text: "有些怀疑，但能接受", score: 1 },
      { text: "感到不自在，认为不配", score: 0 }
    ]
  },
  {
    question: "对于自己的成就，你通常感到：",
    options: [
      { text: "非常满意，为自己骄傲", score: 3 },
      { text: "基本满意", score: 2 },
      { text: "不太满意，觉得不够好", score: 1 },
      { text: "非常不满意，有挫败感", score: 0 }
    ]
  },
  {
    question: "在与他人比较时，你通常会：",
    options: [
      { text: "欣赏他人，也认可自己", score: 3 },
      { text: "客观看待，关注自身成长", score: 2 },
      { text: "有些羡慕，但能接受自己", score: 1 },
      { text: "感到自卑，觉得自己不如人", score: 0 }
    ]
  },
  {
    question: "对于自己的能力，你通常：",
    options: [
      { text: "非常信任，充满信心", score: 3 },
      { text: "基本信任", score: 2 },
      { text: "有时怀疑", score: 1 },
      { text: "经常怀疑，缺乏信心", score: 0 }
    ]
  },
  {
    question: "当犯错时，你通常会：",
    options: [
      { text: "坦然接受，视为成长机会", score: 3 },
      { text: "承认错误，从中学习", score: 2 },
      { text: "感到沮丧，但能恢复", score: 1 },
      { text: "过度自责，长时间无法释怀", score: 0 }
    ]
  },
  {
    question: "对于自己的外貌，你通常感到：",
    options: [
      { text: "非常满意，自信满满", score: 3 },
      { text: "基本满意", score: 2 },
      { text: "有些不满意", score: 1 },
      { text: "非常不满意，经常自卑", score: 0 }
    ]
  },
  {
    question: "在做决定时，你通常会：",
    options: [
      { text: "自信决策，毫不怀疑", score: 3 },
      { text: "果断决定，承担责任", score: 2 },
      { text: "反复权衡，担心出错", score: 1 },
      { text: "犹豫不决，难以选择", score: 0 }
    ]
  },
  {
    question: "对于自己的缺点，你通常会：",
    options: [
      { text: "坦然接受，视为特点", score: 3 },
      { text: "客观看待，努力改进", score: 2 },
      { text: "有些在意，但能接受", score: 1 },
      { text: "非常在意，经常自卑", score: 0 }
    ]
  },
  {
    question: "在面对挑战时，你通常会：",
    options: [
      { text: "充满信心，准备迎接", score: 3 },
      { text: "感到兴奋，期待挑战", score: 2 },
      { text: "有些担心，但愿意尝试", score: 1 },
      { text: "感到害怕，想逃避", score: 0 }
    ]
  },
  {
    question: "对于自己的价值，你是否经常需要他人认可？",
    options: [
      { text: "很少，自我认可", score: 3 },
      { text: "偶尔需要", score: 2 },
      { text: "经常需要", score: 1 },
      { text: "总是需要，无法自我认可", score: 0 }
    ]
  },
  {
    question: "在面对失败时，你通常会：",
    options: [
      { text: "视为学习，继续前进", score: 3 },
      { text: "分析原因，重新尝试", score: 2 },
      { text: "感到沮丧，需要时间恢复", score: 1 },
      { text: "一蹶不振，怀疑自己", score: 0 }
    ]
  },
  {
    question: "对于自己的价值，你是否经常感到迷茫？",
    options: [
      { text: "很少，清楚自己的价值", score: 3 },
      { text: "偶尔会想", score: 2 },
      { text: "经常感到迷茫", score: 1 },
      { text: "总是迷茫，不知道自己的价值", score: 0 }
    ]
  },
  {
    question: "在社交场合中，你通常会：",
    options: [
      { text: "自信从容，享受交流", score: 3 },
      { text: "基本放松，偶尔紧张", score: 2 },
      { text: "有些紧张，不太自信", score: 1 },
      { text: "非常紧张，感到自卑", score: 0 }
    ]
  },
  {
    question: "对于自己的价值，你是否经常与他人比较？",
    options: [
      { text: "很少，关注自己的成长", score: 3 },
      { text: "偶尔会比", score: 2 },
      { text: "经常比较", score: 1 },
      { text: "总是比较，感到自卑", score: 0 }
    ]
  },
  {
    question: "当被拒绝时，你会：",
    options: [
      { text: "不以为意，寻找其他机会", score: 3 },
      { text: "坦然接受，继续尝试", score: 2 },
      { text: "感到失落，但能恢复", score: 1 },
      { text: "极度沮丧，怀疑自己", score: 0 }
    ]
  },
  {
    question: "对于自己的价值，你是否经常感到不安全？",
    options: [
      { text: "很少，感到安全", score: 3 },
      { text: "偶尔会感到", score: 2 },
      { text: "经常感到不安全", score: 1 },
      { text: "总是感到不安全", score: 0 }
    ]
  },
  {
    question: "在面对批评时，你通常会：",
    options: [
      { text: "虚心接受，不影响自信", score: 3 },
      { text: "会反思，但不否定自己", score: 2 },
      { text: "有些在意，影响自信", score: 1 },
      { text: "非常在意，怀疑自己", score: 0 }
    ]
  },
  {
    question: "对于自己的价值，你是否经常需要证明自己？",
    options: [
      { text: "很少，自我认可", score: 3 },
      { text: "偶尔需要", score: 2 },
      { text: "经常需要", score: 1 },
      { text: "总是需要，无法自我认可", score: 0 }
    ]
  },
  {
    question: "总体来说，你的自我价值感是：",
    options: [
      { text: "非常高", score: 3 },
      { text: "较高", score: 2 },
      { text: "一般", score: 1 },
      { text: "较低", score: 0 }
    ]
  }
];