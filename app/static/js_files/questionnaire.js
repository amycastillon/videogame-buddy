var button = d3.select("#submit_button");



function handleClick() {
    console.log("A button was clicked!");

    let submission = {};

    let title = document.getElementById("gameinput").value;
    console.log(title);
    submission.title = title;

    let esrb_checks = document.getElementsByClassName("esrb_checkbox");

    let esrb_labels = document.getElementsByClassName("esrb_label");

    submission.esrb = [];

    for(let i = 0; i < esrb_checks.length; i++) {
        if(esrb_checks[i].checked) {
            let esrb_rating = esrb_labels[i].textContent;
            console.log(esrb_rating);
            submission.esrb.push(esrb_rating);
        }
    };

    let platform_checks = document.getElementById("plaform_checklist").getElementsByClassName("form-check-input")

    let platform_labels = document.getElementById("plaform_checklist").getElementsByClassName("form-check-label")

    submission.platform = [];

    for(let i = 0; i < platform_checks.length; i++) {
        if(platform_checks[i].checked) {
            game_platform = platform_labels[i].textContent;
            console.log(game_platform);
            submission.platform.push(game_platform);
        }
    };

    let genre_checks = document.getElementById("genre_checklist").getElementsByClassName("form-check-input")
    let genre_labels = document.getElementById("genre_checklist").getElementsByClassName("form-check-label")

    submission.genre = [];

    for(let i = 0; i < genre_checks.length; i++) {
        if(genre_checks[i].checked) {
            let game_genre = genre_labels[i].textContent;
            console.log(game_genre);
            submission.genre.push(game_genre);
        }
    };

    // console.log(submission);
    fetch("/api/filter_search",)
    .then(response => response.json())
    .then(function (game_suggestion) {
        console.log(game_suggestion)
    });
}

button.on("click", handleClick);