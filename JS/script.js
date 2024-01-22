$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  // this part is make the navbar menu button to auto collapse if user click anywhere on the page
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });


  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

function showNotificationForm() {
  var notificationForm = document.getElementById('notificationForm');
  notificationForm.classList.remove('hidden');
}

function hideNotificationForm() {
  var notificationForm = document.getElementById('notificationForm');
  notificationForm.classList.add('hidden');
}

function subscribeUser(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;

  // Simulate sending a notification to the user
  alert('Thank you for subscribing! You will receive notifications for updates.');

  // You would typically send the email to the server for registration and notification handling.
  // This is a simplified example.
  console.log('Email subscribed:', email);

  // Close the notification form
  hideNotificationForm();
}

function storeData() {
      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;

       if (name.trim() === '' || email.trim() === '') {
        alert('Please fill out all fields.');
        return;
      }

      // Create a data object
      var formData = {
        'name': name,
        'email': email
      };

      // Convert the data object to a JSON string
      var formDataJSON = JSON.stringify(formData);

      // Store the JSON string in localStorage
      localStorage.setItem('formData', formDataJSON);

      resetForm();

      // Optionally, you can provide feedback to the user
      alert('Data stored locally!');
    }

    function resetForm() {
      // Reset form values to their initial state
      document.getElementById('subscribeForm').reset();
    }