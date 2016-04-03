var counter = 0;
window.setInterval(function(){counter++;if(counter>20){counter =0;};update_load(counter);},200);
$('head').append("<style>.sidebar{transition: all 0.7s ease-in-out; position: absolute; bottom: 0.5em; width: 16%; height: 9%; left: -16%; content:url('http://dinkelborg.bplaced.net/Buttons/linki.png'); background: rgba(150,150,150,0.1);}.sidebar:hover{transform: translateX(2%); transition: all 0.1s ease-in-out; background: rgba(250,250,250,0.1);}.sidebar:active{transform: translateX(-2%); transition: all 0.1s ease-in-out; background: rgba(50,50,50,0.3);}.signat{transition:all 0.5s ease-in-out;position:absolute;top: 48%;left:52%;transform:translate(-50%, -50%);width: 1.75em;height: 0.6em;content:url('http://dinkelborg.bplaced.net/images/u174-r.png');}.signat:hover{font-size: 1.2em;-webkit-filter: invert(100%);filter: invert(100%);}.signat:active{font-size: 0.9em;-webkit-filter: invert(25%);filter: invert(25%);}#sig_con{transition: all 0.7s ease-in-out; position: absolute;bottom: -1.8em;right: 0;width: 1.8em;height: 0.625em;background: rgba(100,0,0,0.25);border-radius: 0.075em;}#sig_con:hover{transition: all 0.7s ease-in-out;background:rgba(255,255,255,0.025);}</style>");$(document.body).append("<div id='sig_con'><div class='signat'></div></div><div id='sidebar' class='sidebar'></div>");$(".signat").click(function(){window.open("http://dinkelb.org", '_blank');});$(".sidebar").click(function(){window.open("http://codepen.io/Dinkelborg/pen/pgVWNV", '_blank');});window.setTimeout(function(){$('#sig_con').css('bottom',0);},2000);window.setTimeout(function(){$('#sidebar').css('left',0);},3000);

function update_load(pCount)
{
  var count = pCount;
  for(var o = 0; o < 17; o++)
  {
    window.setTimeout(function(o)
                      {
      $("#kuchi"+o).css("height","0%");
      $("#kuchi"+o).css("width","0%");
      $("#kuchi"+o).css("margin-top","50%");
      $("#kuchi"+o).css("margin-left","50%");
      $("#kuchi"+j).css("opacity","0.7");
    }.bind(this,o),50*o);
  }
  var timeout = 0;
  var j = 0;
  for(j = 0; j < count; j++)
  {
    window.setTimeout(function(j)
                      {
      $("#kuchi"+j).css("height","125%");
      $("#kuchi"+j).css("width","125%");
      $("#kuchi"+j).css("margin-top","-12.5%");
      $("#kuchi"+j).css("margin-left","-12.5%");
    }.bind(this,j),50*j);
  }
  window.setTimeout(function()
  {
    for(j = 0; j < count; j++)
    {
      window.setTimeout(function(j)
                        {
        $("#kuchi"+j).css("height","100%");
        $("#kuchi"+j).css("width","100%");
        $("#kuchi"+j).css("margin-top","0%");
        $("#kuchi"+j).css("margin-left","0%");
        $("#kuchi"+j).css("opacity",0.3);
      }.bind(this,j),50*j);
    }
  },200);
}
