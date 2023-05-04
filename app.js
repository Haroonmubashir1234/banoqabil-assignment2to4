function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);

    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "**Choose a date please!";
        return false;
    }
    else {
        var mdate = userinput.toString();
        var dobYear = parseInt(mdate.substring(0, 4), 10);
        var dobMonth = parseInt(mdate.substring(5, 7), 10);
        var dobDate = parseInt(mdate.substring(8, 10), 10);
        var today = new Date();
        var birthday = new Date(dobYear, dobMonth - 1, dobDate);
        var diffInMillisecond = today.valueOf() - birthday.valueOf();
        var year_age = Math.floor(diffInMillisecond / 31536000000);
        var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy Birthday!");
        }

        var month_age = Math.floor(day_age / 30);
        day_ageday_age = day_age % 30;

        var tMnt = (month_age + (year_age * 12));
        var tDays = (tMnt * 30) + day_age;

        if (dob > today) {
            document.getElementById("result").innerHTML = ("Invalid date input - Please try again!");
        }
        else {
            document.getElementById("result").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"
        }
    }
} 