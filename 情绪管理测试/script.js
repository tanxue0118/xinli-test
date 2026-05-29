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
    level = '低能力';
    description = '你的情绪管理能力较低，经常被情绪左右。建议学习情绪管理技巧。';
    advice = '建议学习情绪识别和调节技巧，如深呼吸、正念冥想等，提升情绪管理能力。';
  } else if (percentage < 50) {
    level = '中等能力';
    description = '你的情绪管理能力中等，有时能控制情绪，有时会被情绪影响。';
    advice = '建议继续学习情绪管理技巧，在日常生活中有意识地练习。';
  } else if (percentage < 75) {
    level = '高能力';
    description = '你的情绪管理能力较强，能够较好地识别和调节自己的情绪。';
    advice = '你的情绪管理能力已经很不错了，可以继续深化学习，提升情商。';
  } else {
    level = '超高能力';
    description = '你的情绪管理能力非常出色，能够有效管理自己的情绪，也能帮助他人。';
    advice = '你的情绪管理能力非常出色，可以将这些能力运用到工作和生活中。';
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
  const text = `我在情绪管理测试中获得了${level}的评价，得分${percentage}！`;
  
  if (navigator.share) {
    navigator.share({
      title: '情绪管理测试结果',
      text: text
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板！');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);