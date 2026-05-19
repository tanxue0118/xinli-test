let currentQuestion = 0;
let answers = {};
let totalScore = 0;
let maxScore = 0;

function startTest() {
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  currentQuestion = 0;
  answers = {};
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  var question = questions[currentQuestion];
  var totalQuestions = questions.length;
  
  document.getElementById('question-counter').textContent = (currentQuestion + 1) + ' / ' + totalQuestions;
  document.getElementById('progress-percent').textContent = Math.round(((currentQuestion) / totalQuestions) * 100) + '%';
  document.getElementById('progress-fill').style.width = ((currentQuestion) / totalQuestions) * 100 + '%';
  document.getElementById('question-number').textContent = '第 ' + (currentQuestion + 1) + ' 题';
  document.getElementById('question-text').textContent = question.text;
  
  var optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach(function(option, index) {
    var btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[question.id] === index ? ' selected' : '');
    btn.innerHTML = '<div class="option-radio"></div><div class="option-label">' + option.label + '</div>';
    btn.onclick = function() { selectOption(question.id, index); };
    optionsContainer.appendChild(btn);
  });
  
  updateNavigationButtons();
}

function selectOption(questionId, optionIndex) {
  answers[questionId] = optionIndex;
  showQuestion();
}

function updateNavigationButtons() {
  var prevBtn = document.getElementById('btn-prev');
  var nextBtn = document.getElementById('btn-next');
  
  prevBtn.disabled = currentQuestion === 0;
  
  var hasAnswer = answers[questions[currentQuestion].id] !== undefined;
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
  totalScore = 0;
  maxScore = 0;
  
  questions.forEach(function(question) {
    var answerIndex = answers[question.id];
    if (answerIndex !== undefined) {
      var option = question.options[answerIndex];
      totalScore += option.score;
      maxScore += 3;
    }
  });
}

function getResultType() {
  var percent = (totalScore / maxScore) * 100;
  
  if (percent < 40) {
    return 'low';
  } else if (percent < 65) {
    return 'medium';
  } else {
    return 'high';
  }
}

function getScoreLevel(percent) {
  if (percent < 30) return '非常低';
  if (percent < 40) return '较低';
  if (percent < 50) return '中等偏低';
  if (percent < 60) return '中等';
  if (percent < 70) return '中等偏高';
  if (percent < 80) return '较高';
  return '非常高';
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var type = getResultType();
  var typeInfo = resultTypes[type];
  var percent = Math.round((totalScore / maxScore) * 100);
  
  document.getElementById('result-icon').textContent = typeInfo.icon;
  document.getElementById('result-type-name').textContent = typeInfo.name;
  document.getElementById('result-type-name').style.color = typeInfo.color;
  document.getElementById('result-type-desc').textContent = typeInfo.description;
  
  var typeCard = document.getElementById('result-type-card');
  typeCard.style.borderTop = '4px solid ' + typeInfo.color;
  
  document.getElementById('score-percent').textContent = percent + '%';
  document.getElementById('score-percent').style.color = typeInfo.color;
  document.getElementById('score-level').textContent = getScoreLevel(percent);
  document.getElementById('score-level').style.color = typeInfo.color;
  document.getElementById('score-fill').style.width = percent + '%';
  document.getElementById('score-fill').style.background = typeInfo.color;
  
  var charList = document.getElementById('characteristics-list');
  charList.innerHTML = typeInfo.characteristics.map(function(char) { return '<li>' + char + '</li>'; }).join('');
  
  var adviceList = document.getElementById('advice-list');
  adviceList.innerHTML = typeInfo.advice.map(function(advice) { return '<li>' + advice + '</li>'; }).join('');
  
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
  var type = getResultType();
  var typeName = resultTypes[type].name;
  var percent = Math.round((totalScore / maxScore) * 100);
  var shareText = '我的性压抑测试结果：' + typeName + '！压抑程度：' + percent + '%，属于' + getScoreLevel(percent) + '水平。快来测测你的性压抑程度吧！';
  
  if (navigator.share) {
    navigator.share({
      title: '性压抑测试结果',
      text: shareText,
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(shareText).then(function() {
      var btn = document.querySelector('.btn-share');
      var originalText = btn.textContent;
      btn.textContent = '已复制！';
      setTimeout(function() {
        btn.textContent = originalText;
      }, 2000);
    }).catch(function() {
      prompt('复制以下内容分享给朋友：', shareText);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('home-page').classList.add('active');
});