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
    alert(this.pointValue);
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
  alert(totalpoints);
}
