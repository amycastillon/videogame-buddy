var button = d3.select("#submit_button");



function handleClick() {
    console.log("A button was clicked!");

    let submission = []

    // We can use d3 to see the object that dispatched the event
    // console.log(d3.event.target);

    let platform = d3.select('#dropdown option:checked').text();

    // console.log(d3.select("gameinput").text())

    let title = document.getElementById("gameinput").value;

    let checks = document.getElementsByClassName('form-select');

    console.log(checks);

    // let checkboxes = [check1,check2,check3];
    // let checked = []
    // for (let i=0; i< checkboxes.length; i++) {
    //     if (checkboxes[i].checked) {
    //         if(i==0) {
    //             checked.push('E');
    //         }
    //         if(i==1) {
    //             checked.push('T');
    //         }
    //         if(i==2) {
    //             checked.push('M');
    //         }
    //     }
    // }

    submission.push(platform);
    submission.push(title);
    // submission.push(checked);

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