
function update() {
    document.getElementById('text').value = cookiecount;
    document.title = cookiecount + " Cookies";

    document.getElementById('ammountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
    document.getElementById('ammountMultiplier2').innerHTML = "x" + (multiplier+1);
    document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Cookies";
    document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);

    document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Cookies";

    document.getElementById('cookiespersecond').innerHTML = "You are gaining " + (((autoClick)+(farms*2)+(grandma*2))*multiplier) + " Cookies per/s";
    }
    var multiplier = 1;
    var cookiecount = 0;
    var autoClick = 0;

    function timer() {
        cookiecount = cookiecount + autoClick*multiplier;
    update()
    }
    setInterval(timer, 1000)

    function add() {
        cookiecount = cookiecount + 1
        update()
    }
    update()
    function buyAutoClick() {
        if (cookiecount >= ((autoClick+1) * 12)) {
            cookiecount = cookiecount - ((autoClick+1) * 12);
            autoClick = autoClick + 1;
            update()
        }
    }
    function buyMultiplier() {
        if (cookiecount >= ((multiplier+1) * 100)) {
            cookiecount = cookiecount - ((multiplier+1) * 50);
            multiplier = multiplier + 1;
            update()
        }
    }
