function getCookie(name) {
  let cookieValue = null;

  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');

    for (let c of cookies) {
      const cookie = $.trim(c);

      const keyPart = cookie.substring(0, name.length + 1);
      const valuePart = cookie.substring(name.length + 1);
      if (keyPart === (name + '=')) {
        cookieValue = decodeURIComponent(valuePart);
        break;
      }
    }
  }
  return cookieValue;
}


$(function () {

  let form = new FormData();
  const fileRef = $('#id_file_filed');
  const view = $('#show-file');

  // ファイル取得
  fileRef.on('change', function () {
    for (let file of $(this)[0].files) {
      form.append('file', file);
      view.append(`<p>${file.name}</p>`);
    }
  });

  // submit
  $('button').on('click', function () {

    console.log('submit');
    form.append('name', $('#id_name').val());
    form.append('message', $('#id_message').val());
    const csrftoken = getCookie('csrftoken');

    const axiosInstance = axios.create({
      baseURL: '/',
      timeout: 2000,
      headers: {'X-CSRFToken': csrftoken}
    });

    axiosInstance.post('/', form)
      .then(function (res) {
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      });

  });

});

