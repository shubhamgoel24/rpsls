let running = false;
const pcoptions=["rock","paper","scissor","lizard","spoc"];
let iconop = ["far fa-hand-rock","far fa-hand-paper","far fa-hand-scissors","far fa-hand-lizard","far fa-hand-spock"];
let sel;
let defeats = {
    rock : ['scissor', 'lizard'],
    paper : ['rock', 'spoc'],
    scissor : ['paper', 'lizard'],
    lizard : ['paper', 'spoc'],
    spoc : ['scissor', 'rock']
  }

function game(op){
    if(running){
        new Noty({
            theme: "relax",
            text: "Wait for Current Game to Finish",
            type: "warning",
            layout: "topRight",
            timeout: 1500
        }).show();
        return;
    }
    $("#plimg").removeClass();
    $("#pcimg").removeClass();
    $("#plimg").addClass(iconop[0]);
    $("#pcimg").addClass(iconop[0]);

    sel = op;
    running=true;
    $('#gamebox').addClass('up');
    setTimeout( function(){
        
        continuegame();
    }, 2000 );
}

function continuegame(){
    let z = getRandomInt(5);
    $("#plimg").removeClass();
    $("#pcimg").removeClass();
    $("#plimg").addClass(iconop[sel]);
    $("#pcimg").addClass(iconop[z]);
    var winner = selectwinner(sel,z);
    $('#gamebox').removeClass('up');
    if(winner == 0){
        new Noty({
            theme: "relax",
            text: "DRAW",
            type: "information",
            layout: "topRight",
            timeout: 1500
        }).show()
    }
    else if(winner == 1){
        new Noty({
            theme: "relax",
            text: "You Won !",
            type: "success",
            layout: "topRight",
            timeout: 1500
        }).show()
        let s = $('#plscore').text();
        s = parseInt(s);
        $('#plscore').text(s+1);
    }
    else if(winner == -1){
        new Noty({
            theme: "relax",
            text: "Pc Won",
            type: "error",
            layout: "topRight",
            timeout: 1500
        }).show()
        let s = $('#pcscore').text();
        s = parseInt(s);
        $('#pcscore').text(s+1);
    }
    running= false;
}

function selectwinner(pl,pc){
    if(pl==pc){
        return 0;
    }
    else if($.inArray(pcoptions[pc], defeats[pcoptions[pl]]) != -1){
        return 1;
    }
    else{
        return -1;
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function showRules(){
    new Noty({
        theme: "relax",
        text: "As Sheldon explains, Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.",
        type: "alert",
        layout: "topRight",
        timeout: 10000
    }).show()
}