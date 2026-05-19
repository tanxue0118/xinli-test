var currentQuestion = 0;
var answers = {};
var scores = {
  heterosexual: 0,
  homosexual: 0,
  bisexual: 0,
  pansexual: 0,
  asexual: 0
};
var maxPossible = {
  heterosexual: 0,
  homosexual: 0,
  bisexual: 0,
  pansexual: 0,
  asexual: 0
};

function startTest() {
  currentQuestion = 0;
  answers = {};
  scores = { heterosexual: 0, homosexual: 0, bisexual: 0, pansexual: 0, asexual: 0 };
  maxPossible = { heterosexual: 0, homosexual: 0, bisexual: 0, pansexual: 0, asexual: 0 };
  
  calculateMaxScores();
  
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  showQuestion();
  window.scrollTo(0, 0);
}

function calculateMaxScores() {
  orientationQuestions.forEach(function(question) {
    var questionMax = { heterosexual: 0, homosexual: 0, bisexual: 0, pansexual: 0, asexual: 0 };
    
    question.options.forEach(function(option) {
      Object.keys(option.score).forEach(function(type) {
        if (option.score[type] > questionMax[type]) {
          questionMax[type] = option.score[type];
        }
      });
    });
    
    Object.keys(questionMax).forEach(function(type) {
      maxPossible[type] += questionMax[type];
    });
  });
}

function showQuestion() {
  var question = orientationQuestions[currentQuestion];
  var totalQuestions = orientationQuestions.length;
  
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
  
  if (currentQuestion < orientationQuestions.length - 1) {
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
  scores = { heterosexual: 0, homosexual: 0, bisexual: 0, pansexual: 0, asexual: 0 };
  
  orientationQuestions.forEach(function(question) {
    var answerIndex = answers[question.id];
    if (answerIndex !== undefined) {
      var option = question.options[answerIndex];
      var optionScores = option.score;
      
      Object.keys(optionScores).forEach(function(type) {
        if (scores[type] !== undefined) {
          scores[type] += optionScores[type];
        }
      });
    }
  });
}

function getResultType() {
  var totalScore = 0;
  Object.keys(scores).forEach(function(type) {
    totalScore += scores[type];
  });
  
  if (totalScore === 0) {
    return 'questioning';
  }
  
  var maxScore = 0;
  var resultType = 'questioning';
  
  Object.keys(scores).forEach(function(type) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  });
  
  return resultType;
}

function getPercent(type) {
  if (maxPossible[type] === 0) return 0;
  var percent = Math.round((scores[type] / maxPossible[type]) * 100);
  return Math.min(percent, 100);
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var resultType = getResultType();
  var typeInfo = orientationTypes[resultType];
  
  document.getElementById('result-icon').textContent = typeInfo.icon;
  document.getElementById('result-type-name').textContent = typeInfo.name;
  document.getElementById('result-type-name').style.color = typeInfo.color;
  document.getElementById('result-type-desc').textContent = typeInfo.description;
  
  var typeCard = document.getElementById('result-type-card');
  typeCard.style.borderTop = '4px solid ' + typeInfo.color;
  
  var scoresDetail = document.getElementById('scores-detail');
  var types = ['heterosexual', 'homosexual', 'bisexual', 'pansexual', 'asexual'];
  var typeNames = {
    heterosexual: '异性恋',
    homosexual: '同性恋',
    bisexual: '双性恋',
    pansexual: '泛性恋',
    asexual: '无性恋'
  };
  var typeColors = {
    heterosexual: '#3b82f6',
    homosexual: '#8b5cf6',
    bisexual: '#ec4899',
    pansexual: '#f59e0b',
    asexual: '#10b981'
  };
  
  scoresDetail.innerHTML = types.map(function(type) {
    var percent = getPercent(type);
    return '<div class="score-item">' +
      '<div class="score-header">' +
        '<span class="score-label">' + typeNames[type] + '</span>' +
        '<span class="score-percent" style="color: ' + typeColors[type] + '">' + percent + '%</span>' +
      '</div>' +
      '<div class="score-bar-container">' +
        '<div class="score-bar" style="width: ' + percent + '%; background: ' + typeColors[type] + '"></div>' +
      '</div>' +
    '</div>';
  }).join('');
  
  var traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = typeInfo.traits.map(function(trait) {
    return '<li>' + trait + '</li>';
  }).join('');
  
  var adviceList = document.getElementById('advice-list');
  adviceList.innerHTML = typeInfo.advice.map(function(advice) {
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
  var resultType = getResultType();
  var typeInfo = orientationTypes[resultType];
  var shareText = '我的性取向测试结果：' + typeInfo.name + '！\n\n' + typeInfo.description.substring(0, 80) + '...\n\n了解真实的自己，接纳内心的呼唤。';
  
  if (navigator.share) {
    navigator.share({
      title: '性取向测试结果',
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