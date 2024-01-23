// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kishore Kumar - O mere dil ke chain", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
   
   {songName: "Charlie Puth - We don't talk anymore", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},

    {songName: "Lofi Mix - Adhuram madhuram", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},

    {songName: "Cheriimoya - Living Life, In The Night", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},

    {songName: "Reyan - 2AM", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},

    {songName: "Russ - 3:15(Breathe)", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},

    {songName: "Mitraz - Alfaazo", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},

    {songName: "Korono Remix - Dancin", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},

    {songName: "Halsey & Khalid - Eastside", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},

    {songName: "Eric Nam - I don't know you anymore", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
	
	{songName: "Sharn - Mi Amor", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
	
	{songName: "Mitraz - Muskurahat", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
	
	{songName: "Arjit Singh - Satranga", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
	
	{songName: "Zaeden - Tere bina", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
	
	{songName: "Mitraz - Akhiyaan", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
	
	{songName: "Praagya - Khel", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
	
	{songName: "DJ Snake, Justin Bieber - Let me love you", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
	
	{songName: "Bangers Only - Lonely Again", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
	
	{songName: "Harnoor - Parshawan", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
	
	{songName: "Vishal Mishra - Phele bhi main", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
	
	{songName: "Harnoor - Waalian", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=20){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
	gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
	gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});