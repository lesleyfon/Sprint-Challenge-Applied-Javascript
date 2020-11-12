// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >

// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
    //date
    const spanDate = document.createElement('span');
    spanDate.classList.add('date');
    spanDate.textContent ='MARCH 28, 2019';
    header.appendChild(spanDate)
    //h1
    const h1 = document.createElement('h1');
    h1.textContent ='Lambda Times';
    header.appendChild(h1);
    //temp
    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    spanTemp.textContent ='98°';
    header.appendChild(spanTemp);
    return header;
}
const header = Header();
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(header) 