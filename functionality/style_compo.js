const price = document.querySelector('.price');
const pageviews = document.querySelector('.pageviews');
const slider = document.querySelector('input[type=range]');
const unitPageviewMillion = document.querySelector('.unit');
const toggle = document.querySelector('.toggle input[type=checkbox]');

const arr = [
    {prop1:'8.00' ,prop2:'10'},
    {prop1:'12.00',prop2 : '50'},
    {prop1:'16.00',prop2 : '100'},
    {prop1:'24.00',prop2 : '500'},
    {prop1:'36.00',prop2 : '1'}
];

function handleUpdate() {
     if(toggle.checked){
        discountedArr = arr.map(obj =>{
             let num =  obj.prop1 * 75/100;
             if(Math.floor(num) - num == 0){
                  return `${num}.00`;
             }else{
                  return num;
             }
          });
        switch (slider.value){
          case '1': price.textContent = discountedArr[0];
                    pageviews.textContent = arr[0].prop2;  
              break;
         case '2': price.textContent = discountedArr[1]; 
                   pageviews.textContent = arr[1].prop2;
              break;
         case '3': price.textContent = discountedArr[2]; 
                   pageviews.textContent = arr[2].prop2;
              break;
         case '4': price.textContent = discountedArr[3]; 
                   pageviews.textContent = arr[3].prop2;
              break;
         case '5': price.textContent = discountedArr[4]; 
                   pageviews.textContent = arr[4].prop2;        
   }
     }else{
          switch (slider.value) {
               case '1': price.textContent = arr[0].prop1;
                         pageviews.textContent = arr[0].prop2;  
                   break;
              case '2': price.textContent = arr[1].prop1; 
                        pageviews.textContent = arr[1].prop2;
                   break;
              case '3': price.textContent = arr[2].prop1; 
                        pageviews.textContent = arr[2].prop2;
                   break;
              case '4': price.textContent = arr[3].prop1; 
                        pageviews.textContent = arr[3].prop2;
                   break;
              case '5': price.textContent = arr[4].prop1; 
                        pageviews.textContent = arr[4].prop2;        
        }
     }
     if(slider.value === '5'){
          unitPageviewMillion.textContent = 'M';
        }else{
          unitPageviewMillion.textContent = 'K';  
        }
}

slider.addEventListener('change',handleUpdate);
slider.addEventListener('mousemove',handleUpdate);
toggle.addEventListener('change',handleUpdate);
