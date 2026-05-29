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
    level = '无拖延';
    description = '你几乎没有拖延习惯，能够高效地完成任务。你的时间管理能力很强。';
    advice = '继续保持良好的习惯，你的自律性将成为成功的助力。';
  } else if (percentage < 50) {
    level = '轻度拖延';
    description = '你有轻度的拖延倾向，但基本能按时完成任务。建议继续提升效率。';
    advice = '建议使用番茄工作法等技巧，提升专注力和效率。';
  } else if (percentage < 75) {
    level = '中度拖延';
    description = '你有明显的拖延习惯，影响了工作效率和生活质量。需要积极改善。';
    advice = '建议制定详细计划，设定小目标，逐步克服拖延习惯。';
  } else {
    level = '重度拖延';
    description = '你的拖延问题严重，严重影响了生活和工作。需要认真对待并寻求改变。';
    advice = '建议寻求专业帮助，学习时间管理和自我控制技巧。';
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
  const text = `我在拖延症测试中获得了${level}的评价，得分${percentage}！`;
  
  if (navigator.share) {
    navigator.share({
      title: '拖延症测试结果',
      text: text
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板！');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);