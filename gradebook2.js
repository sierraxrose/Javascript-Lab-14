$(document).ready (function () {

    // create array to hold objects
    let grades = [];

    // create object for names and percentages
    let student1 = {name: "Julia", percentage: "75%"};
    let student2 = {name:"Mike", percentage: "32%"};
    let student3 = {name: "Sarah", percentage: "6%"};
    let student4 = {name: "Tyler", percentage: "100%"};
    let student5 = {name: "Luke", percentage: "49%"};


    // sort names
    $("#name").click (function sortNames (a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    })

    //sort names
    name.sort(sortNames);

    // place names in paragraph
    $("p#names").text(name);


    // sort percentages
    $("#percent").click( function sortPercents (a,b) {
        if (a.percentage < b.percentage)
            return -1;
        if (a.percentage > b.percentage)
            return 1;
        return 0;
    })

    // sort percents
    percentage.sort(sortPercents);

    // place percentages in paragraph
    $("p#percentages").text(percentage);

    // add objects to grades array
    grades.push(student1,student2,student3,student4,student5);



})
