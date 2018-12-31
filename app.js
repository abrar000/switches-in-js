
const color = "purple";

switch(color){
  case "red":
  document.write("Color is Red");
  break;
  case "green":
  document.write("Color is green");
  break;
  case "orange":
  document.write("Color is orange");
  break;
  case "yellow":
  document.write("Color is yellow");
  break;
  case "purple":
  document.write("Color is purple");
  break;
  case "grey":
  document.write("Color is grey");
  break;
  case "pink":
  document.write("Color is pink");
  break;
  default:
  document.write("Color not found");
  break;
}



let day;

switch(new Date().getDay()){
  case 0:
  day = "Sunday";
  break;
  case 1:
  day = "Monday";
  break;
  case 2:
  day = "Tuesday";
  break;
  case 3:
  day = "Wednesday";
  break;
  case 4:
  day = "Thursday";
  break;
  case 5:
  day = "Friday";
  break;
  case 6:
  day = "Saturday";
  break;
}

document.write(`<br>Today is: ${day}`);