var today = new Date();
var hourNow = today.getDate();
var greeting;
if (hourNow > 18) {
    greeting = 'They Attempted A Coup in the Morning'
} 
else if (hourNow > 12) {
    greeting = 'They Attempted A Coup in the afternoon'
}
else if (hourNow > 0) {
    greeting = 'They Attempted A Coup in the evening'
}
else {
    greeting = 'They really did attempt a coup like a full blown coup'
}
document.write(greeting);

var message;
message = 'I am serious. This actually happened';
var elNote = document.getElementById('note');
elNote.textContent = message;

"There are only two things we should fight for. One is the defense of our homes and the other is the Bill of Rights.".toUpperCase();
