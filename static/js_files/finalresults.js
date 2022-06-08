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
