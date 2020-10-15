$(document).ready(function(){
            sendMail()
        })
    function sendMail() {
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'b958ccc599d054ca9d93ddb220b0dc76-us2',
        'message': {
          'from_email': 'pf@td.io',
          'to': [
              {
                'email': 'toman.david@me.com',
                'name': 'check-in',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'check-in',
          'html': ''
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
}
