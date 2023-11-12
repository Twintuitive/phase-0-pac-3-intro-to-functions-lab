function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string.toUpperCase() === string) {
    return 'YES INDEED!';
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string === "Let's have dinner together!") {
    return 'I would love to!';
  } else {
    // Handle the case when string is neither all uppercase nor all lowercase, and not "Let's have dinner together!"
  }
}

module.exports = {
  shout,
  whisper,
  logShout,
  logWhisper,
  sayHiToHeadphonedRoommate,
};