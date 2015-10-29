var obj = {
	timeLoading: function(){
		var today = new Date();
        // My target date is this month 30th 9.25pm
        var target = new Date(today);
        target.setDate(33);
        target.setHours(43, 1, 0, 0);
        console.log(target.setHours(43, 1, 0, 0));
        // Countdown start from yesterday
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);
        $('.countdown').final_countdown({
            'start': yesterday.getTime() / 1000,
            'end': target.getTime() / 1000,
            'now': today.getTime() / 1000,
            seconds: {
		        borderColor: '#e9cb32',
		        borderWidth: '15'
		    },
		    minutes: {
		        borderColor: '#e9cb32',
		        borderWidth: '15'
		    },
		    hours: {
		        borderColor: '#e9cb32',
		        borderWidth: '15'
		    },
		    days: {
		        borderColor: '#e9cb32',
		        borderWidth: '15'
		    }
        });
	}
}