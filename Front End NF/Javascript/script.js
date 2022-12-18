function my_spaceship(hero){
    var x = 0;
    var y = 0;
    var spc ="up";

for (i = 0; i < hero.length; i++) {
    if (hero[i] == 'R') {
        if (spc == "up") {
            spc = "right";
        }
    else if (spc == "right"){
        spc = "down";
    }
    else if (spc == "left"){
        spc = "up";
    }
    else if (spc == "down") {
        spc = "left";
    }
}

if (hero[i] == 'L') {
    if (spc == "up") {
        spc = "left";
    }
    else if (spc == "right") {
        spc = "up";
    }
    else if (spc == "left"){
        spc = "down";
    }
    else if (spc == "down"){
        spc = "right";
    }
}
 if (hero[i] == 'A') {
     if (spc == "up") {
         y--;
     }
     else if(spc == "right") {
         x++;
     }
     else if( spc == "left") {
        x--;
     }
     else if(spc == "down") {
         y++;
     }
 }
}
var result = "{x: " + x + ", y: " + y + ", direction: '" + spc + "'}"

    return (result);
}



// function my_spaceship(params) {
//     let x = 0;
//     let y = 0;
//     let rocket_motion = "up"
//     for (let i = 0; i < params.length; i++){
//         if (params[i] == "R") {
//             if (rocket_motion == "up") {
//                 rocket_motion="right"
//             } else if (rocket_motion == "right") {
//                 rocket_motion="down"
//             } else if (rocket_motion == "down") {
//                 rocket_motion="left"
//             } 
//         }  if (params[i] == "L") {
//             if (rocket_motion == "up") {
//                 rocket_motion="left"
//             } else if (rocket_motion == "left") {
//                 rocket_motion="down"
//             } else if (rocket_motion == "down") {
//                 rocket_motion="right"
//             } else {
//                 rocket_motion=="up"
//             }
//         }   if (params[i] == "A") {
//             if (rocket_motion == "up") {
//                 y--
//             } else if (rocket_motion == "down") {
//                 y++
//             } else if (rocket_motion == "right") {
//                 x++
//             } else {
//                 x--
//             }
//         }
//     }
//     return `{x: ${x}, y: ${y}, direction: ${rocket_motion}}`
// }
// my_spaceship("RAALALL")