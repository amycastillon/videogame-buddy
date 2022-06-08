var button = d3.select(".search_button");
console.log('the page loaded')

function handleClick() {
    console.log('a click was made')
    let title = [document.getElementById("search_box").value];
    console.log(title);
    submission.title = title;

    fetch('/gameSearch', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(title),
    })
    .then(response => response.json())
    .then(function (result) {
        console.log(result);
        var temp = document.getElementByID('table_box').createElement('div');        
        temp.innerHTML = result;
        document.getElementById('table_box').style.display = 'block';
    })

}

button.on("click", handleClick);