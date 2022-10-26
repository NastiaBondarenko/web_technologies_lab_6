async function showPeople(){
    let promise = await fetch('https://randomuser.me/api');
    let json = await promise.json();
    let blockForPeople = document.getElementById("blockForPeople");
    let image = document.createElement('img');
    image.src = json.results[0].picture.medium;
    blockForPeople.append(image);
    console.log(image);
}

// main();