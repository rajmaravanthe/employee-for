var employees = [
    {
        name: "Rajesha Maravanthe",
        age: "28",
        salary: "1500000 per annum",
        address: {
            city: "Kundapura",
            state: "Karnataka",
            pin: "576224"
        }
    },
    {
        name: "Mahesh Maravanthe",
        age: "23",
        salary: "150000 per annum",
        address: {
            city: "Kundapura",
            state: "Karnataka",
            pin: "576222"
        }
    },
    {
        name: "Santhosh Maravanthe",
        age: "26",
        salary: "3500000 per annum",
        address: {
            city: "Udupi",
            state: "Karnataka",
            pin: "573224"
        }
    },
    {
        name: "Sai Baba ",
        age: "58",
        salary: "3000000 per annum",
        address: {
            city: "Maravanthe",
            state: "Karnataka",
            pin: "576124"
        }
    },
    {
        name: "Ganesh Ekadanta",
        age: "25",
        salary: "5000000 per annum",
        address: {
            city: "Mangalore",
            state: "Karnataka",
            pin: "571224"
        }
    }
];
var j = 0;
for(j in employees) { // get array in variable
    document.write("Name: "+employees[j].name+"<br>"); // display and give break
    document.write("Age: "+employees[j].age+"<br>");
    document.write("Salary: "+employees[j].salary+"<br>");
    document.write("City: "+employees[j].address.city+"<br>");
    document.write("State: "+employees[j].address.state+"<br>");
    document.write("Pin: "+employees[j].address.pin+"<br>.............................................<br>"); // make some dots to divide each employee
}