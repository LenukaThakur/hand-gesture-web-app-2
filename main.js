Webcam.set({
    width:320,
    height:240,
    image_format:'jpeg',
    jpeg_quality:90
});
Webcam.attach('#camera')
synth=window.speechSynthesis;
function takepicture(){
    Webcam.snap(function(Image_src){
document.getElementById("result").innerHTML="<img id='img1' src='"+Image_src+"'>"
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/00m7vShMM/model.json",modelloaded)

function modelloaded(){
    console.log("success")
}

function Predict(){
image = document.getElementById('img1');
classifier.classify(image, gotresult);
}

function gotresult(error, result){
    if(error){
        console.log(error)
    }
else{
    console.log(result);
    G1=result[0].label
    document.getElementById("Emotion").innerHTML=G1
    if(G1=="Best"){
        document.getElementById("Emoji").innerHTML="&#128076"
    }
    else if(G1=="Amazing"){
        document.getElementById("Emoji").innerHTML="&#128077"
    }
    else if(G1=="Victory"){
        document.getElementById("Emoji").innerHTML="&#9996"
    }
    
}
}

