const questions = [
  {
    question: "你通常需要多长时间才能入睡？",
    options: [
      { text: "超过30分钟", score: 0 },
      { text: "15-30分钟", score: 1 },
      { text: "5-15分钟", score: 2 },
      { text: "不到5分钟", score: 3 }
    ]
  },
  {
    question: "你每周有多少个晚上难以入睡？",
    options: [
      { text: "5个晚上以上", score: 0 },
      { text: "3-4个晚上", score: 1 },
      { text: "1-2个晚上", score: 2 },
      { text: "几乎没有", score: 3 }
    ]
  },
  {
    question: "你半夜醒来的情况如何？",
    options: [
      { text: "几乎每晚都会醒来", score: 0 },
      { text: "每周3-4次", score: 1 },
      { text: "每周1-2次", score: 2 },
      { text: "很少或从不", score: 3 }
    ]
  },
  {
    question: "你早上起床后感觉如何？",
    options: [
      { text: "非常疲惫，难以起床", score: 0 },
      { text: "有些困倦", score: 1 },
      { text: "基本清醒", score: 2 },
      { text: "精力充沛", score: 3 }
    ]
  },
  {
    question: "你每天的睡眠时间通常是多久？",
    options: [
      { text: "少于5小时", score: 0 },
      { text: "5-6小时", score: 1 },
      { text: "6-7小时", score: 2 },
      { text: "7-8小时", score: 3 }
    ]
  },
  {
    question: "你是否经常做噩梦？",
    options: [
      { text: "几乎每晚", score: 0 },
      { text: "每周几次", score: 1 },
      { text: "偶尔", score: 2 },
      { text: "很少或从不", score: 3 }
    ]
  },
  {
    question: "你的睡眠环境如何？",
    options: [
      { text: "嘈杂、光线强、不舒适", score: 0 },
      { text: "有些干扰", score: 1 },
      { text: "基本安静舒适", score: 2 },
      { text: "非常安静黑暗舒适", score: 3 }
    ]
  },
  {
    question: "你是否使用电子设备到很晚？",
    options: [
      { text: "每天睡前都在用", score: 0 },
      { text: "经常使用", score: 1 },
      { text: "偶尔使用", score: 2 },
      { text: "睡前1小时不用", score: 3 }
    ]
  },
  {
    question: "你是否有固定的作息时间？",
    options: [
      { text: "完全没有规律", score: 0 },
      { text: "不太规律", score: 1 },
      { text: "比较规律", score: 2 },
      { text: "非常规律", score: 3 }
    ]
  },
  {
    question: "你白天是否感到困倦？",
    options: [
      { text: "经常困倦，影响工作", score: 0 },
      { text: "下午会困", score: 1 },
      { text: "偶尔困倦", score: 2 },
      { text: "很少困倦", score: 3 }
    ]
  },
  {
    question: "你是否依赖咖啡因来保持清醒？",
    options: [
      { text: "每天大量摄入", score: 0 },
      { text: "每天适量", score: 1 },
      { text: "偶尔需要", score: 2 },
      { text: "很少或从不", score: 3 }
    ]
  },
  {
    question: "你睡前是否会感到焦虑？",
    options: [
      { text: "几乎每晚", score: 0 },
      { text: "经常", score: 1 },
      { text: "偶尔", score: 2 },
      { text: "很少或从不", score: 3 }
    ]
  },
  {
    question: "你是否有午睡习惯？",
    options: [
      { text: "每天午睡超过1小时", score: 0 },
      { text: "每天午睡30-60分钟", score: 1 },
      { text: "偶尔午睡", score: 2 },
      { text: "很少午睡或不午睡", score: 3 }
    ]
  },
  {
    question: "你睡前是否会进行放松活动？",
    options: [
      { text: "从不", score: 0 },
      { text: "很少", score: 1 },
      { text: "有时会", score: 2 },
      { text: "经常进行", score: 3 }
    ]
  },
  {
    question: "你是否在周末补觉？",
    options: [
      { text: "是的，睡很久", score: 0 },
      { text: "会多睡一些", score: 1 },
      { text: "稍微多睡一点", score: 2 },
      { text: "和平时差不多", score: 3 }
    ]
  },
  {
    question: "你是否容易被声音或光线吵醒？",
    options: [
      { text: "非常容易", score: 0 },
      { text: "比较容易", score: 1 },
      { text: "不太容易", score: 2 },
      { text: "很难被吵醒", score: 3 }
    ]
  },
  {
    question: "你是否有过失眠的经历？",
    options: [
      { text: "经常失眠", score: 0 },
      { text: "有时失眠", score: 1 },
      { text: "偶尔失眠", score: 2 },
      { text: "很少或从不", score: 3 }
    ]
  },
  {
    question: "你是否在睡前吃大餐或喝很多水？",
    options: [
      { text: "经常", score: 0 },
      { text: "有时会", score: 1 },
      { text: "很少", score: 2 },
      { text: "从不", score: 3 }
    ]
  },
  {
    question: "你对自己的睡眠质量满意吗？",
    options: [
      { text: "非常不满意", score: 0 },
      { text: "不太满意", score: 1 },
      { text: "基本满意", score: 2 },
      { text: "非常满意", score: 3 }
    ]
  },
  {
    question: "你是否需要闹钟才能醒来？",
    options: [
      { text: "是的，闹钟响很久才醒", score: 0 },
      { text: "需要闹钟", score: 1 },
      { text: "闹钟响就醒", score: 2 },
      { text: "自然醒", score: 3 }
    ]
  }
];
