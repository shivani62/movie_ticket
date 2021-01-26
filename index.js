function pic()
{
  mimg.src=movies.value+".jpeg"
}

function total()
 {

  var p = 100
  var amt = parseInt(qty.value) * p

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(bookingdate.value); //bookingdate is id
  var dayName = days[d.getDay()];

  if (dayName == "Sunday")
   {
    var dis = amt * 5 / 100
    var na = amt - dis
   }
  if(qty.value >= 10)
  {
    var dis = amt * 10 / 100
    var na = amt - dis
  }
  else
  {
    var dis=0
    var na=amt-dis
  }
  result.innerHTML = "&#8377;" + na
 // result.innerHTML = "&#8377;"+p+amt
}
