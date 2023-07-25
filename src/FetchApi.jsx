const pokemonResult = async (name) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
          return data.json();
        })
        if(response){
          return response;
        }
    } catch (error) {
      // console.log(error)
    }
}

export default pokemonResult;