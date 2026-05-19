var currentQuestion = 0;
var answers = {};
var currentVersion = '';
var currentQuestions = [];
var scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startTest(version) {
  currentVersion = version;
  currentQuestions = mbtiQuestions[version];
  currentQuestion = 0;
  answers = {};
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  var question = currentQuestions[currentQuestion];
  var totalQuestions = currentQuestions.length;
  
  document.getElementById('question-counter').textContent = (currentQuestion + 1) + ' / ' + totalQuestions;
  document.getElementById('progress-percent').textContent = Math.round(((currentQuestion) / totalQuestions) * 100) + '%';
  document.getElementById('progress-fill').style.width = ((currentQuestion) / totalQuestions) * 100 + '%';
  document.getElementById('question-number').textContent = '第 ' + (currentQuestion + 1) + ' 题';
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('option-a-text').textContent = question.optionA;
  document.getElementById('option-b-text').textContent = question.optionB;
  
  var optionA = document.getElementById('option-a');
  var optionB = document.getElementById('option-b');
  
  optionA.className = 'option-btn' + (answers[question.id] === 'A' ? ' selected' : '');
  optionB.className = 'option-btn' + (answers[question.id] === 'B' ? ' selected' : '');
  
  document.getElementById('btn-prev').disabled = currentQuestion === 0;
}

function selectOption(option) {
  var question = currentQuestions[currentQuestion];
  answers[question.id] = option;
  
  if (currentQuestion < currentQuestions.length - 1) {
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
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  currentQuestions.forEach(function(question) {
    var answer = answers[question.id];
    if (answer) {
      var dim = question.dimension;
      if (answer === 'A') {
        scores[dim.charAt(0)]++;
      } else {
        scores[dim.charAt(1)]++;
      }
    }
  });
}

function getMBTIType() {
  var type = '';
  type += scores.E >= scores.I ? 'E' : 'I';
  type += scores.S >= scores.N ? 'S' : 'N';
  type += scores.T >= scores.F ? 'T' : 'F';
  type += scores.J >= scores.P ? 'J' : 'P';
  return type;
}

function getPercent(first, second) {
  var total = first + second;
  if (total === 0) return 50;
  return Math.round((first / total) * 100);
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var type = getMBTIType();
  var typeInfo = mbtiTypes[type];
  
  document.getElementById('result-type-code').textContent = type;
  document.getElementById('result-type-name').textContent = typeInfo.name;
  document.getElementById('result-type-desc').textContent = typeInfo.description;
  
  var typeCard = document.getElementById('result-type-card');
  var category = getTypeCategory(type);
  typeCard.className = 'result-type-card ' + category;
  
  var eiPercent = getPercent(scores.E, scores.I);
  var snPercent = getPercent(scores.S, scores.N);
  var tfPercent = getPercent(scores.T, scores.F);
  var jpPercent = getPercent(scores.J, scores.P);
  
  document.getElementById('dim-e-percent').textContent = eiPercent + '%';
  document.getElementById('dim-i-percent').textContent = (100 - eiPercent) + '%';
  document.getElementById('dim-ei-bar').style.width = eiPercent + '%';
  
  document.getElementById('dim-s-percent').textContent = snPercent + '%';
  document.getElementById('dim-n-percent').textContent = (100 - snPercent) + '%';
  document.getElementById('dim-sn-bar').style.width = snPercent + '%';
  
  document.getElementById('dim-t-percent').textContent = tfPercent + '%';
  document.getElementById('dim-f-percent').textContent = (100 - tfPercent) + '%';
  document.getElementById('dim-tf-bar').style.width = tfPercent + '%';
  
  document.getElementById('dim-j-percent').textContent = jpPercent + '%';
  document.getElementById('dim-p-percent').textContent = (100 - jpPercent) + '%';
  document.getElementById('dim-jp-bar').style.width = jpPercent + '%';
  
  updateDimensionLabelStyles('dim-e-label', 'dim-i-label', eiPercent);
  updateDimensionLabelStyles('dim-s-label', 'dim-n-label', snPercent);
  updateDimensionLabelStyles('dim-t-label', 'dim-f-label', tfPercent);
  updateDimensionLabelStyles('dim-j-label', 'dim-p-label', jpPercent);
  
  var traitsGrid = document.getElementById('traits-grid');
  traitsGrid.innerHTML = typeInfo.traits.map(function(trait) {
    return '<div class="trait-item">' + trait + '</div>';
  }).join('');
  
  var strengthsList = document.getElementById('strengths-list');
  strengthsList.innerHTML = typeInfo.strengths.map(function(s) {
    return '<li>' + s + '</li>';
  }).join('');
  
  var weaknessesList = document.getElementById('weaknesses-list');
  weaknessesList.innerHTML = typeInfo.weaknesses.map(function(w) {
    return '<li>' + w + '</li>';
  }).join('');
  
  var careersGrid = document.getElementById('careers-grid');
  careersGrid.innerHTML = typeInfo.careers.map(function(career) {
    return '<div class="career-item">' + career + '</div>';
  }).join('');
  
  window.scrollTo(0, 0);
}

function updateDimensionLabelStyles(labelAId, labelBId, percentA) {
  var labelA = document.getElementById(labelAId);
  var labelB = document.getElementById(labelBId);
  
  if (percentA > 50) {
    labelA.classList.add('active');
    labelB.classList.remove('active');
  } else {
    labelA.classList.remove('active');
    labelB.classList.add('active');
  }
}

function getTypeCategory(type) {
  var analysts = ['INTJ', 'INTP', 'ENTJ', 'ENTP'];
  var diplomats = ['INFJ', 'INFP', 'ENFJ', 'ENFP'];
  var sentinels = ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'];
  
  if (analysts.indexOf(type) !== -1) return 'analyst';
  if (diplomats.indexOf(type) !== -1) return 'diplomat';
  if (sentinels.indexOf(type) !== -1) return 'sentinel';
  return 'explorer';
}

function restartTest() {
  document.getElementById('result-page').classList.remove('active');
  document.getElementById('home-page').classList.add('active');
  currentQuestion = 0;
  answers = {};
  window.scrollTo(0, 0);
}

function shareResult() {
  var type = getMBTIType();
  var typeInfo = mbtiTypes[type];
  var shareText = '我的MBTI人格类型是：' + type + ' - ' + typeInfo.name + '！\n\n' + typeInfo.description.substring(0, 100) + '...\n\n快来测测你的人格类型吧！';
  
  if (navigator.share) {
    navigator.share({
      title: 'MBTI测试结果',
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