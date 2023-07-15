
$(function() {
    // variables
    let mode = false; // App mode
    let timeCounter = 0;  // time counter
    let lapCounter = 0;    // lap counter
    let action;    // variable for setInterval
    let lapNumber = 0;    // Number of laps
     // minutes, seconds, centiseconds for the time and lap
    let timeMinutes, timeSeconds, timeCentiseconds;  
    let lapMinutes, lapSeconds, lapCentiseconds;   

    // On App load show start and lap buttons
    hideShowButtons("#startButton", "#lapButton");

    // Click on start button
    $("#startButton").click(function() {
        // mode ON
        mode = true;
        // show stop and lap buttons
        hideShowButtons("#stopButton", "#lapButton");
        // start counter
        startAction();
    });
        

    // Click on stop button
        // show resume and reset buttons
        // stop counter

    // Click on resume button
        // show stop and lap buttons
        // start action

    // Click on reset button
        // reload the page

    // Click on lap button
        // if mode is ON
        // stop action
        // reset lap and print the lap details
        // start action


    // functions:
    // hideShowButtons function shows two buttons
    function hideShowButtons (x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }

    // Starts the counter
    function startAction () {
        action = setInterval(() => {
            timeCounter++;
            lapCounter++;
            updateTime();
        }, 10);    
    }

    // updateTime function converts counters to min, sec and centiseconds
    function updateTime () {
        // 1 min = 60 x 100 centiseconds = 6000 centiseconds
        timeMinutes = Math.floor(timeCounter / 6000);
    }

});