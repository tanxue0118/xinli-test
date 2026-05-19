var currentQuestion = 0;
var answers = {};
var masculineScore = 0;
var feminineScore = 0;

function startTest() {
  currentQuestion = 0;
  answers = {};
  masculineScore = 0;
  feminineScore = 0;
  
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  var item = bsriItems[currentQuestion];
  var totalItems = bsriItems.length;
  
  document.getElementById('question-counter').textContent = (currentQuestion + 1) + ' / ' + totalItems;
  document.getElementById('progress-percent').textContent = Math.round(((currentQuestion) / totalItems) * 100) + '%';
  document.getElementById('progress-fill').style.width = ((currentQuestion) / totalItems) * 100 + '%';
  document.getElementById('question-number').textContent = '第 ' + (currentQuestion + 1) + ' 题';
  document.getElementById('question-text').textContent = '你觉得自己是' + item.text + '的人吗？';
  
  var scaleButtons = document.getElementById('scale-buttons');
  scaleButtons.innerHTML = '';
  
  for (var i = 1; i <= 7; i++) {
    var btn = document.createElement('button');
    btn.className = 'scale-btn' + (answers[item.id] === i ? ' selected' : '');
    btn.textContent = i;
    btn.onclick = (function(score) {
      return function() { selectScore(item.id, score); };
    })(i);
    scaleButtons.appendChild(btn);
  }
  
  document.getElementById('btn-prev').disabled = currentQuestion === 0;
}

function selectScore(itemId, score) {
  answers[itemId] = score;
  
  if (currentQuestion < bsriItems.length - 1) {
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
  var masculineTotal = 0;
  var masculineCount = 0;
  var feminineTotal = 0;
  var feminineCount = 0;
  
  bsriItems.forEach(function(item) {
    var score = answers[item.id];
    if (score !== undefined) {
      if (item.type === 'masculine') {
        masculineTotal += score;
        masculineCount++;
      } else if (item.type === 'feminine') {
        feminineTotal += score;
        feminineCount++;
      }
    }
  });
  
  masculineScore = masculineCount > 0 ? masculineTotal / masculineCount : 0;
  feminineScore = feminineCount > 0 ? feminineTotal / feminineCount : 0;
}

function getResultType() {
  var threshold = 4.9;
  
  if (masculineScore >= threshold && feminineScore >= threshold) {
    return 'androgynous';
  } else if (masculineScore >= threshold && feminineScore < threshold) {
    return 'masculine';
  } else if (masculineScore < threshold && feminineScore >= threshold) {
    return 'feminine';
  } else {
    return 'undifferentiated';
  }
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var resultType = getResultType();
  var typeInfo = genderTypes[resultType];
  
  document.getElementById('result-icon').textContent = typeInfo.icon;
  document.getElementById('result-type-name').textContent = typeInfo.name;
  document.getElementById('result-type-name').style.color = typeInfo.color;
  document.getElementById('result-type-desc').textContent = typeInfo.description;
  
  var typeCard = document.getElementById('result-type-card');
  typeCard.style.borderTop = '4px solid ' + typeInfo.color;
  
  document.getElementById('masculine-score').textContent = masculineScore.toFixed(1);
  document.getElementById('feminine-score').textContent = feminineScore.toFixed(1);
  
  document.getElementById('masculine-bar').style.width = ((masculineScore - 1) / 6 * 100) + '%';
  document.getElementById('feminine-bar').style.width = ((feminineScore - 1) / 6 * 100) + '%';
  
  var traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = typeInfo.traits.map(function(trait) {
    return '<li>' + trait + '</li>';
  }).join('');
  
  var strengthsList = document.getElementById('strengths-list');
  strengthsList.innerHTML = typeInfo.strengths.map(function(s) {
    return '<li>' + s + '</li>';
  }).join('');
  
  var adviceList = document.getElementById('advice-list');
  adviceList.innerHTML = typeInfo.advice.map(function(a) {
    return '<li>' + a + '</li>';
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
  var typeInfo = genderTypes[resultType];
  var shareText = '我的贝姆心理性别角色测试结果：' + typeInfo.name + '！\n\n男性化特质：' + masculineScore.toFixed(1) + '分\n女性化特质：' + feminineScore.toFixed(1) + '分\n\n' + typeInfo.description.substring(0, 80) + '...\n\n快来测测你的心理性别角色吧！';
  
  if (navigator.share) {
    navigator.share({
      title: '贝姆心理性别角色测试结果',
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