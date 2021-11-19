function popularPaginaInicial()
{
  const listaQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")

  listaQuizzes.then((listaQuizzes) => 
  {
    const todosOsQuizzes = document.querySelector(".todos-os-quizzes")

    for (let i = 0 ; i < listaQuizzes.data.length ; i++)
    {
      todosOsQuizzes.innerHTML += 
      `
        <div class="quizz" style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${new URL(listaQuizzes.data[i].image)})">
          <span>${listaQuizzes.data[i].title}</span>
        </div>
      `;
    }
  })

  listaQuizzes.catch(() => {alert("deu ruim patrão")})
}

popularPaginaInicial();