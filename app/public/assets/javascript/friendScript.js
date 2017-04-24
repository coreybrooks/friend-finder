   $(".formSubmit").on("click", function(event) {
		event.preventDefault();
		var isValid;
		var link = $("#photo").val().trim();
		var photoLink = "<img class='photos' src='" + link + "'/>";

		//new friend object to be posted	
		var newFriend = {name: $("#name").val().trim(), photo: photoLink, 
		scores: [$("#q1").val().charAt(0), $("#q2").val().charAt(0), $("#q3").val().charAt(0),
		$("#q4").val().charAt(0), $("#q5").val().charAt(0), $("#q6").val().charAt(0), $("#q7").val().charAt(0),
		 $("#q8").val().charAt(0), $("#q9").val().charAt(0), $("#q10").val().charAt(0),]}
		console.log(newFriend); 
        console.log(newFriend.scores);

		//validate if all questions were answered
		for (i=0; i<newFriend.scores.length; i++) {
			if (newFriend.scores[i] === "s") {
				isValid = "false";
			}
			else isValid = "true";
		}

		//validate whether the user completed the form
		if (newFriend.name==="" || link==="" || isValid === "false") {
			alert("Please complete the form before proceeding!");
		}
        else { 
			postRequest();
		}
        
        //AJAX post request
		function postRequest() {
			$.post("/api/survey", newFriend, function(data) {
				if (data || data === 0) {
					alert("Boom! added to the official friends list");
					console.log(data);
				}
				else {
					alert("something went wrong, you have not been added");
				}

				$("#name").val("");
				$("#photo").val("");
				$(".select").val("select an option");

				runFriendsQuery(data);
			});
		}
	});

    function runFriendsQuery(match) {
		console.log("runFriendsQuery is working");

      //get the location of the root page.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: currentURL + "/api/friends", method: "GET" })
      .done(function(friendsData) {

        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/api/friends");
        console.log("------------------------------------");

        console.log(friendsData[match]);
        console.log("------------------------------------");

        //the best match is the existing friend with the match index
	    var bestMatch = friendsData[match];
		$("#bestMatchName").html(bestMatch.name);
		$("#bestMatchPhoto").html(bestMatch.photo);
		$("#myModal").modal("toggle");
      });
    }