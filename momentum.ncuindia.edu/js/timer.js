function getRemainingTime(endTime) {
	var t = Date.parse(endTime) - Date.parse(new Date());
	var seconds = (t / 1000) % 60;
	var minutes = (t / 1000 / 60) % 60;
	var hours = (t / 1000 / 60 / 60) % 24;
	var days = t / 1000 / 60 / 60 / 24;

	return {
		'total': t,
		'days': Math.floor(days),
		'hours': Math.floor(hours),
		'minutes': Math.floor(minutes),
		'seconds': Math.floor(seconds)
	};
}

function init(id, endTime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	var timeInterval = setInterval( function () {
		var t = getRemainingTime(endTime);
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = t.hours;
		minutesSpan.innerHTML = t.minutes;
		secondsSpan.innerHTML = t.seconds;
		
		if (t.total <= 0) {
			clearInterval(timeInterval);
		}
	}, 1000);
}

init('clock', 'October 22 2016 10:00:00 GMT+0530');