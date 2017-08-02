var taskArray = [];
class MyTask{
  constructor(taskName, pointValue){
    this.taskName = taskName;
    this.pointValue = pointValue;
  }

  printName(){
    return this.taskName;
  }

}
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));
taskArray.push(new MyTask("Bring a reusable bottle", 0));


var totalpoints = 0
function addPoints(pointVal){
  totalpoints += pointVal;
  alert(totalpoints);
  alert(taskArray[0].printName());
}
