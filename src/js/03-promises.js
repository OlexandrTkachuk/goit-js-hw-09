import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const delay = +refs.delay.value;
  const step = +refs.step.value;
  const amount = +refs.amount.value;

  for (let i = 1; i < amount; i++) {
    const delayStep = +(delay + step * (i - 1));

    createPromise(i, delayStep).then(onSuccess).catch(onError);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });

  return promise;
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
