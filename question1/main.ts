export function isValidWalk(walk: string[]) {
    int NS = 0;
    int WE = 0;
    if (walk.length == 10){
      for (string i in walk) { 
        if (i == 'n') NS += 1; 
        if (i == 's') NS -= 1; 
        if (i == 'e') EW += 1; 
        if (i == 'w') EW -= 1; 
      } 

    }
  
}

