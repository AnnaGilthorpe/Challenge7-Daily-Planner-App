// Using moment to enter today's date at the top of that page
var today = moment();
let dayWeek = today.format("[Happy] dddd Do MMMM[!]")
$("#currentDay").text(dayWeek);
console.log(dayWeek);


//On click that sets items - current time and value that is entered into the text area
$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        let value = $(this).siblings('.work-description').val()
        let time = $(this).parent().attr('id')

        localStorage.setItem(time, JSON.stringify(value))
    })

    // Update hours function - identifying where the currentBlockTime is before, the same, or after the currentHour (to ensure correct CSS formatting can take place)
    function updateHours() {
        let currentHour = moment().hour();
        console.log(currentHour)

        $('.time-area').each(function () {
            let currentBlockTime = parseInt($(this).attr('id'))
            console.log(currentBlockTime)
            if (currentBlockTime < currentHour) {
                $(this).addClass('past');
            } else if (currentBlockTime === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present');
            } else if (currentBlockTime > currentHour)  {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future');
            }
        }

        )
    }

    //getting the page to update every 9mins
    updateHours()
    setInterval(updateHours, 540000)


    // bug, work out why local storage isnt dispalying after refresh



    $('#9-am .work-description').val(localStorage.getItem('9-am'))
    $('#10-am .work-description').val(localStorage.getItem('10-am'))
})