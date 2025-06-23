let NxtDy = dy + 1;
    let NxtMo = mo;
    let NxtYr = yr;

    if (NxtDy == 29 && NxtMo == 2){
        NxtMo = 3;
        NxtDy = 1;
    } else if (NxtDy == 30 && NxtMo == 2 && NxtYr % 4 == 0){
        NxtMo = 3;
        NxtDy = 1;
    } else if (NxtDy == 31) {
        if (NxtMo == 4){
            NxtMo = 5;
            NxtDy = 1;
        } else if (NxtMo == 6){
            NxtMo = 7;
            NxtDy = 1;
        } else if (NxtMo == 9){
            NxtMo = 10;
            NxtDy = 1;
        } else if (NxtMo == 11){
            NxtMo = 12;
            NxtDy = 1;
        }
    } else if (NxtDy == 32) {
        NxtDy = 1;
        if (NxtMo == 12) {
            NxtMo = 1;
            NxtYr++
        } else {
        NxtMo++
        }
    } else {
        NxtDy++
    }