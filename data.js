// SBTI 题库和人格数据

const QUESTIONS = [
  // E/I 维度 (20题)
  { id: 1, text: "在社交活动中，你更倾向于：", dimension: 'EI', preference: 'left' },
  { id: 2, text: "你工作效率最高的时候是：", dimension: 'EI', preference: 'left' },
  { id: 3, text: "当你感到压力时，你通常：", dimension: 'EI', preference: 'right' },
  { id: 4, text: "你更喜欢的工作环境是：", dimension: 'EI', preference: 'left' },
  { id: 5, text: "在团队项目中，你倾向于：", dimension: 'EI', preference: 'left' },
  { id: 6, text: "你花在与他人互动上的精力：", dimension: 'EI', preference: 'right' },
  { id: 7, text: "参加派对时，你通常会：", dimension: 'EI', preference: 'left' },
  { id: 8, text: "你更享受的是：", dimension: 'EI', preference: 'right' },
  { id: 9, text: "一个人工作时，你的感受是：", dimension: 'EI', preference: 'right' },
  { id: 10, text: "在做决策时，你倾向于：", dimension: 'EI', preference: 'left' },
  { id: 11, text: "你的理想周末是：", dimension: 'EI', preference: 'right' },
  { id: 12, text: "在课堂或会议中，你更可能：", dimension: 'EI', preference: 'left' },
  { id: 13, text: "你通常如何充电/放松：", dimension: 'EI', preference: 'right' },
  { id: 14, text: "你对陌生人的态度通常是：", dimension: 'EI', preference: 'left' },
  { id: 15, text: "在假期中，你倾向于：", dimension: 'EI', preference: 'right' },
  { id: 16, text: "你更容易获得动力的方式是：", dimension: 'EI', preference: 'left' },
  { id: 17, text: "你工作后最可能做的事是：", dimension: 'EI', preference: 'right' },
  { id: 18, text: "在大型活动中，你更喜欢：", dimension: 'EI', preference: 'left' },
  { id: 19, text: "你在思考问题时，通常：", dimension: 'EI', preference: 'right' },
  { id: 20, text: "你的性格可以用以下哪个词最好地描述：", dimension: 'EI', preference: 'left' },

  // S/N 维度 (20题)
  { id: 21, text: "在学习新事物时，你更喜欢：", dimension: 'SN', preference: 'left' },
  { id: 22, text: "你认为最重要的是：", dimension: 'SN', preference: 'left' },
  { id: 23, text: "处理问题时，你倾向于：", dimension: 'SN', preference: 'right' },
  { id: 24, text: "你对未来的看法是：", dimension: 'SN', preference: 'right' },
  { id: 25, text: "在阅读时，你更喜欢：", dimension: 'SN', preference: 'left' },
  { id: 26, text: "你通常信任以下哪个：", dimension: 'SN', preference: 'left' },
  { id: 27, text: "在工作中，你更看重：", dimension: 'SN', preference: 'left' },
  { id: 28, text: "面对模糊情境时，你会：", dimension: 'SN', preference: 'right' },
  { id: 29, text: "你对细节的态度是：", dimension: 'SN', preference: 'left' },
  { id: 30, text: "你更容易注意到：", dimension: 'SN', preference: 'left' },
  { id: 31, text: "你认为创新更多来自于：", dimension: 'SN', preference: 'right' },
  { id: 32, text: "在完成任务时，你倾向于：", dimension: 'SN', preference: 'left' },
  { id: 33, text: "你喜欢的工作类型是：", dimension: 'SN', preference: 'left' },
  { id: 34, text: "面对新情况，你更可能：", dimension: 'SN', preference: 'right' },
  { id: 35, text: "你更好地理解的是：", dimension: 'SN', preference: 'left' },
  { id: 36, text: "你对现实的关注程度是：", dimension: 'SN', preference: 'left' },
  { id: 37, text: "在计划未来时，你更可能：", dimension: 'SN', preference: 'right' },
  { id: 38, text: "你更信任的是：", dimension: 'SN', preference: 'left' },
  { id: 39, text: "在解决问题时，你更可能：", dimension: 'SN', preference: 'right' },
  { id: 40, text: "你对经验的理解更多是：", dimension: 'SN', preference: 'left' },

  // T/F 维度 (20题)
  { id: 41, text: "在做决策时，你更多地依赖于：", dimension: 'TF', preference: 'left' },
  { id: 42, text: "你认为最重要的价值是：", dimension: 'TF', preference: 'right' },
  { id: 43, text: "在冲突中，你更关心的是：", dimension: 'TF', preference: 'left' },
  { id: 44, text: "你对他人的感受的敏感度：", dimension: 'TF', preference: 'right' },
  { id: 45, text: "在工作中，你更倾向于：", dimension: 'TF', preference: 'left' },
  { id: 46, text: "你做决定时，通常会考虑：", dimension: 'TF', preference: 'right' },
  { id: 47, text: "你认为一个好的领导者应该：", dimension: 'TF', preference: 'left' },
  { id: 48, text: "在评判他人时，你更多关注：", dimension: 'TF', preference: 'left' },
  { id: 49, text: "当有人情绪低落时，你会：", dimension: 'TF', preference: 'right' },
  { id: 50, text: "你对批评的反应是：", dimension: 'TF', preference: 'left' },
  { id: 51, text: "在团队中，你的角色更像是：", dimension: 'TF', preference: 'left' },
  { id: 52, text: "你在人际关系中最看重：", dimension: 'TF', preference: 'right' },
  { id: 53, text: "面对道德困境时，你会：", dimension: 'TF', preference: 'left' },
  { id: 54, text: "你对和谐的需求程度：", dimension: 'TF', preference: 'right' },
  { id: 55, text: "在解决问题时，你倾向于：", dimension: 'TF', preference: 'left' },
  { id: 56, text: "你更容易被以下哪个所打动：", dimension: 'TF', preference: 'right' },
  { id: 57, text: "在给予反馈时，你更可能：", dimension: 'TF', preference: 'left' },
  { id: 58, text: "你在决策中的优先级通常是：", dimension: 'TF', preference: 'right' },
  { id: 59, text: "你对不公正的反应是：", dimension: 'TF', preference: 'left' },
  { id: 60, text: "在职业选择中，你更看重：", dimension: 'TF', preference: 'left' },

  // J/P 维度 (20题)
  { id: 61, text: "你对日程计划的态度是：", dimension: 'JP', preference: 'left' },
  { id: 62, text: "在工作中，你更喜欢：", dimension: 'JP', preference: 'left' },
  { id: 63, text: "面对截止日期，你通常：", dimension: 'JP', preference: 'left' },
  { id: 64, text: "你对变化的反应是：", dimension: 'JP', preference: 'right' },
  { id: 65, text: "在计划方面，你更可能：", dimension: 'JP', preference: 'left' },
  { id: 66, text: "你的工作空间通常是：", dimension: 'JP', preference: 'left' },
  { id: 67, text: "你更享受的是：", dimension: 'JP', preference: 'right' },
  { id: 68, text: "在处理任务时，你的方法是：", dimension: 'JP', preference: 'left' },
  { id: 69, text: "你对不确定性的容忍度：", dimension: 'JP', preference: 'right' },
  { id: 70, text: "在完成项目时，你更可能：", dimension: 'JP', preference: 'left' },
  { id: 71, text: "你的生活风格更像是：", dimension: 'JP', preference: 'left' },
  { id: 72, text: "面对新计划时，你会：", dimension: 'JP', preference: 'left' },
  { id: 73, text: "你对灵活性的需求程度：", dimension: 'JP', preference: 'right' },
  { id: 74, text: "在团队中，你更可能承担：", dimension: 'JP', preference: 'left' },
  { id: 75, text: "你的决策过程通常是：", dimension: 'JP', preference: 'left' },
  { id: 76, text: "你对最后一刻变化的反应：", dimension: 'JP', preference: 'right' },
  { id: 77, text: "在个人管理中，你更看重：", dimension: 'JP', preference: 'left' },
  { id: 78, text: "你在计划和行动中的比例是：", dimension: 'JP', preference: 'left' },
  { id: 79, text: "你对日常作息的遵守程度：", dimension: 'JP', preference: 'left' },
  { id: 80, text: "面对突发状况，你的反应是：", dimension: 'JP', preference: 'right' }
];

const PERSONALITY_TYPES = {
  'INTJ': {
    code: 'INTJ',
    title: '建筑师 / 战略家 (Architect)',
    description: '独立、战略思维、有远见。INTJ以其独特的视角和坚定的意志而著称，是天生的领导者和战略规划者。',
    strengths: [
      '战略性思维和远见',
      '独立自主，有高度的责任感',
      '逻辑清晰，分析能力强',
      '坚韧不拔，意志力强',
      '创新思维和解决问题的能力'
    ],
    weaknesses: [
      '可能过于批评和挑剔',
      '在人际关系中可能显得冷漠',
      '容易陷入完美主义',
      '对他人的想法可能缺乏耐心'
    ],
    careerFit: [
      '管理咨询顾问',
      '系统分析师',
      '研究员',
      '战略规划师',
      '企业高管',
      '技术领导者'
    ],
    famous: [
      '埃隆·马斯克',
      '比尔·盖茨',
      '史蒂夫·乔布斯'
    ]
  },
  'INTP': {
    code: 'INTP',
    title: '逻辑学家 (Logician)',
    description: '好奇、有探究精神、理论化。INTP是永恒的思想家，对理解事物的本质有着无穷的热情。',
    strengths: [
      '强大的分析和逻辑能力',
      '创意和创新思维',
      '独立思考，不受传统束缚',
      '专注和深度思考',
      '适应能力强'
    ],
    weaknesses: [
      '容易陷入过度分析',
      '可能不够实用',
      '在社交方面可能感到不适',
      '对日常任务缺乏兴趣'
    ],
    careerFit: [
      '科学家',
      '软件工程师',
      '数学家',
      '哲学家',
      '研究员',
      '技术专家'
    ],
    famous: [
      '艾伦·图灵',
      '马克·扎克伯格',
      '玛丽亚·居里'
    ]
  },
  'ENTJ': {
    code: 'ENTJ',
    title: '指挥官 / 将军 (Commander)',
    description: '雄心勃勃、领导力强、果断。ENTJ是天生的领导者，以其自信和远见而闻名。',
    strengths: [
      '强大的领导能力',
      '战略性思维',
      '决策迅速而坚定',
      '高度的专业性',
      '激励和鼓舞他人'
    ],
    weaknesses: [
      '可能过于专制和独裁',
      '对他人的感受可能不够敏感',
      '容易变得傲慢',
      '在以细节为中心的任务上可能失去兴趣'
    ],
    careerFit: [
      '企业高管',
      '项目经理',
      '律师',
      '销售经理',
      '军事指挥官',
      '企业家'
    ],
    famous: [
      '唐纳德·特朗普',
      '玛格丽特·撒切尔',
      '乔治·巴顿将军'
    ]
  },
  'ENTP': {
    code: 'ENTP',
    title: '辩手 (Debater)',
    description: '机智、聪慧、好辩。ENTP喜欢挑战现状，以其灵活的思维和幽默感而著称。',
    strengths: [
      '创意和创新能力',
      '聪慧机敏，反应迅速',
      '良好的沟通和说服能力',
      '适应能力强',
      '喜欢挑战和冒险'
    ],
    weaknesses: [
      '可能缺乏专注力',
      '对行政细节缺乏耐心',
      '可能显得冷漠或不感兴趣',
      '容易引起冲突'
    ],
    careerFit: [
      '律师',
      '销售代表',
      '创意总监',
      '企业家',
      '记者',
      '咨询顾问'
    ],
    famous: [
      '本·富兰克林',
      '乔治·克鲁尼',
      '鲍勃·迪伦'
    ]
  },
  'INFJ': {
    code: 'INFJ',
    title: '提倡者 (Advocate)',
    description: '有理想、有同情心、深思熟虑。INFJ是稀有的人格类型，以其深刻的洞察力和对人类本性的理解而著称。',
    strengths: [
      '深刻的同情心和同理心',
      '有远见和理想',
      '决心和毅力',
      '良好的直觉',
      '激励他人的能力'
    ],
    weaknesses: [
      '可能过于敏感',
      '容易感到被他人所伤害',
      '可能对批评反应过度',
      '容易陷入完美主义'
    ],
    careerFit: [
      '心理咨询师',
      '教师',
      '社会工作者',
      '倡导者',
      '人力资源专家',
      '宗教领袖'
    ],
    famous: [
      '马丁·路德·金',
      '甘地',
      '诺曼·文森特·皮尔'
    ]
  },
  'INFP': {
    code: 'INFP',
    title: '调停者 (Mediator)',
    description: '富有同情心、理想主义、创意十足。INFP是温柔的理想主义者，以其真诚和对个人价值的关注而著称。',
    strengths: [
      '深刻的同情心',
      '强大的价值观和道德感',
      '创意和想象力',
      '真诚和真实',
      '良好的倾听能力'
    ],
    weaknesses: [
      '容易过度思考',
      '可能过于理想化',
      '在冲突中可能避免对抗',
      '容易因失望而沮丧'
    ],
    careerFit: [
      '作家',
      '艺术家',
      '心理咨询师',
      '教师',
      '社会工作者',
      '创意专业人士'
    ],
    famous: [
      '威廉·莎士比亚',
      'J.K.罗琳',
      '约翰·列侬'
    ]
  },
  'ENFJ': {
    code: 'ENFJ',
    title: '主人公 / 领导者 (Protagonist)',
    description: '热情、富有同情心、有魅力。ENFJ是天生的领导者和激励者，以其热情和对他人的关注而著称。',
    strengths: [
      '优秀的领导能力',
      '强大的人际技能',
      '同情心和同理心',
      '组织能力强',
      '激励和鼓舞他人'
    ],
    weaknesses: [
      '可能过于热情和情绪化',
      '容易被他人的观点所影响',
      '可能显得太专制',
      '难以接受批评'
    ],
    careerFit: [
      '教师',
      '人力资源经理',
      '销售经理',
      '心理咨询师',
      '政治人物',
      '宗教领袖'
    ],
    famous: [
      '巴拉克·奥巴马',
      '奥普拉·温弗瑞',
      '蒙代尔'
    ]
  },
  'ENFP': {
    code: 'ENFP',
    title: '竞选家 (Campaigner)',
    description: '热情、富有创意、热爱新鲜事物。ENFP是充满生活热情的探险家，以其乐观和创新精神而著称。',
    strengths: [
      '强大的创意能力',
      '热情和乐观',
      '优秀的沟通技能',
      '适应能力强',
      '热爱帮助他人'
    ],
    weaknesses: [
      '容易分心',
      '可能过于冲动',
      '容易承诺过多',
      '对细节缺乏耐心'
    ],
    careerFit: [
      '销售代表',
      '公关经理',
      '活动组织者',
      '教师',
      '演员',
      '企业家'
    ],
    famous: [
      '奥普拉·温弗瑞',
      '鲁宾·威廉斯',
      '比尔·克林顿'
    ]
  },
  'ISTJ': {
    code: 'ISTJ',
    title: '后勤官 / 检查员 (Logistician)',
    description: '可靠、有责任感、实际。ISTJ是最务实的人格类型，以其可靠性和对细节的关注而著称。',
    strengths: [
      '高度的责任感',
      '可靠和诚实',
      '组织能力强',
      '实际和务实',
      '忠诚度高'
    ],
    weaknesses: [
      '可能过于拘谨',
      '对变化可能反应迟缓',
      '容易陷入常规',
      '可能显得不灵活'
    ],
    careerFit: [
      '会计师',
      '项目经理',
      '律师',
      '生产管理',
      '公务员',
      '审计师'
    ],
    famous: [
      '乔治·华盛顿',
      '沃伦·巴菲特',
      '克林特·伊斯特伍德'
    ]
  },
  'ISFJ': {
    code: 'ISFJ',
    title: '卫士 / 保卫者 (Defender)',
    description: '温暖、关心他人、忠诚。ISFJ是最受欢迎的人格类型，以其真诚和对他人的关注而著称。',
    strengths: [
      '深刻的同情心',
      '忠诚和奉献精神',
      '可靠和值得信任',
      '注重细节',
      '温暖和友好'
    ],
    weaknesses: [
      '容易过度工作',
      '可能过于谦虚',
      '容易感到被利用',
      '对批评反应敏感'
    ],
    careerFit: [
      '护士',
      '教师',
      '社会工作者',
      '秘书',
      '图书馆员',
      '人力资源人员'
    ],
    famous: [
      '女王伊丽莎白二世',
      '特蕾莎修女',
      '麦克·杰克逊'
    ]
  },
  'ESTJ': {
    code: 'ESTJ',
    title: '总经理 (Executive)',
    description: '外向、实际、有组织能力。ESTJ是天生的管理者，以其效率和领导力而著称。',
    strengths: [
      '卓越的组织能力',
      '强大的领导力',
      '可靠和负责',
      '决策果断',
      '务实和现实'
    ],
    weaknesses: [
      '可能过于严格',
      '对变化可能过于抵触',
      '可能显得冷漠',
      '容易忽视他人的感受'
    ],
    careerFit: [
      '高管',
      '项目经理',
      '军事指挥官',
      '警察',
      '律师',
      '生产经理'
    ],
    famous: [
      '鲁迪·朱利安尼',
      '珍·奥斯汀',
      '帕顿将军'
    ]
  },
  'ESFJ': {
    code: 'ESFJ',
    title: '执政官 / 领事 (Consul)',
    description: '友善、有同情心、社交性强。ESFJ是天生的关心者和组织者，以其温暖和忠诚而著称。',
    strengths: [
      '强大的人际技能',
      '同情心和关心他人',
      '优秀的组织能力',
      '忠诚和可靠',
      '热爱帮助他人'
    ],
    weaknesses: [
      '可能过于敏感',
      '容易受到批评的伤害',
      '可能过于依赖他人的认可',
      '容易过度承诺'
    ],
    careerFit: [
      '老师',
      '护士',
      '销售代表',
      '人力资源经理',
      '社区组织者',
      '客户服务经理'
    ],
    famous: [
      '泰勒·斯威夫特',
      '詹妮弗·加纳',
      '丹尼斯·夸德'
    ]
  },
  'ISTP': {
    code: 'ISTP',
    title: '鉴赏家 / 工匠 (Virtuoso)',
    description: '独立、实际、好奇。ISTP是天生的排查者和问题解决者，以其实际和分析能力而著称。',
    strengths: [
      '强大的动手能力',
      '逻辑分析能力',
      '独立自主',
      '适应能力强',
      '在压力下保持冷静'
    ],
    weaknesses: [
      '可能显得冷漠',
      '容易过度分析',
      '可能缺乏长期规划',
      '在社交方面可能显得不足'
    ],
    careerFit: [
      '工程师',
      '机械师',
      '飞行员',
      '运动员',
      '军人',
      '技术人员'
    ],
    famous: [
      '克林特·伊斯特伍德',
      '迈克尔·乔丹',
      '威廉·詹姆斯'
    ]
  },
  'ISFP': {
    code: 'ISFP',
    title: '探险家 (Adventurer)',
    description: '温和、敏感、热爱冒险。ISFP是温柔的冒险家，以其真诚和创意而著称。',
    strengths: [
      '艺术和创意天赋',
      '温和和同情心',
      '忠诚和诚实',
      '适应能力强',
      '享受当下'
    ],
    weaknesses: [
      '可能过于敏感',
      '容易避免冲突',
      '可能缺乏长期规划',
      '在压力下可能显得被动'
    ],
    careerFit: [
      '艺术家',
      '音乐家',
      '设计师',
      '护士',
      '教师',
      '作家'
    ],
    famous: [
      '玛丽亚·莫尼卡',
      '凯文·科斯特纳',
      '乔纳·希尔'
    ]
  },
  'ESTP': {
    code: 'ESTP',
    title: '企业家 (Entrepreneur)',
    description: '大胆、活力充沛、爱冒险。ESTP是冒险家和谈判者，以其自信和适应能力而著称。',
    strengths: [
      '强大的说服力',
      '快速反应',
      '热爱冒险',
      '实际和务实',
      '优秀的沟通技能'
    ],
    weaknesses: [
      '可能过于冲动',
      '容易分心',
      '可能缺乏长期规划',
      '对细节可能不够重视'
    ],
    careerFit: [
      '销售代表',
      '企业家',
      '军事指挥官',
      '运动员',
      '警察',
      '消防员'
    ],
    famous: [
      '唐纳德·特朗普',
      '麦当娜',
      '罗伯特·德尼罗'
    ]
  },
  'ESFP': {
    code: 'ESFP',
    title: '表演者 (Entertainer)',
    description: '活力充沛、友善、热爱表现。ESFP是充满生活热情的表演者，以其热情和魅力而著称。',
    strengths: [
      '强大的人际技能',
      '热情和活力',
      '热爱冒险和新鲜事物',
      '良好的观察力',
      '令人愉快的性格'
    ],
    weaknesses: [
      '容易分心',
      '可能缺乏长期规划',
      '容易冲动',
      '可能过于依赖关注和赞许'
    ],
    careerFit: [
      '演员',
      '音乐家',
      '销售代表',
      '体育教练',
      '厨师',
      '导游'
    ],
    famous: [
      '艾伦·德杰尼勒斯',
      '詹妮弗·洛佩兹',
      '威尔·史密斯'
    ]
  }
};
