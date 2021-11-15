function topAnimationBox(id, timeLength, basis) {
    let slideAmount = basis;

    function subfunction(timeLength) {
        slideAmount += 450/timeLength; //450 is to approximatly align input time to time to end
        document.getElementById(`${id}`).style.left = `${slideAmount}vw`;

        if (9900 > timeLength) {
            setTimeout(() => {
                subfunction(timeLength);
            }, 1);
        }
    }
    subfunction(timeLength)
}

function topAnimationStroke(id, timeLength, basis) {
    let slideAmount = basis;

    function subfunction(timeLength) {
        slideAmount -= 450/timeLength;
        document.getElementById(`${id}`).style.right = `${slideAmount}vw`;

        if (9900 > timeLength) {
            setTimeout(() => {
                subfunction(timeLength);
            }, 1);
        }
    }
    subfunction(timeLength)
}

function animationGradientInverse(id, time, ease, startTime) {
    setTimeout(() => {
        
        i = 50;                       // i is still for iteration number, but because the first ~50  
        let temp = parseFloat(time);  // are fairly unnoticable, I took them out

        function subfunction() {
            opacityAmount = 100 - Math.pow(i, ease)*(100/Math.pow(temp, ease));
            document.getElementById(id).style.opacity = `${opacityAmount}%`;
            i++;
            if (opacityAmount >= 0) {
                setTimeout(() => {
                    subfunction(temp);
                }, 1);
            }
        }
        subfunction()
    }, startTime);
}

function animationGradient(id, time, ease, startTime) {
    document.getElementById(id).style.opacity = "0%"
    setTimeout(() => {
        
        i = 50;                       // i is still for iteration number, but because the first ~50  
        let temp = parseFloat(time);  // are fairly unnoticable, I took them out

        function subfunction() {
            opacityAmount = Math.pow(i, ease)*(100/Math.pow(temp, ease));
            document.getElementById(id).style.opacity = `${opacityAmount}%`;
            i++;
            if (opacityAmount <= 100) {
                setTimeout(() => {
                    subfunction(temp);
                }, 1);
            }
        }
        subfunction()
    }, startTime);
}

function slideFromLeft(id, time, ease, startTime, width) {
    document.getElementById(id).style.position = "absolute";
    document.getElementById(id).style.right = "100vw";
    let i = 0;
    let endDistance = 100-width; //aka end distace from right

    function subfunction () {
        slideAmount = (endDistance)/(i*endDistance/time);


        document.getElementById(id).style.right = `${slideAmount}vw`;

        i++

        if (i<time/1.8) {
            setTimeout(() => {
                subfunction();
            }, 1);
        }
    }

    subfunction();
}


