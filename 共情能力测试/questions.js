const questions = [
  {
    question: "当朋友向你倾诉烦恼时，你通常会：",
    options: [
      { text: "不知道如何回应", score: 0 },
      { text: "简单安慰几句", score: 1 },
      { text: "认真倾听并表达理解", score: 2 },
      { text: "设身处地为对方着想", score: 3 }
    ]
  },
  {
    question: "你是否能够察觉他人的情绪变化？",
    options: [
      { text: "很难察觉", score: 0 },
      { text: "有时能够察觉", score: 1 },
      { text: "通常能够察觉", score: 2 },
      { text: "非常敏感", score: 3 }
    ]
  },
  {
    question: "你如何看待他人的感受？",
    options: [
      { text: "不太关心", score: 0 },
      { text: "会关心", score: 1 },
      { text: "非常重视", score: 2 },
      { text: "感同身受", score: 3 }
    ]
  },
  {
    question: "你是否能够理解他人的处境？",
    options: [
      { text: "很难理解", score: 0 },
      { text: "有时能够理解", score: 1 },
      { text: "通常能够理解", score: 2 },
      { text: "完全能够理解", score: 3 }
    ]
  },
  {
    question: "你是否容易被他人的情绪感染？",
    options: [
      { text: "不会", score: 0 },
      { text: "偶尔会", score: 1 },
      { text: "经常会", score: 2 },
      { text: "总是会", score: 3 }
    ]
  },
  {
    question: "你是否愿意帮助有困难的人？",
    options: [
      { text: "不太愿意", score: 0 },
      { text: "看情况", score: 1 },
      { text: "愿意帮助", score: 2 },
      { text: "非常愿意", score: 3 }
    ]
  },
  {
    question: "你是否能够站在他人的角度思考问题？",
    options: [
      { text: "很难做到", score: 0 },
      { text: "有时能够做到", score: 1 },
      { text: "通常能够做到", score: 2 },
      { text: "总是能够做到", score: 3 }
    ]
  },
  {
    question: "你对他人的情绪反应如何？",
    options: [
      { text: "无动于衷", score: 0 },
      { text: "有些反应", score: 1 },
      { text: "有较强反应", score: 2 },
      { text: "感同身受", score: 3 }
    ]
  },
  {
    question: "你是否能够安慰他人？",
    options: [
      { text: "不知道如何安慰", score: 0 },
      { text: "尝试安慰", score: 1 },
      { text: "能够有效安慰", score: 2 },
      { text: "非常擅长安慰", score: 3 }
    ]
  },
  {
    question: "你是否关注他人的情感需求？",
    options: [
      { text: "不太关注", score: 0 },
      { text: "有时关注", score: 1 },
      { text: "经常关注", score: 2 },
      { text: "非常关注", score: 3 }
    ]
  },
  {
    question: "你如何看待他人的痛苦？",
    options: [
      { text: "与我无关", score: 0 },
      { text: "会感到同情", score: 1 },
      { text: "会感到难过", score: 2 },
      { text: "会感同身受", score: 3 }
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
    question: "你是否能够察觉他人的需求？",
    options: [
      { text: "很难察觉", score: 0 },
      { text: "有时能够察觉", score: 1 },
      { text: "通常能够察觉", score: 2 },
      { text: "非常敏感", score: 3 }
    ]
  },
  {
    question: "你是否能够与他人建立情感联系？",
    options: [
      { text: "很难建立", score: 0 },
      { text: "有时能够建立", score: 1 },
      { text: "通常能够建立", score: 2 },
      { text: "非常擅长", score: 3 }
    ]
  },
  {
    question: "你是否能够理解他人的行为动机？",
    options: [
      { text: "很难理解", score: 0 },
      { text: "有时能够理解", score: 1 },
      { text: "通常能够理解", score: 2 },
      { text: "完全能够理解", score: 3 }
    ]
  },
  {
    question: "你是否能够察觉他人的非语言信号？",
    options: [
      { text: "很难察觉", score: 0 },
      { text: "有时能够察觉", score: 1 },
      { text: "通常能够察觉", score: 2 },
      { text: "非常敏感", score: 3 }
    ]
  },
  {
    question: "你是否能够理解不同文化背景下的人？",
    options: [
      { text: "很难理解", score: 0 },
      { text: "有时能够理解", score: 1 },
      { text: "通常能够理解", score: 2 },
      { text: "完全能够理解", score: 3 }
    ]
  },
  {
    question: "你是否能够处理他人的情绪问题？",
    options: [
      { text: "不知道如何处理", score: 0 },
      { text: "尝试处理", score: 1 },
      { text: "能够有效处理", score: 2 },
      { text: "非常擅长", score: 3 }
    ]
  },
  {
    question: "你是否能够与他人产生共鸣？",
    options: [
      { text: "很难产生", score: 0 },
      { text: "有时能够产生", score: 1 },
      { text: "通常能够产生", score: 2 },
      { text: "总是能够产生", score: 3 }
    ]
  },
  {
    question: "你认为自己的共情能力如何？",
    options: [
      { text: "很弱", score: 0 },
      { text: "一般", score: 1 },
      { text: "较强", score: 2 },
      { text: "非常强", score: 3 }
    ]
  }
];
