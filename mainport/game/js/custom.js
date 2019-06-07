var cnt3=0;
function goNext0(){
    var form = document.g0form;
    if(form.g0answer.value == ''){
      alert('wrong answer');
    }
    else {
      form.action = "g1.html"
    }
}
function goNext1(){
    var form = document.g1form;
    if(form.g1answer.value == '책상'){
      form.action = "g2.html"
    }
    else {
      alert('wrong answer');
    }
}
function goNext2(){
    var form = document.gform;

    if(form.ganswer.value == 'hell'){
      cnt3=0;
      form.action = "g3.html"
    }
    else {
      if(cnt3>3){
        cnt3=0;
        form.action = "gbad1.html"
      }
      else{
        cnt3++;
        alert('wrong answer');
      }
    }
}
function goNext3(){
    var form = document.gform;

    if(form.ganswer.value == 'hell'){
      cnt3=0;
      form.action = "g4.html"
    }
    else {
      if(cnt3>3){
        cnt3=0;
        form.action = "gbad1.html"
      }
      else{
        cnt3++;
        alert('wrong answer');
      }
    }
}
