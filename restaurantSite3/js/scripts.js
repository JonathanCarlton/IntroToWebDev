function validateForm(){

    // variables for form values
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;

    var monday = document.forms["contactForm"]["monday"];
    var tuesday = document.forms["contactForm"]["tuesday"];
    var wednesday = document.forms["contactForm"]["wednesday"];
    var thursday = document.forms["contactForm"]["thursday"];
    var friday = document.forms["contactForm"]["friday"];

    var visitedYes = document.forms["contactForm"]["choice1"];
    var visitedNo = document.forms["contactForm"]["choice2"];

    //  adds checkboxes for the days of the week into a list
    var allDays = [monday, tuesday, wednesday, thursday, friday];

    // empty list to add checked days into
    var selectedDays = [];

    //  adds radio buttons for visited restaurant into a list
    var choices = [visitedYes, visitedNo];

    // empty list to add checked days into
    var selectedChoice = [];


    // iterates through allDays list
    for (i=0; i < allDays.length; i++){
        // if checkbox is selected, add day to selectedDays list
        if  (allDays[i].checked){
            selectedDays.push(allDays[i].value);
        }
    }

    // iterates through choices list
    for (i=0; i < choices.length; i++){
        // if choice is selected, add choice to selectedChoice list
        if  (choices[i].checked){
            selectedChoice.push(choices[i].value);
        }
    }


    // checks if info was entered into name field
    if (name == "") {  
        alert("Name field must be filled out");
        document.getElementById("contactForm").addEventListener('submit', function(event){
            event.preventDefault();
        });
        return false;
    }

    // checks if info was entered into email field
    else if (email == "") {  
        alert("email field must be filled out");
        document.getElementById("contactForm").addEventListener('submit', function(event){
            event.preventDefault();
        });
        return false;
    }

    // checks if info was entered into phone field
    else if (phone == "") {  
        alert("Phone Number field must be filled out");
        document.getElementById("contactForm").addEventListener('submit', function(event){
            event.preventDefault();
        });
        return false;
    }

    // checks if selectedChoice is empty, if it is, prompts user to enter yes/no
    else if (selectedChoice.length === 0) {
        alert("Please select if you've visited our restaurant before (yes/no)");
        document.getElementById("contactForm").addEventListener('submit', function(event){
            event.preventDefault();
        });
        return false;
    }

    // checks if selectedDays is empty, if it is, user did not select a day for the options
    else if (selectedDays.length === 0) {
        alert("Please select atleast one day that we can contact you.");
        document.getElementById("contactForm").addEventListener('submit', function(event){
            event.preventDefault();
        });
        return false;
    }
    else {
        alert('Form successful submitted');
    }
    
}