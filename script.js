const displayData=(data)=>{
    output.value+=data
}

const removeAll=()=>{
    output.value=""
}

const removeLastItem=()=>{
    output.value=output.value.slice(0,-1)
}

const showResult=()=>{
    try{
        console.log("inside try block");

        output.value=eval(output.value)
        
}
catch(err){
    console.log("inside catch block");

    console.log(err);
    output.placeholder="invalid input"
    output.value=""
    
}
finally{
    console.log("inside finally block");
}
}

