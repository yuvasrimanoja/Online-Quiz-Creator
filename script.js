const quizData = [
    {
      question: "What does HTML stand for?",
      a: " Hyper Text Markdown Language",
      b: "Home Tool Markup Language",
      c: "Hyper Text Markup Language",
      d: "Hyperlink and Text Mark Language",
      correct: "c"
    },
    {
      question: "Which company developed the Java programming language?",
      a: "Microsoft",
      b: " Sun Microsystems",
      c: "Google",
      d: "Oracle",
      correct: "b"
    },
    {
      question: "Which of the following is used to style web pages?",
      a: "HTML",
      b: "Python",
      c: "CSS",
      d: "MySQL",
      correct: "c"
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEls = document.querySelectorAll(".answer");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  const quiz = document.getElementById("quiz");
  const quizStatus = document.getElementById("quizStatus");
  
  function initStatus() {
    quizStatus.innerHTML = '';
    quizData.forEach((_, index) => {
      const box = document.createElement('div');
      box.className = 'status-box';
      box.id = `status-${index}`;
      box.textContent = index + 1;
      quizStatus.appendChild(box);
    });
  }
  
  function updateStatus(index) {
    const box = document.getElementById(`status-${index}`);
    if (box) {
      box.classList.add('active');
    }
  }
  
  function deselectAnswers() {
    answersEls.forEach(answer => answer.checked = false);
  }
  
  function getSelected() {
    let selected;
    answersEls.forEach(answer => {
      if (answer.checked) {
        selected = answer.id;
      }
    });
    return selected;
  }
  
  function loadQuiz() {
    deselectAnswers();
    const current = quizData[currentQuiz];
    questionEl.innerText = `${currentQuiz + 1}. ${current.question}`;
    a_text.innerText = current.a;
    b_text.innerText = current.b;
    c_text.innerText = current.c;
    d_text.innerText = current.d;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      updateStatus(currentQuiz);
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score} out of ${quizData.length} questions correctly!</h2>
          <button onclick="location.reload()">Play Again</button>
        `;
      }
    }
  });
  
  // Initialize everything
  initStatus();
  loadQuiz();
  