const moment = require('moment');

// Function to update WhatsApp bio based on current time, date, and day
function updateWhatsAppBio() {
    // Get current date and time
    let currentTime = moment();
    
    // Format date, day, hour, and minute
    let date = currentTime.format('MM/DD/YYYY');
    let day = currentTime.format('dddd');
    let timeString = currentTime.format('HH:mm');

    // Set bio
    let bio = `Date: ${date}, Day: ${day}, Time: ${timeString} #JASON MOMANYI©2024`;
    
    // Code to update WhatsApp bio goes here
    // Example: Replace the line below with actual code to update WhatsApp bio
    console.log("Updating WhatsApp bio to: " + bio);
}

// Call updateWhatsAppBio function every minute
setInterval(updateWhatsAppBio, 10000); // 10000 milliseconds = 10 sec

