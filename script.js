
    document.querySelector('button').addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var pray = document.getElementById('pray').value;
        var message = document.getElementById('message').value;

        var templateParams = {
            name: name,
            email: email,
            pray: pray,
            message: message
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message.');
            });
    });
