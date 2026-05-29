let currentQuestion = 0;
let totalScore = 0;

function startTest() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('test-page').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById('question-container');
  
  container.innerHTML = `
    <div class="question">${currentQuestion + 1}/20. ${q.question}</div>
    <div class="options">
      ${q.options.map((opt, index) => `
        <button class="option" onclick="selectOption(${index})">${opt.text}</button>
      `).join('')}
    </div>
  `;
  
  updateProgress();
}

function selectOption(index) {
  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected'));
  options[index].classList.add('selected');
  
  totalScore += questions[currentQuestion].options[index].score;
  
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 500);
}

function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById('progress').style.width = progress + '%';
}

function showResult() {
  document.getElementById('test-page').style.display = 'none';
  document.getElementById('result-page').style.display = 'block';
  
  const maxScore = 60;
  const percentage = (totalScore / maxScore) * 100;
  
  let level, description;
  if (totalScore <= 15) {
    level = '睡眠质量差';
    description = '您的睡眠质量存在严重问题，建议调整作息习惯，必要时寻求专业帮助。';
  } else if (totalScore <= 30) {
    level = '睡眠质量一般';
    description = '您的睡眠质量有待改善，可以尝试建立规律的作息时间。';
  } else if (totalScore <= 45) {
    level = '睡眠质量良好';
    description = '您的睡眠质量不错，保持良好的睡眠习惯。';
  } else {
    level = '睡眠质量优秀';
    description = '您的睡眠质量非常好，继续保持！';
  }
  
  document.getElementById('result-content').innerHTML = `
    <div class="score">${totalScore}/${maxScore}</div>
    <div class="level">${level}</div>
    <div class="description">${description}</div>
    <div class="percentage">得分率：${percentage.toFixed(1)}%</div>
  `;
  
  drawChart(percentage);
}

function drawChart(percentage) {
  const canvas = document.getElementById('chart');
  const ctx = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;
  
  const centerX = 100;
  const centerY = 100;
  const radius = 80;
  
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#f0f0f0';
  ctx.fill();
  
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + (percentage / 100) * Math.PI * 2;
  
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.fillStyle = '#6366f1';
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  ctx.fillStyle = '#333';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(Math.round(percentage) + '%', centerX, centerY);
}

function restart() {
  currentQuestion = 0;
  totalScore = 0;
  document.getElementById('result-page').style.display = 'none';
  document.getElementById('home-page').style.display = 'block';
}
