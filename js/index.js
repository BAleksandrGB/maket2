const DT = {
    url: "https://www.schoolsw3.com/js/index.php",
    page: document.body,
    div: 'div',
    p:'p',

    blockJS() {
        let el=document.createElement(this.div);
        el.id='blockJsBook';
        el.style.position='fixed';
        el.style.top='20px';
        el.style.left='20px';
        el.style.width='50px';
        el.style.height='50px';
        /* el.style.background='#03030350'; */
        el.style.border='1px dashed #030303';
        el.style.borderRadius='50%';
        el.style.padding='20px 0px';
     
        let blockEl =  this.page.appendChild(el);
        return blockEl
    },
    blocklink(){
        let el=document.createElement(this.p);
        el.id='blockLinkBook';
        el.style.display='flex';
        el.style.justifyContent='center';
        el.style.alignItems='center';
        el.style.textAlign='center';
        el.style.writingMode='vertical-lr';
        el.style.color='#fff';
        el.style.fontSize='18px';
        el.style.lineHight='1.2';
        el.innerHTML=`<a href="${this.url}">Js учебник</a>`;
        this.blockJS().appendChild(el);
    }
}



/* DT.blockJS() */
DT.blocklink()