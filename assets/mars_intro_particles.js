/* Original low-cost Martian dust simulation for the landing screen only. */
(()=>{
  'use strict';
  const canvas=document.getElementById('marsDustCanvas');
  const section=document.getElementById('intro');
  if(!canvas||!section)return;
  const context=canvas.getContext('2d',{alpha:true});
  if(!context)return;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let width=0,height=0,particles=[],lastTime=0,frame=0;
  const random=(a,b)=>a+Math.random()*(b-a);
  function createParticle(initial){
    return {x:random(-width*.12,width*1.1),y:initial?random(0,height):random(height*.94,height*1.12),
      r:random(.5,2.45),speed:random(7,25),drift:random(12,35),opacity:random(.06,.44),
      phase:random(0,Math.PI*2),depth:random(.4,1.45),hue:Math.random()>.2?'255,207,156':'236,161,112'};
  }
  function resize(){
    width=Math.max(1,section.clientWidth);height=Math.max(1,section.clientHeight);
    const pixelRatio=Math.min(window.devicePixelRatio||1,1.5);
    canvas.width=Math.round(width*pixelRatio);canvas.height=Math.round(height*pixelRatio);
    context.setTransform(pixelRatio,0,0,pixelRatio,0,0);
    const count=reduceMotion.matches?36:(width<760?75:185);
    particles=Array.from({length:count},()=>createParticle(true));
  }
  function draw(now){
    requestAnimationFrame(draw);
    if(section.classList.contains('hidden')||document.hidden)return;
    if(now-lastTime<27)return; // cap ~35 fps to preserve GPU time for the game
    const dt=Math.min((now-lastTime)/1000,.07)||.03;lastTime=now;
    context.clearRect(0,0,width,height);
    if(reduceMotion.matches){
      for(const p of particles){context.fillStyle=`rgba(${p.hue},${p.opacity*.28})`;context.fillRect(p.x,p.y,p.r,p.r);}
      return;
    }
    frame+=dt;
    const gust=.75+.28*Math.sin(frame*.41)+.16*Math.sin(frame*.17);
    for(const p of particles){
      p.x+=(p.speed+p.drift*gust)*dt*p.depth;
      p.y-=p.speed*.27*dt*p.depth+Math.sin(frame*.9+p.phase)*dt*.9;
      if(p.x>width+35||p.y< -30){Object.assign(p,createParticle(false));p.x=-25-Math.random()*width*.11;p.y=random(0,height);}
      const a=p.opacity*(.7+.3*Math.sin(frame*.9+p.phase));
      context.strokeStyle=`rgba(${p.hue},${a*.6})`;
      context.lineWidth=Math.max(.5,p.r*.66);
      context.beginPath();context.moveTo(p.x,p.y);context.lineTo(p.x-(p.r*2.5+gust*p.depth*7),p.y+random(-.06,.06));context.stroke();
      if(p.r>1.8){
        context.fillStyle=`rgba(255,213,162,${a*.38})`;
        context.beginPath();context.arc(p.x,p.y,p.r*1.3,0,Math.PI*2);context.fill();
      }
    }
  }
  window.addEventListener('resize',resize,{passive:true});
  resize();requestAnimationFrame(draw);
})();
