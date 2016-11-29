var verbose = true;
// globals
var currentStage = -1;
var currentItem = -1;
var currentLinks = [];
var times = [];
var currentTimer = 0;
var stages =[
  {
    title: 'Intro',
    items: [ 'who am I?', 'how did I get here?', 'why am I here?', 'what is happening?' ],
    links: [ 'https://github.com/devjanaprime', 'http://devnari.com', 'http://devjana.net', 'https://primeacademy.io' ]
  },
  {
    title: 'The Problem',
    items: [ 'issues lost to the ether', 'feature creep', 'design holes', 'big balls of mud' ],
    links: [ 'http://www.urbandictionary.com/define.php?term=feature%20creep', 'http://www.laputan.org/mud/']
  },
  {
    title: 'The Solution',
    items: [ 'agile practices', 'scrum board: columns & tickets', 'defining a workflow', 'github projects and other tools (Jira, Trello)' ],
    links: [ 'https://en.wikipedia.org/wiki/Agile_management', 'https://help.github.com/articles/tracking-the-progress-of-your-work-with-projects/', 'https://www.atlassian.com/software/jira', 'https://trello.com/']
  },
  {
    title: 'The Implementation',
    items: [ 'github projects demo' ],
    links: [ 'https://github.com/devjanaprime/githubProjectExample/projects/1']
  },
  {
    title: 'Stretch Goals',
    items: [ 'stand ups', 'swim lanes', 'PERT charts & critical path', 'mythical man month' ],
    links: [ 'https://en.wikipedia.org/wiki/Swim_lane', 'https://revisionworld.com/a2-level-level-revision/maths/decision-maths-0/critical-path-analysis', 'https://en.wikipedia.org/wiki/Rubber_duck_debugging', 'https://www.laserfiche.com/ecmblog/10-ways-to-make-stand-up-meetings-better-office-hack/']
  },
  {
    title: 'Closing',
    items: [ 'summary', 'retrospective', 'what\'s next', 'Thanks!' ],
    links: [ 'http://devjana.net', 'https://twitter.com/devjana' ]
  },
];

var nextItem = function(){
  if( verbose ) console.log( 'in nextItem' );
  currentItem++;
  // move to next stage if on last item
  if( currentItem >= stages[ currentStage ].items.length ){
    nextStage();
  } // end if
  else{
    // otherwise load next item
    updateView();
  } // end else
}; // end nextItem

var nextStage = function(){
  if( verbose ) console.log( 'in nextStage' );
  // clear links
  document.getElementById( 'links' ).innerHTML = '';
  currentItem = -1;
  currentStage++;
  if( currentStage >= stages.length ){
    // reset to 0th if at end
    currentStage = 0;
  }
  // set background color
  updateView();
}; // end nextStage

var saveTime = function(){
  if( verbose ) console.log( 'in saveTime' );
  times.push( currentTimer );
  currentTimer = 0;
}; // end saveTime

var setDefaults = function(){
  if( verbose ) console.log( 'in setDefaults' );
  currentStage = 0;
  currentItem = -1;
  var currentTimer = 0;
  // clear links
  document.getElementById( 'links' ).innerHTML = '';
  updateView();
}; // end setDefaults

var timerTick = function(){
  currentTimer++;
  if( verbose ) console.log( 'in timerTick:', currentTimer );
}; // end timerTick

var updateView =function(){
  console.log( 'in updateView:', currentStage, currentItem );
  document.getElementById( 'title' ).innerHTML = stages[ currentStage ].title;
  if( currentStage >= 0 ){
    if( currentItem >= 0 ) {
      // only show image if in list
      var outputText = '<img src="images/' +  currentStage + '-' + currentItem + '.png">';
      document.getElementById( 'item' ).innerHTML = outputText;
      document.getElementById( 'links' ).innerHTML = '';
      for (var i = 0; i < stages[ currentStage ].links.length; i++ ) {
        document.getElementById( 'links' ).innerHTML += '<h3><a href="' + stages[ currentStage ].links[ i ] + '" target=\'_blank\'>' + stages[ currentStage ].links[ i ] + '</a></h3>';
      }
    } // end if
    else{
      // show list if prior to list (on stage load)
      var outputText = '<ul>'
      for (var i = 0; i < stages[ currentStage ].items.length; i++) {
        outputText += '<li>' + stages[ currentStage ].items[i] + '</li>';
      }
      outputText += '</ul>';
      document.getElementById( 'item' ).innerHTML = outputText;
    } // end else
  } // end >= 0
  else{// show list if prior to list (on stage load)
    var outputText = '<ul>'
    for (var i = 0; i < stages.length; i++) {
      outputText += '<li>' + stages[ i ].title + '</li>';
    }
    outputText += '</ul>';
    document.getElementById( 'item' ).innerHTML = outputText;
    document.getElementById( 'title' ).innerHTML = 'JSMN 11-30-2016';
  } // end preview
}; // end updateView
