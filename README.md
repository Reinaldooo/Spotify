<p  align="center">
<img  height="200px"  src="./img/js.svg">
</p>

<p  align="center">
Aplicativo baseado no Spotify utilizando a Web API
</p> 

### O projeto foi criado em JavaScript utilizando as seguintes ferramentas:

* ReactJS utilizando hooks
* React Router
* Redux
* Redux Persist
* Spotify Web API

### Processo de login

Para o processo de login é utilizado o processo 'Implicit Grant Flow', dessa forma o app solicita a permissão do usuário e em caso de sucesso 
um token é recebido e utilizado em todas as requisições à API.

![implicit flow](/img/implicit.png)
  
### Rodar o projeto

* Para rodar a versão hospedada, clique [aqui](https://pixcatalog.herokuapp.com/).
* Guest uploads will be erased after 30 seconds.

##### To load it in your local machine:

* `Python 3` is required to run this app locally, you can get it [here](https://www.python.org/).
* `npm` is also needed, you can install it with NodeJS. [Download](https://nodejs.org/en/).
* Download or clone this repo using `git clone https://github.com/Reinaldooo/Pixcatalog.git` on a new terminal window.
* Enter the folder with `cd Pixcatalog`.
* Install the dependencies with `pip install -r requirements.txt`.
* In case you have any errors, you can try `sudo pip install -r requirements.txt`.
* Now you can install the frontend dependencies using `npm run custom-build`.
* To setup the database, execute `npm run database-setup`.
* Finally, you can use the command `python server.py` to start the server.
* You case you have any errors, try using `python3 server.py`.
* The app will be running on ```localhost:5000```

### API

PixCatalog exposes two endpoints, `api/top_categories` and `api/categories`

#### https://pixcatalog.herokuapp.com/api/categories

* Sample response

```
{
  "categories": [
    {
      "id": 1,
      "images_total": 9,
      "title": "car"
    },
    {
      "id": 2,
      "images_total": 7,
      "title": "motorcicle"
    }]
}
```

#### https://pixcatalog.herokuapp.com/api/top_categories

* Sample response

```
[
  [
    12, // Number of images
    "travel", // Title
    6 // Id
  ]
]
```