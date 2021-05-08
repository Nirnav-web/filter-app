function preload(){
}
function setup(){
    canvas=createCanvas(650,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function take_snapshot(){
    save('filter.png')
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value
}
function draw(){
    image(video,0,0,650,480);
    tint(tint_color)
}