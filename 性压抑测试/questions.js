const questions = [
  {
    id: 1,
    text: "当你听到别人谈论性话题时，你会：",
    options: [
      { label: "觉得这是很正常的事情", score: 1 },
      { label: "有点尴尬但还能接受", score: 2 },
      { label: "感到很不舒服，想转移话题", score: 3 }
    ]
  },
  {
    id: 2,
    text: "你对自己身体的态度是：",
    options: [
      { label: "欣赏并接受自己的身体", score: 1 },
      { label: "有些部位不太满意", score: 2 },
      { label: "对自己的身体感到羞耻", score: 3 }
    ]
  },
  {
    id: 3,
    text: "看到影视作品中的亲密镜头时，你会：",
    options: [
      { label: "觉得是艺术表达的一部分", score: 1 },
      { label: "有点不好意思但会继续看", score: 2 },
      { label: "快进或避开不看", score: 3 }
    ]
  },
  {
    id: 4,
    text: "你认为自慰是：",
    options: [
      { label: "正常的生理需求", score: 1 },
      { label: "可以理解但不太愿意提", score: 2 },
      { label: "不道德或令人羞耻的", score: 3 }
    ]
  },
  {
    id: 5,
    text: "和朋友聊天时涉及性话题，你会：",
    options: [
      { label: "自然地参与讨论", score: 1 },
      { label: "听但不太发表意见", score: 2 },
      { label: "感到尴尬，想办法离开", score: 3 }
    ]
  },
  {
    id: 6,
    text: "你对购买避孕用品的态度是：",
    options: [
      { label: "很正常，是生活必需品", score: 1 },
      { label: "会买但希望快点结束", score: 2 },
      { label: "感到很羞耻，尽量避免", score: 3 }
    ]
  },
  {
    id: 7,
    text: "当伴侣提出亲密要求时，你会：",
    options: [
      { label: "根据自己的感受来回应", score: 1 },
      { label: "有时会感到压力", score: 2 },
      { label: "经常感到焦虑和不安", score: 3 }
    ]
  },
  {
    id: 8,
    text: "你认为谈论性需求是：",
    options: [
      { label: "健康关系的重要部分", score: 1 },
      { label: "有必要但不太容易开口", score: 2 },
      { label: "不应该公开谈论", score: 3 }
    ]
  },
  {
    id: 9,
    text: "你对自己的性欲望感到：",
    options: [
      { label: "这是自然的一部分", score: 1 },
      { label: "有时会感到困惑", score: 2 },
      { label: "很羞耻，试图压制", score: 3 }
    ]
  },
  {
    id: 10,
    text: "在亲密关系中，你更看重：",
    options: [
      { label: "情感和身体的双重连接", score: 1 },
      { label: "情感连接更重要", score: 2 },
      { label: "尽量避免身体接触", score: 3 }
    ]
  },
  {
    id: 11,
    text: "你认为性教育是：",
    options: [
      { label: "非常必要的", score: 1 },
      { label: "有一定必要", score: 2 },
      { label: "不应该公开讨论", score: 3 }
    ]
  },
  {
    id: 12,
    text: "当你有性幻想时，你会：",
    options: [
      { label: "觉得这是正常的", score: 1 },
      { label: "有点罪恶感", score: 2 },
      { label: "感到很羞耻和自责", score: 3 }
    ]
  },
  {
    id: 13,
    text: "你对婚前性行为的看法是：",
    options: [
      { label: "个人选择，无可厚非", score: 1 },
      { label: "可以理解但自己会谨慎", score: 2 },
      { label: "是不道德的行为", score: 3 }
    ]
  },
  {
    id: 14,
    text: "在亲密时刻，你能够表达自己的感受吗？",
    options: [
      { label: "能够自然地表达", score: 1 },
      { label: "有时能，有时不太自在", score: 2 },
      { label: "很难开口表达", score: 3 }
    ]
  },
  {
    id: 15,
    text: "你认为讨论性健康问题是：",
    options: [
      { label: "很重要的，应该坦诚", score: 1 },
      { label: "有必要但不太舒服", score: 2 },
      { label: "很尴尬，尽量避免", score: 3 }
    ]
  },
  {
    id: 16,
    text: "你对看色情内容的态度是：",
    options: [
      { label: "个人选择，没什么大不了", score: 1 },
      { label: "偶尔会看但有点不好意思", score: 2 },
      { label: "觉得很下流，不应该看", score: 3 }
    ]
  },
  {
    id: 17,
    text: "当伴侣谈论性偏好时，你会：",
    options: [
      { label: "愿意倾听和分享", score: 1 },
      { label: "会听但不太愿意分享自己", score: 2 },
      { label: "感到不适，想结束话题", score: 3 }
    ]
  },
  {
    id: 18,
    text: "你认为性在关系中的地位是：",
    options: [
      { label: "重要且美好的部分", score: 1 },
      { label: "重要但不是最重要的", score: 2 },
      { label: "不太重要，甚至可有可无", score: 3 }
    ]
  },
  {
    id: 19,
    text: "你对自己的性吸引力感到：",
    options: [
      { label: "自信，接受自己的魅力", score: 1 },
      { label: "有时自信有时不自信", score: 2 },
      { label: "很不自信，觉得自己没有吸引力", score: 3 }
    ]
  },
  {
    id: 20,
    text: "你认为谈论性传播疾病是：",
    options: [
      { label: "必要的健康教育", score: 1 },
      { label: "重要但不太舒服", score: 2 },
      { label: "很尴尬，不应该公开讨论", score: 3 }
    ]
  },
  {
    id: 21,
    text: "当你对伴侣有性吸引力时，你会：",
    options: [
      { label: "用适当的方式表达", score: 1 },
      { label: "会暗示但不太直接", score: 2 },
      { label: "压抑这种感觉，觉得不应该", score: 3 }
    ]
  },
  {
    id: 22,
    text: "你认为性取向的多样性是：",
    options: [
      { label: "正常的，应该被尊重", score: 1 },
      { label: "可以理解但不太了解", score: 2 },
      { label: "不正常或不道德的", score: 3 }
    ]
  },
  {
    id: 23,
    text: "在亲密关系中，你能够说'不'吗？",
    options: [
      { label: "能够清晰表达自己的界限", score: 1 },
      { label: "有时能，有时会妥协", score: 2 },
      { label: "很难拒绝，害怕让对方失望", score: 3 }
    ]
  },
  {
    id: 24,
    text: "你认为性是：",
    options: [
      { label: "人类自然的需求和体验", score: 1 },
      { label: "有其意义但需要谨慎对待", score: 2 },
      { label: "主要是为了生育，不应过度追求", score: 3 }
    ]
  },
  {
    id: 25,
    text: "总体来说，你对性的态度是：",
    options: [
      { label: "开放、健康、自然", score: 1 },
      { label: "谨慎但能接受", score: 2 },
      { label: "压抑、羞耻、回避", score: 3 }
    ]
  }
];

const resultTypes = {
  low: {
    name: "低度压抑",
    icon: " ",
    color: "#059669",
    description: "你对性持开放、健康的态度。你能够自然地面对性话题，没有过度的羞耻感或焦虑。你接受自己的性需求，能够在亲密关系中表达自己的感受和界限。",
    characteristics: [
      "对性持开放、自然的态度",
      "没有过度的羞耻感或罪恶感",
      "能够坦诚地讨论性话题",
      "接受自己的性需求和欲望",
      "在亲密关系中能够表达自己的感受"
    ],
    advice: [
      "继续保持健康、开放的性态度",
      "在关系中保持坦诚的沟通",
      "尊重自己和伴侣的界限",
      "持续学习性健康知识"
    ]
  },
  medium: {
    name: "中度压抑",
    icon: " ",
    color: "#d97706",
    description: "你对性有一定的保留和谨慎。虽然你能接受性是生活的一部分，但在某些方面可能感到不适或尴尬。你可能有一些羞耻感，但不会过度压抑自己的需求。",
    characteristics: [
      "对性持谨慎但能接受的态度",
      "在某些性话题上感到不适",
      "有一定的羞耻感但不会过度",
      "可能在表达性需求时有些困难",
      "在亲密关系中需要更多安全感"
    ],
    advice: [
      "尝试更开放地面对性话题",
      "与伴侣坦诚沟通你的感受和需求",
      "了解性是人类自然的需求",
      "减少对性的负面联想"
    ]
  },
  high: {
    name: "高度压抑",
    icon: " ",
    color: "#dc2626",
    description: "你对性有较强的压抑和羞耻感。你可能觉得性是令人羞耻或不应该谈论的话题。这种压抑可能影响你的亲密关系和自我接纳。",
    characteristics: [
      "对性有强烈的羞耻感",
      "尽量避免涉及性的话题",
      "可能压抑自己的性需求",
      "在亲密关系中感到焦虑",
      "对自己的身体和性欲望感到不安"
    ],
    advice: [
      "考虑寻求专业心理咨询帮助",
      "了解性是人类自然的需求，不是羞耻的",
      "尝试逐步面对和接受自己的性需求",
      "与信任的人探讨你的感受"
    ]
  }
};