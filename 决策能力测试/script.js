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
    level = '决策能力弱';
    description = '您的决策能力较弱，建议学习决策技巧，提升分析能力。';
  } else if (totalScore <= 30) {
    level = '决策能力一般';
    description = '您的决策能力处于一般水平，可以通过练习进一步提升。';
  } else if (totalScore <= 45) {
    level = '决策能力较强';
    description = '您具有较强的决策能力，能够做出合理的判断。';
  } else {
    level = '决策能力超强';
    description = '您的决策能力非常出色，是优秀的决策者！';
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
  ctx.fillStyle = '#8b5cf6';
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
