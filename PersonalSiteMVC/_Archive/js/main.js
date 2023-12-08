$(function () {
    $('.beefup').beefup({
        openSingle: true
    });
})

var today = new Date();

var country = 'us'
var year = `${today.getFullYear()}`
let displayHoliday = document.getElementById('holidayAPI');


$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/holidays?country=' + country + '&year=' + year,
    headers: { 'X-Api-Key': 'n1qUiHrl+24nLy12GtD53A==QMae0CsKnHEGwgpm'},
    contentType: 'application/json',
    success: function(result) {
        let sortedResult = result.sort((d1, d2) => (new Date(d1.date) < new Date(d2.date) ? 1 : (new Date(d1.date) > new Date(d2.date)) ? -1 : 0)).reverse();
        sortedResult = sortedResult.filter(holiday => new Date(holiday.date) >= today)[0];
        displayHoliday.innerHTML = `<h2>The next holiday is ${sortedResult.name}!</h2>
        <br>
        <h3>${sortedResult.day} ${sortedResult.date}</h3>`
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});









