var util = require('util'),
    twitter = require('twitter'),
	readline = require('readline');
	dotenv = require('dotenv').config();  
    
	
var client = new twitter ({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Hello there!");
rl.question('Would you like to get tweets?  ', (answer) => {
    if (answer == "Yes") {
        rl.question('Please enter the USERID for tweets? ', (user)=> {

            var options = {
                screen_name: user,
                count: 3
            };
			client.get('statuses/user_timeline', options, function(err, data, response) {
				console.log(err, data, response.body);
                for (var i = 0; i < data.length; i++) {
                    var perc = i + 1;
                    console.log('\nTweets ' + '----> ' + data[i].text + '\n');
                }
            });

            rl.close();
        });		
	} else if (answer == "No") {        
                console.log("Thank you for stopping by.")
        
    } else {
        console.log('Please enter Yes or No to use this app');
    }

});		