var $ = require( "jquery" );
var _ = require('lodash');

window.jQuery = $;
window.$ = $;
var count = 0;

function updateCounter() {
    $('#count').text(`${++count} clicks on the button`);
}

const body = $('body');
const btn = $('<button>Click here to get started</button>');
btn.on('click', _.debounce(updateCounter, 500));

body.append($('<p>ALX Dashboard</p>'));
body.append($('<p>Dashboard data for the students</p>'));
body.append(btn);
body.append($('<p id=\'count\'></p>'));
body.append($('<p>Copyright - ALX</p>'));
