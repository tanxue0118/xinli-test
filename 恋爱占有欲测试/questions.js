var priQuestions = [
  { id: 1, text: "看到伴侣和异性朋友聊天，你会：", options: [
    { text: "完全不在意，信任TA", score: 1 },
    { text: "有点在意但不会说什么", score: 2 },
    { text: "会吃醋，想问清楚", score: 3 },
    { text: "非常生气，要求TA远离", score: 4 }
  ]},
  { id: 2, text: "伴侣手机收到异性消息，你会：", options: [
    { text: "不会去看", score: 1 },
    { text: "有点好奇但不会看", score: 2 },
    { text: "会想看看是谁发的", score: 3 },
    { text: "一定要看，不然不安心", score: 4 }
  ]},
  { id: 3, text: "伴侣说要和朋友出去玩，你会：", options: [
    { text: "去吧，玩得开心", score: 1 },
    { text: "问问去哪里、和谁", score: 2 },
    { text: "会有点不开心，想让TA陪我", score: 3 },
    { text: "不想让TA去，想让TA陪我", score: 4 }
  ]},
  { id: 4, text: "你希望伴侣的社交账号密码：", options: [
    { text: "不需要知道，尊重隐私", score: 1 },
    { text: "如果TA愿意给就给", score: 2 },
    { text: "希望TA能告诉我", score: 3 },
    { text: "一定要知道，这是信任的表现", score: 4 }
  ]},
  { id: 5, text: "伴侣提到前任，你会：", options: [
    { text: "没关系，谁都有过去", score: 1 },
    { text: "会有点不舒服但能接受", score: 2 },
    { text: "不太想听，会吃醋", score: 3 },
    { text: "非常介意，不想TA提起", score: 4 }
  ]},
  { id: 6, text: "你希望伴侣多久回复你消息？", options: [
    { text: "看到就回，不着急", score: 1 },
    { text: "几个小时内回复就好", score: 2 },
    { text: "希望尽快回复", score: 3 },
    { text: "必须秒回，不然会焦虑", score: 4 }
  ]},
  { id: 7, text: "伴侣想要一些独处时间，你会：", options: [
    { text: "完全理解，我也需要", score: 1 },
    { text: "可以，但希望不要太久", score: 2 },
    { text: "会有点失落", score: 3 },
    { text: "会怀疑TA是不是不爱我了", score: 4 }
  ]},
  { id: 8, text: "你希望伴侣的朋友圈：", options: [
    { text: "TA的自由，我不管", score: 1 },
    { text: "希望有我就好", score: 2 },
    { text: "希望多发我们的合照", score: 3 },
    { text: "希望只发和我有关的", score: 4 }
  ]},
  { id: 9, text: "伴侣和异性单独吃饭，你会：", options: [
    { text: "没关系，正常社交", score: 1 },
    { text: "会有点在意", score: 2 },
    { text: "会吃醋，希望TA不去", score: 3 },
    { text: "坚决反对，这是不忠", score: 4 }
  ]},
  { id: 10, text: "你希望伴侣穿什么风格的衣服？", options: [
    { text: "TA喜欢就好", score: 1 },
    { text: "希望好看但不要太暴露", score: 2 },
    { text: "希望保守一点", score: 3 },
    { text: "不想TA穿得太好看给别人看", score: 4 }
  ]},
  { id: 11, text: "伴侣加班到很晚，你会：", options: [
    { text: "心疼TA，会等TA回来", score: 1 },
    { text: "会担心，发消息问问", score: 2 },
    { text: "会怀疑是不是真的在加班", score: 3 },
    { text: "会去接TA或查岗", score: 4 }
  ]},
  { id: 12, text: "你希望伴侣的异性朋友数量：", options: [
    { text: "无所谓，TA的自由", score: 1 },
    { text: "少一点比较好", score: 2 },
    { text: "最好没有", score: 3 },
    { text: "绝对不能有", score: 4 }
  ]},
  { id: 13, text: "伴侣说TA今天很开心但没说原因，你会：", options: [
    { text: "TA开心就好", score: 1 },
    { text: "会问问为什么", score: 2 },
    { text: "会想知道是不是和别人有关", score: 3 },
    { text: "会追问到底，不然不安心", score: 4 }
  ]},
  { id: 14, text: "你希望伴侣的工作环境：", options: [
    { text: "TA喜欢就好", score: 1 },
    { text: "希望同事不要太多异性", score: 2 },
    { text: "希望是同性多的环境", score: 3 },
    { text: "最好在家工作，不接触异性", score: 4 }
  ]},
  { id: 15, text: "伴侣说要和前任见面谈事情，你会：", options: [
    { text: "去吧，我相信你", score: 1 },
    { text: "会有点担心但不会阻止", score: 2 },
    { text: "不太愿意，会吃醋", score: 3 },
    { text: "坚决反对，绝对不行", score: 4 }
  ]},
  { id: 16, text: "你希望伴侣对你的称呼：", options: [
    { text: "怎么叫都行", score: 1 },
    { text: "希望有特别的昵称", score: 2 },
    { text: "希望叫得很亲密", score: 3 },
    { text: "希望在所有人面前都叫我宝贝", score: 4 }
  ]},
  { id: 17, text: "伴侣在网上点赞异性照片，你会：", options: [
    { text: "无所谓，很正常", score: 1 },
    { text: "会有点在意", score: 2 },
    { text: "会吃醋，希望TA不要这样", score: 3 },
    { text: "会生气，觉得TA不忠", score: 4 }
  ]},
  { id: 18, text: "你希望伴侣每天和你联系多久？", options: [
    { text: "有空就聊，不强求", score: 1 },
    { text: "每天聊一会就好", score: 2 },
    { text: "希望随时都能联系", score: 3 },
    { text: "希望24小时都在一起", score: 4 }
  ]},
  { id: 19, text: "伴侣说要去参加同学聚会，你会：", options: [
    { text: "去吧，好好玩", score: 1 },
    { text: "问问有哪些人", score: 2 },
    { text: "会有点担心有异性", score: 3 },
    { text: "不想让TA去", score: 4 }
  ]},
  { id: 20, text: "你希望伴侣的行程：", options: [
    { text: "TA的自由，不用告诉我", score: 1 },
    { text: "大概说一下就好", score: 2 },
    { text: "希望随时告诉我", score: 3 },
    { text: "必须详细报告，我要随时知道", score: 4 }
  ]},
  { id: 21, text: "伴侣和异性同事出差，你会：", options: [
    { text: "工作需要，很正常", score: 1 },
    { text: "会有点担心", score: 2 },
    { text: "会很不开心", score: 3 },
    { text: "会想办法阻止或一起去", score: 4 }
  ]},
  { id: 22, text: "你希望伴侣对你的态度是：", options: [
    { text: "平等尊重就好", score: 1 },
    { text: "希望TA很爱我", score: 2 },
    { text: "希望TA眼里只有我", score: 3 },
    { text: "希望TA完全属于我", score: 4 }
  ]},
  { id: 23, text: "伴侣说今天很累想休息，你会：", options: [
    { text: "好好休息，我不打扰", score: 1 },
    { text: "会心疼但有点失落", score: 2 },
    { text: "会怀疑是不是真的累了", score: 3 },
    { text: "会不开心，觉得TA不重视我", score: 4 }
  ]},
  { id: 24, text: "你希望伴侣的社交媒体：", options: [
    { text: "随便TA发什么", score: 1 },
    { text: "希望有我的照片", score: 2 },
    { text: "希望公开我们的关系", score: 3 },
    { text: "希望置顶我，签名写我", score: 4 }
  ]},
  { id: 25, text: "伴侣说要和朋友去旅游，你会：", options: [
    { text: "去吧，注意安全", score: 1 },
    { text: "问问去哪里、和谁", score: 2 },
    { text: "会有点不开心", score: 3 },
    { text: "不想让TA去，想一起去", score: 4 }
  ]},
  { id: 26, text: "你希望伴侣对你撒娇吗？", options: [
    { text: "看TA心情", score: 1 },
    { text: "希望偶尔撒娇", score: 2 },
    { text: "希望经常撒娇", score: 3 },
    { text: "希望TA只对我撒娇", score: 4 }
  ]},
  { id: 27, text: "伴侣说有个异性朋友帮了TA很多忙，你会：", options: [
    { text: "感谢那个人", score: 1 },
    { text: "会有点在意", score: 2 },
    { text: "会吃醋，不想TA们来往", score: 3 },
    { text: "会很生气，觉得TA们关系不正常", score: 4 }
  ]},
  { id: 28, text: "你希望伴侣记住所有纪念日吗？", options: [
    { text: "无所谓，心意到了就好", score: 1 },
    { text: "希望记住重要的", score: 2 },
    { text: "希望都记住", score: 3 },
    { text: "必须记住，不然就是不爱我", score: 4 }
  ]},
  { id: 29, text: "你希望伴侣的未来规划：", options: [
    { text: "尊重TA的选择", score: 1 },
    { text: "希望有我", score: 2 },
    { text: "希望以我为中心", score: 3 },
    { text: "希望TA完全围着我转", score: 4 }
  ]},
  { id: 30, text: "用一个词形容你对伴侣的态度：", options: [
    { text: "信任尊重", score: 1 },
    { text: "关心在意", score: 2 },
    { text: "强烈占有", score: 3 },
    { text: "完全独占", score: 4 }
  ]}
];

var priLevels = [
  { min: 30, max: 45, level: "低度占有", icon: " ", color: "#10b981",
    description: "你对伴侣非常信任和尊重，给予对方足够的自由和空间。你懂得在爱情中保持独立，这是非常健康的状态。",
    traits: ["信任伴侣", "尊重隐私", "给予自由", "心态平和"],
    advice: ["继续保持这种健康的心态", "信任是感情的基石", "适当的关心会让感情更好"]
  },
  { min: 46, max: 65, level: "中度占有", icon: " ", color: "#f59e0b",
    description: "你对伴侣有一定的占有欲，这是正常的。你希望得到关注和重视，同时也愿意给对方一定的空间。",
    traits: ["在乎伴侣", "希望被重视", "有适度嫉妒", "关心对方"],
    advice: ["适度表达你的感受", "信任是相互的", "给彼此一些空间会更好"]
  },
  { min: 66, max: 85, level: "较强占有", icon: " ", color: "#f97316",
    description: "你对伴侣有较强的占有欲，希望TA完全属于你。你可能会因为一些小事吃醋，需要更多的安全感。",
    traits: ["强烈在乎", "容易吃醋", "需要安全感", "希望独占"],
    advice: ["试着给伴侣更多信任", "安全感来自内心", "过度控制可能会适得其反"]
  },
  { min: 86, max: 120, level: "高度占有", icon: " ", color: "#ef4444",
    description: "你对伴侣有非常强的占有欲，希望TA完全属于你。你可能会经常查看TA的手机、限制TA的社交。这可能会给双方带来压力。",
    traits: ["极度在乎", "控制欲强", "极度缺乏安全感", "害怕失去"],
    advice: ["这可能反映了内心的不安全感", "建议和伴侣坦诚沟通", "必要时可以寻求专业帮助", "爱不是占有，而是信任"]
  }
];