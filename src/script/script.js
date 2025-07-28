function GetDate(event){
    // No update page
    event.preventDefault();

    // prefixes and suffixes to set up
    const prefixes = ["M", "T", "W", "H", "F", "S", "A", "U"];
    const suffixes = ["st", "ex"];

    // set up element map
    const elements = {};

    // filling up element map from HTML form
    prefixes.forEach(prefix => {
        suffixes.forEach(suffix => {
            const id = prefix + suffix;
            elements[id] = document.getElementById(id);
        });
    });

    // retrieving elements
    const Monday = [elements.Mst.value, elements.Mex.value];
    const Tuesday = [elements.Tst.value, elements.Tex.value];
    const Wednesday = [elements.Wst.value, elements.Wex.value];
    const Thursday = [elements.Hst.value, elements.Hex.value];
    const Friday = [elements.Fst.value, elements.Fex.value];
    const Saturday = [elements.Sst.value, elements.Aex.value];
    const Sunday = [elements.Ust.value, elements.Uex.value];

    // Setting elements
    const days = {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday};

    // display on console the DOM prompt
    console.log(days);
    
    // Transforming hours from 24-Hour to 12-hour format
    const newDays = AmPm(days);

    // calculating total hours
    HourCalc(days);

    // setting monday date
    const MondayDate = document.getElementById("Mdate");

    const [yr, mo, dy] = MondayDate.value.split("-").map(Number);

    console.log(dy);
    console.log(mo);
    console.log(yr);

    const arr = NextDay(yr, mo, dy);

    // change month number into string
    const moLT = MonthLetter(mo);

    // dates on console
    console.log(`Tuesday was ${arr[0]} - ${arr[1]} - ${arr[2]}`);

    const arr2 = NextDay(arr[2], arr[1], arr[0]);

    console.log(`Wednesday was ${arr2[0]} - ${arr2[1]} - ${arr2[2]}`);

    const arr3 = NextDay(arr2[2], arr2[1], arr2[0]);

    console.log(`Thursday was ${arr3[0]} - ${arr3[1]} - ${arr3[2]}`);

    const arr4 = NextDay(arr3[2], arr3[1], arr3[0]);

    console.log(`Friday was ${arr4[0]} - ${arr4[1]} - ${arr4[2]}`);

    const arr5 = NextDay(arr4[2], arr4[1], arr4[0]);

    console.log(`Saturday was ${arr5[0]} - ${arr5[1]} - ${arr5[2]}`);

    const arr6 = NextDay(arr5[2], arr5[1], arr5[0]);

    console.log(`Sunday was ${arr6[0]} - ${arr6[1]} - ${arr6[2]}`);

    // days with ordinals
    const dyTh = DayTh(dy);
    const TuTh = DayTh(arr[0]);
    const WeTh = DayTh(arr2[0]);
    const ThTh = DayTh(arr3[0]);
    const FrTh = DayTh(arr4[0]);
    const SaTh = DayTh(arr5[0]);
    const SuTh = DayTh(arr6[0]);

    // months in letter
    const tuLT = MonthLetter(arr[1]);
    const weLT = MonthLetter(arr2[1]);
    const thLT = MonthLetter(arr3[1]);
    const frLT = MonthLetter(arr4[1]);
    const saLT = MonthLetter(arr5[1]);
    const suLT = MonthLetter(arr6[1]);

    // checkboxes
    const OffM = document.getElementById("OffMon");
    const OffT = document.getElementById("OffTue");
    const OffW = document.getElementById("OffWed");
    const OffH = document.getElementById("OffThu");
    const OffF = document.getElementById("OffFri");
    const OffS = document.getElementById("OffSat");
    const OffU = document.getElementById("OffSun");

    // Holiday Select Values
    const hMval = document.getElementById("holidayM").value;
    const hTval = document.getElementById("holidayT").value;
    const hWval = document.getElementById("holidayW").value;
    const hHval = document.getElementById("holidayH").value;
    const hFval = document.getElementById("holidayF").value;
    const hSval = document.getElementById("holidayS").value;
    const hUval = document.getElementById("holidayU").value;

    
    // display Hours in Document
    let html = `
    <h2>These are the hours: </h2>
    `;

    if(dyTh == "undefinedth"){
        html = html + `<p id="Warn">Insert a Valid Date</p>`
    } else {
    
        if (OffM.checked){
            html = html + `<p> Monday ${moLT} ${dyTh}. ${yr}: Day off (${hMval})</p>`
        } else if (newDays.NewMonday[0] !== ":undefinedam"){
            html = html + `<p> Monday ${moLT} ${dyTh}. ${yr}: ${newDays.NewMonday[0]} - ${newDays.NewMonday[1]}</p>`
        }

        if (newDays.NewTuesday[0] !== ":undefinedam"){
            html = html + `<p> Tuesday ${tuLT} ${TuTh}. ${arr[2]}: ${newDays.NewTuesday[0]} - ${newDays.NewTuesday[1]}</p>`
        } else if (OffT.checked){
            html = html + `<p> Tuesday ${tuLT} ${TuTh}. ${arr[2]}: Day off (${hTval})</p>`
        }

        if (newDays.NewWednesday[0] !== ":undefinedam"){
            html = html + `<p> Wednesday ${weLT} ${WeTh}. ${arr2[2]}: ${newDays.NewWednesday[0]} - ${newDays.NewWednesday[1]}</p>`
        } else if (OffW.checked){
            html = html + `<p> Wednesday ${weLT} ${WeTh}. ${arr2[2]}: Day off  (${hWval})</p>`
        }

        if (newDays.NewThursday[0] !== ":undefinedam"){
            html = html + `<p> Thursday ${thLT} ${ThTh}. ${arr3[2]}: ${newDays.NewThursday[0]} - ${newDays.NewThursday[1]}</p>`
        } else if (OffH.checked){
            html = html + `<p> Thursday ${thLT} ${ThTh}. ${arr3[2]}: Day off (${hHval})</p>`
        }

        if (newDays.NewFriday[0] !== ":undefinedam"){
            html = html + `<p> Friday ${frLT} ${FrTh}. ${arr4[2]}: ${newDays.NewFriday[0]} - ${newDays.NewFriday[1]}</p>`
        } else if (OffF.checked){
            html = html + `<p> Friday ${frLT} ${FrTh}. ${arr4[2]}: Day off (${hFval})</p>`
        }

        if (newDays.NewSaturday[0] !== ":undefinedam"){
            html = html + `<p> Saturday ${saLT} ${SaTh}. ${arr5[2]}: ${newDays.NewSaturday[0]} - ${newDays.NewSaturday[1]}</p>`
        } else if (OffS.checked){
            html = html + `<p> Saturday ${saLT} ${SaTh}. ${arr5[2]}: Day off (${hSval})</p>`
        }

        if (newDays.NewSunday[0] !== ":undefinedam") {
            html = html + `<p> Sunday ${suLT} ${SuTh}. ${arr6[2]}: ${newDays.NewSunday[0]} - ${newDays.NewSunday[1]}</p>`
        } else if (OffU.checked){
            html = html + `<p> Monday ${suLT} ${SuTh}. ${arr6[2]}: Day off (${hUval})</p>`
        }
    }

    document.getElementById('results').innerHTML = html;

    // buttons section
    document.getElementById('buttns').style.display = 'block';
}

// getting and showing Hours
document.getElementById("submit").addEventListener('click', GetDate);

function CopyBtn(){
    const toCP1 = document.getElementById('results').innerText;
    const toCP2 = document.getElementById('grandT').innerText;

    const copied = `${toCP1}\n\n${toCP2}`;

    navigator.clipboard.writeText(copied).then(function(){
        const success = "<p>Copied successfully to clipboard. <p>";
        document.getElementById('alert').innerHTML = success;
        document.getElementById('alert').style.display = 'block';
        setTimeout(function(){
            document.getElementById('alert').style.display = 'none';
        }, 3000);
    }).catch(function(err){
        const Failure = `<p>Functionality isn't working: ${err} <p>`;
        document.getElementById('alert').innerHTML = Failure;
        document.getElementById('alert').style.display = 'block';
        document.getElementById('alert').style.backgroundColor = '#7a0000';
        document.getElementById('alert').style.color = '#ffffff';
        setTimeout(function(){
            document.getElementById('alert').style.display = 'none';
        }, 3000);
    });
}

function HourCalc(days){
    // Retrieving hours and giving a value to each
    const [MS, ME] = days.Monday;
    const [TS, TE] = days.Tuesday;
    const [WS, WE] = days.Wednesday;
    const [HS, HE] = days.Thursday;
    const [FS, FE] = days.Friday;
    const [SS, SE] = days.Saturday;
    const [US, UE] = days.Sunday;
    
    // prefix for all data
    const prefix2 = ["M", "T", "W", "H", "F", "S", "U"];
    const fixes = ["S", "E"];

    // empty for setup
    const dataSort = {};
    const minSum = [];
    
    // set values and an index
    const values = [MS, ME, TS, TE, WS, WE, HS, HE, FS, FE, SS, SE, US, UE]
    let index = 0;

    // setting the day value in minutes
    prefix2.forEach(prefix => {
        fixes.forEach(fix => {
            const h = "H";
            const m = "M";

            const A = prefix + fix + h;
            const B = prefix + fix + m;

            const time = values[index++];

            if (!time || !/^\d{1,2}:\d{2}$/.test(time)) {
                dataSort[A] = 0;
                dataSort[B] = 0;
                minSum.push(0);
                return;
            }

            const [hour, minute] = time.split(":");

            dataSort[A] = hour * 60;
            dataSort[B] = Number(minute);

            minTotal = dataSort[A] + dataSort[B];

            minSum.push(minTotal);
        });
    });

    // Showing results
    console.log(dataSort);
    console.log(minSum);

    // calculation of hours
    Calculator(minSum);
}

function Calculator(minSum){

    // subtract exit - enter minutes
    const MTot = minSum[1] - minSum[0];
    const TTot = minSum[3] - minSum[2];
    const WTot = minSum[5] - minSum[4];
    const HTot = minSum[7] - minSum[6];
    const FTot = minSum[9] - minSum[8];
    const STot = minSum[11] - minSum[10];
    const UTot = minSum[13] - minSum[12];

    // define an array with all results
    const Tots = [MTot, TTot, WTot, HTot, FTot, STot, UTot];

    // showing results on console
    console.log(Tots);
    
    // add all results
    const All = MTot + TTot + WTot + HTot + FTot + STot + UTot;

    // show in console the grand total
    console.log(All);

    sessionStorage.setItem('Minutes', All);

    // final calculation to show results
    Hours(All);
}

function Hours(All){
    // transform total minutes into hours:minutes
    const Hour = parseInt(All / 60);
    const Minute = All % 60;

    // show in console the result
    console.log(`Total Hours will be: ${Hour}h ${Minute}m`);

    // show total on page
    let htmlTotal = `
    <p> Total Hours: ${Hour}h ${Minute}m`

    //
    let grandOff = 0;
    if (document.getElementById("OffMon").checked){
        grandOff = grandOff + 1;
    }
    if (document.getElementById("OffTue").checked){
        grandOff = grandOff + 1;
    }
    if (document.getElementById("OffWed").checked){
        grandOff = grandOff + 1;
    }
    if (document.getElementById("OffThu").checked){
        grandOff = grandOff + 1;
    }
    if (document.getElementById("OffFri").checked){
        grandOff = grandOff + 1;
    }
    if (document.getElementById("OffSat").checked){
        grandOff = grandOff + 1;
    }
    if (document.getElementById("OffSun").checked){
        grandOff = grandOff + 1;
    }

    if (grandOff > 0){
        htmlTotal = htmlTotal + ` and ${grandOff} days off.`;
    } else {
        htmlTotal = htmlTotal + `.`;
    }

    // DOM element
    document.getElementById('grandT').innerHTML = htmlTotal;

    sessionStorage.setItem('Hours', htmlTotal);
}

function NextDay(yr, mo, dy){

    // getting Date Data and add one day more
    let NxtDy = dy + 1;
    let NxtMo = mo;
    let NxtYr = yr;
    
    // Day Verification and Month Calculation
    if (NxtDy == 29 && NxtMo == 2){
        if (NxtYr % 4 != 0) {
        NxtMo = 3;
        NxtDy = 1;
        }
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
    }


    //returning Date
    return Xt = [NxtDy, NxtMo, NxtYr];
}

function AmPm(days){

    // getting the enter and exit hours and assigning a variable
    const [MS, ME] = days.Monday;
    const [TS, TE] = days.Tuesday;
    const [WS, WE] = days.Wednesday;
    const [HS, HE] = days.Thursday;
    const [FS, FE] = days.Friday;
    const [SS, SE] = days.Saturday;
    const [US, UE] = days.Sunday;

    // organizing variables into days
    const Day1 = [MS, ME];
    const Day2 = [TS, TE];
    const Day3 = [WS, WE];
    const Day4 = [HS, HE];
    const Day5 = [FS, FE];
    const Day6 = [SS, SE];
    const Day7 = [US, UE];

    // inserting time values and retrieve the new values
    const NewMonday = SetToAmPm(Day1);
    const NewTuesday = SetToAmPm(Day2);
    const NewWednesday = SetToAmPm(Day3);
    const NewThursday = SetToAmPm(Day4);
    const NewFriday = SetToAmPm(Day5);
    const NewSaturday = SetToAmPm(Day6);
    const NewSunday = SetToAmPm(Day7);

    // setting all results into an object
    const newDays = {NewMonday, NewTuesday, NewWednesday, NewThursday, NewFriday, NewSaturday, NewSunday};

    // return object
    return newDays;

}

function SetToAmPm(day){
    
    // split times at :
    const dayE = day[0].split(":");
    const dayX = day[1].split(":");
    
    // converting from 24h to 12h format
    const dayEJ = stringy(dayE);
    const dayXJ = stringy(dayX);

    // assign the new results to a day
    const New = [dayEJ, dayXJ];

    // return new day results
    return New;

}

function stringy(day){

    // convert hours into 12-hour format
    if(day[0] >= 12){
        if (day[0] >= 13) {
            day[0] = day[0] - 12;
            str = day[1];
            day[1] = str + "pm";
        } else {
            str = day[1];
            day[1] = str + "pm";
        }
    } else if (day[0] < 12){
        str = day[1];
        day[1] = str + "am"
    } else {
        console.warn("conversion failed");
    }
    
    // joining time
    const dayYJoin = day.join(":");

    // return results
    return dayYJoin;
}

function MonthLetter(month){
    
    // getting month number and transforming into a string
    switch (month) {
        case 1:
            month = "January";
            break;

        case 2:
            month = "February";
            break;

        case 3:
            month = "March";
            break;
        
        case 4:
            month = "April";
            break;

        case 5:
            month = "May";
            break;

        case 6:
            month = "June";
            break;

        case 7:
            month = "July";
            break;

        case 8:
            month = "August";
            break;

        case 9:
            month = "September";
            break;

        case 10:
            month = "October";
            break;

        case 11:
            month = "November";
            break;

        case 12:
            month = "December";
            break;
    
        default:
            break;
    }

    // returning string month
    return month;
}

function DayTh(Day) {
    //getting day and adding an ordinal
    if (Day == 1 || Day == 21 || Day == 31) {
        Day = Day + "st"
    } else if (Day == 2 || Day == 22){
        Day = Day + "nd"
    } else if (Day == 3 || Day == 23){
        Day = Day + "rd"
    } else {
        Day = Day + "th"
    }

    //return day with Ordinal
    return Day;
}

// Event listeners by date

document.getElementById("OffMon").addEventListener("change", function() {
    const checked = this.checked;
    const hdayM = document.getElementById('holidayM');
    const Mst = document.getElementById('Mst');
    const Mex = document.getElementById('Mex');

    if (checked) {
        Mst.style.display = 'none';
        Mex.style.display = 'none';
        hdayM.style.display = 'block';
    } else {
        Mst.style.display = '';
        Mex.style.display = '';
        hdayM.style.display = 'none';
    }
})

document.getElementById("OffTue").addEventListener("change", function() {
    const checked = this.checked;
    const hdayT = document.getElementById('holidayT');
    const Tst = document.getElementById('Tst');
    const Tex = document.getElementById('Tex');

    if (checked) {
        Tst.style.display = 'none';
        Tex.style.display = 'none';
        hdayT.style.display = 'block';
    } else {
        Tst.style.display = '';
        Tex.style.display = '';
        hdayT.style.display = 'none';
    }
})

document.getElementById("OffWed").addEventListener("change", function() {
    const checked = this.checked;
    const hdayW = document.getElementById('holidayW');
    const Wst = document.getElementById('Wst');
    const Wex = document.getElementById('Wex');

    if (checked) {
        Wst.style.display = 'none';
        Wex.style.display = 'none';
        hdayW.style.display = 'block';
    } else {
        Wst.style.display = '';
        Wex.style.display = '';
        hdayW.style.display = 'none';
    }
})

document.getElementById("OffThu").addEventListener("change", function() {
    const checked = this.checked;
    const hdayH = document.getElementById('holidayH');
    const Hst = document.getElementById('Hst');
    const Hex = document.getElementById('Hex');

    if (checked) {
        Hst.style.display = 'none';
        Hex.style.display = 'none';
        hdayH.style.display = 'block';
    } else {
        Hst.style.display = '';
        Hex.style.display = '';
        hdayH.style.display = 'none';
    }
})

document.getElementById("OffFri").addEventListener("change", function() {
    const checked = this.checked;
    const hdayF = document.getElementById('holidayF');
    const Fst = document.getElementById('Fst');
    const Fex = document.getElementById('Fex');

    if (checked) {
        Fst.style.display = 'none';
        Fex.style.display = 'none';
        hdayF.style.display = 'block';
    } else {
        Fst.style.display = '';
        Fex.style.display = '';
        hdayF.style.display = 'none';
    }
})

document.getElementById("OffSat").addEventListener("change", function() {
    const checked = this.checked;
    const hdayS = document.getElementById('holidayS');
    const Sst = document.getElementById('Sst');
    const Aex = document.getElementById('Aex');

    if (checked) {
        Sst.style.display = 'none';
        Aex.style.display = 'none';
        hdayS.style.display = 'block';
    } else {
        Sst.style.display = '';
        Aex.style.display = '';
        hdayS.style.display = 'none';
    }
})

document.getElementById("OffSun").addEventListener("change", function() {
    const checked = this.checked;
    const hdayU = document.getElementById('holidayU');
    const Ust = document.getElementById('Ust');
    const Uex = document.getElementById('Uex');

    if (checked) {
        Ust.style.display = 'none';
        Uex.style.display = 'none';
        hdayU.style.display = 'block';
    } else {
        Ust.style.display = '';
        Uex.style.display = '';
        hdayU.style.display = 'none';
    }
})

// Event listener to copy button
document.getElementById("clipboard").addEventListener("click", CopyBtn);