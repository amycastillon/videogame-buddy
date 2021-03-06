// console.log('the page loaded...')
var button = d3.select("#submit_button")

let clickCount = 0;

// window.onstorage = () => {
//     console.log('storage updated!')
//     console.log(JSON.parse(window.localStorage.getItem('gameSuggestions')))
// }

suggestions = JSON.parse(window.localStorage.getItem('gameSuggestions'))

// console.log(suggestions);

box_labels = document.getElementsByClassName("form-check-label")


window.onload = (event) => {
    for(let i = 0; i < box_labels.length; i++) {
        // console.log('loop is starting')
        // console.log(suggestions[i])
        box_labels[i].innerHTML = suggestions[i]
        // console.log(box_labels[i])
    }
}


function handleClick() {
    localStorage.clear();
    console.log('click was made')
    
    let checks = document.getElementsByClassName("form-check-input");
    let check_labels = document.getElementsByClassName("form-check-label");

    games = {
        "name": [],
        "status": []
    }

    for(let i = 0; i < checks.length; i++) {
        if(checks[i].checked) {
            games.name.push(check_labels[i].textContent)
            games.status.push(1)
            clickCount++           
        }
        else {
            games.name.push(check_labels[i].textContent)
            games.status.push(0)
            // console.log(games.name[i])
        }
    }

    console.log(games)
    console.log(games.length)
    if(clickCount<2) {
        return
    }
    document.getElementById('loading').style.display = 'block';

    fetch('/trainAI', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(games),
    })
    .then(response => response.json())
    .then(function (gameRecommendations) {
        console.log(gameRecommendations);
        window.localStorage.setItem("gameRecommendations",JSON.stringify(gameRecommendations));
    })
    .then(function () {
        window.location.href = 'http://127.0.0.1:5000/finalresults.html'
    })

}

// console.log('click when ready')
button.on("click", handleClick)








