var prediction="";
Webcam.set({
    width:275,
    height:275,
    image_format:'png',
    png_quality:80
});
var camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img_click" src="'+data_uri+'">'
    })
}
console.log("ml5 version", ml5.version);
var classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Sn4YbkXPH/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!x");
}