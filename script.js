const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav-links');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.counter').forEach(counter=>{
  const target=+counter.dataset.target;
  const obs=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
      let n=0; const step=Math.max(1,Math.ceil(target/35));
      const timer=setInterval(()=>{n=Math.min(n+step,target);counter.textContent=n;if(n>=target)clearInterval(timer)},35);
      obs.disconnect();
    }
  });obs.observe(counter);
});

const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.project-card');
filters.forEach(f=>f.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');
  const cat=f.dataset.filter;
  cards.forEach(c=>{c.style.display=(cat==='all'||c.dataset.cat.includes(cat))?'block':'none'});
}));

const cur=document.querySelector('.cursor'), fol=document.querySelector('.cursor-follower');
window.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';setTimeout(()=>{fol.style.left=e.clientX+'px';fol.style.top=e.clientY+'px'},50)});
document.querySelectorAll('a,button').forEach(el=>el.addEventListener('mouseenter',()=>fol.classList.add('hover')));
document.querySelectorAll('a,button').forEach(el=>el.addEventListener('mouseleave',()=>fol.classList.remove('hover')));
document.getElementById('year').textContent=new Date().getFullYear();