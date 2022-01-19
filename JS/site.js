function getValues2() {

    let firstValue = document.getElementById("firstValue").value;
    let secondValue = document.getElementById("secondValue").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)) {

        let fbData = generateData(firstValue, secondValue);

         displayNumbers(fbData);
    }

    else {
        Swal.fire({
            icon: 'error',
            title: 'oops...',
            text: 'Only integers above 0 are allowed to FizzBuzz!'
        } );
    }
}

function generateData(firstValue, secondValue){

    let numbers = [];
    let IsFizz = false;
    let IsBuzz = false;
    for (let index = 1; index <= 100; index++) {
        
        IsFizz = (index % firstValue == 0);
        IsBuzz = (index % secondValue == 0);
        if (IsFizz && IsBuzz) {
            numbers.push('FizzBuzz')
        }
        else if(IsFizz){
            numbers.push('Fizz')
        }
        else if(IsBuzz){
            numbers.push('Buzz')
        }
        else{
            numbers.push(index);
        }
    }
    return numbers;

}

function displayNumbers(fbData){
    let contentDiv = document.getElementById("results");
    let content ="";

    //clear previous data
    contentDiv.innerHTML ="";

    for (let index = 0; index < fbData.length; index++) {
        let dataValue = fbData[index];
        let dataElement = `<div class="col ${dataValue}">${dataValue}</div>`;
        content += dataElement;
    }
    
    //write the results to the page.
    contentDiv.innerHTML = content;
}

    

