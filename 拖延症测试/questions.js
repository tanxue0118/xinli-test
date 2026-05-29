const questions = [
  {
    question: "对于重要的任务，你通常会：",
    options: [
      { text: "立即开始，提前完成", score: 0 },
      { text: "按时开始，准时完成", score: 1 },
      { text: "拖到最后一刻才开始", score: 2 },
      { text: "经常延期或无法完成", score: 3 }
    ]
  },
  {
    question: "当面对困难的任务时，你会：",
    options: [
      { text: "立即着手解决", score: 0 },
      { text: "思考后开始行动", score: 1 },
      { text: "尽量拖延，避免面对", score: 2 },
      { text: "完全逃避，不愿处理", score: 3 }
    ]
  },
  {
    question: "对于日常家务，你通常会：",
    options: [
      { text: "及时完成，保持整洁", score: 0 },
      { text: "偶尔拖延，但能完成", score: 1 },
      { text: "经常拖延，堆积很多", score: 2 },
      { text: "几乎不主动做", score: 3 }
    ]
  },
  {
    question: "在学习或工作中，你是否经常分心？",
    options: [
      { text: "很少分心，专注力强", score: 0 },
      { text: "偶尔分心，但能回到正轨", score: 1 },
      { text: "经常分心，效率低下", score: 2 },
      { text: "无法集中注意力", score: 3 }
    ]
  },
  {
    question: "对于需要长期完成的项目，你通常会：",
    options: [
      { text: "制定计划，按部就班", score: 0 },
      { text: "有计划，但偶尔拖延", score: 1 },
      { text: "很少制定计划，随意进行", score: 2 },
      { text: "完全没有计划，最后赶工", score: 3 }
    ]
  },
  {
    question: "当有多个任务需要完成时，你会：",
    options: [
      { text: "列出清单，优先处理", score: 0 },
      { text: "随机选择一个开始", score: 1 },
      { text: "选择最简单的先做", score: 2 },
      { text: "不知从何开始，全部拖延", score: 3 }
    ]
  },
  {
    question: "对于回复邮件或消息，你通常会：",
    options: [
      { text: "立即回复", score: 0 },
      { text: "当天回复", score: 1 },
      { text: "拖延几天才回复", score: 2 },
      { text: "经常忘记或不回复", score: 3 }
    ]
  },
  {
    question: "你是否经常在截止日期前感到焦虑？",
    options: [
      { text: "很少，因为我提前完成", score: 0 },
      { text: "偶尔，但能按时完成", score: 1 },
      { text: "经常，因为总是拖延", score: 2 },
      { text: "总是，压力巨大", score: 3 }
    ]
  },
  {
    question: "对于锻炼身体，你通常会：",
    options: [
      { text: "坚持定期锻炼", score: 0 },
      { text: "偶尔锻炼", score: 1 },
      { text: "计划锻炼但很少执行", score: 2 },
      { text: "几乎不锻炼", score: 3 }
    ]
  },
  {
    question: "当需要做决定时，你会：",
    options: [
      { text: "果断决定", score: 0 },
      { text: "思考后决定", score: 1 },
      { text: "反复纠结，难以决定", score: 2 },
      { text: "拖延决定，希望问题消失", score: 3 }
    ]
  },
  {
    question: "对于学习新技能，你通常会：",
    options: [
      { text: "立即开始学习", score: 0 },
      { text: "计划后开始", score: 1 },
      { text: "总是说要学但没开始", score: 2 },
      { text: "一直拖延，从未开始", score: 3 }
    ]
  },
  {
    question: "你是否经常找借口拖延任务？",
    options: [
      { text: "很少找借口", score: 0 },
      { text: "偶尔会找借口", score: 1 },
      { text: "经常找借口", score: 2 },
      { text: "总是找借口", score: 3 }
    ]
  },
  {
    question: "对于整理房间或工作空间，你通常会：",
    options: [
      { text: "保持整洁有序", score: 0 },
      { text: "定期整理", score: 1 },
      { text: "等到很乱才整理", score: 2 },
      { text: "几乎不整理", score: 3 }
    ]
  },
  {
    question: "当任务变得无聊时，你会：",
    options: [
      { text: "坚持完成", score: 0 },
      { text: "休息后继续", score: 1 },
      { text: "转换到其他任务", score: 2 },
      { text: "完全放弃", score: 3 }
    ]
  },
  {
    question: "对于财务规划，你通常会：",
    options: [
      { text: "定期规划和储蓄", score: 0 },
      { text: "偶尔规划", score: 1 },
      { text: "很少规划", score: 2 },
      { text: "完全没有规划", score: 3 }
    ]
  },
  {
    question: "你是否经常说"明天再做"？",
    options: [
      { text: "很少", score: 0 },
      { text: "偶尔", score: 1 },
      { text: "经常", score: 2 },
      { text: "总是", score: 3 }
    ]
  },
  {
    question: "对于社交活动，你通常会：",
    options: [
      { text: "按时参加", score: 0 },
      { text: "偶尔迟到", score: 1 },
      { text: "经常迟到或取消", score: 2 },
      { text: "尽量避免参加", score: 3 }
    ]
  },
  {
    question: "当有工作需要完成时，你是否会被手机或社交媒体分心？",
    options: [
      { text: "很少，能控制自己", score: 0 },
      { text: "偶尔会分心", score: 1 },
      { text: "经常分心", score: 2 },
      { text: "无法控制，总是分心", score: 3 }
    ]
  },
  {
    question: "对于健康饮食，你通常会：",
    options: [
      { text: "坚持健康饮食", score: 0 },
      { text: "偶尔吃垃圾食品", score: 1 },
      { text: "经常吃垃圾食品", score: 2 },
      { text: "完全不控制饮食", score: 3 }
    ]
  },
  {
    question: "总体来说，你的拖延程度是：",
    options: [
      { text: "几乎没有拖延", score: 0 },
      { text: "轻度拖延", score: 1 },
      { text: "中度拖延", score: 2 },
      { text: "严重拖延", score: 3 }
    ]
  }
];