var psychAgeQuestions = [
  { id: 1, text: "当朋友迟到时，你通常会：", options: [
    { text: "非常生气，觉得不被尊重", score: 0 },
    { text: "有点不耐烦，但能理解", score: 1 },
    { text: "利用等待时间做些别的事", score: 2 }
  ]},
  { id: 2, text: "面对失败时，你的第一反应是：", options: [
    { text: "责怪他人或环境", score: 0 },
    { text: "感到沮丧，但会尝试分析原因", score: 1 },
    { text: "把失败当作学习的机会", score: 2 }
  ]},
  { id: 3, text: "你如何看待规则？", options: [
    { text: "规则是用来打破的", score: 0 },
    { text: "大多数规则应该遵守", score: 1 },
    { text: "规则是社会运行的基础", score: 2 }
  ]},
  { id: 4, text: "当别人批评你时，你会：", options: [
    { text: "立刻反驳或生气", score: 0 },
    { text: "感到不舒服，但会思考", score: 1 },
    { text: "认真倾听，有则改之", score: 2 }
  ]},
  { id: 5, text: "你如何做重要决定？", options: [
    { text: "凭感觉和冲动", score: 0 },
    { text: "考虑利弊，但有时会犹豫", score: 1 },
    { text: "全面分析，权衡各种因素", score: 2 }
  ]},
  { id: 6, text: "你如何看待金钱？", options: [
    { text: "有多少花多少", score: 0 },
    { text: "会存一些，但不太规划", score: 1 },
    { text: "有明确的理财计划", score: 2 }
  ]},
  { id: 7, text: "当与他人意见不同时，你会：", options: [
    { text: "坚持自己是对的", score: 0 },
    { text: "尝试说服对方", score: 1 },
    { text: "尊重不同观点，寻求共识", score: 2 }
  ]},
  { id: 8, text: "你如何安排自己的时间？", options: [
    { text: "随心所欲，没有计划", score: 0 },
    { text: "有一些安排，但经常改变", score: 1 },
    { text: "有明确的日程安排", score: 2 }
  ]},
  { id: 9, text: "面对压力时，你会：", options: [
    { text: "逃避或崩溃", score: 0 },
    { text: "感到焦虑，但能应对", score: 1 },
    { text: "冷静分析，寻找解决方案", score: 2 }
  ]},
  { id: 10, text: "你如何看待承诺？", options: [
    { text: "随口说说，不必当真", score: 0 },
    { text: "尽量遵守，但有时会食言", score: 1 },
    { text: "言出必行，非常重视", score: 2 }
  ]},
  { id: 11, text: "你如何处理人际关系中的冲突？", options: [
    { text: "冷战或发脾气", score: 0 },
    { text: "等情绪平复后再谈", score: 1 },
    { text: "主动沟通，寻求解决", score: 2 }
  ]},
  { id: 12, text: "你如何看待自己的缺点？", options: [
    { text: "不承认有缺点", score: 0 },
    { text: "知道但不太想改", score: 1 },
    { text: "接受并努力改进", score: 2 }
  ]},
  { id: 13, text: "当别人需要帮助时，你会：", options: [
    { text: "觉得与我无关", score: 0 },
    { text: "看情况决定", score: 1 },
    { text: "力所能及地帮助", score: 2 }
  ]},
  { id: 14, text: "你如何对待长辈？", options: [
    { text: "觉得他们思想落后", score: 0 },
    { text: "保持基本礼貌", score: 1 },
    { text: "尊重并学习他们的经验", score: 2 }
  ]},
  { id: 15, text: "你如何看待工作/学习？", options: [
    { text: "能偷懒就偷懒", score: 0 },
    { text: "完成要求即可", score: 1 },
    { text: "追求卓越，不断进步", score: 2 }
  ]},
  { id: 16, text: "当你犯错时，你会：", options: [
    { text: "找借口或推卸责任", score: 0 },
    { text: "承认错误，但不太愿意道歉", score: 1 },
    { text: "主动承认并道歉", score: 2 }
  ]},
  { id: 17, text: "你如何看待独处？", options: [
    { text: "很无聊，无法忍受", score: 0 },
    { text: "偶尔需要，但不能太久", score: 1 },
    { text: "享受独处，用于思考和充电", score: 2 }
  ]},
  { id: 18, text: "你如何设定目标？", options: [
    { text: "走一步看一步", score: 0 },
    { text: "有模糊的方向", score: 1 },
    { text: "有明确的短期和长期目标", score: 2 }
  ]},
  { id: 19, text: "你如何看待他人的成功？", options: [
    { text: "嫉妒或觉得不公平", score: 0 },
    { text: "有点羡慕", score: 1 },
    { text: "欣赏并从中学习", score: 2 }
  ]},
  { id: 20, text: "你如何处理情绪？", options: [
    { text: "被情绪控制", score: 0 },
    { text: "有时能控制，有时不能", score: 1 },
    { text: "能够识别和管理情绪", score: 2 }
  ]},
  { id: 21, text: "你如何看待改变？", options: [
    { text: "害怕改变，喜欢安逸", score: 0 },
    { text: "不太喜欢，但能接受", score: 1 },
    { text: "拥抱变化，视为成长机会", score: 2 }
  ]},
  { id: 22, text: "你如何与陌生人交流？", options: [
    { text: "紧张，不知道说什么", score: 0 },
    { text: "能聊，但不太自在", score: 1 },
    { text: "自然大方，善于沟通", score: 2 }
  ]},
  { id: 23, text: "你如何看待责任？", options: [
    { text: "能推就推", score: 0 },
    { text: "愿意承担，但有时逃避", score: 1 },
    { text: "主动承担责任", score: 2 }
  ]},
  { id: 24, text: "你如何度过周末？", options: [
    { text: "睡到自然醒，无所事事", score: 0 },
    { text: "休息为主，偶尔做些事", score: 1 },
    { text: "合理安排休息和活动", score: 2 }
  ]},
  { id: 25, text: "你如何看待学习新事物？", options: [
    { text: "没什么兴趣", score: 0 },
    { text: "有兴趣但缺乏行动", score: 1 },
    { text: "积极学习，保持好奇心", score: 2 }
  ]},
  { id: 26, text: "你如何处理与父母的关系？", options: [
    { text: "经常争吵或疏远", score: 0 },
    { text: "关系一般，偶尔联系", score: 1 },
    { text: "理解感恩，主动维系", score: 2 }
  ]},
  { id: 27, text: "你如何看待健康？", options: [
    { text: "年轻就是资本，不在意", score: 0 },
    { text: "知道重要，但不太注意", score: 1 },
    { text: "注重健康，有良好习惯", score: 2 }
  ]},
  { id: 28, text: "当计划被打乱时，你会：", options: [
    { text: "非常烦躁，无法接受", score: 0 },
    { text: "有些不安，需要时间调整", score: 1 },
    { text: "灵活应变，寻找替代方案", score: 2 }
  ]},
  { id: 29, text: "你如何看待人生的意义？", options: [
    { text: "没想过，得过且过", score: 0 },
    { text: "偶尔会思考", score: 1 },
    { text: "有清晰的理解和追求", score: 2 }
  ]},
  { id: 30, text: "你如何评价自己的心理成熟度？", options: [
    { text: "比较幼稚", score: 0 },
    { text: "和年龄相符", score: 1 },
    { text: "比同龄人成熟", score: 2 }
  ]}
];

var psychAgeRanges = [
  { min: 0, max: 15, age: 12, label: "儿童期", description: "你的心理年龄约12岁，像孩子一样天真烂漫。你看待世界的方式充满好奇和热情，但可能在责任和情绪管理方面还需要成长。" },
  { min: 16, max: 25, age: 16, label: "青春期", description: "你的心理年龄约16岁，正处于青春期。你有自己的想法和个性，但有时会冲动和情绪化。你正在寻找自我认同。" },
  { min: 26, max: 35, age: 20, label: "青年期", description: "你的心理年龄约20岁，充满活力和理想。你开始独立思考，有自己的价值观，但可能还在探索人生方向。" },
  { min: 36, max: 45, age: 28, label: "成年期", description: "你的心理年龄约28岁，已经比较成熟。你能够承担责任，处理人际关系，有明确的目标和规划。" },
  { min: 46, max: 52, age: 35, label: "成熟期", description: "你的心理年龄约35岁，非常成熟稳重。你有丰富的人生经验，善于处理各种问题，心态平和。" },
  { min: 53, max: 60, age: 45, label: "智慧期", description: "你的心理年龄约45岁，拥有智慧和洞察力。你看透事物本质，心态豁达，是他人信赖的依靠。" }
];

var dimensionNames = {
  emotional: "情绪成熟度",
  responsibility: "责任感",
  social: "社交能力",
  independence: "独立性",
  stress: "抗压能力",
  outlook: "人生观"
};