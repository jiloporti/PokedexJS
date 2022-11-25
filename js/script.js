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
        pokemonImage.src = data['sprites']['front_default'];
        searchPokemon = data.id;
        input.value = "";

        typeData.innerHTML = data['types']['0']['type']['name'];
        
        var tipo = data['types'];
        for(var i = 0; i < tipo.length; i++){
            if(i >= 1){
                typeData2.innerHTML = data['types']['1']['type']['name'];
                var tipoInfo2 = data['types']['1']['type']['name'];
                typeData2.style.display = "block";
                
            }else{
                typeData2.innerHTML = "";
                typeData2.style.display = "none";
            }
        }

        // com certeza tem um jeito mais fácil de fazer isso
        var tipoInfo = data['types']['0']['type']['name'];
        if(tipoInfo == "bug"){
            typeData.style.background = "#90C12D";
        }else if(tipoInfo == "dark"){
            typeData.style.background = "#5B5568";
        }else if(tipoInfo == "dragon"){
            typeData.style.background = "#0B6DC3";
        }else if(tipoInfo == "electric"){
            typeData.style.background = "#F4D23C";
        }else if(tipoInfo == "fairy"){
            typeData.style.background = "#ED95E1";
        }else if(tipoInfo == "fighting"){
            typeData.style.background = "#CE416B";
        }else if(tipoInfo == "fire"){
            typeData.style.background = "#FF9D55";
        }else if(tipoInfo == "flying"){
            typeData.style.background = "#CCDFFF";
        }else if(tipoInfo == "ghost"){
            typeData.style.background = "#5269AD";
        }else if(tipoInfo == "grass"){
            typeData.style.background = "#5EBC61";
        }else if(tipoInfo == "ground"){
            typeData.style.background = "#D97845";
        }else if(tipoInfo == "ice"){
            typeData.style.background = "#89AAE3";
        }else if(tipoInfo == "normal"){
            typeData.style.background = "#919aa2";
        }else if(tipoInfo == "poison"){
            typeData.style.background = "#B567CE";
        }else if(tipoInfo == "psychic"){
            typeData.style.background = "#FB8785";
        }else if(tipoInfo == "rock"){
            typeData.style.background = "#F2E4B7";
        }else if(tipoInfo == "steel"){
            typeData.style.background = "#B4DBE9";
        }else if(tipoInfo == "water"){
            typeData.style.background = "#5090D6";
        }
        // com certeza mesmo tem um jeito mais fácil de fazer isso, mas eu não pensei ainda.
        if(tipoInfo2 == "bug"){
            typeData2.style.background = "#90C12D";
        }else if(tipoInfo2 == "dark"){
            typeData2.style.background = "#5B5568";
        }else if(tipoInfo2 == "dragon"){
            typeData2.style.background = "#0B6DC3";
        }else if(tipoInfo2 == "electric"){
            typeData2.style.background = "#F4D23C";
        }else if(tipoInfo2 == "fairy"){
            typeData2.style.background = "#ED95E1";
        }else if(tipoInfo2 == "fighting"){
            typeData2.style.background = "#CE416B";
        }else if(tipoInfo2 == "fire"){
            typeData2.style.background = "#FF9D55";
        }else if(tipoInfo2 == "flying"){
            typeData2.style.background = "#CCDFFF";
        }else if(tipoInfo2 == "ghost"){
            typeData2.style.background = "#5269AD";
        }else if(tipoInfo2 == "grass"){
            typeData2.style.background = "#5EBC61";
        }else if(tipoInfo2 == "ground"){
            typeData2.style.background = "#D97845";
        }else if(tipoInfo2 == "ice"){
            typeData2.style.background = "#89AAE3";
        }else if(tipoInfo2 == "normal"){
            typeData2.style.background = "#919aa2";
        }else if(tipoInfo2 == "poison"){
            typeData2.style.background = "#B567CE";
        }else if(tipoInfo2 == "psychic"){
            typeData2.style.background = "#FB8785";
        }else if(tipoInfo2 == "rock"){
            typeData2.style.background = "#F2E4B7";
        }else if(tipoInfo2 == "steel"){
            typeData2.style.background = "#B4DBE9";
        }else if(tipoInfo2 == "water"){
            typeData2.style.background = "#5090D6";
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