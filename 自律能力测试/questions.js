const questions = [
  {
    question: "你是否能够坚持完成计划？",
    options: [
      { text: "经常半途而废", score: 0 },
      { text: "有时会放弃", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "总是能够坚持到底", score: 3 }
    ]
  },
  {
    question: "你如何抵制诱惑？",
    options: [
      { text: "经常屈服于诱惑", score: 0 },
      { text: "有时会屈服", score: 1 },
      { text: "通常能够抵制", score: 2 },
      { text: "总是能够抵制", score: 3 }
    ]
  },
  {
    question: "你是否有规律的作息？",
    options: [
      { text: "完全没有规律", score: 0 },
      { text: "不太规律", score: 1 },
      { text: "比较规律", score: 2 },
      { text: "非常规律", score: 3 }
    ]
  },
  {
    question: "你是否能够控制自己的情绪？",
    options: [
      { text: "很难控制", score: 0 },
      { text: "有时难以控制", score: 1 },
      { text: "通常能够控制", score: 2 },
      { text: "完全能够控制", score: 3 }
    ]
  },
  {
    question: "你是否有明确的目标？",
    options: [
      { text: "没有目标", score: 0 },
      { text: "模糊的目标", score: 1 },
      { text: "有明确目标", score: 2 },
      { text: "有详细的目标计划", score: 3 }
    ]
  },
  {
    question: "你是否能够按时完成任务？",
    options: [
      { text: "经常延迟", score: 0 },
      { text: "有时延迟", score: 1 },
      { text: "通常能够按时", score: 2 },
      { text: "总是能够提前完成", score: 3 }
    ]
  },
  {
    question: "你如何管理自己的时间？",
    options: [
      { text: "没有计划", score: 0 },
      { text: "有时有计划", score: 1 },
      { text: "通常有计划", score: 2 },
      { text: "有详细的计划", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持健康的生活习惯？",
    options: [
      { text: "很难坚持", score: 0 },
      { text: "有时能够坚持", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "总是能够坚持", score: 3 }
    ]
  },
  {
    question: "你是否能够拒绝即时满足？",
    options: [
      { text: "很难拒绝", score: 0 },
      { text: "有时能够拒绝", score: 1 },
      { text: "通常能够拒绝", score: 2 },
      { text: "总是能够拒绝", score: 3 }
    ]
  },
  {
    question: "你是否有储蓄习惯？",
    options: [
      { text: "没有储蓄", score: 0 },
      { text: "偶尔储蓄", score: 1 },
      { text: "定期储蓄", score: 2 },
      { text: "有详细的储蓄计划", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持学习？",
    options: [
      { text: "很难坚持", score: 0 },
      { text: "有时能够坚持", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "总是能够坚持", score: 3 }
    ]
  },
  {
    question: "你如何处理拖延症？",
    options: [
      { text: "经常拖延", score: 0 },
      { text: "有时会拖延", score: 1 },
      { text: "很少拖延", score: 2 },
      { text: "从不拖延", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持锻炼？",
    options: [
      { text: "很难坚持", score: 0 },
      { text: "有时能够坚持", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "总是能够坚持", score: 3 }
    ]
  },
  {
    question: "你是否能够控制消费？",
    options: [
      { text: "经常冲动消费", score: 0 },
      { text: "有时会冲动", score: 1 },
      { text: "通常能够控制", score: 2 },
      { text: "总是能够理性消费", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持早起？",
    options: [
      { text: "很难早起", score: 0 },
      { text: "有时能够早起", score: 1 },
      { text: "通常能够早起", score: 2 },
      { text: "总是能够早起", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持健康饮食？",
    options: [
      { text: "很难坚持", score: 0 },
      { text: "有时能够坚持", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "总是能够坚持", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持阅读？",
    options: [
      { text: "很少阅读", score: 0 },
      { text: "偶尔阅读", score: 1 },
      { text: "定期阅读", score: 2 },
      { text: "每天阅读", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持反思？",
    options: [
      { text: "从不反思", score: 0 },
      { text: "偶尔反思", score: 1 },
      { text: "定期反思", score: 2 },
      { text: "每天反思", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持记录？",
    options: [
      { text: "从不记录", score: 0 },
      { text: "偶尔记录", score: 1 },
      { text: "定期记录", score: 2 },
      { text: "每天记录", score: 3 }
    ]
  },
  {
    question: "你认为自己的自律能力如何？",
    options: [
      { text: "很弱", score: 0 },
      { text: "一般", score: 1 },
      { text: "较强", score: 2 },
      { text: "非常强", score: 3 }
    ]
  }
];
