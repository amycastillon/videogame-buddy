recommendations = JSON.parse(window.localStorage.getItem('gameRecommendations'))

console.log(recommendations)

labels = document.getElementById("list").querySelectorAll('li')

window.onload = (event) => {
    for(let i = 0; i < labels.length; i++) {
        // console.log('loop is starting')
        // console.log(suggestions[i])
        labels[i].innerHTML = recommendations[i]
        // console.log(box_labels[i])
    }
}


$('.game_link').on('click', function(event) {
    clickedGame = event.target.innerHTML;
    console.log(clickedGame)
    window.location.href = 'http://127.0.0.1:5000/index.html'

    // fetch('/gameSearch', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(clickedGame),
    // })
    // .then(response => response.json())
    // .then(function (search_result) {
    //     console.log(search_result);
    //     window.localStorage.setItem("gameSuggestions",JSON.stringify(search_result));
    // })
    // .then(function () {
    //     window.location.href = 'http://127.0.0.1:5000/results.html'
    // })
})
