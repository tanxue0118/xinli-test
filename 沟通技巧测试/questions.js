const questions = [
  {
    question: "你如何表达自己的想法？",
    options: [
      { text: "表达不清，经常被误解", score: 0 },
      { text: "有时表达不清", score: 1 },
      { text: "能够清晰表达", score: 2 },
      { text: "表达准确有力", score: 3 }
    ]
  },
  {
    question: "你是否善于倾听他人？",
    options: [
      { text: "经常打断他人", score: 0 },
      { text: "有时会打断", score: 1 },
      { text: "能够认真倾听", score: 2 },
      { text: "积极倾听并给予反馈", score: 3 }
    ]
  },
  {
    question: "你如何处理沟通冲突？",
    options: [
      { text: "回避冲突", score: 0 },
      { text: "情绪化处理", score: 1 },
      { text: "能够冷静沟通", score: 2 },
      { text: "有效解决冲突", score: 3 }
    ]
  },
  {
    question: "你是否能够理解他人的观点？",
    options: [
      { text: "很难理解", score: 0 },
      { text: "有时能够理解", score: 1 },
      { text: "通常能够理解", score: 2 },
      { text: "完全能够理解", score: 3 }
    ]
  },
  {
    question: "你如何处理非语言沟通？",
    options: [
      { text: "不太注意", score: 0 },
      { text: "有时会注意", score: 1 },
      { text: "能够注意", score: 2 },
      { text: "善于运用", score: 3 }
    ]
  },
  {
    question: "你是否能够适应不同的沟通对象？",
    options: [
      { text: "很难适应", score: 0 },
      { text: "有时能够适应", score: 1 },
      { text: "通常能够适应", score: 2 },
      { text: "总是能够灵活调整", score: 3 }
    ]
  },
  {
    question: "你如何处理反馈？",
    options: [
      { text: "无法接受反馈", score: 0 },
      { text: "有时能够接受", score: 1 },
      { text: "能够接受并改进", score: 2 },
      { text: "积极寻求并应用反馈", score: 3 }
    ]
  },
  {
    question: "你是否能够清晰地组织语言？",
    options: [
      { text: "经常混乱", score: 0 },
      { text: "有时混乱", score: 1 },
      { text: "通常能够组织", score: 2 },
      { text: "总是能够清晰组织", score: 3 }
    ]
  },
  {
    question: "你如何处理紧张情绪？",
    options: [
      { text: "紧张会影响沟通", score: 0 },
      { text: "有时会紧张", score: 1 },
      { text: "能够控制紧张", score: 2 },
      { text: "在压力下表现良好", score: 3 }
    ]
  },
  {
    question: "你是否能够使用恰当的语气？",
    options: [
      { text: "经常使用不当语气", score: 0 },
      { text: "有时会不当", score: 1 },
      { text: "通常能够恰当", score: 2 },
      { text: "总是能够恰当", score: 3 }
    ]
  },
  {
    question: "你如何处理误解？",
    options: [
      { text: "经常产生误解", score: 0 },
      { text: "有时会产生", score: 1 },
      { text: "能够及时澄清", score: 2 },
      { text: "能够有效避免和解决", score: 3 }
    ]
  },
  {
    question: "你是否能够鼓励他人表达？",
    options: [
      { text: "不太会鼓励", score: 0 },
      { text: "有时会鼓励", score: 1 },
      { text: "通常会鼓励", score: 2 },
      { text: "总是能够鼓励", score: 3 }
    ]
  },
  {
    question: "你如何处理公开演讲？",
    options: [
      { text: "非常恐惧", score: 0 },
      { text: "感到紧张", score: 1 },
      { text: "能够应对", score: 2 },
      { text: "非常自信", score: 3 }
    ]
  },
  {
    question: "你是否能够使用简洁的语言？",
    options: [
      { text: "经常冗长", score: 0 },
      { text: "有时冗长", score: 1 },
      { text: "通常简洁", score: 2 },
      { text: "总是简洁有力", score: 3 }
    ]
  },
  {
    question: "你如何处理不同意见？",
    options: [
      { text: "无法接受", score: 0 },
      { text: "感到不适", score: 1 },
      { text: "能够尊重", score: 2 },
      { text: "能够包容并学习", score: 3 }
    ]
  },
  {
    question: "你是否能够建立信任？",
    options: [
      { text: "很难建立", score: 0 },
      { text: "有时能够建立", score: 1 },
      { text: "通常能够建立", score: 2 },
      { text: "总是能够建立", score: 3 }
    ]
  },
  {
    question: "你如何处理敏感话题？",
    options: [
      { text: "回避敏感话题", score: 0 },
      { text: "处理不当", score: 1 },
      { text: "能够谨慎处理", score: 2 },
      { text: "能够妥善处理", score: 3 }
    ]
  },
  {
    question: "你是否能够使用幽默？",
    options: [
      { text: "不太会使用", score: 0 },
      { text: "有时会使用", score: 1 },
      { text: "能够恰当使用", score: 2 },
      { text: "善于使用幽默", score: 3 }
    ]
  },
  {
    question: "你如何处理团队沟通？",
    options: [
      { text: "不太参与", score: 0 },
      { text: "有时参与", score: 1 },
      { text: "积极参与", score: 2 },
      { text: "能够有效协调", score: 3 }
    ]
  },
  {
    question: "你认为自己的沟通技巧如何？",
    options: [
      { text: "很弱", score: 0 },
      { text: "一般", score: 1 },
      { text: "较好", score: 2 },
      { text: "非常出色", score: 3 }
    ]
  }
];
