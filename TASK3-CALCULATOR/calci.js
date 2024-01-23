let input = document.getElementById("resultat");
let p=0;

function insert(num){
    if(input.value === 'infinity') {
        input.value = '';
    }
    let lastchar = input.value[input.value.length - 1];

    if(((lastchar === undefined || lastchar ==='')&& !isNaN(num)) || (isNaN(lastchar) && !isNaN(num))) {
        input.value = input.value + num;
    } else if (!isNaN(lastchar)) {
        input.value = input.value +num;
    }else if (!isNaN(lastchar) && isNaN(num) && num !='.' && lastchar != undefined && lastchar != '') {
        input.value = input.value.substring(0, input.value.length-1);
        input.value = input.value + num;
    }
    if(num === '.'){
        let sum=0;
        for(let i=0;i < input.value.length;i++){
            if (input.value[i] === '.'){
                sum=sum+1;
            }
            if(isNaN(input.value[i]) && input.value[i] !='.'){
                sum=0;
            }
            if(sum === 2){
                input.value = input.value.substring(0, input.value.length - 1);
            }
        }
    }
    if(input.value.length > 15) {
        input.value = input.value.substring(0,15);
    }
}
 function equal(){
    if(input.value !=''){
        input.value=eval(input.value);
    }
 }
 function clean(){
    input.value =''
    }
 
 function back(){
    if(input.value !=''){
        input.value = input.value.substring(0, input.value.length-1);
    }
 }
 