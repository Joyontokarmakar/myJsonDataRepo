// dropdown
let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
    dropdown.classList.add('closed')
  }
});


// tab
window.addEventListener('load', function () {
  var myTabs = document.querySelectorAll('ul.tabName > li');
  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove('active');
    }
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add('active');
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll('.tabData');
    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove('active');
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute('href');
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add('active');
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', myTabClicks);
  }
});

//switch
var switchLabel = document.querySelectorAll('label.switchLabel');
var switchInput = document.querySelectorAll('input.switchInput');
var switchBox = document.querySelectorAll('label.switchLabel > .switchBox');
for(var i = 0; i < switchLabel.length; i++){
  switchLabel[i].addEventListener('click', (e) => {
    if (switchLabel[i].classList.contains('switchLabelPostBack')) {
      switchLabel[i].classList.remove('switchLabelPostBack')
      switchBox[i].classList.remove('switchBoxPostBack')
      switchLabel[i].classList.add('switchLabelPreBack')
      switchBox[i].classList.add('switchBoxPreBack')
    } else {
      switchLabel[i].classList.remove('switchLabelPreBack')
      switchBox[i].classList.remove('switchBoxPreBack')
      switchLabel[i].classList.add('switchLabelPostBack')
      switchBox[i].classList.add('switchBoxPostBack')
    }
  })
}