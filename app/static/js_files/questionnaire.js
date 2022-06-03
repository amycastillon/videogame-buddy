var button = d3.select("#submit_button");



function handleClick() {
    console.log("A button was clicked!");

    let submission = []

    // We can use d3 to see the object that dispatched the event
    // console.log(d3.event.target);

    let platform = d3.select('#dropdown option:checked').text();

    // console.log(d3.select("gameinput").text())

    let title = document.getElementById("gameinput").value;

    let esrb_checks = document.getElementsByClassName('esrb');

    // console.log(checks);

    // let checkboxes = [check1,check2,check3];
    let esrb_selections = []
    for (let i=0; i< checks.length; i++) {
        if (checks[i].checked) {
            if(i==0) {
                esrb_selections.push('E');
            }
            if(i==1) {
                esrb_selections.push('T');
            }
            if(i==2) {
                esrb_selections.push('M');
            }
        }
    }

    submission.push(platform);
    submission.push(title);
    submission.push(esrb_selections);

    console.log(submission);

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