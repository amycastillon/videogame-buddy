var button = d3.select("#submit_button");



function handleClick() {
    console.log("A button was clicked!");

    let submission = [];

    // We can use d3 to see the object that dispatched the event
    // console.log(d3.event.target);

    // let platform = d3.select('#dropdown option:checked').text();

    // console.log(d3.select("gameinput").text())

    let title = document.getElementById("gameinput").value;
    console.log(title);

    let esrb_checks = document.getElementsByClassName("esrb_checkbox");

    let esrb_labels = document.getElementsByClassName("esrb_label");

    // console.log(esrb_checks)

    for(let i = 0; i < esrb_checks.length; i++) {
        if(esrb_checks[i].checked) {
            console.log(esrb_labels[i].textContent)
        }
    };

    let platform_checks = document.getElementById("plaform_checklist").getElementsByClassName("form-check-input")

    let platform_labels = document.getElementById("plaform_checklist").getElementsByClassName("form-check-label")

    for(let i = 0; i < platform_checks.length; i++) {
        if(platform_checks[i].checked) {
            console.log(platform_labels[i].textContent)
        }
    };

    let genre_checks = document.getElementById("genre_checklist").getElementsByClassName("form-check-input")
    let genre_labels = document.getElementById("genre_checklist").getElementsByClassName("form-check-label")

    for(let i = 0; i < genre_checks.length; i++) {
        if(genre_checks[i].checked) {
            console.log(genre_labels[i].textContent)
        }
    };

    // let esrb_checks = document.querySelectorAll('esrb');

    // console.log(esrb_checks)

    // let esrb_selections = [];

    // for(let i=0; i<esrb_checks.length;i++) {
    //     let check_check = esrb_checks.item(i);
    //     console.log(check_check);
    // }

    // console.log(checks);

    // let checkboxes = [check1,check2,check3];
    
    // for (let i=0; i< checks.length; i++) {
    //     if (checks[i].checked) {
    //         if(i==0) {
    //             esrb_selections.push('E');
    //         }
    //         if(i==1) {
    //             esrb_selections.push('T');
    //         }
    //         if(i==2) {
    //             esrb_selections.push('M');
    //         }
    //     }
    // }

    // submission.push(platform);
    // submission.push(title);
    // submission.push(esrb_selections);

    // console.log(submission);

    // fetch("/data-search", {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(submission)
    // })
    // .then(response => response.json())
    // .then(function (json) {
        
    //     }
    // );
}

button.on("click", handleClick);