const inputProgress = document.getElementById('progress');
const inputAnimated = document.getElementById('animate');
const inputHide = document.getElementById('hide');
const progressCircle = document.getElementById('progressCircle');
const progressBar = document.getElementById('svg');

const circleLength = 283;
const STEP = circleLength / 100;

function setProgress(value) {
  progressCircle.style.strokeDashoffset = circleLength - (value * STEP);
}

inputProgress.addEventListener('input',  () => {
  const value = Number(inputProgress.value);
  setProgress(value);
});

inputAnimated.addEventListener('change', () => {
  if (inputAnimated.checked) {
    progressCircle.classList.add('animated');
    progressBar.classList.add('animatedSVG');
  } else {
    progressCircle.classList.remove('animated');
    progressBar.classList.remove('animatedSVG');
  }
});

inputHide.addEventListener('change', () => {
  if (inputHide.checked) {
    progressBar.style.display = 'none';
  } else {
    progressBar.style.display = 'block';
  }
});

setProgress(inputProgress.value);
