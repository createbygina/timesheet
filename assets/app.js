// Initialize Firebase
var config = {
    apiKey: "AIzaSyAn8ObDPgoSqzldGsu_F7hsFKCkV6_K80U",
    authDomain: "timesheet-64e74.firebaseapp.com",
    databaseURL: "https://timesheet-64e74.firebaseio.com",
    projectId: "timesheet-64e74",
    storageBucket: "timesheet-64e74.appspot.com",
    messagingSenderId: "931752376716"
};
firebase.initializeApp(config);

var database = firebase.database();

var emp = [];

var empNum = 0;
$("#submitbutton").on("click", function (event) {
    event.preventDefault();
    var newDiv = $("<tr class='newDiv'>");
    var name = $("<td class='name'>");
    var role = $("<td class='role'>");
    var date = $("<td class='date'>");
    var months = $("<td class='months'>");
    var rate = $("<td class='rate'>");
    var billed = $("<td class='billed'>");
    var nameInput = $("#input1").val().trim();
    var roleInput = $("#input2").val().trim();
    var dateInput = $("#input3").val().trim();
    var monthsInput = "months"
    var rateInput = $("#input4").val().trim();
    var billedInputs = "billed"
    name.append(nameInput);
    role.append(roleInput);
    date.append(dateInput);
    months.append(monthsInput);
    rate.append(rateInput);
    billed.append(billedInputs);
    newDiv.append(name, role, date, months, rate, billed);
    $("#tableBody").append(newDiv);


    var empobj = {
        name: nameInput,
        role: roleInput,
        date: dateInput,
        rate: rateInput
    }


    console.log(empobj)
    emp.push(empobj)
    console.log(emp)

    database.ref("/employee").on("value", function (snapshot) {



        database.ref("/employee").set({
            employees: emp
        })

        console.log(snapshot.val().name+ "val")

    });







})