var highlight=window.getSelection().toString();
var i =0;
var count = 1;
for (i = 0; i < highlight.length; i++){
  if (highlight.substring(i,i+1).localeCompare(" ")==0){
    count++;
  }

}
alert("The word count is: "+ count+".\n" +"The character count is: "+highlight.length+".");
