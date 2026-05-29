const questions = [
  {
    question: "对于目前的生活，你通常感到：",
    options: [
      { text: "非常不满意，经常感到失落", score: 0 },
      { text: "不太满意，有些遗憾", score: 1 },
      { text: "比较满意，偶尔有不满", score: 2 },
      { text: "非常满意，感到幸福", score: 3 }
    ]
  },
  {
    question: "在日常生活中，你感到快乐的频率是：",
    options: [
      { text: "很少感到快乐", score: 0 },
      { text: "偶尔感到快乐", score: 1 },
      { text: "经常感到快乐", score: 2 },
      { text: "几乎每天都很快乐", score: 3 }
    ]
  },
  {
    question: "对于自己的人际关系，你通常感到：",
    options: [
      { text: "孤独，缺乏支持", score: 0 },
      { text: "有些孤单，希望更多陪伴", score: 1 },
      { text: "有朋友，但希望更亲密", score: 2 },
      { text: "有很多支持，感到温暖", score: 3 }
    ]
  },
  {
    question: "在工作中，你通常感到：",
    options: [
      { text: "压力巨大，毫无乐趣", score: 0 },
      { text: "有些压力，偶尔有成就感", score: 1 },
      { text: "有挑战但也有乐趣", score: 2 },
      { text: "充满热情，享受工作", score: 3 }
    ]
  },
  {
    question: "对于自己的未来，你通常感到：",
    options: [
      { text: "悲观，看不到希望", score: 0 },
      { text: "有些担忧，不确定", score: 1 },
      { text: "期待，有目标", score: 2 },
      { text: "充满信心，期待未来", score: 3 }
    ]
  },
  {
    question: "当遇到困难时，你通常会：",
    options: [
      { text: "感到绝望，无法应对", score: 0 },
      { text: "感到沮丧，但会尝试", score: 1 },
      { text: "积极面对，寻找解决", score: 2 },
      { text: "视为成长机会，乐观面对", score: 3 }
    ]
  },
  {
    question: "对于自己的健康状况，你通常感到：",
    options: [
      { text: "很不满意，经常生病", score: 0 },
      { text: "不太满意，有些问题", score: 1 },
      { text: "基本满意，偶尔不适", score: 2 },
      { text: "非常满意，精力充沛", score: 3 }
    ]
  },
  {
    question: "在休闲时间，你通常感到：",
    options: [
      { text: "无聊，找不到乐趣", score: 0 },
      { text: "有些无聊，但能打发时间", score: 1 },
      { text: "有喜欢的事情做", score: 2 },
      { text: "充分享受，感到放松", score: 3 }
    ]
  },
  {
    question: "对于自己的经济状况，你通常感到：",
    options: [
      { text: "很不满意，经常焦虑", score: 0 },
      { text: "不太满意，有些压力", score: 1 },
      { text: "基本满意，能应付", score: 2 },
      { text: "非常满意，感到安心", score: 3 }
    ]
  },
  {
    question: "在亲密关系中，你通常感到：",
    options: [
      { text: "不满意，经常冲突", score: 0 },
      { text: "有些问题，但能维持", score: 1 },
      { text: "比较满意，偶尔有摩擦", score: 2 },
      { text: "非常满意，感到被爱", score: 3 }
    ]
  },
  {
    question: "对于自己的外貌，你通常感到：",
    options: [
      { text: "很不满意，经常自卑", score: 0 },
      { text: "不太满意，有些在意", score: 1 },
      { text: "基本满意，能接受", score: 2 },
      { text: "非常满意，感到自信", score: 3 }
    ]
  },
  {
    question: "在学习新事物时，你通常感到：",
    options: [
      { text: "困难重重，毫无兴趣", score: 0 },
      { text: "有些困难，但会尝试", score: 1 },
      { text: "有挑战但也有乐趣", score: 2 },
      { text: "充满热情，享受学习", score: 3 }
    ]
  },
  {
    question: "对于自己的社交生活，你通常感到：",
    options: [
      { text: "很不满意，感到孤独", score: 0 },
      { text: "不太满意，希望更多社交", score: 1 },
      { text: "基本满意，有朋友", score: 2 },
      { text: "非常满意，社交丰富", score: 3 }
    ]
  },
  {
    question: "在面对变化时，你通常感到：",
    options: [
      { text: "恐惧，害怕未知", score: 0 },
      { text: "有些不安，但能适应", score: 1 },
      { text: "接受，视为机会", score: 2 },
      { text: "欢迎，喜欢新鲜感", score: 3 }
    ]
  },
  {
    question: "对于自己的成就，你通常感到：",
    options: [
      { text: "不满意，觉得自己不够好", score: 0 },
      { text: "有些成就，但希望更多", score: 1 },
      { text: "比较满意，有成就感", score: 2 },
      { text: "非常满意，为自己骄傲", score: 3 }
    ]
  },
  {
    question: "在日常生活中，你感到感恩的频率是：",
    options: [
      { text: "很少感恩", score: 0 },
      { text: "偶尔感恩", score: 1 },
      { text: "经常感恩", score: 2 },
      { text: "每天都感恩", score: 3 }
    ]
  },
  {
    question: "对于自己的时间管理，你通常感到：",
    options: [
      { text: "混乱，经常浪费时间", score: 0 },
      { text: "有些混乱，但能应付", score: 1 },
      { text: "基本有序，偶尔混乱", score: 2 },
      { text: "井井有条，感到高效", score: 3 }
    ]
  },
  {
    question: "在独处时，你通常感到：",
    options: [
      { text: "孤独，感到无聊", score: 0 },
      { text: "有些无聊，但能忍受", score: 1 },
      { text: "享受独处，有事情做", score: 2 },
      { text: "非常享受，感到放松", score: 3 }
    ]
  },
  {
    question: "对于自己的人生意义，你通常感到：",
    options: [
      { text: "迷茫，找不到意义", score: 0 },
      { text: "有些困惑，但会思考", score: 1 },
      { text: "有目标，但不确定", score: 2 },
      { text: "清晰，感到有意义", score: 3 }
    ]
  },
  {
    question: "总体来说，你对自己的生活感到：",
    options: [
      { text: "非常不满意", score: 0 },
      { text: "不太满意", score: 1 },
      { text: "比较满意", score: 2 },
      { text: "非常满意", score: 3 }
    ]
  }
];