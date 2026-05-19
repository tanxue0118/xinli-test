var orientationQuestions = [
  { id: 1, text: "看电影时，你更容易被哪种角色吸引？", options: [
    { text: "帅气的男主角", score: { heterosexual: 2 } },
    { text: "漂亮的女主角", score: { homosexual: 2 } },
    { text: "两种都可能", score: { bisexual: 2 } },
    { text: "很少被任何角色吸引", score: { asexual: 2 } }
  ]},
  { id: 2, text: "逛街时看到好看的人，你会：", options: [
    { text: "只注意异性", score: { heterosexual: 2 } },
    { text: "只注意同性", score: { homosexual: 2 } },
    { text: "两种都会注意", score: { bisexual: 2 } },
    { text: "觉得好看，但没有其他感觉", score: { asexual: 1 } }
  ]},
  { id: 3, text: "你更容易和谁成为好朋友？", options: [
    { text: "异性朋友更多", score: { heterosexual: 1 } },
    { text: "同性朋友更多", score: { homosexual: 1 } },
    { text: "差不多", score: { bisexual: 1 } }
  ]},
  { id: 4, text: "想象一下理想的约会场景，你会和谁？", options: [
    { text: "异性", score: { heterosexual: 2 } },
    { text: "同性", score: { homosexual: 2 } },
    { text: "都可以，看感觉", score: { bisexual: 2 } },
    { text: "对约会没兴趣", score: { asexual: 2 } }
  ]},
  { id: 5, text: "看到情侣秀恩爱，你会：", options: [
    { text: "只羡慕异性情侣", score: { heterosexual: 2 } },
    { text: "只羡慕同性情侣", score: { homosexual: 2 } },
    { text: "两种都会羡慕", score: { bisexual: 2 } },
    { text: "完全无感，不理解有什么好羡慕的", score: { asexual: 2 } }
  ]},
  { id: 6, text: "你更容易对谁产生好感？", options: [
    { text: "异性同学/同事", score: { heterosexual: 2 } },
    { text: "同性同学/同事", score: { homosexual: 2 } },
    { text: "都有可能", score: { bisexual: 2 } },
    { text: "很难对人产生那种好感", score: { asexual: 2 } }
  ]},
  { id: 7, text: "看电视剧时，你更喜欢哪种感情线？", options: [
    { text: "男女主角的爱情", score: { heterosexual: 2 } },
    { text: "两个男或两个女的感情", score: { homosexual: 2 } },
    { text: "都喜欢", score: { bisexual: 2 } },
    { text: "对感情线没兴趣，只想看剧情", score: { asexual: 1 } }
  ]},
  { id: 8, text: "你理想中的另一半是：", options: [
    { text: "一定是异性", score: { heterosexual: 2 } },
    { text: "一定是同性", score: { homosexual: 2 } },
    { text: "性别不重要", score: { pansexual: 2 } },
    { text: "不需要另一半", score: { asexual: 2 } }
  ]},
  { id: 9, text: "朋友给你介绍对象，你会：", options: [
    { text: "只接受异性", score: { heterosexual: 2 } },
    { text: "只接受同性", score: { homosexual: 2 } },
    { text: "都可以试试", score: { bisexual: 1, pansexual: 2 } },
    { text: "完全不想去", score: { asexual: 2 } }
  ]},
  { id: 10, text: "你更容易被哪种气质打动？", options: [
    { text: "异性的温柔/帅气", score: { heterosexual: 2 } },
    { text: "同性的温柔/帅气", score: { homosexual: 2 } },
    { text: "两种都可能", score: { bisexual: 2 } },
    { text: "任何气质都不会让我心动", score: { asexual: 2 } }
  ]},
  { id: 11, text: "你是否想过和同性谈恋爱？", options: [
    { text: "从未想过", score: { heterosexual: 2 } },
    { text: "想过，觉得可以", score: { homosexual: 2 } },
    { text: "想过，但不确定", score: { bisexual: 1 } },
    { text: "对谈恋爱这件事没兴趣", score: { asexual: 2 } }
  ]},
  { id: 12, text: "你是否想过和异性谈恋爱？", options: [
    { text: "从未想过", score: { homosexual: 2 } },
    { text: "想过，觉得可以", score: { heterosexual: 2 } },
    { text: "想过，但不确定", score: { bisexual: 1 } },
    { text: "对谈恋爱这件事没兴趣", score: { asexual: 2 } }
  ]},
  { id: 13, text: "你身边有喜欢同性的朋友吗？", options: [
    { text: "有，我自己也是", score: { homosexual: 2, bisexual: 1 } },
    { text: "有，我很支持他们", score: { heterosexual: 1 } },
    { text: "没有或不知道", score: { heterosexual: 1 } }
  ]},
  { id: 14, text: "你觉得一个人可以同时喜欢男生和女生吗？", options: [
    { text: "可以，我就是这样", score: { bisexual: 2 } },
    { text: "应该可以", score: { bisexual: 1 } },
    { text: "不太理解", score: { heterosexual: 1 } }
  ]},
  { id: 15, text: "你对亲密接触的态度是：", options: [
    { text: "只想要和异性", score: { heterosexual: 2 } },
    { text: "只想要和同性", score: { homosexual: 2 } },
    { text: "都可以，看感觉", score: { bisexual: 1, pansexual: 2 } },
    { text: "对任何亲密接触都不感兴趣", score: { asexual: 2 } }
  ]},
  { id: 16, text: "你更容易对谁脸红心跳？", options: [
    { text: "异性", score: { heterosexual: 2 } },
    { text: "同性", score: { homosexual: 2 } },
    { text: "都有可能", score: { bisexual: 2 } },
    { text: "不会对任何人脸红心跳", score: { asexual: 2 } }
  ]},
  { id: 17, text: "你对未来的感情生活有什么期待？", options: [
    { text: "希望找到异性伴侣", score: { heterosexual: 2 } },
    { text: "希望找到同性伴侣", score: { homosexual: 2 } },
    { text: "希望找到合适的人，性别无所谓", score: { pansexual: 2 } },
    { text: "一个人生活就很好", score: { asexual: 2 } }
  ]},
  { id: 18, text: "你对变性人或跨性别者的看法是：", options: [
    { text: "可以接受，不影响吸引", score: { pansexual: 2 } },
    { text: "尊重但不会考虑", score: { heterosexual: 1 } },
    { text: "不太了解", score: {} }
  ]},
  { id: 19, text: "你是否曾质疑过自己的性取向？", options: [
    { text: "从未", score: { heterosexual: 2 } },
    { text: "偶尔想过", score: { bisexual: 1 } },
    { text: "经常想", score: { homosexual: 1, bisexual: 1 } },
    { text: "一直在探索", score: { bisexual: 1, pansexual: 1 } }
  ]},
  { id: 20, text: "你对结婚的看法是：", options: [
    { text: "希望和异性结婚", score: { heterosexual: 2 } },
    { text: "希望和同性结婚", score: { homosexual: 2 } },
    { text: "希望和爱的人结婚，性别无所谓", score: { pansexual: 2 } },
    { text: "不想结婚", score: { asexual: 1 } }
  ]},
  { id: 21, text: "如果有人给你介绍同性对象，你会：", options: [
    { text: "直接拒绝", score: { heterosexual: 2 } },
    { text: "可以考虑", score: { homosexual: 1, bisexual: 1 } },
    { text: "可能会感兴趣", score: { homosexual: 2, bisexual: 1 } }
  ]},
  { id: 22, text: "如果同性朋友向你表白，你会：", options: [
    { text: "很尴尬，会拒绝", score: { heterosexual: 2 } },
    { text: "会考虑一下", score: { bisexual: 1 } },
    { text: "可能会接受", score: { homosexual: 2, bisexual: 1 } }
  ]},
  { id: 23, text: "你对身体接触的态度是：", options: [
    { text: "只想要和异性的", score: { heterosexual: 2 } },
    { text: "只想要和同性的", score: { homosexual: 2 } },
    { text: "都可以", score: { bisexual: 1, pansexual: 1 } },
    { text: "对任何身体接触都不想要", score: { asexual: 2 } }
  ]},
  { id: 24, text: "你更容易被什么样的人吸引？", options: [
    { text: "异性", score: { heterosexual: 2 } },
    { text: "同性", score: { homosexual: 2 } },
    { text: "看人的性格，性别无所谓", score: { pansexual: 2 } },
    { text: "很难被任何人吸引", score: { asexual: 2 } }
  ]},
  { id: 25, text: "你对约会的看法是：", options: [
    { text: "是了解对方的好方式", score: { heterosexual: 1, homosexual: 1, bisexual: 1 } },
    { text: "可有可无", score: { asexual: 1 } },
    { text: "对约会完全没兴趣", score: { asexual: 2 } }
  ]},
  { id: 26, text: "你更容易和谁聊得来？", options: [
    { text: "异性", score: { heterosexual: 1 } },
    { text: "同性", score: { homosexual: 1 } },
    { text: "都一样", score: { bisexual: 1 } }
  ]},
  { id: 27, text: "你对多人关系的看法是：", options: [
    { text: "可以接受", score: { bisexual: 1, pansexual: 1 } },
    { text: "不太能接受", score: { heterosexual: 1, homosexual: 1 } },
    { text: "完全不能接受", score: { heterosexual: 1 } }
  ]},
  { id: 28, text: "你对同性之间的感情怎么看？", options: [
    { text: "很正常，和异性恋一样", score: { homosexual: 1, bisexual: 1, pansexual: 1 } },
    { text: "可以理解", score: { heterosexual: 1 } },
    { text: "不太了解", score: { heterosexual: 1 } }
  ]},
  { id: 29, text: "你认为性取向是：", options: [
    { text: "天生的，不会改变", score: { homosexual: 1, bisexual: 1 } },
    { text: "可能天生也可能后天", score: { heterosexual: 1 } },
    { text: "可能会变化", score: { bisexual: 1, pansexual: 1 } },
    { text: "不确定", score: {} }
  ]},
  { id: 30, text: "用一句话形容你的感受：", options: [
    { text: "我喜欢异性", score: { heterosexual: 3 } },
    { text: "我喜欢同性", score: { homosexual: 3 } },
    { text: "我两种都喜欢", score: { bisexual: 3 } },
    { text: "我不太在意性别", score: { pansexual: 3 } },
    { text: "我对谁都没有那种感觉", score: { asexual: 3 } },
    { text: "我还不确定", score: { bisexual: 1, pansexual: 1 } }
  ]}
];

var orientationTypes = {
  heterosexual: {
    name: "异性恋",
    icon: " ",
    color: "#3b82f6",
    description: "你主要被异性吸引，这是最常见的性取向。你对异性有情感和性方面的吸引，希望与异性建立亲密关系。",
    traits: ["被异性吸引", "希望与异性建立关系", "对异性有浪漫幻想"],
    advice: ["了解自己的需求和边界", "建立健康的亲密关系", "尊重他人的性取向"]
  },
  homosexual: {
    name: "同性恋",
    icon: " ",
    color: "#8b5cf6",
    description: "你主要被同性吸引。这是一种自然的性取向，存在于各种文化和历史时期中。",
    traits: ["被同性吸引", "希望与同性建立关系", "对同性有浪漫幻想"],
    advice: ["接受真实的自己", "寻找支持和理解的社群", "在安全的环境中表达自己"]
  },
  bisexual: {
    name: "双性恋",
    icon: " ",
    color: "#ec4899",
    description: "你可能被两种性别吸引。双性恋不是阶段，不是混乱，而是一种真实的性取向。",
    traits: ["可能被两种性别吸引", "对两种性别都可能有浪漫幻想", "吸引程度可能因人而异"],
    advice: ["不必急于给自己贴标签", "了解双性恋是真实的性取向", "寻找理解你的社群"]
  },
  pansexual: {
    name: "泛性恋",
    icon: " ",
    color: "#f59e0b",
    description: "性别不影响你的吸引选择。你关注的是人的内在特质，而非性别身份。",
    traits: ["性别不影响吸引", "关注人的内在特质", "对各种性别身份都开放"],
    advice: ["了解泛性恋的含义", "不必被传统分类束缚", "找到理解你的社群"]
  },
  asexual: {
    name: "无性恋",
    icon: " ",
    color: "#10b981",
    description: "你很少或完全没有性吸引。无性恋是一种正常的性取向，不等于禁欲或性冷淡。",
    traits: ["很少或没有性吸引", "可能有浪漫吸引", "性行为不是亲密关系的必要部分"],
    advice: ["了解无性恋是正常的性取向", "找到适合自己的亲密关系模式", "寻找无性恋社群支持"]
  },
  questioning: {
    name: "探索中",
    icon: "❓",
    color: "#6b7280",
    description: "你还在探索自己的性取向，这是完全正常的。性取向可能是流动的，不必急于给自己下定义。",
    traits: ["对自己的性取向有疑问", "可能在探索中", "不确定如何定义自己"],
    advice: ["给自己时间和空间探索", "不必急于贴标签", "了解各种性取向的定义", "寻找可以信任的人交流"]
  }
};