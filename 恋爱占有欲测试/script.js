var currentQuestion = 0;
var answers = {};
var totalScore = 0;

function startTest() {
  currentQuestion = 0;
  answers = {};
  totalScore = 0;
  
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  var question = priQuestions[currentQuestion];
  var totalQuestions = priQuestions.length;
  
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
    btn.innerHTML = '<div class="option-radio"></div><div class="option-label">' + option.text + '</div>';
    btn.onclick = function() { selectOption(question.id, index); };
    optionsContainer.appendChild(btn);
  });
  
  document.getElementById('btn-prev').disabled = currentQuestion === 0;
}

function selectOption(questionId, optionIndex) {
  answers[questionId] = optionIndex;
  
  if (currentQuestion < priQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
    window.scrollTo(0, 0);
  } else {
    calculateResults();
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
    window.scrollTo(0, 0);
  }
}

function calculateResults() {
  totalScore = 0;
  
  priQuestions.forEach(function(question) {
    var answerIndex = answers[question.id];
    if (answerIndex !== undefined) {
      totalScore += question.options[answerIndex].score;
    }
  });
}

function getResultLevel() {
  for (var i = 0; i < priLevels.length; i++) {
    if (totalScore >= priLevels[i].min && totalScore <= priLevels[i].max) {
      return priLevels[i];
    }
  }
  return priLevels[1];
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var level = getResultLevel();
  
  document.getElementById('score-value').textContent = totalScore;
  document.getElementById('score-bar').style.width = (totalScore / 120 * 100) + '%';
  document.getElementById('score-bar').style.background = level.color;
  document.getElementById('score-level').textContent = level.level;
  document.getElementById('score-level').style.color = level.color;
  
  document.getElementById('result-icon').textContent = level.icon;
  document.getElementById('result-level-name').textContent = level.level;
  document.getElementById('result-level-name').style.color = level.color;
  document.getElementById('result-desc').textContent = level.description;
  
  var typeCard = document.getElementById('result-type-card');
  typeCard.style.borderTop = '4px solid ' + level.color;
  
  var traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = level.traits.map(function(trait) {
    return '<li>' + trait + '</li>';
  }).join('');
  
  var adviceList = document.getElementById('advice-list');
  adviceList.innerHTML = level.advice.map(function(advice) {
    return '<li>' + advice + '</li>';
  }).join('');
  
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
  var level = getResultLevel();
  var shareText = '我的恋爱占有欲指数测试结果：\n\n得分：' + totalScore + ' / 120\n程度：' + level.level + '\n\n' + level.description.substring(0, 80) + '...\n\n快来测测你的恋爱占有欲吧！';
  
  if (navigator.share) {
    navigator.share({
      title: '恋爱占有欲指数测试结果',
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