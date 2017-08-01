String.prototype.supplant = function (o) {
    return this.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};

function getProtestHtml(protest) {
    var output = document.createElement("tr");
    output.classList.add("protest");
    output.innerHTML = `
            <tr>
                <td>
                    <a href="{link}">{title}</a><br>
                    <small>
                        <b>{date}</b>, {time}<br>
                        {location}
                    </small>
                    <p>{description}</p>
                </td>
                <td>
                    <iframe width="400" height="200" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBuCrTB0sOhwXyTfZNCwVfikwLtt7w7wJ0&q={location}" allowfullscreen>
                    </iframe>
                </td>
            </tr>
    `.supplant(protest);
    return output;
}

function start() {
    var protestsContainer = document.getElementById("protest-container");
    for (var p in protests) {
        protestsContainer.appendChild(getProtestHtml(protests[p]));
    }
}

function sort() {
    var protests = document.querySelectorAll("li.protest");
    console.log(protests);
}
