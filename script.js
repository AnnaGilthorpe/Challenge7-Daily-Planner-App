// let currentDay = document.querySelector('#currentDay');
// let today = moment();
// console.log(m.toString());
// console.log("hello world");

// var today = moment();
// let dayWeek = today.format("[Happy] dddd[!]")
// $("#currentDay").text(dayWeek);
// console.log(dayWeek);

// let currentHour = today.format("H")
// console.log(currentHour)

// let dataTime = document.querySelector('#data-time');





$(document).ready(function () {
    $('.saveBtn').on('click', function () {
      let value = $(this).siblings('.work-description').val()
      let time = $(this).parent().attr('id')

      localStorage.setItem(time, JSON.stringify(value))
    })

    function updateHours() {
        let currentHour = moment().hour();
        
        $('.time-area').each(function () {
            let currentBlockTime = parseInt($(this).attr('id').split('-')[0])
            
            if (currentBlockTime < currentHour) {
                $(this).addClass('past')
            } else if (currentBlockTime === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).removeClass('future')
            }
        })
    }

    updateHours()

    setInterval(updateHours, 540000)


    // bug, work out why local storage isnt dispalying after refresh

    // TODO: finish this section for every hour, ensure you have id with time
    // on each parent eg: '11-am'
    /// and class of work descriotion on each text area
    $('#9-am .work-description').val(localStorage.getItem('9-am'))
    $('#10-am .work-description').val(localStorage.getItem('10-am'))
    // dispaly the current day and time on page 
    // look up how to do this on moment
})