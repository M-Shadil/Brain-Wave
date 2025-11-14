// // script.js — simple accessible gallery lightbox for BrainWave
// (function(){
//   const gallery = Array.from(document.querySelectorAll('.thumb-btn'));
//   const lightbox = document.getElementById('lightbox');
//   const lbImg = document.getElementById('lightbox-img');
//   const lbCaption = document.getElementById('lightbox-caption');
//   const btnClose = document.querySelector('.lightbox-close');
//   const btnPrev = document.querySelector('.lightbox-prev');
//   const btnNext = document.querySelector('.lightbox-next');

//   let current = -1;

//   // Gather image sources and captions from DOM
//   const items = gallery.map(btn => {
//     const img = btn.querySelector('img');
//     const caption = btn.querySelector('figcaption')?.textContent || img.alt || '';
//     return { src: img.src, alt: img.alt || caption, caption: caption, button: btn };
//   });

//   function open(index){
//     if(index < 0 || index >= items.length) return;
//     current = index;
//     const it = items[index];
//     lbImg.src = it.src;
//     lbImg.alt = it.alt;
//     lbCaption.textContent = it.caption;
//     lightbox.setAttribute('aria-hidden','false');
//     // focus management: move focus to close button
//     btnClose.focus();
//     document.body.style.overflow = 'hidden';
//   }

//   function close(){
//     lightbox.setAttribute('aria-hidden','true');
//     lbImg.src = '';
//     lbImg.alt = '';
//     lbCaption.textContent = '';
//     document.body.style.overflow = '';
//     // restore focus to the originating button if possible
//     if(current >= 0 && items[current] && items[current].button) {
//       items[current].button.focus();
//     }
//     current = -1;
//   }

//   function showNext(delta = 1){
//     if(current < 0) return;
//     let nextIndex = (current + delta + items.length) % items.length;
//     open(nextIndex);
//   }

//   // Wire thumbnails
//   gallery.forEach((btn, i) => {
//     btn.addEventListener('click', () => open(i));
//     btn.addEventListener('keydown', (e) => {
//       // allow opening with Enter or Space
//       if(e.key === 'Enter' || e.key === ' ') {
//         e.preventDefault();
//         open(i);
//       }
//     });
//   });

//   btnClose.addEventListener('click', close);
//   btnPrev.addEventListener('click', () => showNext(-1));
//   btnNext.addEventListener('click', () => showNext(1));

//   // close when backdrop clicked
//   document.querySelector('.lightbox-backdrop').addEventListener('click', close);

//   // keyboard navigation
//   document.addEventListener('keydown', (e) => {
//     if(lightbox.getAttribute('aria-hidden') === 'false') {
//       if(e.key === 'Escape') close();
//       if(e.key === 'ArrowRight') showNext(1);
//       if(e.key === 'ArrowLeft') showNext(-1);
//     }
//   });

//   // make sure images have been preloaded (soft)
//   items.forEach(it => {
//     const img = new Image();
//     img.src = it.src;
//   });
// })();