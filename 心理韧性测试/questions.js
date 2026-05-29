const questions = [
  {
    question: "面对困难时，你通常会：",
    options: [
      { text: "轻易放弃", score: 0 },
      { text: "感到沮丧但会尝试", score: 1 },
      { text: "积极寻找解决方案", score: 2 },
      { text: "视困难为成长机会", score: 3 }
    ]
  },
  {
    question: "你如何应对失败？",
    options: [
      { text: "一蹶不振", score: 0 },
      { text: "需要很长时间恢复", score: 1 },
      { text: "能够较快恢复", score: 2 },
      { text: "从失败中学习并继续前进", score: 3 }
    ]
  },
  {
    question: "你对变化的适应能力如何？",
    options: [
      { text: "非常抗拒变化", score: 0 },
      { text: "需要较长时间适应", score: 1 },
      { text: "能够逐渐适应", score: 2 },
      { text: "能够快速适应变化", score: 3 }
    ]
  },
  {
    question: "你是否容易被挫折击垮？",
    options: [
      { text: "非常容易", score: 0 },
      { text: "比较容易", score: 1 },
      { text: "不太容易", score: 2 },
      { text: "几乎不会", score: 3 }
    ]
  },
  {
    question: "你如何看待压力？",
    options: [
      { text: "无法承受压力", score: 0 },
      { text: "压力会让我焦虑", score: 1 },
      { text: "能够应对一定压力", score: 2 },
      { text: "压力让我更强大", score: 3 }
    ]
  },
  {
    question: "你是否能够从逆境中恢复？",
    options: [
      { text: "很难恢复", score: 0 },
      { text: "需要很长时间", score: 1 },
      { text: "能够恢复", score: 2 },
      { text: "能够快速恢复并成长", score: 3 }
    ]
  },
  {
    question: "你对自己的信心如何？",
    options: [
      { text: "经常自我怀疑", score: 0 },
      { text: "有时缺乏信心", score: 1 },
      { text: "比较有信心", score: 2 },
      { text: "非常有信心", score: 3 }
    ]
  },
  {
    question: "你是否能够接受批评？",
    options: [
      { text: "无法接受", score: 0 },
      { text: "很难接受", score: 1 },
      { text: "能够接受", score: 2 },
      { text: "积极从批评中学习", score: 3 }
    ]
  },
  {
    question: "你如何面对不确定性？",
    options: [
      { text: "非常焦虑", score: 0 },
      { text: "感到不安", score: 1 },
      { text: "能够接受", score: 2 },
      { text: "能够从容应对", score: 3 }
    ]
  },
  {
    question: "你是否能够坚持目标？",
    options: [
      { text: "经常放弃", score: 0 },
      { text: "有时会放弃", score: 1 },
      { text: "通常能够坚持", score: 2 },
      { text: "始终坚持不懈", score: 3 }
    ]
  },
  {
    question: "你如何看待负面情绪？",
    options: [
      { text: "被负面情绪控制", score: 0 },
      { text: "很难管理负面情绪", score: 1 },
      { text: "能够管理负面情绪", score: 2 },
      { text: "能够有效处理负面情绪", score: 3 }
    ]
  },
  {
    question: "你是否能够独立解决问题？",
    options: [
      { text: "经常依赖他人", score: 0 },
      { text: "有时需要帮助", score: 1 },
      { text: "通常能够独立解决", score: 2 },
      { text: "完全能够独立解决", score: 3 }
    ]
  },
  {
    question: "你如何应对孤独？",
    options: [
      { text: "无法忍受孤独", score: 0 },
      { text: "感到不适", score: 1 },
      { text: "能够接受", score: 2 },
      { text: "享受独处时光", score: 3 }
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
    question: "你如何看待挑战？",
    options: [
      { text: "逃避挑战", score: 0 },
      { text: "感到恐惧", score: 1 },
      { text: "愿意接受挑战", score: 2 },
      { text: "主动寻求挑战", score: 3 }
    ]
  },
  {
    question: "你是否能够从错误中学习？",
    options: [
      { text: "总是重复错误", score: 0 },
      { text: "有时会重复", score: 1 },
      { text: "通常能够学习", score: 2 },
      { text: "总是从错误中学习", score: 3 }
    ]
  },
  {
    question: "你如何应对批评和拒绝？",
    options: [
      { text: "无法承受", score: 0 },
      { text: "需要很长时间恢复", score: 1 },
      { text: "能够较快恢复", score: 2 },
      { text: "能够坦然接受", score: 3 }
    ]
  },
  {
    question: "你是否能够保持乐观？",
    options: [
      { text: "经常悲观", score: 0 },
      { text: "有时悲观", score: 1 },
      { text: "通常乐观", score: 2 },
      { text: "总是保持乐观", score: 3 }
    ]
  },
  {
    question: "你如何看待自己的过去？",
    options: [
      { text: "被过去困扰", score: 0 },
      { text: "有时会被影响", score: 1 },
      { text: "能够放下过去", score: 2 },
      { text: "从过去中学习并成长", score: 3 }
    ]
  },
  {
    question: "你认为自己的心理韧性如何？",
    options: [
      { text: "非常弱", score: 0 },
      { text: "较弱", score: 1 },
      { text: "较强", score: 2 },
      { text: "非常强", score: 3 }
    ]
  }
];
