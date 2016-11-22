console.log( 'js' );

// globals
var currentStage = 0;
var currentItem = -1;

var nextItem = function(){
  console.log( 'in nextItem' );
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
  console.log( 'in nextStage' );
  currentItem = -1;
  currentStage++;
  if( currentStage >= stages.length ){
    currentStage = 0;
  }
  updateView();
}; // end nextStage

var previousItem = function(){
  console.log( 'in previousItem' );
  // decrement if possible
  currentItem--;
  // move to next stage if on last item
  if( currentItem < 0 ){
    previousStage();
  } // end if
  else{
    // otherwise load previous item
    updateView();
  } // end else
}; // end previousItem

var previousStage = function(){
  console.log( 'in previousStage' );
  currentItem = 0;
}; // end previousStage

var setInnerHtml = function( elementId, newHTML ){
  document.getElementById( elementId ).childNodes[1].innerHTML = newHTML;
}

var stages =[
  {
    title: 'Intro',
    items: [ 'who am I?', 'why am I here?', 'about what are we talking?', 'what is happening?' ]
  },
  {
    title: 'The Problem',
    items: [ 'issues lost to the ether', 'feature creep', 'design holes' ]
  },
  {
    title: 'The Solution',
    items: [ 'agile practices', 'columns/task', 'github projects and other tools (Jira, Trello)' ]
  },
  {
    title: 'The Implementation',
    items: [ 'github projects demo', 'setting up columns', 'include existing issue', 'convert notes to issues', 'assigning an issue' ]
  },
  {
    title: 'Stretch Goals',
    items: [ 'swim lanes', 'time estimates', 'rubber duckies', 'stand ups' ]
  },
  {
    title: 'Closing',
    items: [ 'Summary', 'Q & A', 'Contact info', 'Thanks!' ]
  },
];

var updateView =function(){
  console.log( 'in updateView:', currentStage, currentItem );
  document.getElementById( 'title' ).innerHTML = stages[ currentStage ].title;
  if( currentItem >= 0 ) {
    var outputText = '<h3>' + stages[ currentStage ].items[ currentItem ] + '</h3>';
    outputText += '<img src="images/' +  currentStage + '-' + currentItem + '.png">';
    document.getElementById( 'item' ).innerHTML = outputText;
  }
  else{
    var outputText = '<ul>'
    for (var i = 0; i < stages[ currentStage ].items.length; i++) {
      outputText += '<li>' + stages[ currentStage ].items[i] + '</li>';
    }
    outputText += '</ul>';
    console.log( 'wtf' );
    document.getElementById( 'item' ).innerHTML = outputText;
  }
}; // end updateView
