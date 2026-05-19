var currentQuestion = 0;
var answers = {};
var actualAge = 25;
var totalScore = 0;
var dimensionScores = {
  emotional: 0,
  responsibility: 0,
  social: 0,
  independence: 0,
  stress: 0,
  outlook: 0
};
var dimensionMaxScores = {
  emotional: 0,
  responsibility: 0,
  social: 0,
  independence: 0,
  stress: 0,
  outlook: 0
};

var questionDimensions = [
  "responsibility", "emotional", "responsibility", "emotional", "emotional",
  "responsibility", "social", "independence", "stress", "responsibility",
  "social", "emotional", "social", "social", "responsibility",
  "responsibility", "independence", "independence", "emotional", "emotional",
  "independence", "social", "responsibility", "independence", "outlook",
  "social", "outlook", "stress", "outlook", "outlook"
];

function startTest() {
  var ageInput = document.getElementById('actual-age');
  var age = parseInt(ageInput.value);
  
  if (isNaN(age) || age < 10 || age > 80) {
    alert('请输入有效的年龄（10-80岁）');
    return;
  }
  
  actualAge = age;
  currentQuestion = 0;
  answers = {};
  totalScore = 0;
  dimensionScores = { emotional: 0, responsibility: 0, social: 0, independence: 0, stress: 0, outlook: 0 };
  dimensionMaxScores = { emotional: 0, responsibility: 0, social: 0, independence: 0, stress: 0, outlook: 0 };
  
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('test-page').classList.add('active');
  showQuestion();
  window.scrollTo(0, 0);
}

function showQuestion() {
  var question = psychAgeQuestions[currentQuestion];
  var totalQuestions = psychAgeQuestions.length;
  
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
  
  if (currentQuestion < psychAgeQuestions.length - 1) {
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
  dimensionScores = { emotional: 0, responsibility: 0, social: 0, independence: 0, stress: 0, outlook: 0 };
  dimensionMaxScores = { emotional: 0, responsibility: 0, social: 0, independence: 0, stress: 0, outlook: 0 };
  
  psychAgeQuestions.forEach(function(question, index) {
    var answerIndex = answers[question.id];
    if (answerIndex !== undefined) {
      var score = question.options[answerIndex].score;
      totalScore += score;
      
      var dim = questionDimensions[index];
      dimensionScores[dim] += score;
      dimensionMaxScores[dim] += 2;
    }
  });
}

function getPsychAge() {
  var range = null;
  for (var i = 0; i < psychAgeRanges.length; i++) {
    if (totalScore >= psychAgeRanges[i].min && totalScore <= psychAgeRanges[i].max) {
      range = psychAgeRanges[i];
      break;
    }
  }
  
  if (!range) {
    range = totalScore < psychAgeRanges[0].min ? psychAgeRanges[0] : psychAgeRanges[psychAgeRanges.length - 1];
  }
  
  return range;
}

function getBarPosition() {
  var minScore = 0;
  var maxScore = 60;
  var percent = ((totalScore - minScore) / (maxScore - minScore)) * 100;
  return Math.max(0, Math.min(100, percent));
}

function getDimensionPercent(dim) {
  if (dimensionMaxScores[dim] === 0) return 50;
  return Math.round((dimensionScores[dim] / dimensionMaxScores[dim]) * 100);
}

function getDimensionLevel(percent) {
  if (percent < 40) return { level: "较低", color: "#ef4444" };
  if (percent < 60) return { level: "中等", color: "#f59e0b" };
  if (percent < 80) return { level: "良好", color: "#10b981" };
  return { level: "优秀", color: "#6366f1" };
}

function getAdvice(range) {
  var advice = [];
  
  if (range.age < 20) {
    advice.push("多阅读、多思考，拓宽视野");
    advice.push("学会控制情绪，培养耐心");
    advice.push("主动承担责任，从小事做起");
    advice.push("多与不同的人交流，学习社交技巧");
  } else if (range.age < 28) {
    advice.push("继续培养独立思考能力");
    advice.push("设定明确的人生目标");
    advice.push("学会平衡工作和生活");
    advice.push("保持学习，不断提升自己");
  } else if (range.age < 35) {
    advice.push("保持开放心态，接纳不同观点");
    advice.push("注重身心健康，保持良好习惯");
    advice.push("培养深度思考的能力");
    advice.push("帮助他人成长，分享经验");
  } else {
    advice.push("继续保持智慧和平和的心态");
    advice.push("将经验传承给年轻人");
    advice.push("保持好奇心，持续学习");
    advice.push("关注内心，追求精神成长");
  }
  
  return advice;
}

function showResults() {
  document.getElementById('test-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');
  
  var range = getPsychAge();
  var difference = range.age - actualAge;
  var diffText = '';
  
  if (difference > 0) {
    diffText = '你的心理年龄比实际年龄大' + difference + '岁';
  } else if (difference < 0) {
    diffText = '你的心理年龄比实际年龄小' + Math.abs(difference) + '岁';
  } else {
    diffText = '你的心理年龄与实际年龄相符';
  }
  
  document.getElementById('actual-age-display').textContent = actualAge;
  document.getElementById('psych-age-display').textContent = range.age;
  document.getElementById('age-difference').textContent = diffText;
  document.getElementById('age-label-text').textContent = range.label;
  document.getElementById('result-description').textContent = range.description;
  
  var barPosition = getBarPosition();
  document.getElementById('age-bar-fill').style.width = barPosition + '%';
  document.getElementById('age-bar-marker').style.left = barPosition + '%';
  
  var dimensionsDetail = document.getElementById('dimensions-detail');
  var dims = ['emotional', 'responsibility', 'social', 'independence', 'stress', 'outlook'];
  var dimIcons = [' ', ' ', ' ', ' ', ' ', ' '];
  
  dimensionsDetail.innerHTML = dims.map(function(dim, i) {
    var percent = getDimensionPercent(dim);
    var levelInfo = getDimensionLevel(percent);
    return '<div class="dimension-item">' +
      '<div class="dimension-header">' +
        '<div class="dimension-label">' +
          '<span class="dimension-icon">' + dimIcons[i] + '</span>' +
          '<span>' + dimensionNames[dim] + '</span>' +
        '</div>' +
        '<span class="dimension-score" style="color: ' + levelInfo.color + '">' + percent + '% <small>' + levelInfo.level + '</small></span>' +
      '</div>' +
      '<div class="dimension-bar-container">' +
        '<div class="dimension-bar" style="width: ' + percent + '%; background: ' + levelInfo.color + '"></div>' +
      '</div>' +
    '</div>';
  }).join('');
  
  var adviceList = document.getElementById('advice-list');
  var advice = getAdvice(range);
  adviceList.innerHTML = advice.map(function(a) { return '<li>' + a + '</li>'; }).join('');
  
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
  var range = getPsychAge();
  var difference = range.age - actualAge;
  var diffText = '';
  
  if (difference > 0) {
    diffText = '比实际年龄大' + difference + '岁';
  } else if (difference < 0) {
    diffText = '比实际年龄小' + Math.abs(difference) + '岁';
  } else {
    diffText = '与实际年龄相符';
  }
  
  var shareText = '我的心理年龄测试结果：\n实际年龄：' + actualAge + '岁\n心理年龄：' + range.age + '岁\n' + diffText + '\n\n' + range.description.substring(0, 80) + '...\n\n快来测测你的心理年龄吧！';
  
  if (navigator.share) {
    navigator.share({
      title: '心理年龄测试结果',
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