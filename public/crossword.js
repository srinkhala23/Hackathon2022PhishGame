// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
				//across
			 	{
					clue: "A sequence of words or text used to control access to a computer; similar to a password.",
					answer: "passphrase",
					position: 3,
					orientation: "across",
					startx: 10,
					starty: 4
				},
			 	{
					clue: "Unauthorized access to a network, information systems, or application.",
					answer: "intrusion",
					position: 5,
					orientation: "across",
					startx: 3,
					starty: 8
				},
				{
					clue: "The address of a webpage. Check the validity of it before clicking on it.",
					answer: "url",
					position: 7,
					orientation: "across",
					startx: 14,
					starty: 9
				},
				{
					clue: "Fraudulent text messages purporting to be from reputable companies in order to trick individuals into revealing personal information.",
					answer: "smishing",
					position: 11,
					orientation: "across",
					startx: 10,
					starty: 11
				},
				{
					clue: "A fraudulent email purportedly from a reputable company attempting to get personal information.",
					answer: "phishing",
					position: 13,
					orientation: "across",	
					startx: 2,
					starty: 13
				},
				{
					clue: "The process of taking plain text and scrambling it into an unreadable format.",
					answer: "encryption",
					position: 14,
					orientation: "across",	
					startx: 13,
					starty: 13
				},				
			    {
					clue: "The “I” in the C-I-A Triad; protection from unauthorized changes.",
					answer: "integrity",
					position: 16,
					orientation: "across",
					startx: 8,
					starty: 15
				},
			{
					clue: "Facebook, Twitter, Instagram, etc. (Two words)",
					answer: "socialmedia",
					position: 17,
					orientation: "across",
					startx: 1,
					starty: 17
				},
			{
					clue: "Should be constructed of upper and lower case letters, numbers, and special characters.",
					answer: "password",
					position: 18,
					orientation: "across",
					startx: 13,
					starty: 17
				},
			{
					clue: "Fraudulent phone calls or voice messages purporting to be from reputable companies in order to trick individuals into revealing personnel information.",
					answer: "vishing",
					position: 19,
					orientation: "across",
					startx: 10,
					starty: 19
				},
			{
					clue: "Threatening behavior facilitated through electronic means such as texting.",
					answer: "cyberbullying",
					position: 20,
					orientation: "across",
					startx: 3,
					starty: 21
				},
			
				//down
				{
					clue: "A wireless technology standard used over short distances using short-wavelength UHF radio waves.",
					answer: "bluetooth",
					position: 1,
					orientation: "down",
					startx: 5,
					starty: 1
				},									
				{
					clue: "Hardware or software designed to prevent unauthorized access to or from a private network.",
					answer: "firewall",
					position: 2,
					orientation: "down",
					startx: 16,
					starty: 2
				},
				{
					clue: "A type of malicious software designed to block access to a computer system until a sum of money is paid.",
					answer: "ransomware",
					position: 4,
					orientation: "down",
					startx: 11,
					starty: 6
				},
				{
					clue: "Verifying identity.",
					answer: "authentication",
					position: 6,
					orientation: "down",
					startx: 14,
					starty: 8
				},
				{
					clue: "The “A” in the C-I-A Triad. It ensures authorized users have access.",
					answer: "availability",
					position: 8,
					orientation: "down",
					startx: 4,
					starty: 10
				},
				{
					clue: "Widely used in-home network technology that allows for wireless connection in interfacing with the internet.",
					answer: "wifi",
					position: 9,
					orientation: "down",
					startx: 20,
					starty: 10
				},
				{
					clue: "A flaw or weakness in a computer system that could be exploited to violate the system’s security.",
					answer: "vulnerability",
					position: 10,
					orientation: "down",
					startx: 22,
					starty: 10
				},
			{
					clue: "Security tool that creates a secure, encrypted connection between you and the Internet (acronym).",
					answer: "vpn",
					position: 12,
					orientation: "down",
					startx: 18,
					starty: 12
				},
			{
					clue: "Harmful computer programs such as viruses, worms, and trojans used by hackers to gain access to your computer and cause destruction.",
					answer: "malware",
					position: 15,
					orientation: "down",
					startx: 6,
					starty: 15
				},

				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
