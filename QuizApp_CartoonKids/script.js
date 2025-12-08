// ======= QUESTION BANK (20 per level = 60+) =======
const questionBank = {
  easy: [
    { q: "2 + 2 = ?", options: ["3", "4", "5", "22"], answer: 1 },
    { q: "5 - 3 = ?", options: ["1", "2", "3", "4"], answer: 1 },
    { q: "Which is a color?", options: ["Dog", "Blue", "Run", "Table"], answer: 1 },
    { q: "Sun rises in the?", options: ["North", "East", "West", "South"], answer: 1 },
    { q: "3 + 5 =", options: ["7", "8", "9", "6"], answer: 1 },
    { q: "10 - 7 =", options: ["2", "1", "3", "4"], answer: 2 },
    { q: "Which is an animal?", options: ["Rose", "Cat", "Chair", "Phone"], answer: 1 },
    { q: "Which is a fruit?", options: ["Potato", "Onion", "Apple", "Carrot"], answer: 2 },
    { q: "1 + 9 =", options: ["9", "10", "11", "8"], answer: 1 },
    { q: "2 × 3 =", options: ["5", "6", "7", "3"], answer: 1 },
    { q: "7 + 1 =", options: ["6", "7", "8", "9"], answer: 2 },
    { q: "9 - 4 =", options: ["3", "4", "5", "6"], answer: 2 },
    { q: "Which is a day of week?", options: ["Sun", "January", "Monday", "Year"], answer: 2 },
    { q: "How many days in a week?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "Which is bigger?", options: ["2", "5"], answer: 1 },
    { q: "6 + 2 =", options: ["7", "8", "9", "10"], answer: 1 },
    { q: "4 + 4 =", options: ["6", "7", "8", "9"], answer: 2 },
    { q: "Which is used to write?", options: ["Pen", "Ball", "Shoe", "Plate"], answer: 0 },
    { q: "Capital of India?", options: ["Delhi", "Mumbai", "Chennai", "Kolkata"], answer: 0 },
    { q: "Water freezes at?", options: ["0°C", "10°C", "20°C", "30°C"], answer: 0 },
  ],
  medium: [
    { q: "12 × 3 =", options: ["36", "24", "30", "42"], answer: 0 },
    { q: "Square of 5 =", options: ["20", "15", "25", "30"], answer: 2 },
    { q: "Which is a prime number?", options: ["9", "15", "11", "21"], answer: 2 },
    { q: "Capital of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: 1 },
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
    { q: "50 ÷ 5 =", options: ["5", "10", "15", "20"], answer: 1 },
    { q: "√81 =", options: ["7", "8", "9", "10"], answer: 2 },
    { q: "Largest ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: 0 },
    { q: "15% of 100 =", options: ["10", "15", "20", "25"], answer: 1 },
    { q: "Binary of 2 =", options: ["10", "11", "01", "00"], answer: 0 },
    { q: "Which is not a programming language?", options: ["Python", "Java", "HTML", "Tiger"], answer: 3 },
    { q: "Opposite of 'hot'?", options: ["Cool", "Warm", "Cold", "Heat"], answer: 2 },
    { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: 2 },
    { q: "24 ÷ 3 =", options: ["8", "7", "6", "9"], answer: 0 },
    { q: "Roman numeral for 10?", options: ["V", "X", "L", "C"], answer: 1 },
    { q: "Area of 5×4 rectangle =", options: ["9", "10", "20", "25"], answer: 2 },
    { q: "Who wrote 'Ramayana'?", options: ["Valmiki", "Tulsidas", "Kalidasa", "Kabir"], answer: 0 },
    { q: "Which is continent?", options: ["Asia", "India", "Mumbai", "Nile"], answer: 0 },
    { q: "Which one is a web browser?", options: ["Chrome", "Windows", "Android", "Intel"], answer: 0 },
    { q: "Speed = distance/time. If d=100km, t=2h, speed=", options: ["25", "50", "75", "100"], answer: 1 },
  ],
  hard: [
    { q: "√256 =", options: ["12", "14", "16", "18"], answer: 2 },
    { q: "Who proposed the theory of relativity?", options: ["Newton", "Einstein", "Bohr", "Tesla"], answer: 1 },
    { q: "Which is not OOP concept?", options: ["Encapsulation", "Polymorphism", "Recursion", "Inheritance"], answer: 2 },
    { q: "Time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: 1 },
    { q: "HTML stands for?", options: ["Hyper Type Markup Language", "Hyper Text Markup Language", "High Text Markup Language", "None"], answer: 1 },
    { q: "Which protocol is used for secure HTTP?", options: ["FTP", "SSH", "HTTPS", "SMTP"], answer: 2 },
    { q: "Derivative of x² =", options: ["x", "2x", "x²", "2"], answer: 1 },
    { q: "Binary of 15 =", options: ["1110", "1101", "1111", "1011"], answer: 2 },
    { q: "Which is not a sorting algorithm?", options: ["Bubble", "Merge", "Quick", "Crawler"], answer: 3 },
    { q: "Which layer in OSI handles routing?", options: ["Transport", "Network", "Physical", "Session"], answer: 1 },
    { q: "Which DB language is used to define schema?", options: ["DML", "DCL", "DDL", "TCL"], answer: 2 },
    { q: "In C++, 'new' allocates memory on the?", options: ["Stack", "Heap", "Register", "ROM"], answer: 1 },
    { q: "Primary key must be?", options: ["Nullable", "Unique", "Duplicate", "Text"], answer: 1 },
    { q: "Which search is better for large sorted arrays?", options: ["Linear", "Binary", "Random", "Hash"], answer: 1 },
    { q: "Which is not a NoSQL DB?", options: ["MongoDB", "MySQL", "Cassandra", "Redis"], answer: 1 },
    { q: "Which is not part of SDLC?", options: ["Testing", "Design", "Eating", "Deployment"], answer: 2 },
    { q: "IPV4 address length?", options: ["16 bits", "32 bits", "48 bits", "64 bits"], answer: 1 },
    { q: "Which algorithm is used in Dijkstra?", options: ["Greedy", "Divide & Conquer", "DP", "Backtracking"], answer: 0 },
    { q: "Stack follows?", options: ["FIFO", "LIFO", "LILO", "FILO"], answer: 1 },
    { q: "Which is not a valid HTTP method?", options: ["GET", "POST", "PUSH", "DELETE"], answer: 2 },
  ]
};

const LEADERBOARD_KEY = "quiz_leaderboard";
const TIMER_PER_QUESTION = 20; // seconds

let currentLevel = null;
let heroName = null;
let heroAvatar = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let wrongAnswers = [];
let timer = TIMER_PER_QUESTION;
let timerInterval = null;
let soundOn = true;

// ===== Utility: detect page =====
function getPage() {
  const path = window.location.pathname;
  if (path.endsWith("index.html") || path === "/" || path === "") return "home";
  if (path.endsWith("quiz.html")) return "quiz";
  if (path.endsWith("result.html")) return "result";
  return "";
}

// ===== Sound handling =====
function loadSoundPreference() {
  const stored = localStorage.getItem("soundOn");
  soundOn = stored === null ? true : stored === "true";
}

function setSoundPreference(on) {
  soundOn = on;
  localStorage.setItem("soundOn", on ? "true" : "false");
}

// ===== HOME PAGE =====
function initHome() {
  loadSoundPreference();

  const characterImages = document.querySelectorAll(".char-img");
  let selectedCharSrc = null;

  characterImages.forEach(img => {
    img.addEventListener("click", () => {
      characterImages.forEach(i => i.classList.remove("selected"));
      img.classList.add("selected");
      selectedCharSrc = img.getAttribute("src");
    });
  });

  const nameInput = document.getElementById("characterName");
  const nameError = document.getElementById("nameError");
  const charError = document.getElementById("charError");
  const levelButtons = document.querySelectorAll(".level-btn");
  const soundStatus = document.getElementById("soundStatus");

  soundStatus.textContent = soundOn ? "ON" : "OFF";
  soundStatus.classList.toggle("text-green-400", soundOn);
  soundStatus.classList.toggle("text-red-400", !soundOn);

  levelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = nameInput.value.trim();

      let hasError = false;
      if (!selectedCharSrc) {
        charError.classList.remove("hidden");
        hasError = true;
      } else {
        charError.classList.add("hidden");
      }

      if (!name) {
        nameError.classList.remove("hidden");
        hasError = true;
      } else {
        nameError.classList.add("hidden");
      }

      if (hasError) return;

      const level = btn.getAttribute("data-level");

      localStorage.setItem("characterName", name);
      localStorage.setItem("characterAvatar", selectedCharSrc);
      localStorage.setItem("level", level);

      window.location.href = "quiz.html";
    });
  });
}

// ===== QUIZ PAGE =====
function initQuiz() {
  loadSoundPreference();

  heroName = localStorage.getItem("characterName") || "Hero";
  heroAvatar = localStorage.getItem("characterAvatar") || "assets/boy.png";
  currentLevel = localStorage.getItem("level") || "easy";
  questions = questionBank[currentLevel] || questionBank.easy;

  const nameEl = document.getElementById("topPlayerName");
  const levelEl = document.getElementById("topLevel");
  const quizAvatar = document.getElementById("quizAvatar");
  const soundToggle = document.getElementById("soundToggle");
  const soundIcon = document.getElementById("soundIcon");
  const soundLabel = document.getElementById("soundLabel");

  if (nameEl) nameEl.textContent = heroName;
  if (levelEl) levelEl.textContent = currentLevel;
  if (quizAvatar) quizAvatar.src = heroAvatar;

  function updateSoundUI() {
    if (!soundToggle || !soundIcon || !soundLabel) return;
    soundIcon.textContent = soundOn ? "🔊" : "🔇";
    soundLabel.textContent = soundOn ? "Sound ON" : "Sound OFF";
    soundToggle.classList.toggle("bg-green-600", soundOn);
    soundToggle.classList.toggle("bg-white/10", !soundOn);
  }
  updateSoundUI();

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      setSoundPreference(!soundOn);
      updateSoundUI();
    });
  }

  currentIndex = 0;
  score = 0;
  wrongAnswers = [];
  startQuestion();
}

function startQuestion() {
  if (currentIndex >= questions.length) {
    finishQuiz();
    return;
  }

  const qObj = questions[currentIndex];
  const questionText = document.getElementById("questionText");
  const questionNumber = document.getElementById("questionNumber");
  const optionsContainer = document.getElementById("optionsContainer");
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");

  if (questionNumber) questionNumber.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  if (questionText) questionText.textContent = qObj.q;
  if (progressText) progressText.textContent = `${currentIndex + 1} / ${questions.length}`;

  const percent = (currentIndex / questions.length) * 100;
  if (progressBar) progressBar.style.width = `${percent}%`;

  if (optionsContainer) {
    optionsContainer.innerHTML = "";
    qObj.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className =
        "option-btn w-full text-left px-4 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-base md:text-lg";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleAnswer(index, btn));
      optionsContainer.appendChild(btn);
    });
  }

  startTimer();
}

function startTimer() {
  timer = TIMER_PER_QUESTION;
  updateTimerUI();

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer--;
    updateTimerUI();
    if (timer <= 0) {
      clearInterval(timerInterval);
      autoTimeOut();
    }
  }, 1000);
}

function updateTimerUI() {
  const timerText = document.getElementById("timerText");
  const timerCircle = document.getElementById("timerCircle");
  if (!timerText || !timerCircle) return;

  timerText.textContent = timer;
  timerCircle.classList.remove("border-pink-500", "border-yellow-400", "border-red-500");
  if (timer > TIMER_PER_QUESTION * 0.6) {
    timerCircle.classList.add("border-pink-500");
  } else if (timer > TIMER_PER_QUESTION * 0.3) {
    timerCircle.classList.add("border-yellow-400");
  } else {
    timerCircle.classList.add("border-red-500");
  }
}

function autoTimeOut() {
  const qObj = questions[currentIndex];
  wrongAnswers.push({
    q: qObj.q,
    correct: qObj.options[qObj.answer],
    reason: "Time up ⏳"
  });
  showEmoji("⏳");
  playSound("wrong");
  lockOptions();
  nextQuestion();
}

function handleAnswer(selectedIndex, btn) {
  if (timerInterval) clearInterval(timerInterval);

  const qObj = questions[currentIndex];
  const allBtns = document.querySelectorAll(".option-btn");

  allBtns.forEach(b => {
    b.disabled = true;
    b.classList.add("cursor-not-allowed");
  });

  const isCorrect = selectedIndex === qObj.answer;

  if (isCorrect) {
    score++;
    btn.classList.add("bg-green-600", "border-green-400", "text-white");
    showEmoji(randomCorrectEmoji());
    playSound("correct");
  } else {
    btn.classList.add("bg-red-600", "border-red-400", "text-white");
    if (allBtns[qObj.answer]) {
      allBtns[qObj.answer].classList.add("bg-green-600", "border-green-400", "text-white");
    }
    wrongAnswers.push({
      q: qObj.q,
      correct: qObj.options[qObj.answer],
      reason: "Wrong answer ❌"
    });
    showEmoji(randomWrongEmoji());
    playSound("wrong");
  }

  nextQuestion();
}

function lockOptions() {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => {
    b.disabled = true;
    b.classList.add("cursor-not-allowed");
  });
}

function nextQuestion() {
  setTimeout(() => {
    currentIndex++;
    startQuestion();
  }, 900);
}

// emoji effects
function showEmoji(emoji) {
  const feedback = document.getElementById("feedbackEmoji");
  if (!feedback) return;
  feedback.textContent = emoji;
  feedback.classList.remove("opacity-0", "scale-50");
  feedback.classList.add("opacity-100", "scale-100");
  setTimeout(() => {
    feedback.classList.add("opacity-0", "scale-50");
    feedback.classList.remove("opacity-100", "scale-100");
  }, 600);
}

function randomCorrectEmoji() {
  const list = ["🎉", "✅", "😍", "🔥", "👏"];
  return list[Math.floor(Math.random() * list.length)];
}
function randomWrongEmoji() {
  const list = ["😢", "❌", "💔", "😓", "😵"];
  return list[Math.floor(Math.random() * list.length)];
}

// play sounds
function playSound(type) {
  if (!soundOn) return;
  const correct = document.getElementById("correctSound");
  const wrong = document.getElementById("wrongSound");
  if (type === "correct" && correct) {
    correct.currentTime = 0;
    correct.play();
  } else if (type === "wrong" && wrong) {
    wrong.currentTime = 0;
    wrong.play();
  }
}

// finish quiz: save data and go result
function finishQuiz() {
  if (timerInterval) clearInterval(timerInterval);

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  localStorage.setItem("lastScore", score.toString());
  localStorage.setItem("lastTotal", total.toString());
  localStorage.setItem("lastWrong", JSON.stringify(wrongAnswers));
  localStorage.setItem("lastLevel", currentLevel);
  localStorage.setItem("lastPercentage", percentage.toString());
  localStorage.setItem("lastPlayerName", heroName);
  localStorage.setItem("lastAvatar", heroAvatar);

  saveToLeaderboard(heroName, heroAvatar, currentLevel, score, total, percentage);

  window.location.href = "result.html";
}

// ===== LEADERBOARD =====
function saveToLeaderboard(name, avatar, level, score, total, percentage) {
  const entry = {
    name,
    avatar,
    level,
    score,
    total,
    percentage,
    date: new Date().toLocaleString()
  };

  let list = [];
  try {
    list = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
  } catch {
    list = [];
  }

  list.push(entry);
  list.sort((a, b) => {
    if (b.score === a.score) return b.percentage - a.percentage;
    return b.score - a.score;
  });
  list = list.slice(0, 10);

  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(list));
}

function loadLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
  } catch {
    return [];
  }
}

// ===== RESULT PAGE =====
function initResult() {
  const score = parseInt(localStorage.getItem("lastScore") || "0", 10);
  const total = parseInt(localStorage.getItem("lastTotal") || "1", 10);
  const percentage = parseInt(localStorage.getItem("lastPercentage") || "0", 10);
  const level = localStorage.getItem("lastLevel") || "easy";
  const name = localStorage.getItem("lastPlayerName") || "Hero";
  const avatar = localStorage.getItem("lastAvatar") || "assets/boy.png";
  const wrong = JSON.parse(localStorage.getItem("lastWrong") || "[]");

  const scoreText = document.getElementById("scoreText");
  const percentageText = document.getElementById("percentageText");
  const gradeText = document.getElementById("gradeText");
  const emojiMessage = document.getElementById("emojiMessage");
  const correctCount = document.getElementById("correctCount");
  const wrongCount = document.getElementById("wrongCount");
  const wrongList = document.getElementById("wrongList");
  const resultPlayerName = document.getElementById("resultPlayerName");
  const resultLevel = document.getElementById("resultLevel");
  const resultAvatar = document.getElementById("resultAvatar");
  const leaderboardBody = document.getElementById("leaderboardBody");
  const clearBtn = document.getElementById("clearLeaderboard");

  if (resultPlayerName) resultPlayerName.textContent = name;
  if (resultLevel) resultLevel.textContent = level;
  if (resultAvatar) resultAvatar.src = avatar;

  if (scoreText) scoreText.textContent = `${score} / ${total}`;
  if (percentageText) percentageText.textContent = `${percentage}%`;

  let grade, emoji;
  if (percentage >= 90) {
    grade = "S";
    emoji = "🌟 Super Star!";
  } else if (percentage >= 80) {
    grade = "A";
    emoji = "🔥 Excellent!";
  } else if (percentage >= 70) {
    grade = "B";
    emoji = "👏 Great Job!";
  } else if (percentage >= 50) {
    grade = "C";
    emoji = "🙂 Good, keep going!";
  } else {
    grade = "D";
    emoji = "💪 Don't give up!";
  }

  if (gradeText) gradeText.textContent = grade;
  if (emojiMessage) emojiMessage.textContent = emoji;
  if (correctCount) correctCount.textContent = score;
  if (wrongCount) wrongCount.textContent = wrong.length;

  if (wrongList) {
    wrongList.innerHTML = "";
    if (wrong.length === 0) {
      wrongList.innerHTML = '<li class="text-green-400">Perfect! No wrong answers 🎉</li>';
    } else {
      wrong.forEach((item, idx) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="bg-red-900/40 border border-red-500/40 rounded-2xl p-3">
            <p class="font-semibold">Q${idx + 1}: ${item.q}</p>
            <p class="text-sm text-gray-300">Reason: ${item.reason || "Wrong"}</p>
            <p class="text-sm text-green-400 mt-1">Correct Answer: <span class="font-semibold">${item.correct}</span></p>
          </div>
        `;
        wrongList.appendChild(li);
      });
    }
  }

  const board = loadLeaderboard();
  if (leaderboardBody) {
    leaderboardBody.innerHTML = "";
    if (board.length === 0) {
      leaderboardBody.innerHTML = '<tr><td colspan="6" class="py-3 text-center text-gray-400">No entries yet. Play and set a record! 🏆</td></tr>';
    } else {
      board.forEach((entry, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="py-2 pr-4">${idx + 1}</td>
          <td class="py-2 pr-4">
            <div class="flex items-center gap-2">
              <img src="${entry.avatar}" class="w-6 h-6 rounded-full border bg-white object-cover" alt="Avatar">
              <span>${entry.name}</span>
            </div>
          </td>
          <td class="py-2 pr-4 capitalize">${entry.level}</td>
          <td class="py-2 pr-4">${entry.score}/${entry.total}</td>
          <td class="py-2 pr-4">${entry.percentage}%</td>
          <td class="py-2 pr-4 text-xs md:text-sm text-gray-300">${entry.date}</td>
        `;
        leaderboardBody.appendChild(tr);
      });
    }
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Clear all leaderboard data?")) {
        localStorage.removeItem(LEADERBOARD_KEY);
        window.location.reload();
      }
    });
  }
}

// ===== MAIN INIT =====
document.addEventListener("DOMContentLoaded", () => {
  const page = getPage();
  if (page === "home") initHome();
  if (page === "quiz") initQuiz();
  if (page === "result") initResult();
});
