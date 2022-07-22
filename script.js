/* .js files add interaction to your website */

/*Add your JavaScript here*/

//personality quiz js

var abusiveScore = 0;
var okayScore = 0;

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


q1a1.addEventListener("click", abusive);
q1a2.addEventListener("click", okay);

q2a1.addEventListener("click", abusive);
q2a2.addEventListener("click", okay);

q3a1.addEventListener("click", abusive);
q3a2.addEventListener("click", okay);


function abusive(){
  abusiveScore += 1;
  questionCount +=1;
  console.log("Abusive Score = " + abusiveScore + "Question Count = " + 
  questionCount);

  disableBtnQ1();  //my trials
  disableBtnQ2(); //my trials
  
  if(questionCount == 3){
    console.log("Yaay! You finished the quiz!");
    disableBtnQ3(); //my trials
    
    updateResult();
    
  }
  
}

function okay(){
  okayScore += 1;
  questionCount += 1;
  console.log("Okay Score = " + okayScore + "Question Count = " +
  questionCount);

  disableBtnQ1();  //my trials
  disableBtnQ2(); //my trials

  if(questionCount == 3){
    console.log("Yaay! You finished the quiz!");
    disableBtnQ3(); //my trials   
   
    updateResult();
   
  }
  
}

function updateResult(){
  if(abusiveScore >= 2){
    result.innerHTML = "It looks like you have some abusive ways in your parenting.  Although you may care a lot for your child, it is important to communiate without violence or neglect.  Find some help.";
    console.log("It looks like you have some abusive ways in your parenting.  Although you may care a lot for your child, it is important to communiate without violence or neglect.  Pay attention to your child's needs and listen to them.  Find some help.");
  }
  else if(okayScore >= 2){
    result.innerHTML = "It looks like you've got this parenting thing in the bag.  Of course there is always room to improve.  Make sure to listen to your child and pay attention to their needs.  It is important to not neglect them ever and always be calm when addressing an issue. Keep up the good work!  But if you ever feel like something is wrong make sure to get help.";
    console.log("It looks like you've got this parenting thing in the bag.  Of course there is always room to improve.  Make sure to listen to your child and pay attention to their needs.  It is important to not neglect them ever and always be calm when addressing an issue. Keep up the good work!  But if you ever feel like something is wrong make sure to get help.");
  }
}


//my trials functions start
function disableBtnQ1() {
    if(questionCount > 0){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    }
}

function disableBtnQ2() {
    if(questionCount > 1){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    }
}

function disableBtnQ3() {
    if(questionCount == 3){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    }
}

//my trials functions end


  restart.addEventListener("click", again);

function again(){
  abusiveScore = 0;
  okayScore = 0;
  questionCount = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("result").innerHTML = "Your result is...";
  
}


//overlay js

function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}
window.addEventListener("load", showOverlay);

// Add event listener to proceed by closing the overlay when clicked
var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}



//storybox js

var factList = [
  "At the point when Marsha Valenzuela had her two youngest children taken away from her, it was clear she was unable to provide care for them or herself. She was dealing with addiction problems that lasted decades long. She wasn’t eating, got arrested, and ended up homeless.  It was when she hit rock bottom she finally found the strength to get better and become the mother she knew her children deserved.  She focused on treatment, worked with attorneys and case managers, and was finally reunited with her children. Her youngest is currently going to school and Valenzuela is working at a non-profit where she supports families in foster care.",
 

  "Denver and Miranda were already parents of a small son when they decided to become foster parents. Soon, an infant child was placed with them. They weren’t quite sure how their son would react to the new family vibes, but that didn't end up being an issue. He got home and ran up the stairs. He was jumping up and down and saying ‘Baby! Baby! Baby!’ recalls Miranda. And it wasn’t just an initial excitement. After a difficult day of their foster child crying, Miranda and Denver’s son offered to hold their foster child and soothe him.For Denver and Miranda, the experience has cemented their belief that anyone can become a foster parent. They believe that is the reason they are there.  To keep them safe.",
  
  "Amber was removed from her home when she was only six, along with her three-year-old brother. On top of the trauma that comes with losing a home, a routine, parents, and friends, Amber couldn’t shake the idea that maybe this was partly her fault.  She knew something wasn’t quite right at home, so she asked an adult for help. When her mother’s abusive partner found out, he took it out on her. Soon after, she was placed in foster care. In her mind, asking for help had ruined her life, so she stopped asking and withdrew.  Amber switched homes three times and temporarily got separated from her brother before an aunt took her in and started the healing process. Her aunt talked to her about the situation, something other foster parents and social workers had never done. Her aunt listened, gave Amber room to heal, and committed to consistently being there for her.Over time, that constant presence of love allowed Amber to trust someone again. 'I'm the person that I am today because of what I experienced. But also because I had that consistent adult in my life, which was my aunt who I call my mom,' says Amber.  Today, she works for Hand in Hand, helping other foster children and families build trust, heal, and learn to build a sense of home when everything seems lost.",
  
   "As a child, Weston Gallo knew he was different. He would later discover that he identified as non-binary and gay. Growing up in a conservative, rural, religious family was never easy for Weston, but when he finally came out to his family, things got even worse. When he was 14, Weston was placed in foster care due to abuse and negligence from his family. Placement wasn’t easy. Many foster families couldn’t accept Weston for who he was even as he struggled to figure out his own identity. At one point, he considered ending his life. That was, until he met his two dads. An LGBT couple took placement of Weston and immediately his life changed. They showed him how to be proud of his identity, taught him how to deal with racism, homophobia, and other types of discrimination. They welcomed him as the person he was, rather than the labels others put on him. Weston says that if it wasn't for his dads taking a chance on him and helping him embrace his orientation and race, he wouldn't be there."];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}