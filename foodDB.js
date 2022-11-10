const foodDb = [
    {
        name:"율천회관",
        country:"한식",
        variety:"밥",
        people:"2",
        location:"후문+쪽문",
        menu:"육회비빔밥",
        dayOff:"매주 일요일",
        address:"경기 수원시 장안구 서부로2126번길 24 율천회관"
    },
    {
        name: "이라면",
        country: "분식",
        variety: "면",
        people: "2",
        location: "후문+쪽문",
        menu: "라면,라볶이",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2106번길 18"
    }
]

const button = document.getElementById('BtnGroup');
const filteredList = []


function filterChoice(){
    const country = document.getElementById('country');
    const variety = document.getElementById('variety');
    const people = document.getElementById('people');
    const loca = document.getElementById('location');
    /location이라 선언하면 error/

    const selectedCountry = country.options[country.selectedIndex].text;
    const selectedVariety = variety.options[variety.selectedIndex].text;
    const selectedPeople = people.options[people.selectedIndex].text;
    const selectedLocation = loca.options[loca.selectedIndex].text;

    for (i in foodDb) {
        if ((foodDb[i].country === selectedCountry) && (foodDb[i].variety === selectedVariety) && (foodDb[i].people === selectedPeople) && (foodDb[i].location===selectedLocation)){
            filteredList.push(i);
        }
    }
    if (filteredList.length === 0){
        console.log('해당되는 음식점이 없습니다. 새로고침해주세요.')
    }
    else{
        choiceRandom(filteredList)
    }
}

function choiceRandom(list){
    const num = Math.floor(Math.random()* filteredList.length);
    const choicedRes = list[num];
    console.log(foodDb[choicedRes].name)
    console.log(foodDb[choicedRes].menu)
    console.log(foodDb[choicedRes].dayOff)
    console.log(foodDb[choicedRes].address)
}

button.addEventListener("click",filterChoice);

