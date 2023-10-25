document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('button');
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_rhx2j1i';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Connect';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Connect';
        alert(JSON.stringify(err));
      });
  });
});


// Add this to your "script.js" file

// // Initialize EmailJS with your User ID
// emailjs.init('user_tOANC1IVRQBGKu63h');

// // Function to send an email when the form is submitted
// function sendEmail() {
//   emailjs.send("service_39fz4z3", "template_rhx2j1i", {
//     from_name: document.getElementById("from_name").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,
//   })
//   .then(function(response) {
//     console.log("Email sent successfully", response);
//   }, function(error) {
//     console.error("Email could not be sent", error);
//   });
// }

// // Attach the sendEmail function to your form's submit button
// document.getElementById("button").addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the form from actually submitting
//   sendEmail(); // Call the sendEmail function to send the email
// });
