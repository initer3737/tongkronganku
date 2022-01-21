function tahun(){
    let year=new Date().getFullYear();
    let t=document.getElementById('tahun');
    t.innerHTML=year;
  }

  function NavbarTitle(name) {
    let t=document.getElementById('brandName')
    t.innerHTML=name;
  }

  function FjoinWithUs(name) {
    let t=document.getElementById('Fjoin');
    t.innerHTML=name;
  }

  function FCopyright(name) {
    let t=document.getElementById('Fcopy');
    t.innerHTML=name;
  }

  tahun();
  NavbarTitle('Tongkronganku');
  FjoinWithUs('Tongkronganku');
  FCopyright('Tongkronganku');
  // navbar title  || footer copyright || footer join with use F for footer 