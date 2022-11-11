const foodDb = [
    {
        name:"율천회관",
        country:"한식",
        variety:"밥",
        people: [2],
        location:"후문+쪽문",
        menu:"육회비빔밥",
        dayOff:"매주 일요일",
        address:"경기 수원시 장안구 서부로2126번길 24 율천회관"
    },
    {
        name: "이라면",
        country: "분식",
        variety: "면",
        people: [1,2],
        location: "후문+쪽문",
        menu: "라면,라볶이",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2106번길 18"
    },
    {
        name: "포크포크매콤돈가스칡불냉면",
        country: "한식",
        variety: "면",
        people: [1,2],
        location: "후문+쪽문",
        menu: "돈냉면, 매콤돈가스",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2106번길 14"
    },
    {
        name: "싸가정곱창&담윤순대국",
        country: "한식",
        variety: "밥",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "순대국, 돼지곱창",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 27 1층 101호"
    },
    {
        name: "본찌돈까스",
        country: "일식",
        variety: "밥",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "돈까스,카레",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2106번길 22"
    },
    {
        name: "화원루",
        country: "중식",
        variety: "면",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "짜장면,짬뽕",
        dayOff: "",
        address: "경기 수원시 장안구 서부로2126번길 17"
    },
    {
        name: "생순",
        country: "한식",
        variety: "밥",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "순대국",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 38"
    },
    {
        name: "아늑",
        country: "제3국",
        variety: "면",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "파스타,필라프",
        dayOff: "매월 마지막 날",
        address: "경기 수원시 장안구 서부로2106번길 36-4 1층"
    },
    {
        name: "힌카쿠",
        country: "일식",
        variety: "면",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "돈코츠 라멘, 가츠동",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 10"
    },
    {
        name: "보배반점",
        country: "중식",
        variety: "면",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "짜장면, 짬뽕",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로 2132 2층"
    },
    {
        name: "일미닭갈비파전",
        country: "한식",
        variety: "밥",
        people: [2],
        location: "후문+쪽문",
        menu: "닭갈비",
        dayOff: "주말",
        address: "경기 수원시 장안구 서부로2106번길 26-3"
    },
    {
        name: "도레미파스타",
        country: "제3국",
        variety: "면",
        people: [1,2],
        location: "후문+쪽문",
        menu: "파스타,리조또",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2106번길 26-15 101호"
    },
    {
        name: "청년밥상",
        country: "한식",
        variety: "밥",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "제육쌈밥, 된장찌개",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2136번길 10 1층"
    },
    {
        name: "지코바치킨",
        country: "인스턴트",
        variety: "밥",
        people: [2,4],
        location: "후문+쪽문",
        menu: "숯불양념구이",
        dayOff: "매주 월요일",
        address: "경기 수원시 장안구 서부로2126번길 17 a동 2호"
    },
    {
        name: "성대골목식당",
        country: "한식",
        variety: "밥",
        people: [1,2],
        location: "후문+쪽문",
        menu: "닭칼국수, 닭한마리",
        dayOff: "매주 토요일",
        address: "경기 수원시 장안구 서부로2106번길 26-3 2층"
    },
    {
        name: "기똥찬고기",
        country: "한식",
        variety: "밥",
        people: [2,4],
        location: "후문+쪽문",
        menu: "삼겹살, 막창",
        dayOff: "없음",
        address: "경기 수원시 장안구 화산로213번길 29-6 기똥찬고기"
    },
    {
        name: "떡의 작품",
        country: "분식",
        variety: "밥",
        people: [1,2],
        location: "후문+쪽문",
        menu: "가래떡볶이",
        dayOff: "매주 월요일",
        address: "경기 수원시 장안구 서부로2126번길 15 1층"
    },
    {
        name: "킹고하우스",
        country: "분식",
        variety: "밥",
        people: [1,2],
        location: "후문+쪽문",
        menu: "떡볶이, 순대, 튀김",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2106번길 21 왕돈까스"
    },
    {
        name: "중경마라탕",
        country: "중식",
        variety: "면",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "마라탕, 꿔바로우",
        dayOff: "",
        address: "경기 수원시 장안구 서부로2106번길 10"
    },
    {
        name: "국졔식당",
        country: "한식",
        variety: "밥",
        people: [1, 2],
        location: "후문+쪽문",
        menu: "제육볶음, 수육정식",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 29 2층 국졔식당"
    },
    {
        name: "동대문엽기떡볶이",
        country: "분식",
        variety: "밥",
        people: [2],
        location: "후문+쪽문",
        menu: "떡볶이",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로 2132"
    },
    {
        name: "꾸이꾸이돼지마을",
        country: "한식",
        variety: "밥",
        people: [2,4],
        location: "후문+쪽문",
        menu: "갈매기살",
        dayOff: "",
        address: "경기 수원시 장안구 화산로213번길 9-3 산이슬교회"
    },
    {
        name: "노랑통닭",
        country: "인스턴트",
        variety: "밥",
        people: [2, 4],
        location: "후문+쪽문",
        menu: "치킨",
        dayOff: "없음",
        address: "경기 수원시 장안구 화산로213번길 32"
    },
    {
        name: "동자설렁탕",
        country: "한식",
        variety: "밥",
        people: [1,2],
        location: "후문+쪽문",
        menu: "설렁탕, 삼계탕",
        dayOff: "없음",
        address: "경기 수원시 장안구 화산로213번길 23"
    },

/* ====================================================================================================== */



    {
        name:"카마타케제면소",
        country:"일식",
        variety:"면",
        people: ["1", "2", "4"],
        location:"성대역",  // *
        menu:"붓카케우동",
        dayOff:"휴무 없음",
        address:"경기 수원시 장안구 서부로 2149 4층 405호"
    },
    {
        name: "돈정",
        country: "일식",
        variety: "면",
        people: ["1", "2", "4"],
        location: "후문+쪽문",
        menu: "라면,라볶이",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 화산로233번길 38"
    },
    {
        name: "청진동해장국",
        country: "한식",
        variety: "밥",
        people: ["1", "2", "4"],
        location: "후문+쪽문",
        menu: "뼈해장국",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로2123번길 17 우신빌딩"
    },
    {
        name: "바른스시",
        country: "일식",
        variety: "밥",
        people: ["1", "2", "4"], // *
        location: "후문+쪽문",
        menu: "스시",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로 2125 2층"
    },
    {
        name: "미가라멘",
        country: "일식",
        variety: "면",
        people: ["1", "2", "4"],  // *
        location: "후문+쪽문",
        menu: "라멘",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 화산로233번길 59"
    },
    {
        name: "맥도날드",
        country: "제3국",
        variety: "밥", // 빵..?
        people: ["1", "2", "4"],
        location: "후문+쪽문",
        menu: "햄버거",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로 2127"
    },
    {
        name: "지장수 본가 전주콩나물국밥",
        country: "한식",
        variety: "밥",
        people: ["1", "2", "4"],
        location: "후문+쪽문",
        menu: "콩나물국밥",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로2123번길 29"
    },
    {
        name: "키와마루아지",
        country: "일식",
        variety: "면",
        people: ["1", "2", "4"], // *
        location: "후문+쪽문",
        menu: "라멘",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로2105번길 26-3 1층"
    },
    {
        name: "고씨네 카레",
        country: "일식",
        variety: "밥",
        people: ["2", "4"], // *
        location: "후문+쪽문",
        menu: "라멘",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로2105번길 21 2층"
    },
    {
        name: "천하일면",
        country: "한식",
        variety: "면",
        people: ["1", "2", "4"],
        location: "후문+쪽문",
        menu: "고기국수",
        dayOff: "토요일",
        address: "경기 수원시 장안구 화산로233번길 46"
    },
    {
        name: "한마리 정육식당",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "소한마리",
        dayOff: "휴무 없음", // *
        address: "경기 수원시 장안구 화산로233번길 52"
    },
    {
        name: "국수파동",
        country: "분식",
        variety: "면",
        people: ["1", "2"],
        location: "후문+쪽문",
        menu: "멸치국수",
        dayOff: "일요일",
        address: "경기 수원시 장안구 화산로233번길 64 1층"
    },
    {
        name: "보영만두",
        country: "분식",
        variety: "면",
        people: ["1", "2"],
        location: "후문+쪽문",
        menu: "고기만두",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 화산로233번길 30"
    },
    {
        name: "떡보킹",
        country: "분식",
        variety: "면",  // 떡
        people: ["1", "2"], // *
        location: "후문+쪽문",
        menu: "떡볶이",
        dayOff: "월요일",
        address: "경기 수원시 장안구 율전로 84 의성빌딩 102호"
    },
    {
        name: "춘천닭갈비 칡냉면",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "닭갈비",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 화산로233번길 64"
    },
    {
        name: "담은 샤브칼국수",
        country: "한식",  
        variety: "면",  // 볶음밥도 존재
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "샤브버섯칼국수",
        dayOff: "일요일", // *
        address: "경기 수원시 장안구 화산로233번길 60"
    },
    {
        name: "반갑다 친구야",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "생삼겹살",
        dayOff: "휴무 없음", // *
        address: "경기 수원시 장안구 서부로2105번길 24"
    },
    {
        name: "뽕가네",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "뽕나무수육전골",
        dayOff: "휴무 없음", // *
        address: "경기 수원시 장안구 율전로 73"
    },
    {
        name: "성대 찌개고을",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "돼지김치찌개",
        dayOff: "2,4주 일요일",
        address: "경기 수원시 장안구 서부로2105번길 16-9"
    },
    {
        name: "아그집 쭈꾸미",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "쭈꾸미볶음",
        dayOff: "일요일",
        address: "경기 수원시 장안구 화산로233번길 12 2층"
    },
    {
        name: "모수밀면",
        country: "한식",
        variety: "면",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "물밀면, 비빔밀면",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 율전로107번길 5 해생빌딩 1층"
    },
    {
        name: "수해복 마라탕",
        country: "중식",
        variety: "밥", // 면..?
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "마라탕",
        dayOff: "홀수 토요일",
        address: "경기 수원시 장안구 서부로2105번길 7 1층"
    },
    {
        name: "만다",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "가지덮밥",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로2105번길 16-6"
    },
    {
        name: "청년다방",
        country: "분식",
        variety: "면", // 떡
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "떡볶이",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 화산로233번길 35"
    },
    {
        name: "백채김치찌개",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "김치찌개",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 서부로2105번길 21 101호"
    },
    {
        name: "부자국밥",
        country: "한식",
        variety: "밥",
        people: ["1", "2", "4"],
        location: "후문+쪽문",
        menu: "돼지국밥",
        dayOff: "토요일",
        address: "경기 수원시 장안구 화산로233번길 46"
    },
    {
        name: "인더비엣",
        country: "제3국",
        variety: "면",
        people: ["2", "4"],
        location: "후문+쪽문",
        menu: "쌀국수, 팟타이",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 율전로108번길 23"
    },
    {
        name: "삼대째 손두부",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "정문",
        menu: "순두부찌개",
        dayOff: "일요일",
        address: "경기 수원시 장안구 정자천로13번길 13-24"
    },
    {
        name: "닭집애",
        country: "한식",
        variety: "밥",
        people: ["2", "4"],
        location: "정문",
        menu: "찜닭",
        dayOff: "일요일",
        address: "경기 수원시 장안구 일월로66번길 15 1층"
    },
    {
        name: "카츠요이",
        country: "일식",
        variety: "밥",
        people: ["1", "2", "4"],
        location: "정문",
        menu: "돈까스",
        dayOff: "일요일",
        address: "경기 수원시 장안구 정자천로13번길 36 1층 103호"
    },
    {
        name: "양평해장국",
        country: "한식",
        variety: "밥",
        people: ["1", "2", "4"],
        location: "정문",
        menu: "해장국",
        dayOff: "휴무 없음",
        address: "경기 수원시 장안구 일월로90번길 2 효원빌딩"
    }
]

const button = document.getElementById('BtnGroup');
const filteredList = [];


function filterChoice(){
    const country = document.getElementById('country');
    const variety = document.getElementById('variety');
    const people = document.getElementById('people');
    const loca = document.getElementById('location');
    /location이라 선언하면 error/

    const selectedCountry = country.options[country.selectedIndex].text;
    const selectedVariety = variety.options[variety.selectedIndex].text;
    const selectedPeople = Number(people.options[people.selectedIndex].value);
    const selectedLocation = loca.options[loca.selectedIndex].text;



    for (i in foodDb) {
        if ((foodDb[i].country === selectedCountry) && (foodDb[i].variety === selectedVariety) && (foodDb[i].people.includes(selectedPeople)) && (foodDb[i].location===selectedLocation)){
            filteredList.push(i);
        }
    }
    console.log(filteredList)
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

