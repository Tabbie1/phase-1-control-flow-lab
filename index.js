
function scuberGreetingForFeet(travel){
  if (travel<=400){
    return ('This one is on me!');
  }else if(travel>2000 && travel<2501){
    return('I will gladly take your thirty bucks.');
  }
  else if (travel>2500){
    return('No can do.');
  }
}


function ternaryCheckCity(cityname){
  if(cityname =='NYC'){
    return 'Ok, sounds good.';

  }
  else if(cityname!='NYC'){
    return 'No go.';
  }
}


function switchOnCharmFromTip(funds){
  if(funds=='generous'){

    return 'Thank you so much.';
  }

  else if(funds!='generous'){
    return 'Thank you.';
  }
  else{
    return 'Bye.';
  }
}


