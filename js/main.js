$(document).ready(function() {
  $('#player1').click(function() {
    $('main').load('player1.html');
  });
});

// Sections loaded by AJAX need to be handled by event delegation
// http://learn.jquery.com/events/event-delegation/
// ======================================================


// For player1.html
$('main').on('click','#player2r', function() {
  $('main').load('player2r.html');
});$('main').on('click','#player2p', function() {
  $('main').load('player2p.html');
});$('main').on('click','#player2s', function() {
  $('main').load('player2s.html');
});

// For player2r.html
$('main').on('click','#rock', function() {
  $('main').load('tie.html');
});$('main').on('click','#paper', function() {
  $('main').load('player2_wins.html');
});$('main').on('click','#scissors', function() {
  $('main').load('player1_wins.html');
});

// For player2p.html
$('main').on('click','#rock', function() {
  $('main').load('player1_wins.html');
});$('main').on('click','#paper', function() {
  $('main').load('tie.html');
});$('main').on('click','#scissors', function() {
  $('main').load('player2_wins.html');
});

// For player2s.html
$('main').on('click','#rock', function() {
  $('main').load('player2_wins.html');
});$('main').on('click','#paper', function() {
  $('main').load('player1_wins.html');
});$('main').on('click','#scissors', function() {
  $('main').load('tie.html');
});
