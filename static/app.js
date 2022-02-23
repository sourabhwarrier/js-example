const selector = document.getElementById("options");
console.log(selector.value); //debug
// initialization 
document.getElementById("br1").style.display = 'initial';
document.getElementById("br2").style.display = 'None';
document.getElementById("br3").style.display = 'None';
document.getElementById("mc_input_label").style.display = 'None';
        var mcs = document.getElementsByName("mc");
        document.getElementById("mclabel1").style.display = 'None';
        document.getElementById("mclabel2").style.display = 'None';
        document.getElementById("mclabel3").style.display = 'None';
        for (x of mcs){
            console.log(x); //debug
            x.style.display = 'None';
        }
document.getElementById("text_input").style.display = 'None';
document.getElementById("text_input_label").style.display = 'None';


selector.onchange = function(){
    console.log(selector.value) //debug
    if (selector.value !=1){
        document.getElementById("br1").style.display = 'None';
        document.getElementById("number_input").style.display = 'None';
        document.getElementById("number_input_label").style.display = 'None';
    }
    else {
        document.getElementById("br1").style.display = 'initial';
        document.getElementById("number_input").style.display = 'initial';
        document.getElementById("number_input_label").style.display = 'initial';
    }
    if (selector.value != 2){
        document.getElementById("br2").style.display = 'None';
        document.getElementById("text_input").style.display = 'None';
        document.getElementById("text_input_label").style.display = 'None';

    }
    else {
        document.getElementById("br2").style.display = 'initial';
        document.getElementById("text_input").style.display = 'initial';
        document.getElementById("text_input_label").style.display = 'initial';
    }

    if (selector.value != 3){
        document.getElementById("br3").style.display = 'None';
        document.getElementById("mc_input_label").style.display = 'None';
        var mcs = document.getElementsByName("mc");
        document.getElementById("mclabel1").style.display = 'None';
        document.getElementById("mclabel2").style.display = 'None';
        document.getElementById("mclabel3").style.display = 'None';
        for (x of mcs){
            console.log(x); //debug
            x.style.display = 'None';
        }
    }
    else {
        document.getElementById("br3").style.display = 'initial';
        document.getElementById("mc_input_label").style.display = 'initial';
        var mcs = document.getElementsByName("mc");
        document.getElementById("mclabel1").style.display = 'initial';
        document.getElementById("mclabel2").style.display = 'initial';
        document.getElementById("mclabel3").style.display = 'initial';
        for (x of mcs){
            console.log(x); //debug
            x.style.display = 'initial';
        }
    } 

};