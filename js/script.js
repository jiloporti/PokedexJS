const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

const body = document.querySelector("body");
const buttonGrass = document.querySelector('.btn-grass');
const buttonFairy = document.querySelector('.btn-fairy');
const buttonPsychic = document.querySelector('.btn-psychic');

const typeData = document.querySelector('.tipo1');
const typeData2 = document.querySelector('.tipo2');

let searchPokemon = 63;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
    
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading...";

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        // utilizar [] para fazer o caminho pq usando o . ele não entende os outros sinais.
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        searchPokemon = data.id;
        input.value = "";

        typeData.innerHTML = data['types']['0']['type']['name'];
        
        var tipo = data['types'];
        for(var i = 0; i < tipo.length; i++){
            if(i >= 1){
                typeData2.innerHTML = data['types']['1']['type']['name'];
            }else{
                typeData2.innerHTML = "";
            }
        }

        console.log(data);
    }else{
        pokemonName.innerHTML = "Não encontrado :c";
        pokemonNumber.innerHTML = "";
        pokemonImage.style.display = 'none';
    }
    
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener('click', () => {

    if(searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
    
});

buttonNext.addEventListener('click', () => {

    searchPokemon += 1;
    renderPokemon(searchPokemon);

});

renderPokemon(searchPokemon);

buttonGrass.addEventListener('click', () => {

    body.style.background = "linear-gradient(to bottom, #6af5bb, #fff)";
    
}); 

buttonFairy.addEventListener('click', () => {

    body.style.background = "linear-gradient(to bottom, #ffcce6, #fff)";
    
}); 

buttonPsychic.addEventListener('click', () => {

    body.style.background = "linear-gradient(to bottom, #ffb3b3, #fff)";
    
}); 