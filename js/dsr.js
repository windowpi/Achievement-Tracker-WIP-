/* 
    Title: Achievement Tracker for Dark Souls: Remastered
    Author: Justin Ludwick
    Date: Started(1-13-23) 
*/

// get input values and add up completed achievements
var input = document.getElementsByClassName('sum'),
    total = document.getElementById('achievement-complete');

for (var i = 0; i < input.length; i++) {
    input[i].onchange = function () {
        var add = this.value * (this.checked ? 1 : -1);
        total.innerHTML = parseFloat(total.innerHTML) + add
    }
}

// get total input tags in 
//const element = document.getElementsByClassName('card-body');
//const nodes = element.getElementsByTagName('input');
//document.getElementById('achievement-total').innerHTML = nodes.length;