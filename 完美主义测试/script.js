let currentQuestion = 0;
let score = 0;
let answers = [];

function init() {
  showPage('home');
}

function showPage(page) {
  document.getElementById('home-page').style.display = page === 'home' ? 'block' : 'none';
  document.getElementById('test-page').style.display = page === 'test' ? 'block' : 'none';
  document.getElementById('result-page').style.display = page === 'result' ? 'block' : 'none';
  
  if (page === 'test') {
    showQuestion();
  }
}

function startTest() {
  currentQuestion = 0;
  score = 0;
  answers = [];
  showPage('test');
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question-text').textContent = question.question;
  document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${questions.length}`;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.onclick = () => selectOption(index);
    optionsContainer.appendChild(button);
  });
  
  updateProgress();
}

function selectOption(index) {
  const question = questions[currentQuestion];
  score += question.options[index].score;
  answers.push(index);
  
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
}

function showResult() {
  showPage('result');
  document.getElementById('progress-bar').style.width = '100%';
  
  const maxScore = questions.length * 3;
  const percentage = (score / maxScore) * 100;
  
  let level, description, advice;
  
  if (percentage < 25) {
    level = '低完美主义';
    description = '你的完美主义倾向很低，能够接受不完美，心态健康。';
    advice = '继续保持平衡的心态，享受生活的过程而非结果。';
  } else if (percentage < 50) {
    level = '中等完美主义';
    description = '你有一定的完美主义倾向，追求高标准但能接受现实。';
    advice = '继续保持追求卓越的同时，学会接受不完美。';
  } else if (percentage < 75) {
    level = '高完美主义';
    description = '你的完美主义倾向较高，可能给自己带来较大压力。';
    advice = '建议学习接受不完美，降低对自己的苛求，关注过程而非结果。';
  } else {
    level = '超高完美主义';
    description = '你的完美主义倾向非常高，可能严重影响了生活质量。';
    advice = '建议寻求专业帮助，学习放松和接受不完美，减轻心理负担。';
  }
  
  document.getElementById('result-level').textContent = level;
  document.getElementById('result-score').textContent = `${score} / ${maxScore}`;
  document.getElementById('result-percentage').textContent = `${Math.round(percentage)}%`;
  document.getElementById('result-description').textContent = description;
  document.getElementById('result-advice').textContent = advice;
  
  drawChart(percentage);
}

function drawChart(percentage) {
  const canvas = document.getElementById('result-chart');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 200;
  canvas.height = 200;
  
  const centerX = 100;
  const centerY = 100;
  const radius = 80;
  
  ctx.clearRect(0, 0, 200, 200);
  
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 12;
  ctx.stroke();
  
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + (Math.PI * 2 * percentage / 100);
  
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.stroke();
  
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${Math.round(percentage)}%`, centerX, centerY);
}

function restart() {
  showPage('home');
}

function shareResult() {
  const level = document.getElementById('result-level').textContent;
  const percentage = document.getElementById('result-percentage').textContent;
  const text = `我在完美主义测试中获得了${level}的评价，得分${percentage}！`;
  
  if (navigator.share) {
    navigator.share({
      title: '完美主义测试结果',
      text: text
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板！');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);