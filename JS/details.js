
class details {
    constructor() {
        this.gamesDetails = [];
    }
    async getDetails(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c154076507mshea9941e2f4a53bcp1c9b98jsn5e127bee7375',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }


        }
        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
            this.gamesDetails = await api.json();
           
        } catch (error) {
            console.error('Error fetching the games:', error);
        }

    };
    getGamesDetails() {
        return this.gamesDetails;
    }
}
export let newDetails = new details();
