$(document).ready(function() {
  const lines = [
    "Hi Birthday Girl!!!,",
    "Wishing you a very Happy Birthday, Ma!!!!",
    "Sometimes life gets tough, but I always rest assured that I can make it over any obstacle in my way with the power of your love. Thanks for being the best mom the world has to offer, happy birthday.",
    "I can't give love to you more than you love me, but I'll treasure every bit of the love you share and reflect it back with all my heart. Your love is my inspiration, and together we create something beautiful.",
    "My first meme...",
    "Random comments...",
    "Regular gooooooooooooooooooooooooooooooooooood morning and Good Nights...",
    "And this 👻",
    "Birthday wish...",
    "First meet...",
    "Fun Mall...",
    "Ice-cream...",
    "Free - bus - ticket",
    "Unna meet Panna reason illama... Random haa Meet panna vanthathu...",
    "Ooi Pani puri sapda polama😅",
    "You are annoying to lot😂",
    "Ni konja over weight thaa...",
    "I'm not Your time pass...",
    "Pinterest Saved Pin... 🤍",
    "I have your Missing Ear Ring",
    "Last Bus travel is my Fav to until we create the new Fav...",
    "You are mine and mine only favorite idiot 🤍✨",
    "✨🥳😘🤍👻"
  ];

  const wishElement = document.querySelector(".page.page3 .wish");

  lines.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    wishElement.appendChild(p);
  });

  // Animate clouds with GSAP
  const cloudsContainer = document.querySelector('.clouds');
  const cloudCount = 10;

  for (let i = 0; i < cloudCount; i++) {
    createCloud();
  }

  function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloudsContainer.appendChild(cloud);

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(cloud, { duration: Math.random() * 5 + 5, x: '100%', ease: 'power0.none' })
      .to(cloud, { duration: Math.random() * 5 + 5, x: '-100%', ease: 'power0.none' });
  }
});
