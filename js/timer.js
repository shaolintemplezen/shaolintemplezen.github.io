function countDown(secs, elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Please wait for" + secs+"seconds";
}
function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );

	if (days < 0) {
		seconds = minutes = hours = days = 0;
	}

	return {
	'total': t,
	'days': days,
	'hours': hours,
	'minutes': minutes,
	'seconds': seconds
};
}

function initializeClock(id, endtime){
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
		var t = getTimeRemaining(endtime);
		daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if(t.total<=0){
		    clearInterval(timeinterval);
		}
  	}

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
}
