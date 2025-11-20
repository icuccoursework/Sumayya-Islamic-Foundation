// assets/js/main.js
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('show');
    });
  }

  // Simple event countdown demo (reads data-countdown attribute YYYY-MM-DD)
  function initCountdown(){
    var el = document.querySelector('[data-countdown]');
    if(!el) return;
    var target = new Date(el.getAttribute('data-countdown') + 'T00:00:00');
    function tick(){
      var now = new Date();
      var diff = target - now;
      if(diff<=0){ el.textContent = 'Event is happening now!'; return; }
      var days = Math.floor(diff/86400000);
      var hours = Math.floor((diff%86400000)/3600000);
      var mins = Math.floor((diff%3600000)/60000);
      el.textContent = days+'d '+hours+'h '+mins+'m';
    }
    tick();
    setInterval(tick,60000);
  }
  initCountdown();
});
