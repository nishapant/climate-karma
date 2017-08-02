
class myTask{
  constructor(taskName, pointValue){
    this.taskName = taskName;
    this.pointValue = pointValue;
  }

}

var totalpoints = 0
function addPoints(pointVal){
  totalpoints += pointVal;
  alert(totalpoints);
}
