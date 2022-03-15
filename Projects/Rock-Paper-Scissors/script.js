let machinePick;
let userPick;

let rockBTN;
let paperBTN;
let scissorBTN;
let rematchBTN;

let MrockBTN;
let MpaperBTN;
let MscissorBTN;

let RPS;
let Title;

window.addEventListener('load', function() {
    var _RPS = document.getElementsByClassName("RPS");
    RPS = _RPS[0];

    var _Title = document.getElementsByClassName("Title");
    Title = _Title[0];

    var _rockBTN = document.getElementsByClassName("rock");
    rockBTN = _rockBTN[0];
    
    var _paperBTN = document.getElementsByClassName("paper");
    paperBTN = _paperBTN[0];
    
    var _scissorBTN = document.getElementsByClassName("scissor");
    scissorBTN = _scissorBTN[0];

    var _rematch = document.getElementsByClassName('rematchBTN');
    rematchBTN = _rematch[0];

    rockBTN.addEventListener('click', Pick);
    paperBTN.addEventListener('click', Pick);
    scissorBTN.addEventListener('click', Pick);
    rematchBTN.addEventListener('click', Restart);
});

function Pick() {
    this.id = "selected";
    userPick = this.className;

    var middleText = document.createElement('h2');
    var middleTextContent = document.createTextNode("VS");
    middleText.append(middleTextContent);
    middleText.className = "vs";

    var MRockBTN = document.createElement('input');
    MRockBTN.type = 'image';
    MRockBTN.src = "https://img.icons8.com/emoji/48/000000/rock-emoji.png";
    MRockBTN.className = "Mrock";

    var MPaperBTN = document.createElement('input');
    MPaperBTN.type = 'image';
    MPaperBTN.src = "https://img.icons8.com/color/48/000000/paper.png";
    MPaperBTN.className = "Mpaper";

    var MScissorBTN = document.createElement('input');
    MScissorBTN.type = 'image';
    MScissorBTN.src = "https://img.icons8.com/plasticine/100/000000/barber-scissors.png";
    MScissorBTN.className = "Mscissor";

    RPS.append(middleText);
    RPS.append(MRockBTN);
    RPS.append(MPaperBTN);
    RPS.append(MScissorBTN);

    rockBTN.removeEventListener('click', Pick);
    paperBTN.removeEventListener('click', Pick);
    scissorBTN.removeEventListener('click', Pick); 

    machine();
    check();
}

function machine() {
    var _MachineRockBTN = document.getElementsByClassName("Mrock");
    MachineRockBTN = _MachineRockBTN[0];
    
    var _MachinePaperBTN = document.getElementsByClassName("Mpaper");
    MachinePaperBTN = _MachinePaperBTN[0];
    
    var _MachineScissorBTN = document.getElementsByClassName("Mscissor");
    MachineScissorBTN = _MachineScissorBTN[0];

    var rand = Math.floor(Math.random() * 10);
    console.log(rand);
    if(rand >= 0 && rand < 3.33) {
        machinePick = "rock";
        MachineRockBTN.id = "selected";
    } else if(rand >= 3.33 && rand < 6.66) {
        machinePick = "paper";
        MachinePaperBTN.id = "selected";
    } else {
        machinePick = "scissors";
        MachineScissorBTN.id = "selected";
    }
}

function check() {
    if(userPick == "rock") {
        if(machinePick == "rock") {
            Title.innerHTML = "Draw!"
        }
        if(machinePick == "paper") {
            Title.innerHTML = "You Lose!";
        }
        if(machinePick == "scissors") {
            Title.innerHTML = "You Win!";
        }
    } else if(userPick == "paper") {
        if(machinePick == "rock") {
            Title.innerHTML = "You Win!";
        }
        if(machinePick == "paper") {
            Title.innerHTML = "Draw!"
        }
        if(machinePick == "scissors") {
            Title.innerHTML = "You Lose!";
        } 
    } else if(userPick = "scissors") {
        if(machinePick == "rock") {
            Title.innerHTML = "You Lose!";
        }
        if(machinePick == "paper") {
            Title.innerHTML = "You Win!";
        }
        if(machinePick == "scissors") {
            Title.innerHTML = "Draw!"
        } 
    }

    rematchBTN.style.display = "inline";
}

function Restart() {
    MachineRockBTN.remove();
    MachinePaperBTN.remove();
    MachineScissorBTN.remove();
    var middleText = document.getElementsByClassName('vs');
    middleText[0].remove();

    var selectedEl = document.getElementById('selected');
    selectedEl.id = "";

    Title.innerHTML = "Pick your Weapon!";

    rockBTN.addEventListener('click', Pick);
    paperBTN.addEventListener('click', Pick);
    scissorBTN.addEventListener('click', Pick);
}