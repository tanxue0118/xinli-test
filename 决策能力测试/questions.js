const questions = [
  {
    question: "你通常如何做决定？",
    options: [
      { text: "犹豫不决，难以选择", score: 0 },
      { text: "凭直觉决定", score: 1 },
      { text: "考虑利弊后决定", score: 2 },
      { text: "系统分析后果断决定", score: 3 }
    ]
  },
  {
    question: "你是否能够快速做出决定？",
    options: [
      { text: "总是犹豫很久", score: 0 },
      { text: "需要较长时间", score: 1 },
      { text: "能够在合理时间内决定", score: 2 },
      { text: "能够迅速果断决定", score: 3 }
    ]
  },
  {
    question: "你如何处理信息过载？",
    options: [
      { text: "不知所措", score: 0 },
      { text: "感到焦虑", score: 1 },
      { text: "筛选关键信息", score: 2 },
      { text: "高效处理并做出判断", score: 3 }
    ]
  },
  {
    question: "你是否能够承担决策后果？",
    options: [
      { text: "总是后悔", score: 0 },
      { text: "有时会后悔", score: 1 },
      { text: "能够接受后果", score: 2 },
      { text: "勇于承担并从中学习", score: 3 }
    ]
  },
  {
    question: "你如何处理不确定性？",
    options: [
      { text: "无法接受不确定性", score: 0 },
      { text: "感到焦虑", score: 1 },
      { text: "能够接受一定不确定性", score: 2 },
      { text: "能够在不确定中做出决策", score: 3 }
    ]
  },
  {
    question: "你是否能够权衡利弊？",
    options: [
      { text: "很难权衡", score: 0 },
      { text: "有时能够权衡", score: 1 },
      { text: "通常能够权衡", score: 2 },
      { text: "总是能够全面权衡", score: 3 }
    ]
  },
  {
    question: "你如何处理他人意见？",
    options: [
      { text: "完全被他人意见左右", score: 0 },
      { text: "容易受他人影响", score: 1 },
      { text: "会考虑他人意见", score: 2 },
      { text: "综合意见后独立判断", score: 3 }
    ]
  },
  {
    question: "你是否能够识别问题的关键？",
    options: [
      { text: "很难识别", score: 0 },
      { text: "有时能够识别", score: 1 },
      { text: "通常能够识别", score: 2 },
      { text: "总是能够快速识别", score: 3 }
    ]
  },
  {
    question: "你如何处理复杂问题？",
    options: [
      { text: "不知从何入手", score: 0 },
      { text: "感到困难", score: 1 },
      { text: "能够逐步分析", score: 2 },
      { text: "能够系统化解决", score: 3 }
    ]
  },
  {
    question: "你是否能够预见决策的后果？",
    options: [
      { text: "很难预见", score: 0 },
      { text: "有时能够预见", score: 1 },
      { text: "通常能够预见", score: 2 },
      { text: "总是能够准确预见", score: 3 }
    ]
  },
  {
    question: "你如何处理紧急决策？",
    options: [
      { text: "慌乱无措", score: 0 },
      { text: "感到压力", score: 1 },
      { text: "能够冷静思考", score: 2 },
      { text: "能够迅速果断决策", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持自己的决定？",
    options: [
      { text: "经常动摇", score: 0 },
      { text: "有时会动摇", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "总是能够坚定", score: 3 }
    ]
  },
  {
    question: "你如何处理决策中的风险？",
    options: [
      { text: "完全规避风险", score: 0 },
      { text: "对风险感到恐惧", score: 1 },
      { text: "能够评估风险", score: 2 },
      { text: "能够合理管理风险", score: 3 }
    ]
  },
  {
    question: "你是否能够从错误决策中学习？",
    options: [
      { text: "总是重复错误", score: 0 },
      { text: "有时会重复", score: 1 },
      { text: "通常能够学习", score: 2 },
      { text: "总是能够从错误中成长", score: 3 }
    ]
  },
  {
    question: "你如何处理多选项情况？",
    options: [
      { text: "选择困难", score: 0 },
      { text: "感到困惑", score: 1 },
      { text: "能够筛选", score: 2 },
      { text: "能够快速做出最优选择", score: 3 }
    ]
  },
  {
    question: "你是否能够制定决策标准？",
    options: [
      { text: "没有标准", score: 0 },
      { text: "有时会有", score: 1 },
      { text: "通常会有", score: 2 },
      { text: "总是制定明确标准", score: 3 }
    ]
  },
  {
    question: "你如何处理决策压力？",
    options: [
      { text: "无法承受", score: 0 },
      { text: "感到焦虑", score: 1 },
      { text: "能够应对", score: 2 },
      { text: "在压力下表现更好", score: 3 }
    ]
  },
  {
    question: "你是否能够做出长期决策？",
    options: [
      { text: "只能看到眼前", score: 0 },
      { text: "有时会考虑长远", score: 1 },
      { text: "通常会考虑长远", score: 2 },
      { text: "总是能够做出长远规划", score: 3 }
    ]
  },
  {
    question: "你如何处理决策冲突？",
    options: [
      { text: "逃避冲突", score: 0 },
      { text: "感到困扰", score: 1 },
      { text: "能够协调", score: 2 },
      { text: "能够有效解决冲突", score: 3 }
    ]
  },
  {
    question: "你认为自己的决策能力如何？",
    options: [
      { text: "很弱", score: 0 },
      { text: "一般", score: 1 },
      { text: "较强", score: 2 },
      { text: "非常强", score: 3 }
    ]
  }
];
