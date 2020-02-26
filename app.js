
const correctAnswers = ['A', 'B', 'B', 'A'];

const form = document.querySelector('.quiz-form');

const quizScore = document.querySelector('.quiz-score');

const result = document.querySelector('.result');

form.addEventListener('submit', e => {
	e.preventDefault();

	let score = 0;

	const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

	// check answers

	userAnswers.forEach((answer, index) => {

		if ( answer === correctAnswers[index] ) {
			score += 25;
		}

	});

	// console.log(score);

	//show result on page

	scrollTo(0, 0);
	quizScore.textContent = score;
	// result.style.display = 'block';
	result.classList.remove('d-none');
	result.classList.add('d-block');

	let output = 0;

	const timer = setInterval(() => {
		quizScore.textContent = output;

		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}

	}, 10);
});