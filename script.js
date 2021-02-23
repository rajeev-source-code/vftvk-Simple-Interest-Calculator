function compute()
{
    p = document.getElementById("principal").value;

    if (p == "" || p <= 0) {
    		alert('Please enter a valid Amount number');
  			return;	
  	}
    
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    fy = new Date().getFullYear() + parseInt(y) - 1;
    
    document.getElementById("result").innerHTML = "If you deposit <span class='resultNumber'>" + p + "</span>, <br> at an interest rate of <span class='resultNumber'>" + r + "%</span>. <br> You will receive an amount of <span class='resultNumber'>" + (p * r/100 * y) + "</span>,<br> in the year <span class='resultNumber'>" + fy +"</span>";
}

function showInterestRate(val) {
    document.getElementById("interestRateValue").innerHTML = val + "%";
}

function initPage() {
	document.getElementById("interestRateValue").innerHTML = document.getElementById("rate").value  + "%";
}
