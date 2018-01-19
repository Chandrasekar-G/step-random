function WordShuffler(holder,opt){
  var that = this;
  var time = 0;
  this.now;
  this.then = Date.now();
  
  this.delta;
  this.currentTimeOffset = 0;
  
  this.word = null;
  this.currentWord = null;
  this.currentCharacter = 0;
  this.currentWordLength = 0;


  var options = {
    fps : 200,
    timeOffset : 5,
    textColor : '#000',
    fontSize : "100px",
    useCanvas : false,
    mixCapital : false,
    mixSpecialCharacters : false,
    needUpdate : true,
    colors : [
      '#f44336','#e91e63','#9c27b0',
      '#673ab7','#3f51b5','#2196f3',
      '#03a9f4','#00bcd4','#009688',
      '#4caf50','#8bc34a','#cddc39',
      '#ffeb3b','#ffc107','#ff9800',
      '#ff5722','#795548','#9e9e9e',
      '#607d8b'
    ]
  }

  if(typeof opt != "undefined"){
    for(key in opt){
      options[key] = opt[key];
    }
  }


  
  this.needUpdate = true;
  this.fps = options.fps;
  this.interval = 1000/this.fps;
  this.timeOffset = options.timeOffset;
  this.textColor = options.textColor;
  this.fontSize = options.fontSize;
  this.mixCapital = options.mixCapital;
  this.mixSpecialCharacters = options.mixSpecialCharacters;
  this.colors = options.colors;

   this.useCanvas = options.useCanvas;
  
  this.chars = [
    'A','B','C','D',
    'E','F','G','H',
    'I','J','K','L',
    'M','N','O','P',
    'Q','R','S','T',
    'U','V','W','X',
    'Y','Z'
  ];
  this.specialCharacters = [
    '!','§','$','%',
    '&','/','(',')',
    '=','?','_','<',
    '>','^','°','*',
    '#','-',':',';','~'
  ]

  if(this.mixSpecialCharacters){
    this.chars = this.chars.concat(this.specialCharacters);
  }

  this.getRandomColor = function () {
    var randNum = Math.floor( Math.random() * this.colors.length );
    return this.colors[randNum];
  }

  //if Canvas
 
  this.position = {
    x : 0,
    y : 50
  }

  //if DOM
  if(typeof holder != "undefined"){
    this.holder = holder;
  }

  if(!this.useCanvas && typeof this.holder == "undefined"){
    console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
  }


  this.getRandCharacter = function(characterToReplace){    
    if(characterToReplace == " "){
      return ' ';
    }
    var randNum = Math.floor(Math.random() * this.chars.length);
    var lowChoice =  -.5 + Math.random();
    var picketCharacter = this.chars[randNum];
    var choosen = picketCharacter.toLowerCase();
    if(this.mixCapital){
      choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
    }
    return choosen;
    
  }

  this.writeWord = function(word){
    this.word = word;
    this.currentWord = word.split('');
    this.currentWordLength = this.currentWord.length;

  }

  this.generateSingleCharacter = function (color,character) {
    var span = document.createElement('span');
    span.style.color = color;
    span.innerHTML = character;
    return span;
  }

  this.updateCharacter = function (time) {
    
      this.now = Date.now();
      this.delta = this.now - this.then;

       

      if (this.delta > this.interval) {
        this.currentTimeOffset++;
      
        var word = [];

        if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength){
          this.currentCharacter++;
          this.currentTimeOffset = 0;
        }
        for(var k=0;k<this.currentCharacter;k++){
          word.push(this.currentWord[k]);
        }

        for(var i=0;i<this.currentWordLength - this.currentCharacter;i++){
          word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
        }


        if(that.useCanvas){
          c.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
          c.font = that.fontSize + " sans-serif";
          var spacing = 0;
          word.forEach(function (w,index) {
            if(index > that.currentCharacter){
              c.fillStyle = that.getRandomColor();
            }else{
              c.fillStyle = that.textColor;
            }
            c.fillText(w, that.position.x + spacing, that.position.y);
            spacing += c.measureText(w).width;
          });
        }else{

          if(that.currentCharacter === that.currentWordLength){
            that.needUpdate = false;
          }
          this.holder.innerHTML = '';
          word.forEach(function (w,index) {
            var color = null
            if(index > that.currentCharacter){
              color = that.getRandomColor();
            }else{
              color = that.textColor;
            }
            that.holder.appendChild(that.generateSingleCharacter(color, w));
          }); 
        }
        this.then = this.now - (this.delta % this.interval);
      }
  }

  this.restart = function () {
    this.currentCharacter = 0;
    this.needUpdate = true;
  }

  function update(time) {
    time++;
    if(that.needUpdate){
      that.updateCharacter(time);
    }
    requestAnimationFrame(update);
  }

  this.writeWord(this.holder.innerHTML);


  console.log(this.currentWord);
  update(time);
}





    var currentIdea = "";
  
    $("#randomButtton").click(function() {
      $("#headline").html(generateIdea());
      currentIdea = $("#headline").html();


var headline = document.getElementById('headline');

var headText = new WordShuffler(headline,{
  textColor : '#fff',
  timeOffset : 18,
  mixCapital : true,
  mixSpecialCharacters : true
});

       headText.restart();

    });
  
    function generateIdea() {
      do {
        var ideas = [
            "113215104007",
            "113215104012",
            "113215104016",
            "113215104019",
            "113215104021",
            "113215104025",
            "113215104034",
            "113215104036",
            "113215104045",
            "113215104047",
            "113215104050",
            "113215104054",
            "113215104059",
            "113215104060",
            "113215104061",
            "113215104063",
            "113215104066",
            "113215104074",
            "113215104079",
            "113215104081",
            "113215104086",
            "113215104089",
            "113215104093",
            "113215104100",
            "113215104101",
            "113215104108",
            "113215104113",
            "113215104120",
            "113215104121",
            "113215104122",
            "113215104130",
            "113215104131",
            "113215104133",
            "113215104147",
            "113215104152",
            "113215104158",
            "113215104159",
            "113215104163",
            "113215104164",
            "113215104166",
            "113215104167",
            "113215104303",
            "113215205001",
            "113215205002",
            "113215205012",
            "113215205015",
            "113215205021",
            "113215205024",
            "113215205030",
            "113215205031",
            "113215205034",
            "113215205039",
            "113215205041",
            "113215205044",
            "113215205048",
            "113215205057",
            "113215205060",
            "113215205050",
            "113215104137",
            "113215104075"   
          ]
  
        var randomArrayPosition = Math.floor(Math.random() * ideas.length);
        var idea = ideas[randomArrayPosition];
  
      } while (idea === currentIdea)
  
      return idea;
    }
  
    