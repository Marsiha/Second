var left = document.getElementsByClassName('fa-caret-left')[0];
var right = document.getElementsByClassName('fa-caret-right')[0];
var cards = document.getElementsByClassName('cards')[0];
var total_cost = 0;

left.addEventListener('click', ()=>{
    cards.scrollLeft -= 150;
})
right.addEventListener('click', ()=>{
    cards.scrollLeft += 150;
})
var check = 1;
var photo = document.getElementById('ava');
var title = document.getElementById('im');
var opi = document.getElementById('opi');
var cost = document.getElementById('cost');
let count = 0;
var arr = ["Medium rare steak roasting degree is an ideal roasting for classic steaks, red-pink color inside. The temperature is 46-50 °C.",
    "Soup without meat, but no less delicious than with it. A lot of vitamins, trace elements and few calories. It is very useful and can be recommended for baby food and for adults. A set of vegetables can be any to taste.",
    "Pizza Margarita is a traditional Italian pizza. The composition of this pizza is extremely simple, its main ingredients: mozzarella cheese, ripe tomatoes and fresh basil leaves.",
    "This dish is a highlight of Ukrainian cuisine, which is probably known all over the world. Rich, appetizing and satisfying ... a wonderful idea for the whole family!",
    "Milkshake is a fragrant cold drink based on milk and ice cream with a delicate creamy taste and airy consistency. And this drink is also very useful, because milk and ice cream contain calcium necessary for our body!",
    "There will be no special seasonings, but only black pepper and salt. A little oil, 15 minutes of time - and that's it! Mashed potatoes are suitable for garnish.",
    "A great snack for friendly gatherings - fried shrimp fried shrimp for beer, for example, fried shrimp with garlic and lemon, fried shrimp with garlic and soy sauce.",
    "The main dish of Thai cuisine and one of the most important hits of world gastronomy. An outstanding combination of acid and pepper, satiety and lightness.",
    "Fried vegetables are prepared simply by successive frying in oil in a frying pan. They can be served as an independent dish or a vegetable side dish.",
    "Tiramisu is a very airy, delicate Italian dessert, with an amazing contrast of sweet cream and bitter taste of strong coffee.Now Tiramisu is very popular all over the world, but its homeland is Italy."];
Array.from(document.getElementsByClassName('card')).forEach((ele,i)=>{
    ele.addEventListener('click', ()=>{
        check = 1;
        count=0;
        photo.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        opi.innerText = arr[i];
        cost.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})

function addOrder(){
    total_cost+=parseInt(cost.innerText.substring(1,cost.innerText.length));
    document.getElementById('sum').innerText = total_cost;
    if(check>1){
        if(count>0){
            count++;
            document.getElementById('orders').lastElementChild.innerHTML = document.getElementById('orders').lastElementChild.innerHTML.substring(0,document.getElementById('orders').lastElementChild.innerHTML.length-1)+check;
        }else {
            document.getElementById('orders').lastElementChild.innerHTML = document.getElementById('orders').lastElementChild.innerHTML+ ' X' +check;
            count++;
        }
    }else {
        let div = document.createElement('div')
        div.innerHTML = title.innerText;
        document.getElementById('orders').appendChild(div)
    }
    check++;
}
