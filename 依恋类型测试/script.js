let currentQuestion = 0;
let answers = {};
let dimensionScores = {
  anxiety: 0,
  avoidance: 0,
  dependency: 0,
  trust: 0,
  communication: 0
};
let dimensionMaxScores = {
  anxiety: 0,
  avoidance: 0,
  dependency: 0,
  trust: 0,
  communication: 0
};

function startTest() {
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  currentQuestion = 0;
  answers = {};
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  
  document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${totalQuestions}`;
  document.getElementById('progress-percent').textContent = `${Math.round(((currentQuestion) / totalQuestions) * 100)}%`;
  document.getElementById('progress-fill').style.width = `${((currentQuestion) / totalQuestions) * 100}%`;
  document.getElementById('question-number').textContent = `第 ${currentQuestion + 1} 题`;
  document.getElementById('question-text').textContent = question.text;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = `option-btn ${answers[question.id] === index ? 'selected' : ''}`;
    btn.innerHTML = `
      <div class="option-radio"></div>
      <div class="option-label">${option.label}</div>
    `;
    btn.onclick = () => selectOption(question.id, index);
    optionsContainer.appendChild(btn);
  });
  
  updateNavigationButtons();
}

function selectOption(questionId, optionIndex) {
  answers[questionId] = optionIndex;
  showQuestion();
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  
  prevBtn.disabled = currentQuestion === 0;
  
  const hasAnswer = answers[questions[currentQuestion].id] !== undefined;
  nextBtn.disabled = !hasAnswer;
  
  if (currentQuestion === questions.length - 1) {
    nextBtn.textContent = '查看结果';
  } else {
    nextBtn.textContent = '下一题';
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function nextQuestion() {
  if (answers[questions[currentQuestion].id] === undefined) {
    return;
  }
  
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
    window.scrollTo(0, 0);
  } else {
    calculateResults();
    showResults();
  }
}

function calculateResults() {
  dimensionScores = {
    anxiety: 0,
    avoidance: 0,
    dependency: 0,
    trust: 0,
    communication: 0
  };
  dimensionMaxScores = {
    anxiety: 0,
    avoidance: 0,
    dependency: 0,
    trust: 0,
    communication: 0
  };
  
  questions.forEach(question => {
    const answerIndex = answers[question.id];
    if (answerIndex !== undefined) {
      const option = question.options[answerIndex];
      Object.keys(question.dimensions).forEach(dim => {
        if (option.scores[dim] !== undefined) {
          dimensionScores[dim] += option.scores[dim];
          dimensionMaxScores[dim] += 3;
        }
      });
    }
  });
  
  Object.keys(dimensionScores).forEach(dim => {
    if (dimensionMaxScores[dim] > 0) {
      dimensionScores[dim] = Math.round((dimensionScores[dim] / dimensionMaxScores[dim]) * 100);
    }
  });
}

function getAttachmentType() {
  const anxiety = dimensionScores.anxiety;
  const avoidance = dimensionScores.avoidance;
  
  if (anxiety < 45 && avoidance < 45) {
    return 'secure';
  } else if (anxiety >= 55 && avoidance < 45) {
    return 'anxious';
  } else if (anxiety < 45 && avoidance >= 55) {
    return 'avoidant';
  } else if (anxiety >= 55 && avoidance >= 55) {
    return 'fearful';
  } else if (anxiety >= avoidance) {
    return 'anxious';
  } else {
    return 'avoidant';
  }
}

function drawRadarChart() {
  const canvas = document.getElementById('radar-chart');
  const container = canvas.parentElement;
  const size = Math.min(container.clientWidth - 20, 320);
  
  canvas.width = size;
  canvas.height = size;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  
  const ctx = canvas.getContext('2d');
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 50;
  
  const dimensions = ['anxiety', 'avoidance', 'dependency', 'trust', 'communication'];
  const labels = ['焦虑', '回避', '依赖', '信任', '沟通'];
  const angleStep = (Math.PI * 2) / dimensions.length;
  const startAngle = -Math.PI / 2;
  
  ctx.clearRect(0, 0, size, size);
  
  for (let i = 1; i <= 5; i++) {
    const r = (radius / 5) * i;
    ctx.beginPath();
    for (let j = 0; j <= dimensions.length; j++) {
      const angle = startAngle + angleStep * j;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (j === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  dimensions.forEach((_, i) => {
    const angle = startAngle + angleStep * i;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.stroke();
  });
  
  ctx.beginPath();
  dimensions.forEach((dim, i) => {
    const value = dimensionScores[dim] / 100;
    const angle = startAngle + angleStep * i;
    const x = centerX + radius * value * Math.cos(angle);
    const y = centerY + radius * value * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(124, 58, 237, 0.15)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(124, 58, 237, 0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  dimensions.forEach((dim, i) => {
    const value = dimensionScores[dim] / 100;
    const angle = startAngle + angleStep * i;
    const x = centerX + radius * value * Math.cos(angle);
    const y = centerY + radius * value * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#7c3aed';
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
  });
  
  ctx.fillStyle = '#374151';
  ctx.font = '13px -apple-system, sans-serif';
  ctx.textBaseline = 'middle';
  
  dimensions.forEach((dim, i) => {
    const angle = startAngle + angleStep * i;
    const labelRadius = radius + 28;
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    
    if (cos < -0.3) {
      ctx.textAlign = 'right';
    } else if (cos > 0.3) {
      ctx.textAlign = 'left';
    } else {
      ctx.textAlign = 'center';
    }
    
    let labelX = x;
    let labelY = y;
    
    if (sin < -0.5) {
      labelY -= 6;
    } else if (sin > 0.5) {
      labelY += 6;
    }
    
    ctx.fillText(labels[i], labelX, labelY);
  });
}

function getDimensionLevel(score) {
  if (score < 30) return '低';
  if (score < 50) return '偏低';
  if (score < 70) return '中等';
  if (score < 85) return '偏高';
  return '高';
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  const type = getAttachmentType();
  const typeInfo = attachmentTypes[type];
  
  document.getElementById('result-icon').textContent = typeInfo.icon;
  document.getElementById('result-type-name').textContent = typeInfo.name;
  document.getElementById('result-type-name').style.color = typeInfo.color;
  document.getElementById('result-type-desc').textContent = typeInfo.description;
  
  const typeCard = document.getElementById('result-type-card');
  typeCard.style.borderTop = `4px solid ${typeInfo.color}`;
  
  drawRadarChart();
  
  const dimensionsDetail = document.getElementById('dimensions-detail');
  const dimKeys = ['anxiety', 'avoidance', 'dependency', 'trust', 'communication'];
  const dimColors = ['#f59e0b', '#7c3aed', '#3b82f6', '#10b981', '#ec4899'];
  
  dimensionsDetail.innerHTML = dimKeys.map((dim, i) => {
    const info = dimensionInfo[dim];
    const score = dimensionScores[dim];
    const level = getDimensionLevel(score);
    return `
      <div class="dimension-item">
        <div class="dimension-header">
          <div class="dimension-label">
            <span class="dimension-dot" style="background: ${dimColors[i]}"></span>
            <span>${info.icon} ${info.name}</span>
          </div>
          <span class="dimension-score" style="color: ${dimColors[i]}">${score}% <small>${level}</small></span>
        </div>
        <div class="dimension-bar-container">
          <div class="dimension-bar" style="width: ${score}%; background: ${dimColors[i]}"></div>
        </div>
        <div class="dimension-desc">${score < 50 ? info.low : info.high}</div>
      </div>
    `;
  }).join('');
  
  const charList = document.getElementById('characteristics-list');
  charList.innerHTML = typeInfo.characteristics.map(char => `<li>${char}</li>`).join('');
  
  const adviceList = document.getElementById('advice-list');
  adviceList.innerHTML = typeInfo.advice.map(advice => `<li>${advice}</li>`).join('');
  
  window.scrollTo(0, 0);
}

function restartTest() {
  document.getElementById('result-page').classList.remove('active');
  document.getElementById('home-page').classList.add('active');
  currentQuestion = 0;
  answers = {};
  window.scrollTo(0, 0);
}

function shareResult() {
  const type = getAttachmentType();
  const typeName = attachmentTypes[type].name;
  const shareText = `我的依恋类型是：${typeName}！\n焦虑：${dimensionScores.anxiety}%\n回避：${dimensionScores.avoidance}%\n依赖：${dimensionScores.dependency}%\n信任：${dimensionScores.trust}%\n沟通：${dimensionScores.communication}%\n快来测测你的依恋类型吧！`;
  
  if (navigator.share) {
    navigator.share({
      title: '依恋类型测试结果',
      text: shareText,
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      const btn = document.querySelector('.btn-share');
      const originalText = btn.textContent;
      btn.textContent = '已复制！';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    }).catch(() => {
      prompt('复制以下内容分享给朋友：', shareText);
    });
  }
}

window.addEventListener('resize', function() {
  const resultPage = document.getElementById('result-page');
  if (resultPage.classList.contains('active')) {
    drawRadarChart();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('home-page').classList.add('active');
});