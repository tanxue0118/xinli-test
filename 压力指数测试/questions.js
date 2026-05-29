const questions = [
  {
    question: "在工作或学习中，你通常感到：",
    options: [
      { text: "轻松自如，没有压力", score: 0 },
      { text: "偶尔有些压力", score: 1 },
      { text: "经常感到压力", score: 2 },
      { text: "压力巨大，难以承受", score: 3 }
    ]
  },
  {
    question: "对于截止日期，你通常会：",
    options: [
      { text: "提前完成，毫不担心", score: 0 },
      { text: "按时完成，略有压力", score: 1 },
      { text: "临近截止才完成，压力很大", score: 2 },
      { text: "经常延期，非常焦虑", score: 3 }
    ]
  },
  {
    question: "在面对多项任务时，你通常会：",
    options: [
      { text: "有条不紊地处理", score: 0 },
      { text: "有些忙乱但能应付", score: 1 },
      { text: "感到 overwhelmed", score: 2 },
      { text: "不知所措，无法应对", score: 3 }
    ]
  },
  {
    question: "对于自己的工作量，你通常感到：",
    options: [
      { text: "适中，能够轻松完成", score: 0 },
      { text: "有些多，但能应付", score: 1 },
      { text: "太多，经常加班", score: 2 },
      { text: "严重超负荷，无法承受", score: 3 }
    ]
  },
  {
    question: "在遇到意外情况时，你通常会：",
    options: [
      { text: "冷静应对，寻找解决方案", score: 0 },
      { text: "有些紧张，但能处理", score: 1 },
      { text: "非常焦虑，难以思考", score: 2 },
      { text: "恐慌，无法应对", score: 3 }
    ]
  },
  {
    question: "对于未来的不确定性，你通常感到：",
    options: [
      { text: "充满期待，不担心", score: 0 },
      { text: "有些担忧，但能接受", score: 1 },
      { text: "经常焦虑，难以释怀", score: 2 },
      { text: "极度恐惧，无法面对", score: 3 }
    ]
  },
  {
    question: "在与他人竞争时，你通常会：",
    options: [
      { text: "享受竞争，保持平常心", score: 0 },
      { text: "有些紧张，但能发挥", score: 1 },
      { text: "压力很大，影响表现", score: 2 },
      { text: "极度焦虑，无法正常发挥", score: 3 }
    ]
  },
  {
    question: "对于自己的时间管理，你通常感到：",
    options: [
      { text: "井井有条，时间充裕", score: 0 },
      { text: "基本够用，偶尔紧张", score: 1 },
      { text: "经常不够用，感到焦虑", score: 2 },
      { text: "完全失控，压力巨大", score: 3 }
    ]
  },
  {
    question: "在面对批评时，你通常会：",
    options: [
      { text: "虚心接受，不影响情绪", score: 0 },
      { text: "有些在意，但能恢复", score: 1 },
      { text: "非常在意，长时间纠结", score: 2 },
      { text: "极度沮丧，影响自信", score: 3 }
    ]
  },
  {
    question: "对于自己的健康状况，你通常感到：",
    options: [
      { text: "非常健康，精力充沛", score: 0 },
      { text: "基本健康，偶尔不适", score: 1 },
      { text: "经常感到疲惫", score: 2 },
      { text: "健康状况很差，压力很大", score: 3 }
    ]
  },
  {
    question: "在休息日，你通常会：",
    options: [
      { text: "完全放松，享受休息", score: 0 },
      { text: "基本放松，偶尔想工作", score: 1 },
      { text: "无法放松，经常想工作", score: 2 },
      { text: "即使休息也压力很大", score: 3 }
    ]
  },
  {
    question: "对于自己的经济状况，你通常感到：",
    options: [
      { text: "非常满意，没有经济压力", score: 0 },
      { text: "基本满意，偶尔担心", score: 1 },
      { text: "经常担心经济问题", score: 2 },
      { text: "经济压力巨大，影响生活", score: 3 }
    ]
  },
  {
    question: "在与家人相处时，你通常会：",
    options: [
      { text: "轻松愉快，享受家庭时光", score: 0 },
      { text: "基本愉快，偶尔有矛盾", score: 1 },
      { text: "经常因为压力而烦躁", score: 2 },
      { text: "压力影响家庭关系", score: 3 }
    ]
  },
  {
    question: "对于自己的睡眠质量，你通常感到：",
    options: [
      { text: "睡眠很好，精力充沛", score: 0 },
      { text: "偶尔失眠", score: 1 },
      { text: "经常失眠或睡眠质量差", score: 2 },
      { text: "严重失眠，影响生活", score: 3 }
    ]
  },
  {
    question: "在做决定时，你通常会：",
    options: [
      { text: "果断决策，不后悔", score: 0 },
      { text: "仔细考虑，但能决定", score: 1 },
      { text: "犹豫不决，担心出错", score: 2 },
      { text: "极度纠结，无法决定", score: 3 }
    ]
  },
  {
    question: "对于自己的社交生活，你通常感到：",
    options: [
      { text: "非常满意，社交轻松", score: 0 },
      { text: "基本满意，偶尔有压力", score: 1 },
      { text: "社交让我感到压力", score: 2 },
      { text: "尽量避免社交，压力很大", score: 3 }
    ]
  },
  {
    question: "在面对变化时，你通常会：",
    options: [
      { text: "欢迎变化，视为机会", score: 0 },
      { text: "有些不安，但能适应", score: 1 },
      { text: "非常抗拒，感到焦虑", score: 2 },
      { text: "极度恐惧，无法适应", score: 3 }
    ]
  },
  {
    question: "对于自己的成就，你通常感到：",
    options: [
      { text: "非常满意，为自己骄傲", score: 0 },
      { text: "基本满意，还有提升空间", score: 1 },
      { text: "不满意，感到压力", score: 2 },
      { text: "非常不满意，很有挫败感", score: 3 }
    ]
  },
  {
    question: "在独处时，你通常会：",
    options: [
      { text: "享受独处，感到放松", score: 0 },
      { text: "基本放松，偶尔焦虑", score: 1 },
      { text: "经常感到焦虑不安", score: 2 },
      { text: "无法独处，感到恐慌", score: 3 }
    ]
  },
  {
    question: "总体来说，你的压力程度是：",
    options: [
      { text: "几乎没有压力", score: 0 },
      { text: "有一些压力", score: 1 },
      { text: "压力较大", score: 2 },
      { text: "压力巨大", score: 3 }
    ]
  }
];