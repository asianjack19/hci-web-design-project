function checkValidation(){
    var name = document.forms['Reservation']['name'].value
    var phoneNumber = document.forms['Reservation']['phonenum'].value
    var numberOfPeople = document.forms['Reservation']['personnum'].value
    var date = document.forms['Reservation']['date'].value
    var time = document.forms['Reservation']['time'].value
    var coupon = document.forms['Reservation']['coupon'].value

    //Date Logic
    var currentDate = new Date()
    var cDay = parseInt(String(currentDate.getDate()).padStart(2, '0'))
    var cMonth = parseInt(String(currentDate.getMonth() + 1).padStart(2, '0')) //January is 0!
    var cYear = parseInt(currentDate.getFullYear())

    var date = date.toString()
    var sDay = parseInt(date.slice(8,10))
    var sMonth = parseInt(date.slice(5,7))
    var sYear = parseInt(date.slice(0,4))

    //Time Logic
    var hour = parseInt(time.slice(0,2))

    //Coupon Logic
    var code = ['Lucky Day', 'Mega Sale', 'Jackpot', 'Winner Winner Chicken Dinner', 'ABABA Steak321']
    for(var i=0; i<code.length; i++){
        if(code[i] == coupon){
            validCoupon = true
            break
        }
        else validCoupon = false
    }

    if(name=="" || phoneNumber=="" || numberOfPeople=="" || date=="" || time == "" || coupon == ""){alert("Please Complete the Form!")}
    else if(name.length <= 3){alert("Name Must be More Than 3 Letters")}
    else if(isNaN(phoneNumber)){alert("Phone Number must be Numeric!")}
    else if(numberOfPeople == 1 || numberOfPeople > 50){alert("Number of People Cannot be 1 or Exceed 50!")}
    else if(sYear < cYear || sMonth < cMonth || sDay < cDay){alert("Please Select Upcoming Dates")}
    else if(hour < 10 || hour > 20){alert("Please Select Time within 10:00-20:00")}
    else if(!validCoupon){alert("Invalid Coupon Code!")}
    else{alert("Reservation Success")}
}