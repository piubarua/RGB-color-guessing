var numSquares=6;
var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor; 
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor; 
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        
    }
});

resetButton.addEventListener("click",function(){
    //generate all new colors
    colors=generateRandomColor(numSquares);

    //pick a new random color form array
    pickedColor=pickColor();

    //change colorDisplay to match the new picked color
    colorDisplay.textContent=pickedColor;

    //change colors of squares
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i]

//add click listener to squares
squares[i].addEventListener("click",function(){

    //grab color of picked color
    var clickedColor=this.style.backgroundColor;

    //compare color to picked color
    if (clickedColor ===pickedColor){
        messageDisplay.textContent="Correct";
        resetButton.textContent="Play Again!";
        changeColor(clickedColor);
        h1.style.backgroundColor=clickedColor; 
    }
    else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";
    }
});
}

function changeColor(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
        //change each color to match the picked color
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    //make an array
    var arr=[]

    //add num random colors to array
    for(var i=0;i<num;i++){
    arr.push(randomColor())
    }

    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r=Math.floor(Math.random()*256);

    //pick a green from 0-255
    var g=Math.floor(Math.random()*256);

    //pick a blue from 0-255
    var b=Math.floor(Math.random()*256);

    return "rgb("+ r + ", " + g + ", " + b + ")";
}
