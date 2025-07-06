

//How many years till you turn 100?
function till100() {
  let age = prompt("How old are you?");
  if (age !== null) {
    let newAge = 100 - age;
    let message = "You have " + newAge + " years till you turn 100! YAYYY";
    alert(message);
  } else {
    alert("You need to enter your age");
  }
}

//Tell Us The Degree And We'll Tell You How Hot It Is
function hot() {
  let deg = prompt("What's the degree today?(in celsius)");
  if (deg > 35) {
    alert("IT'S SUPER HOT. YOU SOULD BE MELTING RIGHT NOW! 🔥");
  } else if (deg >= 35 && deg < 30) {
    alert("IT'S VERYYY HOTTTTT, OPEN THE AIR CONDITIONER, WE MIGHT DIE! 🌞");
  } else if (deg <= 30 && deg > 20) {
    alert("Mild. You'll feel warm 😎");
  } else if (deg <= 20 && deg > 4) {
    alert("IT'S COLD. Don't forget your sweater! ❄️🧥");
  } else if (deg <= 4) {
    alert("YOUR WATER IS TURNING INTO ICE NOW 🌨️🧊");
  }
}

//Where are you in the days of the week?
function days() {
  let day = prompt("What's today? (in English or start with 'ال' in Arabic)");
  switch (day) {
    case "السبت":
    case "الأحد":
    case "الحد":
      alert("الحمدلله بدأنا اسبوع جديد 😊");
      break;
    case "الاتنين":
    case "الثلاثاء":
    case "التلات":
    case "الأربعاء":
    case "الاربع":
      alert("شد حيلك لسة نص الاسبوع");
      break;
    case "الخميس":
    case "الجمعة":
    case "الجمعه":
      alert("ريح بقي؟");
      break;
    case "saturday":
    case "Saturay": //CAPITAL
    case "sunday":
    case "Sunday": //CAPITAL
      alert("We are starting another week! yayyy amazing. Go to work now");
      break;
    case "monday":
    case "Monday": //CAPITAL
    case "tuesday":
    case "Tuesday": //CAPITAL
    case "wednesday":
    case "Wednesday": //CAPITAL
      alert("Still in the middle of the week ☹️");
      break;
    case "thursday":
    case "Thursday": //CAPITAL
    case "friday":
    case "Friday": //CAPITAL
      alert("WEEKEND!!! GO TOUCH GRASS");
      break;
    default:
      alert("ده يوم ايه ده يا برنس؟");
  }
}

//Multiplication Table Of ...
function multiTable() {
  let num = prompt("Enter a number to get its multiplication table:");
  let table = "";
  for (let i = 1; i <= 12; i++) {
    table += `${num} * ${i} = ${num * i}\n`;
  }
  alert(table);
}

//Odd number till ...
function odd() {
  let num = prompt("Enter a number:");
  let odd = 1;
  let result = "";
  while (odd <= num) {
    result += `${odd}\n`;
    odd += 2;
  }
  alert(result);
}

//Guess the password
function guess() {
  const password = "admin123";
  let newPass = "";
  let firstTry = 1; //true
  do {
    if (firstTry) {
      newPass = prompt("Guess the password");
      firstTry = 0; //false
    } else if (newPass == null) {
      return;
    } else {
      newPass = prompt("Wrong!! Try again:");
    }
  } while (newPass !== password);
  {
    alert("Congrats!!! YOU'RE RIGHT");
  }
}

//Summation of two numbers
function add(a, b) {
  a = Number(prompt("Enter the first number:")); //why only string??
  b = Number(prompt("Enter the second number:"));
  sum = a + b;
  alert(`${a}+${b}= ${sum}`);
}

//Arithmetic series of ...
let series = function () {
  let num = Number(prompt("Enter a number:"));
  let result = 0;
  let series = "";
  for (let i = 1; i <= num; i++) {
    result += i;
    series += i;
    if (i < num) {
      series += "+";
    }
  }
  alert(series + "=" + result);
};

//Is the number even or odd?
let EvenOrOdd = () => {
  let numS = prompt("Enter a number:"); //still a string
  if (numS == 0) { //checking if it's empty
    return;
  }
  let num = Number(numS);//then converting it to a number
  if (num % 2 == 0) {
    alert("Even");
  } else if (num == null) {
    return;
  } else {
    alert("Odd");
  }
};

function nameBtn(){
  let rply=prompt("افندم؟ محتاج حاجه؟");
  if(rply!==null){
    alert("هفكر فالموضوع ده");
  }else{
    alert("كويس");
  }

}