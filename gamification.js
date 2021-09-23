
// Variables name breakdown:
// procent/can/c/canvas = video progress bar
// procent2/can2/d/canvas2 = assignment progress bar
// procent3/can3/e/canvas3 = total course progress bar 

// Starts with Progression Tool and Ends with Achievements Tool
//--------------------------------------------------------------------------------------------------------------------------------//

// Progresion Tool
// Script runs on page load 
window.onload = function() {

  //Reset all course achievements on page reload
  Achievements.fullreset();
  
  //Getter elements
  var can = document.getElementById('canvas'), spanProcent = document.getElementById('procent'), c = can.getContext('2d');
  var can2 = document.getElementById('canvas2'), spanProcent2 = document.getElementById('procent2'), d = can2.getContext('2d');
  var can3 = document.getElementById('canvas3'), spanProcent3 = document.getElementById('procent3'), e = can3.getContext('2d');

  //Initialisation of progress bars
  var posX = can.width / 2,
      posY = can.height / 2,
      fps = 1000 / 200,
      procent = 0,
      oneProcent = 360 / 100,
      // Default Value = 0%
      result = oneProcent * 0;

  var posX2 = can2.width / 2,
      posY2 = can2.height / 2,
      fps2 = 1000 / 200,
      procent2 = 0,
      oneProcent2 = 360 / 100,
      // Default Value = 0%
      result2 = oneProcent2 * 0;

  var posX3 = can3.width / 2,
      posY3 = can3.height / 2,
      fps3 = 1000 / 200,
      procent3 = 0,
      oneProcent3 = 360 / 100,
      // Default Value = 0%
      result3 = oneProcent3 * 0;
  
  c.lineCap = 'round';
  d.lineCap = 'round';
  e.lineCap = 'round';
  arcMove();
  
  // Sets arcs to default positioning for all progress bars 
  function arcMove(){
    var deegres = 0;
    
    // Sets interval to smallest displayable value
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = deegres / oneProcent;

      d.clearRect(0, 0, can2.width, can2.height);
      procent2 = deegres / oneProcent2;

      e.clearRect(0, 0, can3.width, can3.height);
      procent3 = deegres / oneProcent3;

      spanProcent.innerHTML = procent.toFixed();

      spanProcent2.innerHTML = procent2.toFixed();

      spanProcent3.innerHTML = procent3.toFixed();

      c.beginPath();
      c.arc(posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
      c.strokeStyle = '#b1b1b1';
      c.lineWidth = '10';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#ff0000';
      c.lineWidth = '10';
      c.arc(posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
      c.stroke();

      d.beginPath();
      d.arc(posX2, posY2, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
      d.strokeStyle = '#b1b1b1';
      d.lineWidth = '10';
      d.stroke();

      d.beginPath();
      d.strokeStyle = '#008000';
      d.lineWidth = '10';
      d.arc(posX2, posY2, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
      d.stroke();

      e.beginPath();
      e.arc(posX3, posY3, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
      e.strokeStyle = '#b1b1b1';
      e.lineWidth = '10';
      e.stroke();

      e.beginPath();
      e.strokeStyle = '#0000ff';
      e.lineWidth = '10';
      e.arc(posX3, posY3, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
      e.stroke();

      if(deegres >= result) clearInterval(acrInterval);
    }, fps);      
  }    
} 

// This function increments the video progress based on how many videos have been checked 
function updateVideoPercentage(){

  // Query to get the current video percentage 
  let percent = document.querySelectorAll('input[name="video"]:checked').length/document.querySelectorAll('input[name="video"]').length*100;
  
  if (percent >= 25 && percent < 50) {
    Achievements.addAchievement("Videos 1/4 Mark!","25% of the course's lecture videos have been watched! Well done :)");    
  }
  
  if (percent >= 50 && percent < 75) {
    Achievements.addAchievement("Videos 1/2 Point!","50% of the course's lecture videos have been watched! Well done :)");    
  }
  
  if (percent >= 75 && percent < 100) {
    Achievements.addAchievement("Videos 3/4 Mark!","75% of the course's lecture videos have been watched! Well done :)");    
  }
  
  if (percent >= 100) {
    Achievements.addAchievement("Videos Completed!","You have completed all the lecture videos for this course - CONGRATULATIONS :)");
  }
  
  var can = document.getElementById('canvas'), spanProcent = document.getElementById('procent'), c = can.getContext('2d');

  var posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    procent = 0,
    oneProcent = 360 / 100,
    result = oneProcent * percent;

  c.lineCap = 'round';
  arcMove();

  function arcMove(){
    var deegres = 0;
    
    // Sets video progress to updated value
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = deegres / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      c.arc(posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
      c.strokeStyle = '#b1b1b1';
      c.lineWidth = '10';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#ff0000';
      c.lineWidth = '10';
      c.arc(posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
      c.stroke();
      
      if(deegres >= result) clearInterval(acrInterval);
    }, fps);  
  }
  updateTotalPercentage();
}

// This function increments the assignment progress based on how many assignments have been checked 
function updateAssignmentPercentage(){  
  
  // Query to get the current assignment percentage 
  let percent2 = document.querySelectorAll('input[name="assignment"]:checked').length/document.querySelectorAll('input[name="assignment"]').length*100;

  if (percent2 >= 25 && percent2 < 50) {
    Achievements.addAchievement("Assignments 1/4 Mark!","25% of the course's assignments have been handed in! Well done :)");    
  }
  
  if (percent2 >= 50 && percent2 < 75) {
    Achievements.addAchievement("Assignments 1/2 Point!","50% of the course's assignments have been handed in! Well done :)");    
  }
  
  if (percent2 >= 75 && percent2 < 100) {
    Achievements.addAchievement("Assignments 3/4 Mark!","75% of the course's assignments have been handed in! Well done :)");   
  }
  
  if (percent2 >= 100) {
    Achievements.addAchievement("Assignments Completed!","You have completed all the assignments for this course - CONGRATULATIONS :)");
  }
     
  var can2 = document.getElementById('canvas2'), spanProcent2 = document.getElementById('procent2'), d = can2.getContext('2d');
  
  var posX2 = can2.width / 2,
    posY2 = can2.height / 2,
    fps = 1000 / 200,
    procent2 = 0,
    oneProcent2 = 360 / 100,
    result2 = oneProcent2 * percent2;
  
  d.lineCap = 'round';
  arcMove();
  
  // Sets assignments progress to updated value
  function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval (function() {
      deegres += 1;
      d.clearRect(0, 0, can2.width, can2.height);
      procent2 = deegres / oneProcent2;
    
      spanProcent2.innerHTML = procent2.toFixed();
    
      d.beginPath();
      d.arc(posX2, posY2, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
      d.strokeStyle = '#b1b1b1';
      d.lineWidth = '10';
      d.stroke();

      d.beginPath();
      d.strokeStyle = '#008000';
      d.lineWidth = '10';
      d.arc(posX2, posY2, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
      d.stroke();
      
      if(deegres >= result2) clearInterval(acrInterval);
    }, fps);   
  }
  updateTotalPercentage();
}

// This function increments the total course progress based on how many assignments and videos have been checked 
function updateTotalPercentage(){
  Achievements.toggleList();
  
  // Query to get the total course percentage
  let percent3 = document.querySelectorAll('input[type="checkbox"]:checked').length/document.querySelectorAll('input[type="checkbox"]').length*100;
  
  if (percent3 >= 25 && percent3 < 50) {
    Achievements.addAchievement("Course 1/4 Mark!","25% of the course has been completed! Well done :)");       
  }

  if (percent3 >= 50 && percent3 < 75) {
    Achievements.addAchievement("Course 1/2 Point!","50% of the course has been completed! Well done :)");    
  }
  
  if (percent3 >= 75 && percent3 < 100) {
    Achievements.addAchievement("Course 3/4 Mark!","75% of the course has been completed! Well done :)");    
  }

  if (percent3 >= 100) {
    Achievements.addAchievement("Course Completed!","You have completed 100% of this course - CONGRATULATIONS TO YOU :)");    
  }
     
  var can3 = document.getElementById('canvas3'), spanProcent3 = document.getElementById('procent3'), e = can3.getContext('2d');
  
  var posX3 = can3.width / 2,
    posY3 = can3.height / 2,
    fps = 1000 / 200,
    procent3 = 0,
    oneProcent3 = 360 / 100,
    result3 = oneProcent3 * percent3;
  
  e.lineCap = 'round';
  arcMove();
  
  // Sets total course progress to updated value
  function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval (function() {
      deegres += 1;
      e.clearRect(0, 0, can3.width, can3.height);
      procent3 = deegres / oneProcent3;
  
      spanProcent3.innerHTML = procent3.toFixed();

      e.beginPath();
      e.arc(posX3, posY3, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
      e.strokeStyle = '#b1b1b1';
      e.lineWidth = '10';
      e.stroke();

      e.beginPath();
      e.strokeStyle = '#0000ff';
      e.lineWidth = '10';
      e.arc(posX3, posY3, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
      e.stroke();
      if(deegres >= result3) clearInterval(acrInterval);
    }, fps);   
  }
}


// Achievements Tool 
// Achievement "Singleton": Revealing module pattern
Achievements = function()
{
	//Private object "achievementsObj" stores all achievements
	var achievementsObj = {},
		_localStorageKey,
	
  // Initialises localstorage 
	initialise = function(localStorageKey)
	{
		// Saves localStorage key internally
		_localStorageKey = localStorageKey;
	
		// Loads achievements from local storage if any
		if (window.localStorage)
			if ((typeof(window.localStorage[_localStorageKey]) != "undefined") && (window.localStorage[_localStorageKey] != null) && (window.localStorage[_localStorageKey] != "")) achievementsObj = JSON.parse(window.localStorage[_localStorageKey]);
	},
	
  // Adds a new achievement
	addAchievement = function(text, description, icon)
	{
		if ((typeof(text) !== "string") || (text === "")) return;
	
		achievementsObj[text] = { active: true };
		if (typeof(description) !== "undefined") achievementsObj[text]["description"] = description;
		if (typeof(icon) !== "undefined") achievementsObj[text]["icon"] = icon;

    Achievements.show(text);
	},	

  // Deletes an achievement
	removeAchievement = function(text, description, icon)
	{
		delete achievementsObj[text];	
	},	

  // Gets the total number of achievements whether they are locked or unlocked
	getCount = function()
	{
		var count = 0;
		for (var i in achievementsObj) count++;
		alert("There is a a total of " + count + " locked and unlocked achievement(s) listed");
		return count;
	},
	
  // Gets the total number of unlocked achievements
	getUnlockedCount = function()
	{
		var count = 0;
		for (var i in achievementsObj)
		{
			if (achievementsObj[i]["active"]) count++;
		}
		alert("There is a a total of " + count + " unlocked achievement(s)");
		return count;
	},

  // Gets the total number of locked achievements
	getLockedCount = function()
	{
		var count = 0;
		for (var i in achievementsObj)
		{
			if (!(achievementsObj[i]["active"])) count++;
		}
		alert("There is a a total of " + count + " locked achievement(s)");
		return count;
	},

  // Locks all the unlocked	achievements
	lockAllAchievements = function()
	{
		// Lock All Achievements
		for (var i in achievementsObj)
		{
			achievementsObj[i]["active"] = false;
		}
	},

  // Unlocks all the locked	achievements
	unlockAllAchievements = function()
	{
		// Unlock All Achievements
		for (var i in achievementsObj)
		{
			achievementsObj[i]["active"] = true;
		}
	},

  // Deletes all the achievements that are locked and unlocked
	fullreset = function()
	{
		// Remove all achievements
		for (var i in achievementsObj)
		{
			delete achievementsObj[i];	
		}
	},
	
  // Lists all the achievements whether they are locked or unlocked
	list = function()
	{
		// Locked achievements will be shown in a grey-ish color
		var result = "";
		for (var i in achievementsObj)
		{
      // Check whether element has an icon aspect or is locked or unlocked - it creates the divs dynamically
      if ((typeof(achievementsObj[i].icon) != "undefined") && (achievementsObj[i].icon != "")) {      
        result += '<div class="achievement icon"><span class="title">' + i + '</span><br />' + achievementsObj[i]["description"] + '</span></div><br /><br />';
      } else {  
        if (achievementsObj[i]["active"]) result += '<div class="achievement"><span class="title">' + i + '</span><br /><span class="details">' + achievementsObj[i]["description"] + '</span></div><br /><br />';
			  else result += '<div class="achievement locked"><span class="title">' + i + '</span><br /><span class="details">' + achievementsObj[i]["description"] + '</span></div><br /><br />';
		  }
  }  
		return result;
	},

  // Displays list of all achivements
  toggleList = function()
  {
    $('#achievementList').toggle('slow');
    $('#achievementList').html(Achievements.list);
    
    // Use url icons
    let j = 0;
    for(var i in achievementsObj)
    {
      if ((typeof(achievementsObj[i].icon) != "undefined") && (achievementsObj[i].icon != "")) { 
        document.getElementsByClassName("achievement")[j].style.backgroundImage = `url(${achievementsObj[i].icon})`;        
      }
      if (!achievementsObj[i].active) { 
        document.getElementsByClassName("achievement")[j].style.backgroundColor = "#ccc";     
        document.getElementsByClassName("achievement")[j].style.color = "#444";       
      }
      j++;
    }
  },
	
  // Animates an achievement to screen
	show = function(text)
	{
		if ((typeof(text) !== "string") || (text === "")) return;
	
      // Check for unique icon 
   		if ((typeof(achievementsObj[text].icon) != "undefined") && (achievementsObj[text].icon != "")) {       
        document.getElementById('status').style.backgroundImage = `url(${achievementsObj[text].icon})`; // Chosen icon        
      } else {
        document.getElementById('status').style.backgroundImage = `url(http://www.news.uct.ac.za/images/defaults/default-article.jpg)`; // Default UCT icon
      }
         
			$('#status.achievement #text').html(text);
			$('#status.achievement').show();
			$('#status.achievement').css({opacity: 0.0});			
			$('#status.achievement').animate({opacity: 1.0, bottom: '8px'}, 750);
			
			setTimeout(function() 
			{ 
			  $('#status.achievement').animate({opacity: 0.0, bottom: '-120px'}, 750, "linear", function() { $('#status.achievement').hide(); });
			}, 5000);
			
      // Activate achievement on show 
			achievementsObj[text].active = true;		
		
		if (window.localStorage) window.localStorage[_localStorageKey] = JSON.stringify(achievementsObj);
	};
	
  // Returns all the elements generated in JS to the HTML 
	return {
		initialise: initialise,
		getCount: getCount,
		getUnlockedCount: getUnlockedCount,
		getLockedCount: getLockedCount,
		lockAllAchievements: lockAllAchievements,
		fullreset: fullreset,
		unlockAllAchievements: unlockAllAchievements,
		list: list,
		addAchievement: addAchievement,	
		removeAchievement: removeAchievement,	
    toggleList:toggleList,
		show: show
	};
}();

// Add a new achievement 
const addAchievement = () => {
	var achievement = document.getElementById("add").value;
  var achievementsubtext = document.getElementById("subtext").value;
  var achievementicon = document.getElementById("icon").value;
	Achievements.addAchievement(achievement, achievementsubtext, achievementicon);
}

// Delete an achievement 
const removeAchievement = () => {
	var achievement = document.getElementById("remove").value;  
	Achievements.removeAchievement(achievement, achievement);	
}

//----------------------------------------------------EOF--------------------------------------------------------------------------//

