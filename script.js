document.getElementById("confirmButton").addEventListener("click", function () {
    emailjs.send("service_b54w34f", "template_qup48ia", {
      message: "Plants have been watered",
      to_email: "janesmostert@gmail.com" // Replace with your email
    })
      .then(function (response) {
        alert("Notification sent, Thank you!");
      }, function (error) {
        alert("Error sending notification");
      });
  });