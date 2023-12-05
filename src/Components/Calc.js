export function calc() {
    const radioButtons = document.querySelectorAll('input[name="radio"]');

    const getSelectedRadioButton = () => {
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return radioButton.value;
            }
        }
    };
    const selectedRadioButtonValue = getSelectedRadioButton();
    console.log(selectedRadioButtonValue);
    if (selectedRadioButtonValue == '4/1') {
        var main_marking = 4;
        var negative_marking = 1;
    } else if (selectedRadioButtonValue == '1/0') {
        main_marking = 1;
        negative_marking = 0;
    } else if (selectedRadioButtonValue == '1/0.25') {
        main_marking = 1;
        negative_marking = 0.25;
    } else if (selectedRadioButtonValue == '3/1') {
        main_marking = 3;
        negative_marking = 1;
    } else if (selectedRadioButtonValue == '4/0') {
        main_marking = 4;
        negative_marking = 0;
    }
    var q1 = document.getElementById("ui1").value;
    var q1a = document.getElementById("u1").value;
    var q2 = document.getElementById('ui2').value;
    var q2a = document.getElementById('u2').value;
    var q3 = document.getElementById('ui3').value;
    var q3a = document.getElementById('u3').value;
    var q4 = document.getElementById('ui4').value;
    var q4a = document.getElementById('u4').value;
    var q5 = document.getElementById('ui5').value;
    var q5a = document.getElementById('u5').value;
    var q6 = document.getElementById('ui6').value;
    var q6a = document.getElementById('u6').value;
    var q7 = document.getElementById('ui7').value;
    var q7a = document.getElementById('u7').value;
    var q8 = document.getElementById('ui8').value;
    var q8a = document.getElementById('u8').value;

    var totalm = [];
    var totneg = [];
    var totna = [];
    // q1
    if (q1 == '') {
        totna.push(0);
    } else if (q1 == q1a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q2
    if (q2 == '') {
        totna.push(0);
    } else if (q2 == q2a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q3
    if (q3 == '') {
        totna.push(0);
    } else if (q3 == q3a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q4
    if (q4 == '') {
        totna.push(0);
    } else if (q4 == q4a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q5
    if (q5 == '') {
        totna.push(0);
    } else if (q5 == q5a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q6
    if (q6 == '') {
        totna.push(0);
    } else if (q6 == q6a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q7
    if (q7 == '') {
        totna.push(0);
    } else if (q7 == q7a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    // q8
    if (q8 == '') {
        totna.push(0);
    } else if (q8 == q8a) {
        totalm.push(main_marking);
    } else {
        totneg.push(negative_marking);
    }

    let sumofAll = 0;
    for (let i = 0; i < totalm.length; i++) {
        sumofAll += totalm[i];
    }
    let negativeSumOfAll = 0;
    for (let x = 0; x < totneg.length; x++) {
        negativeSumOfAll += totneg[x];
    }
    let notAttemptedSum = 0;
    for (let v = 0; v < totna.length; v++) {
        notAttemptedSum += totna[v];
    }
    var yoyo = totalm.length;
    var yeye = totneg.length;
    var finalcalculatedmarks = sumofAll - negativeSumOfAll;
    console.log('The Marks are: ' + finalcalculatedmarks);

    console.log('total not attempted are ' + notAttemptedSum);
    console.log('sum of total marks are without -ve marking ' + sumofAll);
    console.log('total -ve marking are -' + negativeSumOfAll);
    var details = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8);
    var details2 = (q1a + '' + q2a + '' + q3a + '' + q4a + '' + q5a + '' + q6a + '' + q7a + '' + q8a);
    var prt = (finalcalculatedmarks / 32) * 100;

    const loadover = ` <div className='text-center grade-bt'>
                                    Your Score is : ${finalcalculatedmarks} <br/><br/>
                                    Total Correct : ${yoyo}<br/><br/>
                                    Total Incorrect : ${yeye}<br/><br/>
                                    Percentage : ${prt}% <br/><br/>
                                  Answer Key :  <span id="ak-1"></span>  ${details}<br/><br/>
                                   Your Answer Key :  <span id="ak-2"></span>  ${details2}<br/><br/></div>
                                    `;
    document.getElementById('demo-over').innerHTML = loadover;
    document.getElementById('sync-io').hidden = true;
    if (details == '' || details2 == '') {
        document.getElementById('ak-1').textContent = 'Null /-'
        document.getElementById('ak-2').textContent = 'Null /-'
    }
    const Display_Details = ``
    document.getElementById('filled-details').innerHTML = Display_Details;
}
  // eslint-disable-next-line eqeqeq