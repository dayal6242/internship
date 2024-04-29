function visualizeWalls() {
    var numWallsInput = document.getElementById("numWalls");
    var wallHeightsInput = document.getElementById("wallHeights");

    var numWalls = parseInt(numWallsInput.value);
    var wallHeights = wallHeightsInput.value.split("#").map(Number);

    var canvas = document.getElementById("wallCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    var wallWidth = 50; 
    var wallSpacing = 20; 
    var maxWallHeight = Math.max(...wallHeights); 

    ā

    
    var visibleLeft = 1;
    var maxLeftHeight = wallHeights[0];
    var visibleRight = 1;
    var maxRightHeight = wallHeights[numWalls - 1];

    for (var j = 1; j < numWalls; j++) {
        if (wallHeights[j] > maxLeftHeight) {
            visibleLeft++;
            maxLeftHeight = wallHeights[j];
        }
    }

    for (var k = numWalls - 2; k >= 0; k--) {
        if (wallHeights[k] > maxRightHeight) {
            visibleRight++;
            maxRightHeight = wallHeights[k];
        }
    }

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Number of walls visible from the left: " + visibleLeft, 10, 20);
    ctx.fillText("Number of walls visible from the right: " + visibleRight, 10, 40);

    }


