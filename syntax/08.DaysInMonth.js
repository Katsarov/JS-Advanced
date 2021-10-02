
    function numOfDays(month, year){
        let d = new Date(year, month, 0).getDate();
        console.log(d);
    }

    numOfDays(1, 2012);
    numOfDays(2, 2024);


