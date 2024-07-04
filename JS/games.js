
 class Games{
constructor(){
    this.gamesData = [];
}
 async getGames(category){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c154076507mshea9941e2f4a53bcp1c9b98jsn5e127bee7375',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
   

}

try {
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    this.gamesData = await api.json();
   
} catch (error) {
    console.error('Error fetching the games:', error);
}

 
 
};
getGamesData() {
    return this.gamesData;
}

}


 export let getGame = new Games ();
