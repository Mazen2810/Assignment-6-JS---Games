import { newDisplay } from './ui.js'
import { getGame } from './games.js'
import { newDetails } from './details.js'

class index {

    constructor() {
        this.init();
        
    }
    async init() {
        await this.forGames();
         this.forDetails();
    }
    async forGames() {
        await getGame.getGames('mmorpg')
        newDisplay.displayGames()
        
        let category = document.querySelectorAll('.nav-link')
        category.forEach(game => game.addEventListener('click', async(e) => {
            await getGame.getGames(e.target.textContent.toLowerCase())
            newDisplay.displayGames()
         this.forDetails();


        }))
    }
    async forDetails() {
        let detail = document.querySelectorAll('[id-data]')
        detail.forEach(details => details.addEventListener('click', async (e) => {
            const id = details.getAttribute('id-data');
            document.getElementById('details').innerHTML = '' ; // For the loading between the elements
            await newDetails.getDetails(id);
            const finalGameDetail = newDetails.getGamesDetails()
            newDisplay.displayDetails(finalGameDetail);
        }))
    }
}
let newIndex = new index();



