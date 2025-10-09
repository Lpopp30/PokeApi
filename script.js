
let i = 1;
let pokeLoop = true;

Pokemons();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData() {
    do
{
    
try {
    
    //const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);

    if (!response.ok)
    {
        throw new Error("Kunne ikke hente pokemonen");
    }

    let b = i%3+1;
    

    const data = await response.json();
    console.log(data);
    document.getElementById(`${b}namePokemon`).innerText = `${data.name}`;
    document.getElementById(`${b}idPokemon`).innerText = `NO. 00${data.id}`;
    document.getElementById(`${b}HTPokemon`).innerText = `HT: ${data.height}`;
    document.getElementById(`${b}WTPokemon`).innerText = `WT: ${data.weight} lbs.`;
    document.getElementById(`${b}hpPokemon`).innerText = `HP - ${data.stats[0].base_stat}`;
    document.getElementById(`${b}attackPokemon`).innerText = `Attack - ${data.stats[1].base_stat}`;
    document.getElementById(`${b}defensePokemon`).innerText = `Defense - ${data.stats[2].base_stat}`;
    document.getElementById(`${b}specialAPokemon`).innerText = `special-Attack - ${data.stats[3].base_stat}`;
    document.getElementById(`${b}specialDPokemon`).innerText = `special-Defense - ${data.stats[4].base_stat}`;
    document.getElementById(`${b}speedPokemon`).innerText = `Speed - ${data.stats[5].base_stat}`;
    const types = data.types;
    if (types.length == 2)
    {
        
        document.getElementById(`${b}typePokemon`).innerText = `Type - ${data.types[0].type.name} / ${data.types[1].type.name}`;
        document.getElementById(`${b}typeSymbol`).src = await typeSymbol(data.types[0].type.name);
        const Symbol2 = document.getElementById(`${b}2typeSymbol`);
        Symbol2.src = await typeSymbol(data.types[1].type.name);
        Symbol2.style.display = "block";
    }
    else 
    {
        document.getElementById(`${b}typePokemon`).innerText = `Type - ${data.types[0].type.name}`;
        document.getElementById(`${b}typeSymbol`).src = await typeSymbol(data.types[0].type.name);
    }
    

    let imageUrl = data.sprites.front_default;
    // Set the image source
    document.getElementById(`${b}pokemonImage`).src = imageUrl;
} catch (error) {
    console.error(error);
}
i++;
}
while (i <= 3)
}

async function sliding(){
    const row = document.getElementById("row");

    const pokeCard = document.createElement("div");
    pokeCard.classList.add("pokemoncard1")
    row.appendChild(pokeCard);

    const heading = document .createElement("h3");
    heading.classList.add("heading")

    const pokecardh3 = document.createElement("span");
    pokecardh3.classList.add("PokeName")
    heading.appendChild(pokecardh3);

    const pokeCardHp= document.createElement("span");
    heading.appendChild(pokeCardHp);

    const pokeCardTypeSymbol= document.createElement("img");
    pokeCardTypeSymbol.setAttribute('alt', 'Symbol Image');
    pokeCardTypeSymbol.classList.add("types")
    heading.appendChild(pokeCardTypeSymbol);

    const pokeCardTypeSymbol2 = document.createElement("img");
    pokeCardTypeSymbol2.setAttribute('alt', 'Symbol Image');
    pokeCardTypeSymbol2.classList.add("types2")
    heading.appendChild(pokeCardTypeSymbol2);

    pokeCard.appendChild(heading);

    const pokeCardImg= document.createElement("img");
    pokeCardImg.setAttribute('alt', 'Pokemon Image');
    pokeCardImg.classList.add("sprites")
    pokeCard.appendChild(pokeCardImg);

    const infoBar = document.createElement("div");
    infoBar.classList.add("infoBar")

    const pokeCardId = document.createElement("span");
    infoBar.appendChild(pokeCardId);

    const pokeCardHT = document.createElement("span");
    infoBar.appendChild(pokeCardHT);

    const pokeCardWT = document.createElement("span");
    infoBar.appendChild(pokeCardWT);

    pokeCard.appendChild(infoBar);

    const pokeCardAttack= document.createElement("p");
    pokeCard.appendChild(pokeCardAttack);
    
    const pokeCardDefense= document.createElement("p");
    pokeCard.appendChild(pokeCardDefense);

    const pokeCardSpAttack= document.createElement("p");
    pokeCard.appendChild(pokeCardSpAttack);

    const pokeCardSpDefense= document.createElement("p");
    pokeCard.appendChild(pokeCardSpDefense);

    const pokeCardSpeed= document.createElement("p");
    pokeCard.appendChild(pokeCardSpeed);

    const pokeCardtype= document.createElement("p");
    pokeCard.appendChild(pokeCardtype);

    try {
    
    //const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);

    if (!response.ok)
    {
        throw new Error("Kunne ikke hente pokemonen");
    }
    
    
    let slide = i - 3;
    slide = slide * 33.333333333333333333333333333333334;
    if (i >= 27)
    {
        slide += 1.5;
        if (i >= 37)
        {
            slide += 1.5;
            if (i >= 47)
            {
                slide += 1;
                if (i >= 60)
                {
                    slide += 1.5;
                    if (i >= 75)
                    {
                    slide += 1.5;
                    if (i >= 90)
                    {
                        slide += 1.5;
                        if (i >=105)
                        {
                            slide += 1.5;
                        }
                    }
                    }
                }
            }
        }
    }
    row.style.transform = `translateX(-${slide}vw)`;
    pokeCard.style.display = "block";
    

    const data = await response.json();
    pokecardh3.innerText = `${data.name}`;
    pokeCardHT.innerText = `  HT: ${data.height} `;
    pokeCardWT.innerText = `  WT: ${data.weight} lbs.`;
    pokeCardHp.innerText = `  HP - ${data.stats[0].base_stat}`;
    pokeCardAttack.innerText = `Attack - ${data.stats[1].base_stat}`;
    pokeCardDefense.innerText = `Defense - ${data.stats[2].base_stat}`;
    pokeCardSpAttack.innerText = `special-Attack - ${data.stats[3].base_stat}`;
    pokeCardSpDefense.innerText = `special-Defense - ${data.stats[4].base_stat}`;
    pokeCardSpeed.innerText = `Speed - ${data.stats[5].base_stat}`;
    let imageUrl = data.sprites.front_default;
    // Set the image source
    pokeCardImg.src = imageUrl;
    if (data.id <= 9)
    {
        pokeCardId.innerText = `NO. 00${data.id} `;
    }
    else if (10 <= data.id && data.id <= 99)
    {
        pokeCardId.innerText = `NO. 0${data.id} `;
    }
    else
    {
        pokeCardId.innerText = `NO. ${data.id} `;
    }

    if (data.types.length == 2)
    {
        pokeCardTypeSymbol2.style.display = "block";
        pokeCardtype.innerText = `Type - ${data.types[0].type.name} / ${data.types[1].type.name}`;
        pokeCardTypeSymbol.src = await typeSymbol(data.types[0].type.name, 0);
        pokeCardTypeSymbol2.src = await typeSymbol(data.types[1].type.name, 0);
        if (pokecardh3.innerText.length <= 8)
        {
            pokecardh3.style.paddingRight = "42%";
        }
        else if (pokecardh3.innerText.length <= 12)
        {
            pokecardh3.style.paddingRight = "42%";
        }
    }
    else 
    {
        pokeCardtype.innerText = `Type - ${data.types[0].type.name}`;
        pokeCardTypeSymbol.src = await typeSymbol(data.types[0].type.name, 0);
        if (pokecardh3.innerText.length <= 8)
        {
            pokecardh3.style.paddingRight = "49%";
        }
        else if (pokecardh3.innerText.length <= 9)
        {
            pokecardh3.style.paddingRight = "49%";
        }
        else{
            pokecardh3.style.paddingRight = "40%";
        }
    }
    

    
} catch (error) {
    console.error(error);
}
i++;
}

async function Pokemons(){
fetchData();
do
{
await sleep(4000);
sliding();
}
while (i < 1302 && pokeLoop)
}

async function typeSymbol(type){

    switch(type)
    {
        case "bug":
        {
            let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;
            break;
        }
        case "dark":
        {
            let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/darkness_type_symbol_tcg_by_jormxdos_dfgddck-fullview.png?raw=true";
            return symbolUrl;
            break;
        }
        case "dragon":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "electric":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/            
           break;
        }
        case "fairy":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "fighting":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "fire":
        {
            let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/fire_type_symbol_galar_by_jormxdos_dffvl1m-pre.png?raw=true";
            return symbolUrl;
            break;
        }
        case "flying":
        {
            let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/flying_type_symbol_galar_by_jormxdos_dffvl6n-fullview.png?raw=true";
            return symbolUrl;
            break;
        }
        case "ghost":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "grass":
            let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/grass_type_symbol_tcg_by_jormxdos_dfgdda7-fullview.png?raw=true";
            return symbolUrl;
            break;
        
        case "ground":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "ice":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "normal":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "poison":
        {
            let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/poison_type_lvl_0_by_jormxdos_dh8zwty-pre.png?raw=true";
            return symbolUrl;
            break;
        }
        case "psychic":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "rock":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "steel":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
        case "water":
        {
            /*let symbolUrl = "https://github.com/Lpopp30/ApiPokemon/blob/main/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?raw=true";
            return symbolUrl;*/
            break;
        }
    }
}

async function login(){
    
    document.getElementById("login").style.display ="block";
    
    document.getElementById("start-buttons").style.opacity ="0.3";
    
    document.getElementById("row").style.opacity ="0.3";
    pokeLoop = false;
}

async function loginData(form){
    
    const username = form.userName.name;
    const password = form.password.name;

    let users = [];
    let passwords = [];
    let pokemons = [];
    users = ["Administrator", "Manager", "Cleric", "Scribe"];
    passwords = ["Password01", "Password", "Admin", "P@ssword"];
    pokemons = [
        [2,18,30],
        [6,15,34],
        [8,22,38],
        [12,25,40]
    ];

    if(form.submitter.name == "Login"){
        if (users.includes(username)){
            if (passwords.includes(password)&& users.indexOf(username) == passwords.indexOf(password)){
                document.getElementById("users").style.display ="block";
                document.getElementById("yourPokemons").innerText =`${pokemons[passwords.indexOf(password)]}`;
            }
            else{
                alert("Your password is incorrect. Please try again.")
            }
        }
        else {
            alert("Your username is incorrect. Please try again.")
        }
    }

}