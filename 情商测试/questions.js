const questions = [
  {
    question: "当朋友向你倾诉烦恼时，你通常会：",
    options: [
      { text: "立即给出建议和解决方案", score: 2 },
      { text: "耐心倾听，不打断对方", score: 3 },
      { text: "心不在焉，想着自己的事情", score: 0 },
      { text: "转移话题，避免负面情绪", score: 1 }
    ]
  },
  {
    question: "在公共场合被误解时，你的第一反应是：",
    options: [
      { text: "立即愤怒地反驳", score: 0 },
      { text: "冷静地解释清楚", score: 3 },
      { text: "生闷气，不说话", score: 1 },
      { text: "无所谓，随它去", score: 2 }
    ]
  },
  {
    question: "当你感到压力很大时，你会：",
    options: [
      { text: "向他人倾诉，寻求支持", score: 3 },
      { text: "独自承受，不愿表露", score: 1 },
      { text: "通过运动或爱好释放压力", score: 2 },
      { text: "抱怨环境或他人", score: 0 }
    ]
  },
  {
    question: "面对批评时，你通常会：",
    options: [
      { text: "虚心接受，反思改进", score: 3 },
      { text: "感到受伤，但能理性分析", score: 2 },
      { text: "立即反驳，为自己辩护", score: 0 },
      { text: "表面接受，内心抵触", score: 1 }
    ]
  },
  {
    question: "在团队合作中，你更倾向于：",
    options: [
      { text: "倾听他人意见，寻求共识", score: 3 },
      { text: "坚持自己的观点，主导讨论", score: 1 },
      { text: "沉默寡言，很少表达意见", score: 0 },
      { text: "根据情况灵活调整", score: 2 }
    ]
  },
  {
    question: "当你看到别人成功时，你的感受是：",
    options: [
      { text: "真心为他们感到高兴", score: 3 },
      { text: "有些羡慕，但不会嫉妒", score: 2 },
      { text: "感到嫉妒或不平衡", score: 0 },
      { text: "无动于衷，与我无关", score: 1 }
    ]
  },
  {
    question: "在与陌生人交往时，你通常会：",
    options: [
      { text: "主动微笑，热情交谈", score: 3 },
      { text: "保持礼貌，但不太主动", score: 2 },
      { text: "感到紧张，尽量避免", score: 0 },
      { text: "等待对方先开口", score: 1 }
    ]
  },
  {
    question: "当你犯错时，你通常会：",
    options: [
      { text: "主动承认并道歉", score: 3 },
      { text: "找借口或推卸责任", score: 0 },
      { text: "默默改正，不声张", score: 2 },
      { text: "希望没人注意到", score: 1 }
    ]
  },
  {
    question: "在情绪激动时，你会：",
    options: [
      { text: "深呼吸，让自己冷静下来", score: 3 },
      { text: "立即做出决定", score: 0 },
      { text: "找人倾诉，释放情绪", score: 2 },
      { text: "压抑情绪，装作没事", score: 1 }
    ]
  },
  {
    question: "当别人向你提出不合理要求时，你会：",
    options: [
      { text: "委婉但坚定地拒绝", score: 3 },
      { text: "不好意思拒绝，勉强答应", score: 0 },
      { text: "直接拒绝，不考虑对方感受", score: 1 },
      { text: "拖延，希望对方忘记", score: 2 }
    ]
  },
  {
    question: "在社交场合中，你更擅长：",
    options: [
      { text: "察言观色，理解他人情绪", score: 3 },
      { text: "表达自己的观点", score: 2 },
      { text: "活跃气氛，逗大家开心", score: 1 },
      { text: "默默观察，很少参与", score: 0 }
    ]
  },
  {
    question: "当你与他人发生冲突时，你会：",
    options: [
      { text: "寻求双赢的解决方案", score: 3 },
      { text: "坚持己见，不肯让步", score: 0 },
      { text: "为了避免冲突而妥协", score: 1 },
      { text: "冷静分析问题根源", score: 2 }
    ]
  },
  {
    question: "对于他人的情绪变化，你通常：",
    options: [
      { text: "能敏锐察觉并作出反应", score: 3 },
      { text: "有时能察觉到", score: 2 },
      { text: "很少注意到", score: 0 },
      { text: "注意到了但不知如何回应", score: 1 }
    ]
  },
  {
    question: "在工作中遇到挫折时，你会：",
    options: [
      { text: "积极寻找解决办法", score: 3 },
      { text: "感到沮丧，但能很快恢复", score: 2 },
      { text: "长时间沉浸在负面情绪中", score: 0 },
      { text: "抱怨外部因素", score: 1 }
    ]
  },
  {
    question: "当你需要帮助时，你会：",
    options: [
      { text: "主动向他人求助", score: 3 },
      { text: "犹豫很久才开口", score: 1 },
      { text: "宁愿自己硬撑也不求助", score: 0 },
      { text: "寻找合适的时机和方式", score: 2 }
    ]
  },
  {
    question: "在倾听他人时，你通常会：",
    options: [
      { text: "全神贯注，给予积极反馈", score: 3 },
      { text: "边听边想自己的回应", score: 1 },
      { text: "假装在听，实际走神", score: 0 },
      { text: "适时提问，表示关心", score: 2 }
    ]
  },
  {
    question: "对于自己的情绪，你通常：",
    options: [
      { text: "能清楚识别并表达", score: 3 },
      { text: "有时能识别", score: 2 },
      { text: "经常感到困惑", score: 0 },
      { text: "倾向于压抑或忽视", score: 1 }
    ]
  },
  {
    question: "在团队中，你更愿意扮演的角色是：",
    options: [
      { text: "协调者，促进团队和谐", score: 3 },
      { text: "领导者，指导方向", score: 2 },
      { text: "执行者，完成分配的任务", score: 1 },
      { text: "旁观者，很少参与决策", score: 0 }
    ]
  },
  {
    question: "当你感到开心时，你会：",
    options: [
      { text: "与身边的人分享快乐", score: 3 },
      { text: "独自享受这份快乐", score: 2 },
      { text: "担心快乐不会持久", score: 0 },
      { text: "表现得比较含蓄", score: 1 }
    ]
  },
  {
    question: "在面对不确定性时，你通常会：",
    options: [
      { text: "保持冷静，积极应对", score: 3 },
      { text: "感到焦虑，但能控制", score: 2 },
      { text: "非常焦虑，影响正常生活", score: 0 },
      { text: "尽量避免面对", score: 1 }
    ]
  }
];