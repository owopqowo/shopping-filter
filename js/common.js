const sListData = [
    {
        img: 'images/blue_t.png',
        gender: 'female',
        size: 'large',
        dataType: 'tshirt blue',
    },
    {
        img: 'images/yellow_p.png',
        gender: 'male',
        size: 'small',
        dataType: 'pants yellow',
    },
    {
        img: 'images/blue_s.png',
        gender: 'female',
        size: 'small',
        dataType: 'skirt blue'
    },
    {
        img: 'images/yellow_t.png',
        gender: 'male',
        size: 'small',
        dataType: 'tshirt yellow'
    },
    {
        img: 'images/pink_t.png',
        gender: 'male',
        size: 'large',
        dataType: 'tshirt pink'
    },
    {
        img: 'images/blue_s.png',
        gender: 'female',
        size: 'large',
        dataType: 'skirt blue'
    },
    {
        img: 'images/pink_s.png',
        gender: 'female',
        size: 'large',
        dataType: 'skirt pink'
    },
    {
        img: 'images/pink_p.png',
        gender: 'female',
        size: 'large',
        dataType: 'pants pink'
    },
    {
        img: 'images/yellow_t.png',
        gender: 'male',
        size: 'large',
        dataType: 'tshirt yellow'
    },
    {
        img: 'images/pink_s.png',
        gender: 'female',
        size: 'small',
        dataType: 'skirt pink'
    },
    {
        img: 'images/pink_p.png',
        gender: 'male',
        size: 'large',
        dataType: 'pants pink'
    },
    {
        img: 'images/yellow_s.png',
        gender: 'female',
        size: 'large',
        dataType: 'skirt yellow'
    },
    {
        img: 'images/blue_t.png',
        gender: 'male',
        size: 'large',
        dataType: 'tshirt blue'
    },
    {
        img: 'images/blue_p.png',
        gender: 'male',
        size: 'small',
        dataType: 'pants blue'
    },
    {
        img: 'images/yellow_t.png',
        gender: 'female',
        size: 'large',
        dataType: 'tshirt yellow'
    },
    {
        img: 'images/yellow_s.png',
        gender: 'female',
        size: 'small',
        dataType: 'skirt yellow'
    },
    {
        img: 'images/pink_p.png',
        gender: 'female',
        size: 'large',
        dataType: 'pants pink'
    },
    {
        img: 'images/yellow_t.png',
        gender: 'female',
        size: 'small',
        dataType: 'tshirt yellow'
    }
]
const sList = document.querySelector('.s-list');
const buttons = document.querySelectorAll('.s-nav button');

for (let i = 0; i < sListData.length; i++) {
    const item = document.createElement('li');
    item.setAttribute('class', 's-item');
    item.setAttribute('data-type', sListData[i].dataType);
    item.innerHTML = `
        <img src="${sListData[i].img}" alt="">
        <span class="gender">${sListData[i].gender}</span>
        <span class="size">${sListData[i].size}</span>
    `
    sList.appendChild(item);
}

buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        const btnData = btn.getAttribute('data-type');
        const itemList = document.querySelectorAll('.s-item');
        itemList.forEach(function(list){
            if(list.getAttribute('data-type').indexOf(btnData) != -1){
                list.style.display = 'flex';
            } else {
                list.style.display = 'none';
            }
        });
    });
});