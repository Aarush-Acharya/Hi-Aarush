#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {

  const message = "Hey there! I'm Aarush. Your friendly connected over http coder!";
  const twitterLink = "https://twitter.com/Aarush__Acharya";
  const githubLink = "https://github.com/Aarush-Acharya";
  const linkedinLink = "https://linkedin.com/in/aarush-acharya";
  const youtubeLink = "https://youtube.com/@codelon7163";

  // Create a colorful box using ANSI escape codes 
  const colorfulBox =
    `  \x1b[38;5;51m+---------------------------------------------------------------------+
  |   \x1b[38;5;159m${message}\x1b[38;5;51m   |
  +---------------------------------------------------------------------+
  | \x1b[38;5;219mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                        \x1b[38;5;51m|
  | \x1b[38;5;219mGitHub:\x1b[0m  \x1b[38;5;39m${githubLink}                          \x1b[38;5;51m|
  | \x1b[38;5;219mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                    \x1b[38;5;51m|
  | \x1b[38;5;219mYouTube:\x1b[0m  \x1b[38;5;39m${youtubeLink}                          \x1b[38;5;51m|
  +---------------------------------------------------------------------+\x1b[0m`;

  // Log a fun Emoticon
  console.log(`
  \t             
  \t   .-""-.          ( )-""""-( )           .-""-.
  \t  / O O  \\          /         \\          /  O O \\
  \t  |O .-.  \\        /   0 _ 0   \\        /  .-. O|
  \t  \\ (   )  '.    _|     (_)     |     .'  (   ) /
  \t   '.\`-\`     '-./ |             |\\.-'      '-'.'
  \t     \\         |  \\   \\     /   /  |         /
  \t      \\        \\   '.  '._.'  .'   /        /
  \t       \\        '.   \`'-----'\`   .'        /
  \t        \\   .'    '-._        .-'\\   '.   /
  \t         |/          \`'''''')    )    \\|
  \t         /                  (    (      ,\\
  \t        ;                    \\    '-..-'/ ;
  \t        |                     '.       /  |
  \t        |                       \`'---'\`   |
  \t        ;                                 ;
  \t         \\                               /
  \t          \`.                           .'
  \t            '-._                   _.-'
  \t              __/\`"  '  - - -  ' "\`\ \__
  \t           /\`            /^\\           \`\\
  \t           \\(          .'   '.         )/
  \t            '.(__(__.-'       '.__)__).'
  `);
  
  // End of console.log()


  // Log the colorful box in the terminal
  console.log(colorfulBox);
}

// Call the function to log your details
logDetails();

// Export logDetails() for use by any importing the package
module.exports = { logDetails };