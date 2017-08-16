# Friend Finder

## Overview
Friend Finder is similar to a dating app. This is a full stack RESTful API application which sets the HTML and API routes for posting and requesting data through Express and Node.JS. 

## Functionality
The application prompts the user to enter their name and link to their photo.  It then asks the user to answer 10 survey questions using a scale from 1 to 5.  

The application stores the user as a new "friend" in a JSON object and compares the answers from the existing friends to determine who is the best match.   Each answer is compared with the existing friends' answers, and an absolute value of the data variance is calculated for each question and pushed to a variance array.  The array is then summed to determine the total variance for each friend.  The existing friend with the lowest score variance is the most compatible and returned as the best match.  The best match's name and photo are then displayed in a modal.

The complete JSON object of existing friends can be viewed on the route api/friends. A link to the route is included on each page.

This application has been uploaded to Heroku and can be viewed here: [corey-friend-finder](https://corey-friend-finder.herokuapp.com/)
