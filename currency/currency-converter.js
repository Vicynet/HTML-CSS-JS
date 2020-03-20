function convert_currency() {
    var currencyFrom = document.getElementById("getCurrencyFrom").value;
    var currencyTo = document.getElementById("getCurrencyTo").value;
    var amount = document.getElementById("getAmount").value;
    var output = 0;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("error").innerHTML = "Please enter a valid amount!";
    }
    
    if ((currencyFrom == "ngn") && (currencyTo == "usd")) {
        output = amount * 0.0027;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "ngn" && currencyTo == "euro") {
        output = amount * 0.0025;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "ngn" && currencyTo == "pounds") {
        output = amount * 0.0023;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "usd" && currencyTo == "ngn") {
        output = amount * 360;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "usd" && currencyTo == "euro") {
        output = amount * 1.08;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "usd" && currencyTo == "pounds") {
        output = amount * 1.16;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "pounds" && currencyTo == "ngn") {
        output = amount * 426.60;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "pounds" && currencyTo == "euro") {
        output = amount * 0.93;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "pounds" && currencyTo == "usd") {
        output = amount * 0.96;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "euro" && currencyTo == "ngn") {
        output = amount * 396.39;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "euro" && currencyTo == "usd") {
        output = amount * 0.93;
        document.getElementById("showConversion").value = output;
    }
    else if (currencyFrom == "euro" && currencyTo == "pounds") {
        output = amount * 1.08;
        document.getElementById("showConversion").value = output;
    }
    else {
        
    }
}