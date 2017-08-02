var taskArray = [];
class MyTask{
  constructor(taskName, pointValue){
    this.taskName = taskName;
    this.pointValue = pointValue;
  }

  printName(){
    return this.taskName;
  }

  addPointValue(myVal) {
    this.pointValue += myVal;
  }

  getPoints(){
    return this.pointValue;
  }
}

taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("No red meat for a day", 0));
taskArray.push(new MyTask("Take a 5 minute shower", 0));
taskArray.push(new MyTask("Use nondisposable dinnerware", 0));
taskArray.push(new MyTask("Use your own bag (not plastic)", 0));
taskArray.push(new MyTask("Buy organic food", 0));
taskArray.push(new MyTask("Carpool", 0));
taskArray.push(new MyTask("Recycle", 0));
taskArray.push(new MyTask("Use public transportation", 0));
taskArray.push(new MyTask("Vegetarian for a day", 0));
taskArray.push(new MyTask("Bike or walk to work", 0));
taskArray.push(new MyTask("Compost your food", 0));
taskArray.push(new MyTask("Contact your representative", 0));
taskArray.push(new MyTask("Plant a tree", 0));
taskArray.push(new MyTask("Vegan for a day", 0));


var totalpoints = 0;

function addPoints(pointVal, indexNum){
  totalpoints += pointVal;

  taskArray[indexNum].addPointValue(pointVal);

  switch(indexNum){
    case 0:
      document.getElementById('p0').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 1:
      document.getElementById('p1').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 2:
      document.getElementById('p2').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 3:
      document.getElementById('p3').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 4:
      document.getElementById('p4').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 5:
      document.getElementById('p5').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 6:
      document.getElementById('p6').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 7:
      document.getElementById('p7').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 8:
      document.getElementById('p8').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 9:
      document.getElementById('p9').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 10:
      document.getElementById('p10').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 11:
      document.getElementById('p11').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 12:
      document.getElementById('p12').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 13:
      document.getElementById('p13').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    case 14:
      document.getElementById('p14').innerHTML="Your Points: " + taskArray[indexNum].getPoints().toString();
      break;
    default:
      break;
  }
  document.getElementById('stats').innerHTML = "Here are your recent stats: " + totalpoints.toString();
}
