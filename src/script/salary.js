// getting hours and displaying on the page
document.getElementById('SOut').innerHTML = sessionStorage.getItem('Hours');

// setting up message
let html = "";

// Base Salary Calculation
function BaseSalary(){
    // initializing total
    let Total = 0;

    // getting al data form form and past step via sessionStorage
    const Reg = Number(document.getElementById("SReg").value);
    const Rh = Number(document.getElementById('HReg').value);
    const Ovt = Number(document.getElementById('Ovt').value);
    const Mins = Number(sessionStorage.getItem('Minutes'));
    const Off = Number(sessionStorage.getItem('Offs'));

    // convert minutes into hours
    let hrs = Mins / 60;

    // convert off time in hours
    const OffHrs = Off * 8;
    
    // adding off times if any
    hrs = hrs + OffHrs;

    if (hrs > Rh){
        // calculation if overtime applies
        const NorSal = Rh * Reg;
        const OvH = hrs - Rh;
        const OvSal = OvH * Ovt;

        Total = NorSal + OvSal;

        html = `
        <p>--- Salary ---</p>
        <p>Base Salary (${Rh}h * $${Reg.toFixed(2)}): $${NorSal.toFixed(2)}</p>
        <p>Overtime Salary (${Math.round(OvH * 100)/100}h * $${Ovt.toFixed(2)}): $${OvSal.toFixed(2)}</p>
        <p>Total: $${Total.toFixed(2)}</p>`
    } else {
        // calculation if only normal hours
        Total = hrs * Reg;

        html = `
        <p>Base Salary (${Math.round(hrs*100)/100}h * $${Reg.toFixed(2)}): $${Total.toFixed(2)}</p>`
    }

    // returning base salary
    return Total;
}

// Calculation for each Discount
function DisCalc(Sal, Val){
    // Calculating By Simple rule of 3 (discount = (Salary / 100) * value)
    const over100 = Sal / 100;
    const DiscVal = over100 * Val;

    // returning discount total
    return DiscVal;
}

// calculation for all discounts
function AllDisc(){

    // getting base Salary
    const Salary = BaseSalary();

    // Calculating Discounts
    const SS = DisCalc(Salary, 5.58);
    const Med = DisCalc(Salary, 1.3);
    const Ftx = DisCalc(Salary, 11.83);
    const NJtx = DisCalc(Salary, 4.18);
    const NJdis = DisCalc(Salary, 0.56);

    // Discounts located on an array
    const Arr = [SS, Med, Ftx, NJtx, NJdis];

    // message
    html = html + `
    <p>--- Discounts ---</p>
    <p>Social Security (5.58%): ${Arr[0].toFixed(2)}</p>
    <p>Medicare (1.3%): ${Arr[1].toFixed(2)}</p>
    <p>Federal Taxes (11.83%): ${Arr[2].toFixed(2)}</p>
    <p>NJ State Taxes (4.18%): ${Arr[3].toFixed(2)}</p>
    <p>NJ Disability (0.56%): ${Arr[4].toFixed(2)}</p>`

    // extra discounts if salary is over $1000
    if (Salary >= 1000){
        const NJUE = DisCalc(Salary, 0.36);
        const NJEE = DisCalc(Salary, 0.04);
        Arr.push(NJUE, NJEE);

        html = html + `
        <p>NJ unemployment(0.36%): ${Arr[5].toFixed(2)}</p>
        <p>NJ EE Work Dev(0.04%): ${Arr[6].toFixed(2)}</p>`
    }

    const DiscSum = Arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    html = html + `
    <p>Total Discounts: ${DiscSum.toFixed(2)}</p>`

    const TotRem = Salary - DiscSum;

    Insurance(TotRem);

    // message to page
    document.getElementById('SOut2').innerHTML = html;

    //progress change
    document.getElementById("circle_3").style.borderColor = 'var(--clr-primary-700)';
    document.getElementById("step").innerHTML = "All Done!"
}

// calculation after insurance costs
function Insurance(Sal){
    // getting insurance from form
    const Ins = Number(document.getElementById('Ins').value);

    // calculation of salary - insurance
    const grandT = Sal - Ins;
    html = html + `
    <p>--- insurance ---</p>
    <p>Health: ${Ins.toFixed(2)}</p>
    <p>--- Total ---</p>
    <h3>$${grandT.toFixed(2)}</h3>`
}

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    AllDisc();
});