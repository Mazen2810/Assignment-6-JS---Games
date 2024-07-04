import { getGame } from './games.js'
class Display {
    constructor() {

    }
    displayGames() {
        let data = getGame.getGamesData()
        // let detail = document.querySelectorAll('[id-data]')
        // detail.forEach(details => details.addEventListener('click', async (e) => {
        //     let games = document.getElementById('games');
        //     let details = document.getElementById('details');
        //     games.classList.toggle('d-block')
        //     details.classList.toggle('d-block');
        // }));
        let gameDisp = ``;
        for (let i = 0; i < data.length; i++) {

            gameDisp += `
            <div class="col" >
                        <div  class="card p-3 h-100 " id-data="${data[i].id}">
                            <img src="${data[i].thumbnail}">
                            <div class="card-body">
                                <div class=" card-text d-flex justify-content-between">
                                    <h3>${data[i].title}</h3>
                                    <span class="badge text-bg-primary p-2">Free</span>
                                </div>
                                <p class="small text-center opacity-50 text-white">
                                ${((data[i].short_description.split(' ')).slice(0, 8)).join(' ')}
                                </p> 
                            </div>
                            <div class="card-footer d-flex justify-content-between small">
                                <span class="badge text-bg">${data[i].genre}</span>
                                <span class="badge text-bg">${data[i].platform}</span>
                            </div>
                        </div>
                         </div>
            
            
            
            `;

        }
        document.getElementById('gamesBody').innerHTML = gameDisp;
    }

    displayDetails(details) {
        document.getElementById('details').innerHTML = '';
        let detailsDisp = `

 <div class="container">
            <header class="d-flex justify-content-between">
                <h1>Details Game</h1>
                <button  class="btn-close btn-close-white"></button>
            </header>
            <div class="row">
                <div class="col-md-4">
                    <img src="${details.thumbnail}" alt="">
                </div>
                <div class="col-md-8">
                    <h3> Title: ${details.title}</h3>
                    <p>Category:
                        <span class="badge text-bg-info"> ${details.genre}</span>
                    </p>
                    <p>Platform:
                        <span class="badge text-bg-info"> ${details.platform}</span>
                    </p>
                    <p>Status:
                        <span class="badge text-bg-info"> ${details.live}</span>
                    </p>
                    <p class="small">${details.description}</p>
                        <a href="${details.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
                </div>
            </div>
        </div>

`
        document.getElementById('details').innerHTML = detailsDisp;

        // hide game and show details when clicked on a game
        let detail = document.querySelectorAll('[id-data]')
        detail.forEach(details => details.addEventListener('click', async (e) => {
            document.getElementById('games').classList.replace('d-block', 'd-none');
            document.getElementById('details').classList.replace('d-none', 'd-block');
        }));
        //hide details and show game when clicked on the close button
        let btnClose = document.querySelector('.btn-close');
        btnClose.addEventListener('click', async (e) => {
            document.getElementById('games').classList.replace('d-none', 'd-block');
            document.getElementById('details').classList.replace('d-block', 'd-none');
        });
    }

}




export let newDisplay = new Display()
