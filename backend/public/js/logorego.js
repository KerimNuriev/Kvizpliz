const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');
const errorMessage = document.querySelector('.errorMessage');
const errorMessageReg = document.querySelector('.errorMessageReg');

if (formLog) {
  formLog.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const response = await fetch('/auth', {
      method: 'post',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const responseJson = await response.json();

    if (responseJson.message === 'true') {
      window.location.assign('/');
    } else errorMessage.innerText = responseJson.message;
  });
}

if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password, name } = event.target;

    const response = await fetch('/registration', {
      method: 'post',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        name: name.value,
      }),
    });
    const responseJson = await response.json();

    if (responseJson.data) {
      window.location.assign('/');
    } else errorMessageReg.innerText = responseJson.message;
  });
}
