function rsvpSubmit ()
{
    var name = $('#namersvp').val();
    var selection = $('#rsvp').val();

    var saveData = $.ajax({
        type: 'POST',
        url: "https://script.google.com/macros/s/AKfycbzXngVa-GIUoHABI1X-y1Vcpc_2r9pUeICOUZrOvqZSFScJ4bxnDED8ChDZkxS-V92O/exec",
        data: {
            nama: name,
            kehadiran: selection
        },
        success: function(resultData) { alert("Thanks for your confirmation!") }
  });

  saveData.error(function() { alert("Something went wrong"); });    
}