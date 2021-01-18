class Candidate{

constructor(){

    this.name = null
    this.score = 0
    this.time = 0
    this.count=0
  

}
getCount(){
    var playerCountRef = database.ref('candidateCount');
    playerCountRef.on("value",(data)=>{
      candidateCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      candidateCount: count
    });
  }

update(){


    var canIndex = "candidates/candidate"+ candidateCount
    database.ref(canIndex).set({

        name: this.name
    })
}


questions(){
    gameState=2;
    var ele1 = createElement('h3');
    var button1= createRadio();
    button1.position(100,200)

    this.count=this.count+1
    console.log("the count:"+this.count)
    switch(this.count){

case 1 :
  ele1.html("What is the minimum age for driving a motorcycle without gear?")
  ele1.position(150, 150)
button1.option("16 years")
button1.option("18 years")
button1.option("21 years")
correct[this.count] = "16 years"

break;

case 2:
  ele1.html("What should you do when you see a traffic sign of a school nearby?")
  ele1.position(150, 150)
button1.option("Stop the vehicle")
button1.option("Slow down and proceed carefully")
button1.option("Press horn and proceed in the same speed")
correct[this.count]="Slow down and proceed carefully"

break;

case 3:
  ele1.html("Before you overtake a vehicle what should you keep in mind?")
  ele1.position(150, 150)
button1.option("The road ahead should be clearly visible and overtaking should be safe");
button1.option("The road is not safe");
button1.option("There are no vehicles ahead");
correct[this.count]="The road ahead should be clearly visible and overtaking should be safe"

break;

case 4:
  ele1.html("If a driver sees the sign for ‘slippery road ahead’, he/she must")
  ele1.position(150, 150)
button1.option("Drive faster")
button1.option("Change gear and reduce speed")
button1.option("Apply brake but proceed in the same speed")
correct[this.count]="Change gear and reduce speed"

break;

case 4 :
  ele1.html("If a driver sees the sign for ‘slippery road ahead’, he/she must")
  ele1.position(150, 150)
button1.option("Drive faster")
button1.option("Change gear and reduce speed")
button1.option("Apply brake but proceed in the same speed")
correct[this.count] = "Change gear and reduce speed"

break;

case 5:
  ele1.html("Overspeeding is...")
  ele1.position(150, 150)
button1.option("Not an offence and can be neglected")
button1.option("Is an offence but no charges are pressed against you")
button1.option("an offence that could lead to your driving licence being cancelled or suspended")
correct[this.count]="an offence that could lead to your driving licence being cancelled or suspended"

break;

case 6 :
  ele1.html("In case you see a vehicle that has met with an accident with injured passengers inside, you should")
  ele1.position(150, 150)
button1.option("Stop your vehicle and report the matter to the nearest police station")
button1.option("Take the vehicle to the closest police station and report the accident")
button1.option("Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours")
correct[this.count] = "Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours"

break;

case 7 :
  ele1.html("The only vehicle which is allowed to drive at a speed of 60km/ hour is")
  ele1.position(150, 150)
button1.option("Motor car")
button1.option("Heavy bus/trucks")
button1.option("All of the above")
correct[this.count] = "Motor car"

break;

case 8 :
  ele1.html("Suppose you are driving on a road with two lanes. The vehicle to the front of you is driving slowly and the road ahead is clear and safe to overtake. What should you do?")
  ele1.position(150, 150)
button1.option("Overtake the vehicle from the left side of the vehicle ahead")
button1.option("Overtake the vehicle from the right side of the vehicle ahead")
button1.option("Overtake if the road is wide enough")
correct[this.count] = "Overtake the vehicle from the right side of the vehicle ahead"

break;

case 9 :
  ele1.html("If you see a yellow light at the traffic signal, you should")
  ele1.position(150, 150)
button1.option("Reduce your vehicle speed and proceed with caution")
button1.option("Slow the vehicle")
button1.option("Stop the vehicle")
correct[this.count] = "Reduce your vehicle speed and proceed with caution"

break;

case 10 :
  ele1.html("Be careful while overtaking vehicles marked with ‘L’( learner driver) because")
  ele1.position(150, 150)
button1.option("You might crash into them")
button1.option("You might crash into people on the road")
button1.option("The learner driver might get nervous and make a mistake")
correct[this.count] = "The learner driver might get nervous and make a mistake"

break;

case 11 :
  ele1.html("If a vehicle is parked on the side of a road at night")
  ele1.position(150, 150)
button1.option("The vehicle should be locked")
button1.option("Park light should remain on")
button1.option("All of the above")
correct[this.count] = "All of the above"

break;

case 12 :
  ele1.html("You should never try to overtake a cyclist when")
  ele1.position(150, 150)
button1.option("Driving on a narrow road and just before you are about to turn left")
button1.option("On a crowded street")
button1.option("All of the above")
correct[this.count] = "Driving on a narrow road and just before you are about to turn left"

break;

case 13 :
  ele1.html("Fog lamps should be used when")
  ele1.position(150, 150)
button1.option("There is mist")
button1.option("At night")
button1.option("When the vehicle opposite is not using the dim light")
correct[this.count] = "There is mist"

break;

case 14 :
  ele1.html("If an ambulance is approaching")
  ele1.position(150, 150)
button1.option("No preference should be given")
button1.option("Provide passage if there are no vehicles on the other side")
button1.option("Allow free passage by moving to the side of the road")
correct[this.count] = "Allow free passage by moving to the side of the road"

break;

case 15 :
  ele1.html("When you are moving off from behind a parked car, you should")
  ele1.position(150, 150)
button1.option("Give a signal, check your rear and side mirrors to back out carefully")
button1.option("Move your vehicle as soon as possible")
button1.option("Just give signals and proceed to move")
correct[this.count] = "Give a signal, check your rear and side mirrors to back out carefully"

break;

case 16 :
  ele1.html("When should you stop your vehicle?")
  ele1.position(150, 150)
button1.option("When approaching the red traffic light")
button1.option("When signaled by a police officer or involved in an accident")
button1.option("All of the above")
correct[this.count] = "All of the above"

break;

default:text("Add more quest",100,100)
break;
}

var submitButton= createButton("Submit")
submitButton.position(150,230)


submitButton.mousePressed(()=>{
    
  ans[this.count]=button1.value()
   console.log("Your and is: "+ans) 
  ele1.hide()
   button1.hide()
  submitButton.hide()
  
   if(correct[this.count]===ans[this.count]){
    score = score + c100
    console.log(score)
    gameState=1
  }
 else{gameState = 1}
})




}
}