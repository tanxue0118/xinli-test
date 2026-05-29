const questions = [
  {
    question: "在聚会或社交场合中，你通常感到：",
    options: [
      { text: "非常紧张，想尽快离开", score: 3 },
      { text: "有些不自在，但能应付", score: 2 },
      { text: "基本放松，偶尔紧张", score: 1 },
      { text: "完全放松，享受其中", score: 0 }
    ]
  },
  {
    question: "当需要与陌生人交谈时，你会：",
    options: [
      { text: "尽量避免，感到极度焦虑", score: 3 },
      { text: "勉强交谈，但很不自在", score: 2 },
      { text: "有些紧张，但能正常交流", score: 1 },
      { text: "主动交谈，感到轻松", score: 0 }
    ]
  },
  {
    question: "在众人面前发言时，你通常会：",
    options: [
      { text: "极度紧张，声音颤抖", score: 3 },
      { text: "非常紧张，但能完成", score: 2 },
      { text: "有些紧张，但表现正常", score: 1 },
      { text: "自信从容，毫不紧张", score: 0 }
    ]
  },
  {
    question: "当你成为众人关注的焦点时，你会：",
    options: [
      { text: "感到恐慌，想立刻消失", score: 3 },
      { text: "非常不自在，希望快点结束", score: 2 },
      { text: "有些紧张，但能应对", score: 1 },
      { text: "享受被关注的感觉", score: 0 }
    ]
  },
  {
    question: "在公共场合吃饭或喝东西时，你是否担心别人在看你？",
    options: [
      { text: "非常担心，甚至避免在公共场合吃东西", score: 3 },
      { text: "有些担心，但还是能吃", score: 2 },
      { text: "偶尔担心", score: 1 },
      { text: "完全不担心", score: 0 }
    ]
  },
  {
    question: "参加面试或重要会议前，你通常会：",
    options: [
      { text: "极度焦虑，失眠或身体不适", score: 3 },
      { text: "非常紧张，反复准备", score: 2 },
      { text: "有些紧张，但能正常准备", score: 1 },
      { text: "保持冷静，自信应对", score: 0 }
    ]
  },
  {
    question: "当别人给你负面评价时，你会：",
    options: [
      { text: "极度沮丧，长时间无法释怀", score: 3 },
      { text: "非常在意，反复回想", score: 2 },
      { text: "有些在意，但能很快放下", score: 1 },
      { text: "不太在意，能客观看待", score: 0 }
    ]
  },
  {
    question: "在社交场合中，你是否担心自己会说错话或做错事？",
    options: [
      { text: "非常担心，因此很少说话", score: 3 },
      { text: "经常担心，说话很谨慎", score: 2 },
      { text: "偶尔担心", score: 1 },
      { text: "很少担心", score: 0 }
    ]
  },
  {
    question: "当你需要打电话给不熟悉的人时，你会：",
    options: [
      { text: "极度焦虑，尽量避免", score: 3 },
      { text: "很紧张，提前准备要说的话", score: 2 },
      { text: "有些紧张，但能正常通话", score: 1 },
      { text: "轻松自如，毫不紧张", score: 0 }
    ]
  },
  {
    question: "在集体活动中，你通常会：",
    options: [
      { text: "躲在角落，避免与人交流", score: 3 },
      { text: "只和认识的人在一起", score: 2 },
      { text: "尝试参与，但不太主动", score: 1 },
      { text: "积极参与，主动与人交流", score: 0 }
    ]
  },
  {
    question: "当你走进一个满是人的房间时，你会：",
    options: [
      { text: "感到恐慌，想立刻离开", score: 3 },
      { text: "非常紧张，尽量不引人注意", score: 2 },
      { text: "有些不自在，但能自然走进去", score: 1 },
      { text: "自信地走进去，环顾四周", score: 0 }
    ]
  },
  {
    question: "在与权威人士（如领导、老师）交流时，你会：",
    options: [
      { text: "极度紧张，说话结巴", score: 3 },
      { text: "非常紧张，但能表达清楚", score: 2 },
      { text: "有些紧张，但能正常交流", score: 1 },
      { text: "自信从容，平等交流", score: 0 }
    ]
  },
  {
    question: "你是否经常担心别人在背后议论你？",
    options: [
      { text: "经常担心，影响日常生活", score: 3 },
      { text: "有时会担心", score: 2 },
      { text: "偶尔会想", score: 1 },
      { text: "很少担心", score: 0 }
    ]
  },
  {
    question: "在与异性交往时，你通常感到：",
    options: [
      { text: "极度紧张，不知所措", score: 3 },
      { text: "很紧张，但能交流", score: 2 },
      { text: "有些紧张，但能自然相处", score: 1 },
      { text: "轻松自如，毫不紧张", score: 0 }
    ]
  },
  {
    question: "当你需要拒绝别人的请求时，你会：",
    options: [
      { text: "感到极度焦虑，很难拒绝", score: 3 },
      { text: "很纠结，但最终会拒绝", score: 2 },
      { text: "有些为难，但能拒绝", score: 1 },
      { text: "能轻松自然地拒绝", score: 0 }
    ]
  },
  {
    question: "在公共场合使用手机通话时，你是否感到不自在？",
    options: [
      { text: "非常不自在，尽量避免", score: 3 },
      { text: "有些不自在，会压低声音", score: 2 },
      { text: "稍微有点不自在", score: 1 },
      { text: "完全不介意", score: 0 }
    ]
  },
  {
    question: "当你犯错被别人看到时，你会：",
    options: [
      { text: "极度尴尬，想找个地缝钻进去", score: 3 },
      { text: "非常尴尬，很长时间无法释怀", score: 2 },
      { text: "有些尴尬，但能很快恢复", score: 1 },
      { text: "不太在意，一笑而过", score: 0 }
    ]
  },
  {
    question: "在与人交谈时，你是否担心自己的表情或眼神不自然？",
    options: [
      { text: "非常担心，经常回避眼神接触", score: 3 },
      { text: "有时会担心", score: 2 },
      { text: "偶尔会想", score: 1 },
      { text: "很少担心", score: 0 }
    ]
  },
  {
    question: "参加社交活动后，你是否会反复回想自己的表现？",
    options: [
      { text: "经常回想，并感到焦虑", score: 3 },
      { text: "有时会回想", score: 2 },
      { text: "偶尔会想", score: 1 },
      { text: "很少回想", score: 0 }
    ]
  },
  {
    question: "总体来说，你在社交场合中的焦虑程度是：",
    options: [
      { text: "非常严重，严重影响生活", score: 3 },
      { text: "比较严重，有一定影响", score: 2 },
      { text: "轻微，基本不影响", score: 1 },
      { text: "几乎没有", score: 0 }
    ]
  }
];