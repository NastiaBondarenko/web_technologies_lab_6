class Person{
    constructor(result){

        this.image = result.picture.large;
        this.cell = result.cell;
        this.city = result.location.city;
        this.country = result.location.country;
        this.postcode = result.location.postcode;
    }
}


async function getInformAboutPerson(){
    let promise = await fetch('https://randomuser.me/api');
    let json = await promise.json();
    let person = new Person(json.results[0]);
    return person;
}


async function showPeorson(){
    let person = await getInformAboutPerson();
    let personBlock = document.createElement('div');
    personBlock.className = "personDiv";

    let image = document.createElement('img');
    image.src = person.image;
    personBlock.append(image);

    let cell = document.createElement('p');
    cell.innerHTML = "Cell: " +person.cell;  
    personBlock.append(cell);

    let city = document.createElement('p');
    city.innerHTML = "City: " + person.city;    
    personBlock.append(city);

    let country = document.createElement('p');
    country.innerHTML = "Country: " + person.country;    
    personBlock.append(country);

    let postcode = document.createElement('p');
    postcode.innerHTML = "PostCode :"+ person.postcode;    
    personBlock.append(postcode);

    blockForPeople.append(personBlock);
}

async function generatePerson(num){
    for(let i = 0; i < num; i++){
        showPeorson();
    }
}
