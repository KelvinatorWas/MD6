const buttons = document.querySelectorAll('.btn-class');
const rects = document.querySelectorAll('.rect');
const colorsRect = ['#1FC2AE', '#5C0187B5', '#8711018F', '#01870E', '#E2CF22', '#011E87', '#18D5E1'];
let id = 0;

let countSix = 0;
let clearSixID: ReturnType<typeof setInterval>;

let countFive = 0;
let clearFiveID: ReturnType<typeof setInterval>;

// could do a lot of improvements but im in a rush.
const countTo = () => {
  clearSixID = setInterval(() => {
    const countRect = document.getElementById('rect-count');
    if (countRect) {
      countRect.textContent = countSix.toString();
      if (countSix >= 10) {
        clearInterval(clearSixID);
      } else {
        countSix += 1;
      }
    }
  }, 3000);
};

const countTo5 = () => {
  clearFiveID = setInterval(() => {
    const countRect = document.getElementById('rect-5');
    if (countRect) {
      countRect.textContent = countFive.toString();
      if (countFive >= 10) {
        clearInterval(clearFiveID);
      } else {
        countFive += 1;
      }
    }
  }, 500);
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetRectId = button.getAttribute('data-target');
    if (targetRectId !== null) {
      const targetRect = document.getElementById(targetRectId);

      if (targetRect.id === 'rect-1') targetRect.style.backgroundColor = 'yellow';
      if (targetRect.id === 'rect-2') targetRect.textContent = 'SUCCESS';
      if (targetRect.id === 'rect-3') targetRect.style.backgroundColor = 'transparent';
      if (targetRect.id === 'rect-4') {
        const mainColor = '#1FC2AE';
        targetRect.style.backgroundColor = targetRect.style.backgroundColor === 'transparent' ? mainColor : 'transparent';
      }
      if (targetRect.id === 'rect-5') {
        id = id < colorsRect.length - 1 ? id + 1 : 0;
        targetRect.style.backgroundColor = colorsRect[id];
      }
      if (targetRect.id === 'rect-count') {
        clearInterval(clearSixID);
        countSix = 0;
        countTo();
      }
    }
    if (button.id === 'all-rects') {
      rects.forEach((rect) => {
        const r = document.getElementById(rect.id);
        r.style.backgroundColor = '#18D5E1';
        document.body.style.backgroundColor = '#000';
      });
    }
  });
});

rects.forEach((rect) => {
  rect.addEventListener('mouseenter', () => {
    const targetRectId = rect.id;
    const targetRect = document.getElementById(targetRectId);

    if (targetRect.id === 'rect-1') targetRect.style.backgroundColor = 'red';
    if (targetRect.id === 'rect-5') {
      clearInterval(clearFiveID);
      countTo5();
    }
  });
});

const rectFive = document.getElementById('rect-5');

rectFive.addEventListener('mouseleave', () => {
  clearInterval(clearFiveID);
  countFive = 0;
  rectFive.textContent = '0';
});

const inputBox = document.getElementById('input-box') as HTMLInputElement;
const outBox = document.getElementById('out-box');

if (inputBox && outBox) {
  inputBox.addEventListener('input', () => {
    inputBox.style.color = 'transparent';
    outBox.textContent = inputBox.value;
  });
}
