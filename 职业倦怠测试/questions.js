const questions = [
  {
    question: "你对工作的热情程度如何？",
    options: [
      { text: "非常有热情", score: 3 },
      { text: "比较有热情", score: 2 },
      { text: "热情有所下降", score: 1 },
      { text: "完全没有热情", score: 0 }
    ]
  },
  {
    question: "你是否经常感到工作疲惫？",
    options: [
      { text: "从不", score: 3 },
      { text: "偶尔", score: 2 },
      { text: "经常", score: 1 },
      { text: "总是", score: 0 }
    ]
  },
  {
    question: "你如何看待自己的工作价值？",
    options: [
      { text: "非常有价值", score: 3 },
      { text: "比较有价值", score: 2 },
      { text: "价值感降低", score: 1 },
      { text: "感觉没有价值", score: 0 }
    ]
  },
  {
    question: "你是否期待去上班？",
    options: [
      { text: "非常期待", score: 3 },
      { text: "比较期待", score: 2 },
      { text: "不太期待", score: 1 },
      { text: "非常抗拒", score: 0 }
    ]
  },
  {
    question: "你与同事的关系如何？",
    options: [
      { text: "非常融洽", score: 3 },
      { text: "比较融洽", score: 2 },
      { text: "有些紧张", score: 1 },
      { text: "非常紧张", score: 0 }
    ]
  },
  {
    question: "你是否经常加班？",
    options: [
      { text: "很少加班", score: 3 },
      { text: "偶尔加班", score: 2 },
      { text: "经常加班", score: 1 },
      { text: "几乎每天加班", score: 0 }
    ]
  },
  {
    question: "你对工作环境满意吗？",
    options: [
      { text: "非常满意", score: 3 },
      { text: "比较满意", score: 2 },
      { text: "不太满意", score: 1 },
      { text: "非常不满意", score: 0 }
    ]
  },
  {
    question: "你是否感到工作压力过大？",
    options: [
      { text: "压力适中", score: 3 },
      { text: "有些压力", score: 2 },
      { text: "压力较大", score: 1 },
      { text: "压力巨大", score: 0 }
    ]
  },
  {
    question: "你是否对工作失去兴趣？",
    options: [
      { text: "很有兴趣", score: 3 },
      { text: "比较有兴趣", score: 2 },
      { text: "兴趣下降", score: 1 },
      { text: "完全失去兴趣", score: 0 }
    ]
  },
  {
    question: "你是否经常请假？",
    options: [
      { text: "很少请假", score: 3 },
      { text: "偶尔请假", score: 2 },
      { text: "经常请假", score: 1 },
      { text: "频繁请假", score: 0 }
    ]
  },
  {
    question: "你对工作成果满意吗？",
    options: [
      { text: "非常满意", score: 3 },
      { text: "比较满意", score: 2 },
      { text: "不太满意", score: 1 },
      { text: "非常不满意", score: 0 }
    ]
  },
  {
    question: "你是否感到被工作消耗？",
    options: [
      { text: "没有", score: 3 },
      { text: "偶尔", score: 2 },
      { text: "经常", score: 1 },
      { text: "总是", score: 0 }
    ]
  },
  {
    question: "你对领导的管理方式满意吗？",
    options: [
      { text: "非常满意", score: 3 },
      { text: "比较满意", score: 2 },
      { text: "不太满意", score: 1 },
      { text: "非常不满意", score: 0 }
    ]
  },
  {
    question: "你是否经常感到焦虑？",
    options: [
      { text: "很少", score: 3 },
      { text: "偶尔", score: 2 },
      { text: "经常", score: 1 },
      { text: "总是", score: 0 }
    ]
  },
  {
    question: "你是否能够平衡工作与生活？",
    options: [
      { text: "完美平衡", score: 3 },
      { text: "基本平衡", score: 2 },
      { text: "有些失衡", score: 1 },
      { text: "严重失衡", score: 0 }
    ]
  },
  {
    question: "你是否经常感到情绪低落？",
    options: [
      { text: "很少", score: 3 },
      { text: "偶尔", score: 2 },
      { text: "经常", score: 1 },
      { text: "总是", score: 0 }
    ]
  },
  {
    question: "你对职业发展有信心吗？",
    options: [
      { text: "非常有信心", score: 3 },
      { text: "比较有信心", score: 2 },
      { text: "信心不足", score: 1 },
      { text: "完全没有信心", score: 0 }
    ]
  },
  {
    question: "你是否经常考虑辞职？",
    options: [
      { text: "从不", score: 3 },
      { text: "偶尔", score: 2 },
      { text: "经常", score: 1 },
      { text: "总是", score: 0 }
    ]
  },
  {
    question: "你对薪资待遇满意吗？",
    options: [
      { text: "非常满意", score: 3 },
      { text: "比较满意", score: 2 },
      { text: "不太满意", score: 1 },
      { text: "非常不满意", score: 0 }
    ]
  },
  {
    question: "你对自己的工作表现满意吗？",
    options: [
      { text: "非常满意", score: 3 },
      { text: "比较满意", score: 2 },
      { text: "不太满意", score: 1 },
      { text: "非常不满意", score: 0 }
    ]
  }
];
