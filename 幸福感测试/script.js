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
    level = '低幸福感';
    description = '你的幸福感较低，可能正经历一些困难。建议关注自己的心理健康，寻求支持和帮助。';
    advice = '建议每天记录三件感恩的事，培养积极心态，寻求专业帮助。';
  } else if (percentage < 50) {
    level = '中等幸福感';
    description = '你的幸福感处于中等水平，有提升的空间。建议培养感恩心态，关注生活中的美好事物。';
    advice = '建议多参与社交活动，培养兴趣爱好，关注身心健康。';
  } else if (percentage < 75) {
    level = '高幸福感';
    description = '你的幸福感较高，能够享受生活的美好。继续保持积极的心态，珍惜当下的幸福。';
    advice = '继续保持积极的生活方式，与他人分享你的快乐。';
  } else {
    level = '超高幸福感';
    description = '你的幸福感非常高，对生活充满热情和满足。你的积极态度将感染身边的人。';
    advice = '你的幸福感很高，可以尝试帮助他人提升幸福感。';
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
  const text = `我在幸福感测试中获得了${level}的评价，得分${percentage}！`;
  
  if (navigator.share) {
    navigator.share({
      title: '幸福感测试结果',
      text: text
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板！');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
