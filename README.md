<p  align="center">
<img  height="200px"  src="./img/js.svg">
</p>

<p  align="center">
Aplicativo de músicas utilizando a Web API do Spotify
</p>

<p  align="center">
Devido à limitações da API, apenas uma preview das músicas é reproduzido
</p> 

#### O projeto foi criado em JavaScript utilizando as seguintes ferramentas:

* ReactJS
* React Router
* Redux
* Redux Persist
* Spotify Web API

#### Processo de login

Para o processo de login é utilizado o processo 'Implicit Grant Flow', dessa forma o app solicita a permissão do usuário e em caso de sucesso 
um token é recebido e utilizado em todas as requisições à API.

![implicit flow](/img/implicit.png)
  
##### Rodar o projeto

* Para rodar a versão hospedada, clique [aqui](https://spotify-reinaldo.netlify.app/).

##### Para rodar na sua máquina:

* Caso ainda não possua o `npm`, a forma mais fácil de obtê-lo é instalando o [NodeJS](https://nodejs.org/en/download/)
* O `git` também é necessário, você pode baixá-lo [aqui](https://git-scm.com/)
* Faça o Download ou clone o repo usando `git clone https://github.com/Reinaldooo/Spotify.git` em uma janela de terminal
* Entre na pasta com `cd Spotify`
* Instale as dependências com `npm i`
* Para iniciar o servidor local, use `npm start`
* O app abrirá automaticamente no seu navegador utilizando a porta `3000`