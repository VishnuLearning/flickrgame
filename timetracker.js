var timetracker = {
    startTime: null, //time of start of game
    timer: null, // our timer object that will control our clock
    running: false, // state boolean to tell us if timer is on/off

    // start the timer
    start: function() {
        timetracker.startTime = new Date(); //fetch start time
        timetracker.running = true; //set to on
        timetracker.countTime(); // start our clock tic-tock!
    },

    //this function will be called repeatedly to update the timer
    countTime: function () {
        var now = //get current time
        var timeDiff = //find difference between now and timetracker.startTime;
        // you may want to use the getTime() function of date object
        // look it up online

        //get the clock text to display by passing our total time in seconds
        //to our timetracker.getTimerText function
        var timerText = timetracker.getTimerText(parseInt(timeDiff / 1000);

        //set this text in element with id 'timer'
        
        //here we use JavaSript setTimeout method to call countTime
        //method after 500milliseconds. Can you think why 500, why not after
        //1000 i.e. 1 sec. After all we need to update clock every second?
        //we also store the timer object it returns, so that we have a handle
        //to it when gave is over. We need to stop the timer then, ins't it!
        timetracker.timer = setTimeout(timetracker.countTime, 500);
    },

    getTimerText: function(s) {
        //given time in seconds (s) you need to return 
        //text with format hh:mm:ss
        //e.g 354 seconds = 00:05:54
    },

    // gave is over so stop the timer as well
    stopRunning: function() {
        // opposed to setTimeout, clearTimeout is a JavaScript function that
        // stops the timer created by setTimeout
        clearTimeout(timetracker.timer);
        //set state to off
        timetracker.running = false;


        var solvingTime = //the total time in seconds that the user took to solve.
        //Remember, we do have timetracker.startTime date object
        // that we created upon star to game
       
        return solvingTime;
    }
}