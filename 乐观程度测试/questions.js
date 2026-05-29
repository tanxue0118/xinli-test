const questions = [
  {
    question: "你如何看待未来？",
    options: [
      { text: "非常悲观", score: 0 },
      { text: "有些悲观", score: 1 },
      { text: "比较乐观", score: 2 },
      { text: "非常乐观", score: 3 }
    ]
  },
  {
    question: "你遇到困难时通常会：",
    options: [
      { text: "认为无法克服", score: 0 },
      { text: "感到沮丧", score: 1 },
      { text: "相信能够解决", score: 2 },
      { text: "视困难为机遇", score: 3 }
    ]
  },
  {
    question: "你如何看待自己的生活？",
    options: [
      { text: "非常不满意", score: 0 },
      { text: "不太满意", score: 1 },
      { text: "比较满意", score: 2 },
      { text: "非常满意", score: 3 }
    ]
  },
  {
    question: "你是否经常看到事物积极的一面？",
    options: [
      { text: "很少", score: 0 },
      { text: "有时", score: 1 },
      { text: "经常", score: 2 },
      { text: "总是", score: 3 }
    ]
  },
  {
    question: "你如何看待失败？",
    options: [
      { text: "是灾难性的", score: 0 },
      { text: "是令人沮丧的", score: 1 },
      { text: "是学习的机会", score: 2 },
      { text: "是成功的垫脚石", score: 3 }
    ]
  },
  {
    question: "你是否经常感到快乐？",
    options: [
      { text: "很少感到快乐", score: 0 },
      { text: "有时感到快乐", score: 1 },
      { text: "经常感到快乐", score: 2 },
      { text: "总是感到快乐", score: 3 }
    ]
  },
  {
    question: "你如何看待变化？",
    options: [
      { text: "非常恐惧", score: 0 },
      { text: "有些不安", score: 1 },
      { text: "能够接受", score: 2 },
      { text: "欢迎变化", score: 3 }
    ]
  },
  {
    question: "你是否经常感到希望？",
    options: [
      { text: "很少感到希望", score: 0 },
      { text: "有时感到希望", score: 1 },
      { text: "经常感到希望", score: 2 },
      { text: "总是充满希望", score: 3 }
    ]
  },
  {
    question: "你如何看待自己的能力？",
    options: [
      { text: "经常怀疑", score: 0 },
      { text: "有时怀疑", score: 1 },
      { text: "比较自信", score: 2 },
      { text: "非常自信", score: 3 }
    ]
  },
  {
    question: "你是否经常感到感恩？",
    options: [
      { text: "很少", score: 0 },
      { text: "有时", score: 1 },
      { text: "经常", score: 2 },
      { text: "总是", score: 3 }
    ]
  },
  {
    question: "你如何看待他人？",
    options: [
      { text: "经常怀疑", score: 0 },
      { text: "有时怀疑", score: 1 },
      { text: "比较信任", score: 2 },
      { text: "非常信任", score: 3 }
    ]
  },
  {
    question: "你是否经常感到满足？",
    options: [
      { text: "很少感到满足", score: 0 },
      { text: "有时感到满足", score: 1 },
      { text: "经常感到满足", score: 2 },
      { text: "总是感到满足", score: 3 }
    ]
  },
  {
    question: "你如何看待工作？",
    options: [
      { text: "非常痛苦", score: 0 },
      { text: "不太喜欢", score: 1 },
      { text: "比较喜欢", score: 2 },
      { text: "非常热爱", score: 3 }
    ]
  },
  {
    question: "你是否经常感到平静？",
    options: [
      { text: "很少感到平静", score: 0 },
      { text: "有时感到平静", score: 1 },
      { text: "经常感到平静", score: 2 },
      { text: "总是感到平静", score: 3 }
    ]
  },
  {
    question: "你如何看待挑战？",
    options: [
      { text: "非常恐惧", score: 0 },
      { text: "有些害怕", score: 1 },
      { text: "愿意接受", score: 2 },
      { text: "积极迎接", score: 3 }
    ]
  },
  {
    question: "你是否经常感到自信？",
    options: [
      { text: "很少感到自信", score: 0 },
      { text: "有时感到自信", score: 1 },
      { text: "经常感到自信", score: 2 },
      { text: "总是感到自信", score: 3 }
    ]
  },
  {
    question: "你如何看待人际关系？",
    options: [
      { text: "非常悲观", score: 0 },
      { text: "有些悲观", score: 1 },
      { text: "比较乐观", score: 2 },
      { text: "非常乐观", score: 3 }
    ]
  },
  {
    question: "你是否经常感到精力充沛？",
    options: [
      { text: "很少", score: 0 },
      { text: "有时", score: 1 },
      { text: "经常", score: 2 },
      { text: "总是", score: 3 }
    ]
  },
  {
    question: "你如何看待自己的过去？",
    options: [
      { text: "充满遗憾", score: 0 },
      { text: "有些遗憾", score: 1 },
      { text: "基本满意", score: 2 },
      { text: "非常感恩", score: 3 }
    ]
  },
  {
    question: "你认为自己是一个乐观的人吗？",
    options: [
      { text: "非常悲观", score: 0 },
      { text: "有些悲观", score: 1 },
      { text: "比较乐观", score: 2 },
      { text: "非常乐观", score: 3 }
    ]
  }
];
