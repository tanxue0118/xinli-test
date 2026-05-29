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
    level = '低价值感';
    description = '你的自我价值感较低，经常怀疑自己的价值。建议提升自我认知。';
    advice = '建议记录自己的优点和成就，学习自我肯定，提升自我价值感。';
  } else if (percentage < 50) {
    level = '中等价值感';
    description = '你的自我价值感中等，有时能认可自己，有时会怀疑。';
    advice = '建议继续培养自我认可，关注自己的成长和进步。';
  } else if (percentage < 75) {
    level = '高价值感';
    description = '你的自我价值感较高，能够认可自己的价值和能力。';
    advice = '你的自我价值感已经很不错了，可以继续提升自信，帮助他人。';
  } else {
    level = '超高价值感';
    description = '你的自我价值感非常高，能够充分认可自己的价值，自信从容。';
    advice = '你的自我价值感非常出色，可以将这种自信传递给他人。';
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
  const text = `我在自我价值感测试中获得了${level}的评价，得分${percentage}！`;
  
  if (navigator.share) {
    navigator.share({
      title: '自我价值感测试结果',
      text: text
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板！');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);