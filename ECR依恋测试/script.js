var currentQuestion = 0;
var answers = {};
var avoidanceScore = 0;
var anxietyScore = 0;
var avoidanceAvg = 0;
var anxietyAvg = 0;

function startTest() {
  currentQuestion = 0;
  answers = {};
  avoidanceScore = 0;
  anxietyScore = 0;
  
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  var question = ecrQuestions[currentQuestion];
  var totalQuestions = ecrQuestions.length;
  
  document.getElementById('question-counter').textContent = (currentQuestion + 1) + ' / ' + totalQuestions;
  document.getElementById('progress-percent').textContent = Math.round(((currentQuestion) / totalQuestions) * 100) + '%';
  document.getElementById('progress-fill').style.width = ((currentQuestion) / totalQuestions) * 100 + '%';
  document.getElementById('question-number').textContent = '第 ' + (currentQuestion + 1) + ' 题';
  document.getElementById('question-text').textContent = question.text;
  
  var scaleButtons = document.getElementById('scale-buttons');
  scaleButtons.innerHTML = '';
  
  for (var i = 1; i <= 7; i++) {
    var btn = document.createElement('button');
    btn.className = 'scale-btn' + (answers[question.id] === i ? ' selected' : '');
    btn.textContent = i;
    btn.onclick = (function(score) {
      return function() { selectScore(question.id, score); };
    })(i);
    scaleButtons.appendChild(btn);
  }
  
  document.getElementById('btn-prev').disabled = currentQuestion === 0;
}

function selectScore(questionId, score) {
  answers[questionId] = score;
  
  if (currentQuestion < ecrQuestions.length - 1) {
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
  avoidanceScore = 0;
  anxietyScore = 0;
  
  ecrQuestions.forEach(function(question) {
    var answer = answers[question.id];
    if (answer !== undefined) {
      var score = answer;
      
      if (question.reverse) {
        score = 8 - answer;
      }
      
      if (question.dimension === 'avoidance') {
        avoidanceScore += score;
      } else {
        anxietyScore += score;
      }
    }
  });
  
  avoidanceAvg = avoidanceScore / 18;
  anxietyAvg = anxietyScore / 18;
}

function getAttachmentType() {
  var A = avoidanceAvg;
  var B = anxietyAvg;
  
  var M1 = A * 3.2893296 + B * 5.4725318 - 11.5307833;
  var M2 = A * 7.2371075 + B * 8.1776448 - 32.3553266;
  var M3 = A * 3.9246754 + B * 9.7102446 - 28.4573220;
  var M4 = A * 7.3654621 + B * 4.9392039 - 22.2281088;
  
  var max = Math.max(M1, M2, M3, M4);
  
  if (max === M1) return 'secure';
  if (max === M2) return 'fearful';
  if (max === M3) return 'preoccupied';
  return 'dismissing';
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var type = getAttachmentType();
  var typeInfo = attachmentTypes[type];
  
  document.getElementById('avoidance-score').textContent = avoidanceAvg.toFixed(2);
  document.getElementById('anxiety-score').textContent = anxietyAvg.toFixed(2);
  
  document.getElementById('avoidance-bar').style.width = ((avoidanceAvg / 7) * 100) + '%';
  document.getElementById('anxiety-bar').style.width = ((anxietyAvg / 7) * 100) + '%';
  
  document.getElementById('result-icon').textContent = typeInfo.icon;
  document.getElementById('result-type-name').textContent = typeInfo.name;
  document.getElementById('result-type-name').style.color = typeInfo.color;
  document.getElementById('result-type-en').textContent = typeInfo.nameEn;
  document.getElementById('result-desc').textContent = typeInfo.description;
  
  var typeCard = document.getElementById('result-type-card');
  typeCard.style.borderTop = '4px solid ' + typeInfo.color;
  
  var charList = document.getElementById('characteristics-list');
  charList.innerHTML = typeInfo.characteristics.map(function(char) {
    return '<li>' + char + '</li>';
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
  var type = getAttachmentType();
  var typeInfo = attachmentTypes[type];
  var shareText = '我的ECR依恋类型测试结果：\n\n依恋类型：' + typeInfo.name + ' (' + typeInfo.nameEn + ')\n回避维度：' + avoidanceAvg.toFixed(2) + '\n焦虑维度：' + anxietyAvg.toFixed(2) + '\n\n' + typeInfo.description.substring(0, 80) + '...\n\n快来测测你的依恋类型吧！';
  
  if (navigator.share) {
    navigator.share({
      title: 'ECR依恋类型测试结果',
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