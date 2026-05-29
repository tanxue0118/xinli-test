const questions = [
  {
    question: "你是否有制定每日计划的习惯？",
    options: [
      { text: "从不制定计划", score: 0 },
      { text: "偶尔制定计划", score: 1 },
      { text: "经常制定计划", score: 2 },
      { text: "每天都会制定详细计划", score: 3 }
    ]
  },
  {
    question: "你如何处理紧急任务？",
    options: [
      { text: "手忙脚乱，不知所措", score: 0 },
      { text: "勉强完成", score: 1 },
      { text: "能够合理安排", score: 2 },
      { text: "高效处理，井井有条", score: 3 }
    ]
  },
  {
    question: "你是否经常拖延？",
    options: [
      { text: "总是拖延", score: 0 },
      { text: "经常拖延", score: 1 },
      { text: "偶尔拖延", score: 2 },
      { text: "从不拖延", score: 3 }
    ]
  },
  {
    question: "你如何安排工作优先级？",
    options: [
      { text: "随机处理", score: 0 },
      { text: "按时间顺序", score: 1 },
      { text: "按重要性排序", score: 2 },
      { text: "使用四象限法则", score: 3 }
    ]
  },
  {
    question: "你是否经常感到时间不够用？",
    options: [
      { text: "总是", score: 0 },
      { text: "经常", score: 1 },
      { text: "偶尔", score: 2 },
      { text: "很少", score: 3 }
    ]
  },
  {
    question: "你如何利用碎片时间？",
    options: [
      { text: "刷手机或发呆", score: 0 },
      { text: "休息放松", score: 1 },
      { text: "处理小事", score: 2 },
      { text: "高效利用", score: 3 }
    ]
  },
  {
    question: "你是否设置截止日期？",
    options: [
      { text: "从不设置", score: 0 },
      { text: "偶尔设置", score: 1 },
      { text: "经常设置", score: 2 },
      { text: "每个任务都设置", score: 3 }
    ]
  },
  {
    question: "你如何应对干扰？",
    options: [
      { text: "很容易被干扰", score: 0 },
      { text: "经常被干扰", score: 1 },
      { text: "能够抵抗部分干扰", score: 2 },
      { text: "能够专注不受干扰", score: 3 }
    ]
  },
  {
    question: "你是否使用时间管理工具？",
    options: [
      { text: "从不使用", score: 0 },
      { text: "偶尔使用", score: 1 },
      { text: "经常使用", score: 2 },
      { text: "熟练使用多种工具", score: 3 }
    ]
  },
  {
    question: "你如何安排休息时间？",
    options: [
      { text: "没有规律", score: 0 },
      { text: "偶尔休息", score: 1 },
      { text: "定时休息", score: 2 },
      { text: "科学安排休息", score: 3 }
    ]
  },
  {
    question: "你是否能够按时完成任务？",
    options: [
      { text: "经常延迟", score: 0 },
      { text: "有时延迟", score: 1 },
      { text: "基本按时", score: 2 },
      { text: "总是提前完成", score: 3 }
    ]
  },
  {
    question: "你如何处理多任务？",
    options: [
      { text: "不知所措", score: 0 },
      { text: "轮流处理", score: 1 },
      { text: "合理分配", score: 2 },
      { text: "高效并行处理", score: 3 }
    ]
  },
  {
    question: "你是否有长期目标？",
    options: [
      { text: "没有", score: 0 },
      { text: "模糊的目标", score: 1 },
      { text: "有明确目标", score: 2 },
      { text: "有详细的目标计划", score: 3 }
    ]
  },
  {
    question: "你如何安排早晨时间？",
    options: [
      { text: "匆忙出门", score: 0 },
      { text: "简单准备", score: 1 },
      { text: "有序准备", score: 2 },
      { text: "有晨间仪式", score: 3 }
    ]
  },
  {
    question: "你是否能够拒绝不必要的请求？",
    options: [
      { text: "从不拒绝", score: 0 },
      { text: "很难拒绝", score: 1 },
      { text: "有时会拒绝", score: 2 },
      { text: "能够合理拒绝", score: 3 }
    ]
  },
  {
    question: "你如何安排工作与生活？",
    options: [
      { text: "经常混淆", score: 0 },
      { text: "有时混淆", score: 1 },
      { text: "基本平衡", score: 2 },
      { text: "完美平衡", score: 3 }
    ]
  },
  {
    question: "你是否定期回顾时间使用情况？",
    options: [
      { text: "从不回顾", score: 0 },
      { text: "偶尔回顾", score: 1 },
      { text: "定期回顾", score: 2 },
      { text: "每天回顾", score: 3 }
    ]
  },
  {
    question: "你如何处理突发任务？",
    options: [
      { text: "打乱原有计划", score: 0 },
      { text: "勉强应对", score: 1 },
      { text: "灵活调整", score: 2 },
      { text: "高效处理", score: 3 }
    ]
  },
  {
    question: "你是否能够专注工作很长时间？",
    options: [
      { text: "很难专注", score: 0 },
      { text: "只能专注短时间", score: 1 },
      { text: "能够专注较长时间", score: 2 },
      { text: "能够长时间高度专注", score: 3 }
    ]
  },
  {
    question: "你对自己的时间管理满意吗？",
    options: [
      { text: "非常不满意", score: 0 },
      { text: "不太满意", score: 1 },
      { text: "基本满意", score: 2 },
      { text: "非常满意", score: 3 }
    ]
  }
];
