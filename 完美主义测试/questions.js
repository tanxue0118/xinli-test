const questions = [
  {
    question: "对于自己的工作成果，你通常会：",
    options: [
      { text: "接受不完美，完成即可", score: 0 },
      { text: "追求较好，但能接受瑕疵", score: 1 },
      { text: "追求完美，难以接受瑕疵", score: 2 },
      { text: "极度追求完美，反复修改", score: 3 }
    ]
  },
  {
    question: "当犯错时，你通常会：",
    options: [
      { text: "接受错误，从中学习", score: 0 },
      { text: "有些在意，但能放下", score: 1 },
      { text: "非常自责，难以释怀", score: 2 },
      { text: "极度自责，长时间纠结", score: 3 }
    ]
  },
  {
    question: "对于他人对你的评价，你通常会：",
    options: [
      { text: "不太在意，做自己就好", score: 0 },
      { text: "会参考，但不会过度在意", score: 1 },
      { text: "非常在意，希望得到好评", score: 2 },
      { text: "极度在意，渴望完美评价", score: 3 }
    ]
  },
  {
    question: "在制定计划时，你通常会：",
    options: [
      { text: "灵活调整，不苛求完美", score: 0 },
      { text: "有计划，但能接受变化", score: 1 },
      { text: "制定详细计划，难以改变", score: 2 },
      { text: "极度详细，任何变化都焦虑", score: 3 }
    ]
  },
  {
    question: "对于自己的外表，你通常会：",
    options: [
      { text: "接受自己，不太在意", score: 0 },
      { text: "基本满意，偶尔在意", score: 1 },
      { text: "追求完美，经常不满意", score: 2 },
      { text: "极度追求完美，难以接受", score: 3 }
    ]
  },
  {
    question: "在与他人合作时，你通常会：",
    options: [
      { text: "接受他人风格，灵活合作", score: 0 },
      { text: "有标准，但能妥协", score: 1 },
      { text: "要求较高，难以接受不足", score: 2 },
      { text: "要求完美，经常批评他人", score: 3 }
    ]
  },
  {
    question: "对于时间管理，你通常会：",
    options: [
      { text: "灵活安排，不太严格", score: 0 },
      { text: "有计划，但能调整", score: 1 },
      { text: "严格计划，难以接受偏差", score: 2 },
      { text: "极度严格，任何偏差都焦虑", score: 3 }
    ]
  },
  {
    question: "当任务没有达到预期时，你会：",
    options: [
      { text: "接受结果，继续前进", score: 0 },
      { text: "有些失望，但能接受", score: 1 },
      { text: "非常失望，难以接受", score: 2 },
      { text: "极度失望，反复纠结", score: 3 }
    ]
  },
  {
    question: "对于自己的成绩或成就，你通常会：",
    options: [
      { text: "感到满意，珍惜当下", score: 0 },
      { text: "基本满意，但想更好", score: 1 },
      { text: "很少满意，总觉得不够", score: 2 },
      { text: "极度不满意，永远追求更高", score: 3 }
    ]
  },
  {
    question: "在做决定时，你通常会：",
    options: [
      { text: "果断决定，接受后果", score: 0 },
      { text: "仔细考虑，但能决定", score: 1 },
      { text: "反复权衡，难以决定", score: 2 },
      { text: "极度纠结，害怕出错", score: 3 }
    ]
  },
  {
    question: "对于家务或整理，你通常会：",
    options: [
      { text: "大致整洁即可", score: 0 },
      { text: "保持整洁，但不过分", score: 1 },
      { text: "追求完美，难以容忍杂乱", score: 2 },
      { text: "极度追求完美，任何杂乱都焦虑", score: 3 }
    ]
  },
  {
    question: "当别人做事不符合你的标准时，你会：",
    options: [
      { text: "接受差异，不太在意", score: 0 },
      { text: "有些在意，但能接受", score: 1 },
      { text: "非常在意，难以接受", score: 2 },
      { text: "极度在意，经常批评", score: 3 }
    ]
  },
  {
    question: "对于自己的健康习惯，你通常会：",
    options: [
      { text: "大致健康即可", score: 0 },
      { text: "注意健康，但不苛求", score: 1 },
      { text: "追求完美，难以接受偏差", score: 2 },
      { text: "极度追求完美，任何偏差都焦虑", score: 3 }
    ]
  },
  {
    question: "在写邮件或消息时，你通常会：",
    options: [
      { text: "快速完成，不太检查", score: 0 },
      { text: "检查一遍，然后发送", score: 1 },
      { text: "反复检查，担心出错", score: 2 },
      { text: "极度纠结，难以发送", score: 3 }
    ]
  },
  {
    question: "对于自己的社交表现，你通常会：",
    options: [
      { text: "自然表现，不太在意", score: 0 },
      { text: "注意表现，但能放松", score: 1 },
      { text: "追求完美表现，难以放松", score: 2 },
      { text: "极度追求完美，社交焦虑", score: 3 }
    ]
  },
  {
    question: "当计划被打乱时，你会：",
    options: [
      { text: "灵活调整，接受变化", score: 0 },
      { text: "有些不适应，但能调整", score: 1 },
      { text: "非常焦虑，难以接受", score: 2 },
      { text: "极度焦虑，无法接受", score: 3 }
    ]
  },
  {
    question: "对于自己的学习或工作表现，你通常会：",
    options: [
      { text: "接受自己的水平", score: 0 },
      { text: "追求进步，但不苛求", score: 1 },
      { text: "追求完美，难以接受不足", score: 2 },
      { text: "极度追求完美，永远不满意", score: 3 }
    ]
  },
  {
    question: "在与他人比较时，你通常会：",
    options: [
      { text: "关注自己的成长", score: 0 },
      { text: "会比较，但不影响自信", score: 1 },
      { text: "经常比较，感到压力", score: 2 },
      { text: "总是比较，感到自卑", score: 3 }
    ]
  },
  {
    question: "对于自己的兴趣爱好，你通常会：",
    options: [
      { text: "享受过程，不追求完美", score: 0 },
      { text: "追求进步，但能享受", score: 1 },
      { text: "追求完美，难以享受", score: 2 },
      { text: "极度追求完美，压力很大", score: 3 }
    ]
  },
  {
    question: "总体来说，你的完美主义倾向是：",
    options: [
      { text: "几乎没有", score: 0 },
      { text: "轻度", score: 1 },
      { text: "中度", score: 2 },
      { text: "重度", score: 3 }
    ]
  }
];