const foodDb = [
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
