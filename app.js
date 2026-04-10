// 应用逻辑

class SBTITest {
  constructor() {
    this.currentQuestion = 0;
    this.answers = new Map();
    this.state = 'intro'; // intro, testing, results
    this.result = null;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (this.state === 'intro') {
      app.appendChild(this.createIntroPage());
    } else if (this.state === 'testing') {
      app.appendChild(this.createTestingPage());
    } else if (this.state === 'results') {
      app.appendChild(this.createResultsPage());
    }

    this.attachEventListeners();
  }

  createIntroPage() {
    const container = document.createElement('div');
    container.className = 'intro-container';

    const card = document.createElement('div');
    card.className = 'intro-card';

    const title = document.createElement('h1');
    title.className = 'main-title';
    title.textContent = 'SBTI 人格测试';

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = '发现你的真实性格类型，了解你的独特优势';

    const infoSection = document.createElement('div');
    infoSection.className = 'info-section';
    infoSection.innerHTML = `
      <h2 class="info-title">测试说明</h2>
      <ul class="info-list">
        <li>本测试包含 80 个问题</li>
        <li>每个问题需要你表达你的倾向程度（完全相反→完全相同）</li>
        <li>没有正确或错误的答案，请根据你的真实感受作答</li>
        <li>完成时间约需 10-15 分钟</li>
        <li>测试结果为参考，不代表绝对人格特征</li>
      </ul>
    `;

    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';
    aboutSection.innerHTML = `
      <h2 class="info-title">关于 SBTI</h2>
      <p class="about-text">
        SBTI（Social Behavior Type Indicator）人格测试基于心理学理论，
        通过四个维度来识别你的性格特征：
      </p>
      <div class="dimensions-grid">
        <div class="dimension-item"><strong>E/I</strong> - 外向/内向</div>
        <div class="dimension-item"><strong>S/N</strong> - 实际/直觉</div>
        <div class="dimension-item"><strong>T/F</strong> - 逻辑/感受</div>
        <div class="dimension-item"><strong>J/P</strong> - 计划/灵活</div>
      </div>
    `;

    const startButton = document.createElement('button');
    startButton.className = 'start-button';
    startButton.textContent = '开始测试';
    startButton.setAttribute('aria-label', '开始SBTI人格测试');
    startButton.onclick = () => {
      this.addClickFeedback(startButton);
      setTimeout(() => this.startTest(), 200);
    };

    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(infoSection);
    card.appendChild(aboutSection);
    card.appendChild(startButton);

    container.appendChild(card);
    return container;
  }

  createTestingPage() {
    const container = document.createElement('div');
    container.className = 'testing-container';

    const question = QUESTIONS[this.currentQuestion];
    const currentValue = this.answers.get(question.id) || 50;

    const card = document.createElement('div');
    card.className = 'question-card';

    const header = document.createElement('div');
    header.className = 'question-header';

    const questionText = document.createElement('h2');
    questionText.className = 'question-text';
    questionText.textContent = question.text;

    const progressText = document.createElement('p');
    progressText.className = 'progress-text';
    progressText.textContent = `第 ${this.currentQuestion + 1} / ${QUESTIONS.length} 题`;

    header.appendChild(questionText);
    header.appendChild(progressText);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.style.width = `${((this.currentQuestion + 1) / QUESTIONS.length) * 100}%`;
    progressBar.appendChild(progressFill);

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    const leftLabel = document.createElement('label');
    leftLabel.className = 'slider-label';
    leftLabel.textContent = this.getLeftLabel(question);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.value = currentValue;
    slider.className = 'slider';
    slider.setAttribute('aria-label', `第${this.currentQuestion + 1}题: ${question.text}`);
    slider.oninput = (e) => {
      this.handleSliderInput(parseInt(e.target.value));
    };
    slider.onchange = (e) => {
      this.handleAnswer(parseInt(e.target.value));
    };

    const rightLabel = document.createElement('label');
    rightLabel.className = 'slider-label';
    rightLabel.textContent = this.getRightLabel(question);

    sliderContainer.appendChild(leftLabel);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(rightLabel);

    const valueDisplay = document.createElement('div');
    valueDisplay.className = 'value-display';
    const displayText = document.createElement('p');
    displayText.id = 'value-display-text';
    if (currentValue === 50) {
      displayText.textContent = '你的选择: 完全中立';
    } else if (currentValue > 50) {
      displayText.textContent = '你的选择: 偏右';
    } else {
      displayText.textContent = '你的选择: 偏左';
    }
    valueDisplay.appendChild(displayText);

    card.appendChild(header);
    card.appendChild(progressBar);
    card.appendChild(sliderContainer);
    card.appendChild(valueDisplay);

    container.appendChild(card);

    if (this.currentQuestion > 0) {
      const prevButton = document.createElement('button');
      prevButton.className = 'prev-button';
      prevButton.textContent = '← 上一题';
      prevButton.onclick = () => {
        this.addClickFeedback(prevButton);
        setTimeout(() => this.prevQuestion(), 200);
      };
      container.appendChild(prevButton);
    }

    return container;
  }

  createResultsPage() {
    const container = document.createElement('div');
    container.className = 'results-container';

    const card = document.createElement('div');
    card.className = 'results-card';

    const personality = PERSONALITY_TYPES[this.result.type];

    // 头部
    const header = document.createElement('div');
    header.className = 'results-header';

    const typeCode = document.createElement('div');
    typeCode.className = 'type-code';
    typeCode.textContent = this.result.type;

    const title = document.createElement('h1');
    title.className = 'results-title';
    title.textContent = personality.title;

    const description = document.createElement('p');
    description.className = 'results-description';
    description.textContent = personality.description;

    header.appendChild(typeCode);
    header.appendChild(title);
    header.appendChild(description);

    // 得分详情
    const scoresSection = document.createElement('div');
    scoresSection.className = 'traits-section';

    const scoresTitle = document.createElement('h2');
    scoresTitle.className = 'section-title';
    scoresTitle.textContent = '你的特征分布';

    const scoresGrid = document.createElement('div');
    scoresGrid.className = 'scores-grid';

    const dimensions = ['E_I', 'S_N', 'T_F', 'J_P'];
    dimensions.forEach(dim => {
      const scoreItem = document.createElement('div');
      scoreItem.className = 'score-item';

      const label = document.createElement('label');
      label.className = 'score-label';
      label.textContent = dim.replace('_', '/');

      const bar = document.createElement('div');
      bar.className = 'score-bar';

      const fill = document.createElement('div');
      fill.className = 'score-bar-fill';
      const score = this.result[dim];
      fill.style.width = `${Math.abs(score) / 100 * 100}%`;
      fill.style.backgroundColor = score < 0 ? '#ef4444' : '#3b82f6';

      bar.appendChild(fill);

      const text = document.createElement('span');
      text.className = 'score-text';
      text.textContent = this.getDimensionLabel(dim, score);

      scoreItem.appendChild(label);
      scoreItem.appendChild(bar);
      scoreItem.appendChild(text);
      scoresGrid.appendChild(scoreItem);
    });

    scoresSection.appendChild(scoresTitle);
    scoresSection.appendChild(scoresGrid);

    // 优势
    const strengthsSection = document.createElement('div');
    strengthsSection.className = 'traits-section';
    const strengthsTitle = document.createElement('h2');
    strengthsTitle.className = 'section-title';
    strengthsTitle.textContent = '主要优势';
    const strengthsList = document.createElement('ul');
    strengthsList.className = 'traits-list';
    personality.strengths.forEach(strength => {
      const li = document.createElement('li');
      li.className = 'trait-item';
      li.textContent = strength;
      strengthsList.appendChild(li);
    });
    strengthsSection.appendChild(strengthsTitle);
    strengthsSection.appendChild(strengthsList);

    // 盲点
    const weaknessesSection = document.createElement('div');
    weaknessesSection.className = 'traits-section';
    const weaknessesTitle = document.createElement('h2');
    weaknessesTitle.className = 'section-title';
    weaknessesTitle.textContent = '可能的盲点';
    const weaknessesList = document.createElement('ul');
    weaknessesList.className = 'traits-list';
    personality.weaknesses.forEach(weakness => {
      const li = document.createElement('li');
      li.className = 'trait-item';
      li.textContent = weakness;
      weaknessesList.appendChild(li);
    });
    weaknessesSection.appendChild(weaknessesTitle);
    weaknessesSection.appendChild(weaknessesList);

    // 职业
    const careerSection = document.createElement('div');
    careerSection.className = 'traits-section';
    const careerTitle = document.createElement('h2');
    careerTitle.className = 'section-title';
    careerTitle.textContent = '适合的职业';
    const careerGrid = document.createElement('div');
    careerGrid.className = 'career-grid';
    personality.careerFit.forEach(career => {
      const tag = document.createElement('div');
      tag.className = 'career-tag';
      tag.textContent = career;
      careerGrid.appendChild(tag);
    });
    careerSection.appendChild(careerTitle);
    careerSection.appendChild(careerGrid);

    // 名人
    const famousSection = document.createElement('div');
    famousSection.className = 'traits-section';
    const famousTitle = document.createElement('h2');
    famousTitle.className = 'section-title';
    famousTitle.textContent = '著名代表人物';
    const famousPara = document.createElement('p');
    famousPara.className = 'famous';
    famousPara.textContent = personality.famous.join('、');
    famousSection.appendChild(famousTitle);
    famousSection.appendChild(famousPara);

    // 操作按钮
    const actions = document.createElement('div');
    actions.className = 'actions';

    const retestButton = document.createElement('button');
    retestButton.className = 'retest-button';
    retestButton.textContent = '🔄 重新测试';
    retestButton.onclick = () => {
      this.addClickFeedback(retestButton);
      setTimeout(() => this.retest(), 200);
    };

    const shareButton = document.createElement('button');
    shareButton.className = 'share-button';
    shareButton.textContent = '📋 分享结果';
    shareButton.onclick = () => {
      this.addClickFeedback(shareButton);
      const text = `我的SBTI人格类型是 ${this.result.type} - ${personality.title}`;
      navigator.clipboard.writeText(text).then(() => {
        this.showNotification('已复制到剪贴板！');
      }).catch(() => {
        alert('复制失败，请重试');
      });
    };

    actions.appendChild(retestButton);
    actions.appendChild(shareButton);

    card.appendChild(header);
    card.appendChild(scoresSection);
    card.appendChild(strengthsSection);
    card.appendChild(weaknessesSection);
    card.appendChild(careerSection);
    card.appendChild(famousSection);
    card.appendChild(actions);

    container.appendChild(card);
    return container;
  }

  handleSliderInput(value) {
    const displayText = document.getElementById('value-display-text');
    if (displayText) {
      if (value === 50) {
        displayText.textContent = '你的选择: 完全中立';
      } else if (value > 50) {
        displayText.textContent = `你的选择: 偏右 (${value - 50})`;
      } else {
        displayText.textContent = `你的选择: 偏左 (${50 - value})`;
      }
    }
  }

  addClickFeedback(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
      element.style.transform = '';
    }, 100);
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 10px;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(91, 33, 182, 0.4);
      z-index: 9999;
      animation: slideUp 0.4s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'fadeIn 0.3s ease-out reverse';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  }

  getLeftLabel(question) {
    const labels = {
      EI: '更内向',
      SN: '更注重实际',
      TF: '更注重逻辑',
      JP: '更有计划'
    };
    return labels[question.dimension] || '不同意';
  }

  getRightLabel(question) {
    const labels = {
      EI: '更外向',
      SN: '更注重直觉',
      TF: '更注重感受',
      JP: '更灵活变通'
    };
    return labels[question.dimension] || '同意';
  }

  getDimensionLabel(dimension, value) {
    const labels = {
      'E_I': ['内向 (I)', '外向 (E)'],
      'S_N': ['实际感知 (S)', '直觉想象 (N)'],
      'T_F': ['逻辑思考 (T)', '价值感受 (F)'],
      'J_P': ['判断计划 (J)', '知觉灵活 (P)']
    };
    const [left, right] = labels[dimension];
    return value < 0 ? left : right;
  }

  handleAnswer(value) {
    const question = QUESTIONS[this.currentQuestion];
    this.answers.set(question.id, value);

    // 自动前进
    if (this.currentQuestion < QUESTIONS.length - 1) {
      this.currentQuestion++;
      this.render();
    } else {
      this.finishTest();
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.render();
    }
  }

  startTest() {
    this.state = 'testing';
    this.currentQuestion = 0;
    this.answers = new Map();
    this.render();
  }

  finishTest() {
    const scores = this.calculateScores();
    const type = this.getSBTIType(scores);
    this.result = {
      ...scores,
      type,
      timestamp: Date.now()
    };
    this.state = 'results';
    this.render();
  }

  retest() {
    this.state = 'intro';
    this.currentQuestion = 0;
    this.answers = new Map();
    this.result = null;
    this.render();
  }

  calculateScores() {
    const scores = {
      E_I: 0,
      S_N: 0,
      T_F: 0,
      J_P: 0
    };

    this.answers.forEach((value, questionId) => {
      const question = QUESTIONS.find(q => q.id === questionId);
      if (!question) return;

      const preference = question.preference === 'left' ? -1 : 1;
      const score = (value - 50) * preference;

      if (question.dimension === 'EI') {
        scores.E_I += score;
      } else if (question.dimension === 'SN') {
        scores.S_N += score;
      } else if (question.dimension === 'TF') {
        scores.T_F += score;
      } else if (question.dimension === 'JP') {
        scores.J_P += score;
      }
    });

    return scores;
  }

  getSBTIType(scores) {
    let type = '';
    type += scores.E_I > 0 ? 'E' : 'I';
    type += scores.S_N > 0 ? 'N' : 'S';
    type += scores.T_F > 0 ? 'F' : 'T';
    type += scores.J_P > 0 ? 'P' : 'J';
    return type;
  }

  attachEventListeners() {
    // 键盘导航支持
    document.addEventListener('keydown', (e) => {
      if (this.state === 'testing') {
        if (e.key === 'ArrowRight' && this.currentQuestion < QUESTIONS.length - 1) {
          this.currentQuestion++;
          this.render();
        } else if (e.key === 'ArrowLeft' && this.currentQuestion > 0) {
          this.currentQuestion--;
          this.render();
        }
      }
    });
  }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  new SBTITest();
});

