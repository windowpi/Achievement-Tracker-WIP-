/* 
    Title: Achievement Tracker for Dark Souls: Remastered
    Author: Justin Ludwick
    Date: Started(1-13-23) 
*/


// get total input tags in 
//const element = document.getElementsByClassName('card-body')[0];
//const nodes = element.getElementsByTagName('input');
//document.getElementById('achievement-total').innerHTML = nodes.length;

// get input values and add up completed achievements
// Cache container element and add a listener to it
const container = document.querySelector('.container');
container.addEventListener('click', handleClick);

function handleClick(e) {

  // Check that the element that fired the event
  // is a checkbox
  if (e.target.matches('[type="checkbox"]')) {

    // Destructure the checked attribute from the
    // checkbox
    const {
      checked
    } = e.target;

    // Find the closest element with a `card-body` class
    const card = e.target.closest('.card-body');

    // Use that to find the local "achievement" element
    const achievement = card.querySelector('.achievement-complete');

    // Get and parse its total
    let total = Number(achievement.textContent);

    // Update the text content with an new total
    achievement.textContent = checked ? total += 1 : total -= 1;
  }
}
