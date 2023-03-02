const formAdd = document.querySelector('#formAdd');
const mainPage = document.querySelector('.mainPage');
const errorMessageNew = document.querySelector('.errorMessageNew');
const formEdit = document.querySelector('#formEdit');

if (formAdd) {
  formAdd.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { title, description, img } = event.target;
    const response = await fetch('/api/card', {
      method: 'post',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        img: img.value,
      }),
    });
    const responseJson = await response.json();

    if (responseJson.data) {
      mainPage.insertAdjacentHTML('beforeend', responseJson.html);
    } else {
      errorMessageNew.innerText = responseJson.error;
    }
  });
}

if (mainPage) {
  mainPage.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete')) {
      const { id } = event.target.dataset;
      console.log(id);
      const response = await fetch(`api/card/${id}`, {
        method: 'delete',
      });

      const responseJson = await response.json();
      console.log(responseJson);

      if (responseJson.deleted === 'true') {
        event.target.closest('.oneCard').remove();
      }
    }
  });
}

if (mainPage) {
  mainPage.addEventListener('click', async (event) => {
    if (event.target.classList.contains('edit')) {
      const { id } = event.target.dataset;
      window.location.assign(`/edit/${id}`);
    }
  });
}

if (formEdit) {
  formEdit.addEventListener('submit', async (event) => {
    event.preventDefault();
    const arrHref = window.location.href.split('/');
    const { title, description, img } = event.target;

    const response = await fetch(`/api/card/${arrHref[arrHref.length - 1]}`, {
      method: 'put',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        img: img.value,
      }),
    });
    const responseJson = await response.json();
    if (responseJson.song) {
      window.location.assign('/');
    } else {
      document.querySelector('.errorMessageEdit').innerText =
        responseJson.message;
    }
  });
}
