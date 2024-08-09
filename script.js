// Variables
const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageoutput = document.querySelector(".output");

calculatebtn.addEventListener("click", () =>{
    if(inputbtn.value ==""){
        alert("Please enter your date of birth");
    }
    else{
        console.log("input: ", inputbtn.value);
        //date
        const dob = new Date(inputbtn.value);   
        console.log("dob: ", dob);
        // dob year
        const dob_year = dob.getFullYear();   
        console.log("dob_year: ", dob_year);
        //current year
        const now = new Date();   
        console.log("now: ", now);
        
        //calculate: dob year minus current year
        const now_year = now.getFullYear();   
        console.log("now_year: ", now_year);

        const age = now_year - dob_year;
        console.log("Age: ", age);

        // display output
        ageoutput.innerHTML = `Your Age is : ${age} years`;
    }
});