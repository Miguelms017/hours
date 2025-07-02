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
    
    // display Hours in Document
    let html = `
    <h2>These are the hours: </h2>
    `;
    
    if (newDays.NewMonday !== ":undefinedam"){
        html = html + `<p> Monday ${moLT} ${dyTh}. ${yr}: ${newDays.NewMonday[0]} - ${newDays.NewMonday[1]}</p>`
    }

    if (newDays.NewTuesday[0] !== ":undefinedam"){
        html = html + `<p> Tuesday ${tuLT} ${TuTh}. ${arr[2]}: ${newDays.NewTuesday[0]} - ${newDays.NewTuesday[1]}</p>`
    }

    if (newDays.NewWednesday[0] !== ":undefinedam"){
        html = html + `<p> Wednesday ${weLT} ${WeTh}. ${arr2[2]}: ${newDays.NewWednesday[0]} - ${newDays.NewWednesday[1]}</p>`
    }

    if (newDays.NewThursday[0] !== ":undefinedam"){
        html = html + `<p> Thursday ${thLT} ${ThTh}. ${arr3[2]}: ${newDays.NewThursday[0]} - ${newDays.NewThursday[1]}</p>`
    }

    if (newDays.NewFriday[0] !== ":undefinedam"){
        html = html + `<p> Friday ${frLT} ${FrTh}. ${arr4[2]}: ${newDays.NewFriday[0]} - ${newDays.NewFriday[1]}</p>`
    }

    if (newDays.NewSaturday[0] !== ":undefinedam"){
        html = html + `<p> Saturday ${saLT} ${SaTh}. ${arr5[2]}: ${newDays.NewSaturday[0]} - ${newDays.NewSaturday[1]}</p>`
    }

    if (newDays.NewSunday[0] !== ":undefinedam") {
        html = html + `<p> Sunday ${suLT} ${SuTh}. ${arr6[2]}: ${newDays.NewSunday[0]} - ${newDays.NewSunday[1]}</p>`
    }

    document.getElementById('results').innerHTML = html;
}

// getting and showing Hours
document.getElementById("submit").addEventListener('click', GetDate);

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
    <p> Total Hours: ${Hour}h ${Minute}m
    `
    // DOM element
    document.getElementById('grandT').innerHTML = htmlTotal;
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