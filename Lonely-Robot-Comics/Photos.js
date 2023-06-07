let images = [
    "https://lh3.google.com/pw/AJFCJaXU-KhfgIOQAuSwlgm8cKfwRQta67caoLQFfxJoZvL4rYPWtahMhOXuoY-OxMXZsmGwuzxTa1KOr7R5XneM2nv2OZMzuw=w814-h1220-s-no?authuser=2",
    "https://lh3.google.com/pw/AJFCJaVNpBS4mXi-idPw-AScps0M7wo38PbigscyKIPlXUGSYz3iO1IF_s8BEmL7yJnrXMKLwYiJZRmowa8459QNiCwZygchow=w814-h1220-s-no?authuser=2"
];
let art = document.getElementById("FeaturedHomeart");
let artstate = 2;

art.addEventListener('click', function (){    
    if (artstate%2 === 0) {
        art.style.height = "auto";
    }
    else {
        art.style.height = "300px";
    }
    artstate += 1;
})

//Api boilerplate key
//Get the Json file from (Album? Whole Account?)
//move each class in Json into list? Grab directly from Json
for (let i=0;i<2;i++) {
    id = 'HomepageIMG'+String(i);
    const imgr = document.getElementById(id);
    imgr.src = images[Math.floor(Math.random()*2)];
};


// Blog stuff
