 class Tab {
     constructor() {
         this.init();
     }
     init() {
         this.createwrap();
         this.addEvent();
     }
     addEvent() {
         let uls = document.querySelector('ul');
         let ulis = uls.querySelectorAll('li');

         for (let i = 0; i < ulis.length; i++) {
             ulis[i].index = i;
             ulis[i].addEventListener('click', function() {

                 let ols = document.querySelector('ol');
                 let olis = ols.querySelectorAll('li');
                 for (let i = 0; i < olis.length; i++) {
                     olis[i].style.display = 'none';
                 }
                 olis[i].style.display = 'block';
             })
         }
     }
     createUl() {
         let Ulist = document.createElement('ul');
         Ulist.className = 'ulist'
         for (let i = 0; i < 4; i++) {
             let uli = document.createElement('li');
             Ulist.append(uli);
             uli.innerHTML = i
         }

         return Ulist;
     }
     createOl() {
         let Olist = document.createElement('ol');
         Olist.className = 'olist'
         for (let i = 0; i < 4; i++) {
             let oli = document.createElement('li');
             Olist.append(oli);
             oli.innerHTML = i;
         }

         return Olist;
     }
     createwrap() {
         let wrap = document.createElement('div');
         let cul = this.createUl();
         let col = this.createOl();
         wrap.className = 'wrap';
         wrap.append(cul);
         wrap.append(col);
         document.body.append(wrap);

     }
 }

 let tab = new Tab();