
let currMoleTile;
let currPlantTile;
let score=0;
let gameover = false;
window.onload = function(){
    setgame();
}
function  setgame(){
    //st up grid for tje gaem board in html
    if(gameover)
    {
        return;
    }
    for(let i = 0 ; i < 9 ; i++ )//i goes from 0 to 8 stops at 9
    {
        let tile=document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setmole,1500);
    setInterval(setplant,1500);
}

function getRamdomTile()
{
    let num =Math.floor(Math.random() * 9);
    return num.toString();
}

function setmole()
{
    if(gameover)
    {
        return;
    }
    if(currMoleTile)
    {
        currMoleTile.innerHTML="";
    }


    let mole= document.createElement("img");
    let mole1= document.createElement("img");
    mole.src = "images/sahay.png";
    mole1.height="150px";
    let num=getRamdomTile();
    if(currPlantTile && currPlantTile.id == num)
    {
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}
function setplant()
{
    if(gameover)
    {
        return;
    }
    if(currPlantTile)
    {
        currPlantTile.innerHTML="";
    }
    let plant= document.createElement("img");
    plant.src = "images/piranha-plant.png";
    let num=getRamdomTile();
    if(currMoleTile && currMoleTile.id == num)
    {
        return ;
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);

}

function selectTile()
{
    if(gameover)
    {
        return;
    }
    if(this == currMoleTile)
    {
        score+=10;
        document.getElementById("score").innerText = "Score : "+score.toString();
        document.getElementById("hit").src = "./hit.wav";
    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText = "Game Over : "+ score.toString();
        document.getElementById("reload").innerText = "RELOAD THE PAGE TO PLAY AGAIN";
        document.getElementById("hit").src = "./gameover.wav";
        gameover = true;
    }
}

