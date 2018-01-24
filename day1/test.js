class Box {
    constructor(title = '标题党', content = '阿萨德撒大家撒到拉萨') {
        this.title = title;
        this.content = content;
        this.init();
    }
    init() {
        this.createWrap();
        this.createmark();
    }
    addEvent() {
        let span = document.querySelectorAll('.float-right')[0];

        span.addEventListener('click', (event) => {
            this.hide();
        })

    }
    hide() {
        let cDiv = document.querySelectorAll('.box')[0];
        cDiv.style.display = 'none';
    }
    createTitle() {
        let ol = document.createElement('ol');
        let span = document.createElement('span');

        ol.className = 'box-title';
        ol.innerHTML = this.title;

        span.className = 'float-right';
        span.innerHTML = 'x';
        ol.append(span);
        return ol;
    }
    createContent() {
        let p = document.createElement('p');
        p.innerHTML = this.content;
        return p;
    }
    createmark() {
        let mark = document.createElement('div');
        mark.className = 'mark';
        mark.innerHTML = 'asdsdas';
        document.body.append(mark);
        return mark;
    }
    createWrap() {
        let cDiv = document.createElement('div');
        let ctit = this.createTitle();
        let cCon = this.createContent();
        cDiv.append(ctit);
        cDiv.append(cCon);
        cDiv.className = 'box';

        document.body.append(cDiv);
        this.addEvent();
    }

}

let box = new Box();