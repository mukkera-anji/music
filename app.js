const myAudio=document.querySelector('audio')
const myPlay=document.getElementById('play')

isAudioplaying=false

function playAudio()
{
    isAudioplaying=true
    myAudio.play()
    myPlay.classList.replace("fa-play","fa-pause")
}

function pauseAudio()
{
    isAudioplaying=false
    myAudio.pause()
    myPlay.classList.replace("fa-pause","fa-play")
}

myPlay.addEventListener("click",function(){
    if(isAudioplaying)
    {
        pauseAudio()
    }
    else
    {
        playAudio()
    }
})

const Data=[
    {
        singerName:"bheems",
        songName:"balaramanarasayo",
        Info:"image-1"
    },
    {
        singerName:"Anji",
        songName:"Domdam Dosthan",
        Info:"image-2"
    },
    {
        singerName:"Rachana",
        songName:"Yashoda Bgm",
        Info:"image-3"
    }
]
//song= {
//     singerName:"Anji",
//     songName:"Domdam Dosthan",
//     Info:"image-2"
// }

const mySinger=document.getElementById("singer")
const mySong=document.getElementById("song")
const myImage=document.querySelector("img")

function loadSong(song){
    mySinger.innerText=song.singerName
    mySong.innerText=song.songName
    myImage.src=`images/${song.Info}.jpg` // images/image-2.jpg
    myAudio.src=`songs/${song.Info}.mp3`

}


//Adding forward Functionality

const myForward=document.getElementById("forward")

 let songIndex=0

function nextSong(){

    if(songIndex > Data.length-1)
    {
        songIndex=0
     }
    
//write logic for Forward
//console.log(songIndex); 
loadSong(Data[songIndex])
songIndex++
playAudio()
}

myForward.addEventListener("click",nextSong)

//Adding Backward Functionality
const myBackward=document.getElementById("backward")

function previousSong(){
    songIndex--
    if(songIndex<0){
        songIndex=Data.length-1
    }
    loadSong(Data[songIndex])
    
  
    playAudio()
}

myBackward.addEventListener("click",previousSong)


// running the progress bar

const myProgressbar=document.getElementById("progressbar")
const Actualduaration=document.getElementById("duration")
const mycurrentTime=document.getElementById("currenttime")

myAudio.addEventListener("timeupdate",function(uptime){
    // console.log(uptime);
     const Audiocurrenttime=uptime.srcElement.currentTime;
     const AudioDuration=uptime.srcElement.duration;
     //console.log(Audiocurrenttime,AudioDuration);
     AudioPercentage=(Audiocurrenttime/AudioDuration)*100
     //console.log(AudioPercentage);
     myProgressbar.style.width=`${AudioPercentage}%`

     Actualduaration.innerText=(AudioDuration/60).toFixed(2);

     //////Running song timer

    let  myCurrentTimeinMinuts=Math.floor(Audiocurrenttime/60)
     //console.log(myCurrentTimeinMinuts);

    //  if(myCurrentTimeinMinuts<10){
    //     myCurrentTimeinMinuts=`0${myCurrentTimeinMinuts}`
    //  }

    let myCurrentTimeinSeconds=Math.floor(Audiocurrenttime%60)
     //console.log(myCurrentTimeinSeconds);

    //  if(myCurrentTimeinSeconds<10){
    //     myCurrentTimeinSeconds=`0${myCurrentTimeinSeconds}`
    //  }

        let TotalcurrentTime=`${myCurrentTimeinMinuts}:${myCurrentTimeinSeconds}`
        console.log(TotalcurrentTime);

        mycurrentTime.innerText=TotalcurrentTime
     
})