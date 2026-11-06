// ============================================================
//  여기만 고치면 페이지 내용이 바뀌어요.
//  이미지는 images/ 폴더에 넣고 파일명을 적어주세요.
//  비워두고 싶은 값은 "" 로 두면 화면에서 자동으로 숨겨져요.
// ============================================================

const SITE = {
  name: "Kyoungeun Park",
  title: "My Little Stage",
  subtitle: "Orchestra · Violin · Dance · Research",
  coverImage: "",            // 예: "images/cover.jpg"
  intro: "음악과 움직임, 그리고 신호를 좋아하는 사람입니다.\n무대 위의 순간들과 연구의 기록을 한곳에 모아두었어요.",
  // 인스타그램·구글스칼라·링크드인 아이콘은 항상 보이고, 링크를 넣으면 눌러져요.
  // 이메일·유튜브는 값을 넣었을 때만 아이콘이 나타나요.
  contact: {
    instagram: "https://instagram.com/ke_everything_",           // 예: "https://instagram.com/ke_everything_"
    scholar: "https://scholar.google.com/citations?user=8inKhnwAAAAJ&hl=ko",             // 예: "https://scholar.google.com/citations?user=..."
    linkedin: "https://www.linkedin.com/in/kyoungeun-park-284343285/",            // 예: "https://www.linkedin.com/in/kyoungeun-park-284343285"
    email: "miniholic98@gmail.com",               // 예: "miniholic98@gmail.com"
    youtube: "",
  },
};

// ---------- 오케스트라 공연 (최신순으로 적으면 좋아요) ----------
const CONCERTS = [
  // part 는 포스터에 없어서 비워뒀어요. 채우면 화면에 나타나요.
  {
    poster: "imgs/2018_kuo.jpg",
    date: "2018.03.03",
    group: "고려대학교 관현악단",
    title: "제34회 신춘연주회",
    venue: "고려대학교 인촌기념관",
    part: "",
    program: [
      "H. Berlioz — La Damnation de Faust 'Marche Hongroise', Op. 24",
      "F. Chopin — Piano Concerto No. 1 in E minor, Op. 11",
      "J. Brahms — Symphony No. 1 in C minor, Op. 68",
    ],
    video: "",
  },
  {
    poster: "imgs/2019_kuo.png",
    date: "2019.03.02",
    group: "고려대학교 관현악단",
    title: "제35회 신춘연주회",
    venue: "고려대학교 인촌기념관",
    part: "",
    program: [
      "N. Rimsky-Korsakov — The Tsar's Bride Overture",
      "P. I. Tchaikovsky — The Sleeping Beauty Suite, Op. 66a",
      "A. Dvořák — Symphony No. 9, Op. 95",
    ],
    video: "",
  },
  {
    poster: "imgs/2019_kuo_2.png",
    date: "2019.08.24",
    group: "고려대학교 관현악단",
    title: "제47회 정기연주회",
    venue: "고려대학교 인촌기념관",
    part: "",
    program: [
      "F. Mendelssohn — Märchen von der schönen Melusine, Op. 32",
      "A. Dvořák — Slavonic Dances, Op. 46 (No. 1, 3, 6, 7, 8)",
      "V. Kalinnikov — Symphony No. 1 in G minor",
    ],
    video: "",
  },
  {
    poster: "imgs/2021_passio.jpg",
    date: "2021.08.15",
    group: "파시오네트 오케스트라",
    title: "Passionate Orchestra 2021",
    venue: "성남아트센터",
    part: "",
    program: [
      "C. Saint-Saëns — Danse Macabre",
      "G. Rossini — William Tell Overture",
      "P. I. Tchaikovsky — Symphony No. 6 'Pathétique'",
    ],
    video: "",
  },
  {
    poster: "imgs/2022_kuo.jpg",
    date: "2022.09.03",
    group: "고려대학교 관현악단",
    title: "제50회 정기연주회",
    venue: "고려대학교 인촌기념관",
    part: "",
    program: [
      "J. Sibelius — Finlandia, Op. 26",
      "F. Liszt — Les Préludes, S. 97",
      "J. Sibelius — Symphony No. 2, Op. 43",
    ],
    video: "",
  },
  {
    poster: "imgs/2023_passio.png",
    date: "2023.11.19",
    group: "파시오네트 오케스트라",
    title: "2023 정기연주회",
    venue: "유니버설아트센터",
    part: "",
    program: [
      "D. Shostakovich — Festive Overture",
      "M. Ravel — Boléro",
      "G. Gershwin — Rhapsody in Blue",
      "G. Gershwin — An American in Paris",
    ],
    video: "",
  },
  {
    poster: "imgs/2024_kowoo.jpg",
    date: "2024.06.15",
    group: "고우 오케스트라",
    title: "제21회 정기연주회",
    venue: "마포아트센터 아트홀 맥",
    part: "",
    program: [
      "P. I. Tchaikovsky — Romeo and Juliet, Fantasy-Overture",
      "S. Rachmaninoff — Symphony No. 2 in E minor, Op. 27",
    ],
    video: "",
  },
  {
    poster: "imgs/2024_sasse.jpg",
    date: "2024.12.11",
    group: "현악동호회 SASSE",
    title: "Joyful Bells Concert",
    venue: "삼성전자 R&D 캠퍼스 DE타워 로비",
    part: "",
    program: [],             // 포스터에 곡목이 없어요
    video: "",
  },
  {
    poster: "imgs/2024_centum.jpg",
    date: "2024.12.21",
    group: "고우센텀 오케스트라",
    title: "제2회 정기연주회",
    venue: "고려대학교 인촌기념관",
    part: "",
    program: [
      "L. v. Beethoven — Egmont Overture, Op. 84",
      "L. v. Beethoven — Piano Concerto No. 3 in C minor, Op. 37",
      "F. Schubert — Symphony No. 8 'Unfinished'",
      "L. Anderson — A Christmas Festival",
    ],
    video: "",
  },
  {
    poster: "imgs/2025_kamph.png",
    date: "2025.09.13",
    group: "KAMPH",         // 단체 정식 이름으로 바꿔주세요
    title: "KAMPh 제 2회 정기연주회",
    venue: "과천시민회관",
    part: "",
    program: [
      "D. Shostakovich — Prelude to 'Khovanshchina'",
      "D. Shostakovich — Cello Concerto No. 1",
      "D. Shostakovich — Symphony No. 11 'The Year 1905'",
    ],
    video: "",
  },
  {
    poster: "imgs/2025_winter.jpg",
    date: "2025.12.11",
    group: "현악동호회 SASSE",
    title: "Winter Serenade",
    venue: "삼성전자 R&D 캠퍼스 AB타워 로비",
    part: "",
    program: [],             // 포스터에 곡목이 없어요
    video: "",
  },
  {
    poster: "imgs/2026_kowoo.png",
    date: "2026.11.07",
    group: "고우 오케스트라",
    title: "제22회 정기연주회",
    venue: "서울아트센터 도암홀",
    part: "",
    program: [
      "S. Rachmaninoff — Piano Concerto No. 2 in C minor, Op. 18",
      "A. Dvořák — Symphony No. 7 in D minor, Op. 70",
    ],
    video: "",
  },
];

// 오케스트라로 언젠가 꼭 연주하고 싶은 곡 (예시예요. 실제 곡으로 바꿔주세요)
const ORCHESTRA_WISHLIST = [
  { composer: "G. Mahler", piece: "Symphony No. 5" },
  { composer: "P. I. Tchaikovsky", piece: "Symphony No. 5" },
  { composer: "S. Rachmaninoff", piece: "Symphony No. 2" },
];

// ---------- 바이올린 ----------
const VIOLIN = {
  // 지금 연습 중인 곡
  now: {
    composer: "작곡가",
    piece: "지금 연습 중인 곡",
    note: "since 2026.09",   // 짧은 메모 (선택)
  },
  // 공부했던 협주곡 (예시예요. 실제 곡으로 바꿔주세요)
  studied: [
    { composer: "A. Vivaldi", piece: "Violin Concerto in A minor, RV 356" },
    { composer: "O. Rieding", piece: "Violin Concerto in B minor, Op. 35" },
    { composer: "J. S. Bach", piece: "Violin Concerto No. 1 in A minor, BWV 1041" },
  ],
  // 언젠가 꼭 연주하고 싶은 곡
  wishlist: [
    { composer: "M. Bruch", piece: "Violin Concerto No. 1 in G minor" },
    { composer: "F. Mendelssohn", piece: "Violin Concerto in E minor" },
  ],
};

// ---------- 춤 (도전 순서대로) ----------
const DANCE = [
  { genre: "Jazz", ko: "재즈" },
  { genre: "Contemporary", ko: "현대무용" },
  { genre: "Waacking", ko: "왁킹" },   // 마지막 항목이 '지금' 으로 표시돼요
];

// ---------- 연구 여정 ----------
// papers 를 넣으면 그 항목 아래에 작게 표시돼요.
const JOURNEY = [
  {
    period: "2017 — 2021",
    role: "B.S.",
    title: "Biomedical Engineering · Electrical & Electronic Engineering",
    desc: "의공학 · 전기전자공학 전공",
  },
  {
    period: "2021 — 2023",
    role: "M.S.",
    title: "Biomedical Engineering",
    desc: "수면 및 신경퇴행성 질환 관련 생체신호 연구",
    papers: [
      {
        title: "Quantitative measurement of motor activity during sleep in isolated REM sleep behavior disorder patients using actigraphy before and after treatment with clonazepam",
        // 공저자 12명이라 줄였어요. 전체 목록: Kyoungeun Park, Yong Woo Shin, Sungeun Hwang, El Jeong,
        // Tae-Joon Kim, Jin-Sun Jun, Jung-Won Shin, Jung-Ick Byun, Jun-Sang Sunwoo, Han-Joon Kim,
        // Carlos H Schenck, Ki-Young Jung
        authors: "Kyoungeun Park, Yong Woo Shin, Sungeun Hwang, et al.",
        venue: "SLEEP 46(9)",
        year: "2023",
        link: "https://doi.org/10.1093/sleep/zsad132",
      },
      {
        title: "Electroencephalographic spectro-spatial covariance patterns related to phenoconversion in isolated rapid eye movement sleep behavior disorder and their longitudinal trajectories in α-synucleinopathies",
        authors: "Kyoungeun Park, Jung Hwan Shin, Jung-Ick Byun, El Jeong, Han-Joon Kim, Ki-Young Jung",
        venue: "SLEEP 47(6)",
        year: "2024",
        link: "https://doi.org/10.1093/sleep/zsae052",
      },
    ],
  },
  {
    period: "2023 — Now",
    role: "Researcher",
    title: "Audio Signal Processing",
    desc: "오디오 신호처리 분야 연구원",
  },
];

// ---------- 갤러리 (옆으로 넘기는 사진) ----------
// tag 는 사진 위에 작게 붙는 라벨이에요. 사진은 세로(4:5) 비율이 가장 예뻐요.
const GALLERY = [
  { src: "", tag: "Orchestra", caption: "정기연주회 리허설" },
  { src: "", tag: "Violin", caption: "연습실에서" },
  { src: "", tag: "Dance", caption: "왁킹 클래스" },
  { src: "", tag: "Research", caption: "수면 연구실" },
  { src: "", tag: "Conference", caption: "학회 발표" },
  { src: "", tag: "Audio", caption: "요즘 하는 일" },
];
