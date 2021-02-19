var app = document.getElementById('text');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Hey Shatakshi ,')
  .pauseFor(1000)
  .typeString(' I hope you had a great day.')
  .pauseFor(1000)
  .typeString("Your visit to this website means you got the parcel. That's great.")
  .pauseFor(1000)
  .typeString("Now to let you know , this package doesn't contain anything which will bother you or anyone .I had nowhere to keep , so sent you . Now you can open the package and have a look.")
  .pauseFor(3000)
  .typeString("Liked it??..")
  .pauseFor(1000)
  .typeString("Amazing..")
  .pauseFor(1000)
  .typeString("Do you remember when we were on call and you insisted to know which Sketching I was working on ?.. and i refused to tell you and actually made a fake excuse that it wasn't completed yet... and then I mentioned that the character I was drawing have a sexy collarbone and then you googled every possible female character and then come up with 'TU WONDER WOMAN BNA RHA NAA ?..'")
  .pauseFor(1000)
  .typeString("Well that was fun!! and guess what you were right.. you were my wonder woman...")
  .pauseFor(1000)
  .typeString("So Happy Birthday wonder woman... My wishes are the earliest...")
  .pauseFor(1000)
  .start();