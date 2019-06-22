import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'

describe('Our first test', ()=> {

  it('should pass', ()=>{
    expect(true).to.equal(true)
  })

})


describe('index.html', ()=>{

  it('should say hello',()=>{

    let readFile = fs.readFileSync('./src/index.html', 'utf-8');
    // jsdom.env(readFile, (err, window)=>{
      let { JSDOM } = jsdom ;
      let dom = new JSDOM(readFile);
      let h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Works Online');
      dom.window.close();
    // })

  })


})
