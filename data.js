/* =========================================================
   THEMIS 연혁표 — 공용 데이터 파일 (data.js)
   index.html(공식 연혁표)과 persona.html(내 캐릭터 기록)이 함께 읽어요.
   연표를 고칠 땐 이 파일만 고쳐서 올리면 두 페이지에 모두 반영돼요.
   ========================================================= */
/* =========================================================
   ✏️ 여기만 고치면 돼요 — 연혁 데이터
   ---------------------------------------------------------
   date  : 날짜 (자유 형식. 예: "2025.03.14", "2025.03", "2025 봄")
   year  : 묶음 제목 (연도, 시즌, 챕터 등 자유롭게)
   title : 사건 제목
   desc  : 설명 (줄바꿈은 <br>)
   tag   : 분류 (아래 TAGS에 있는 이름 중 하나)
   spoiler : true 면 클릭해야 내용이 보여요 (생략 가능)
   link  : 관련 링크 (생략 가능)
   ========================================================= */
const SITE = {
  title: "THEMIS",
  subtitle: "Chronicle — 테미스 연혁표",
  footer: ""
};

/* 분류 이름 : 색 */
const TAGS = {
  "각성":   "#7b6fd0",
  "테미스": "#3b6fe0",
  "압주":   "#d6455d",
  "설립":   "#c98a1c",
  "사건":   "#5b6270",
  "현재":   "#169c74"
};

/* 연도 옆에 붙는 부제 (없으면 비워 두기) */
const YEAR_NOTE = {
  "2028": "개문 원년",
  "2029": "테미스 설립",
  "2030": "MUSE 신설",
  "2032": "압주 조성 · 알렉토 창설",
  "2033": "베스탈 신설",
  "2034": "귀소 창설",
  "2036": "현재"
};

/* key: true → 굵게 강조되는 주요 사건
   이름은 코드네임 기준 — 검색창에 본명을 쳐도 해당 코드네임 항목이 나와요 */
const EVENTS = [
  // ── 2028
  { year: "2028", title: "개문(開門)", desc: "세계 각지에 차원 균열 동시 발생, 이형 유출<br>동일 시점 극소수 인류 각성 · 군경 대응 실패", tag: "사건", key: true },
  { year: "2028", title: "코스모스 각성", desc: "균열 첫날 각성", tag: "각성" },
  { year: "2028", title: "베인 · 뱅가드 · 피피 · 러스트 각성", tag: "각성" },
  { year: "2028", title: "N, 겨울 한강변에서 발견", tag: "사건", key: true },
  { year: "2028", title: "키퍼 · 톡신 · 아이테르 각성", tag: "각성" },
  { year: "2028", title: "모비딕 · 리멤버 · 피그말리온 각성", tag: "각성" },
  { year: "2028", title: "프로메테우스 · 베놈 각성", tag: "각성" },
  { year: "2028", title: "로드 · 풀멘 · 헤일로 각성", tag: "각성" },
  { year: "2028", title: "애쉬 각성", tag: "각성" },
  { year: "2028", title: "체르노 각성 · 테미스 미합류", tag: "각성" },
  { year: "2028", title: "레퀴엠 각성", desc: "이후 균열 피해지 순회 · 무보수 염습 활동", tag: "각성" },
  { year: "2028", title: "마스크 · 아멘 각성", tag: "각성" },
  { year: "2028", title: "피그말리온, 신변 보호 목적으로 독일 지부 합류", desc: "당시 독일 지부는 각성자 모임 수준으로 추정<br>이후 갈라테이아를 피해 한국 본부로 이동", tag: "테미스" },

  // ── 2029
  { year: "2029", title: "THEMIS 설립", desc: "프로토게노이 4인이 설립한 국경 없는 기관 · 초국가 관할권 확보", tag: "설립", key: true },
  { year: "2029", title: "베인 · 뱅가드 · 피피, 창립기 테미스 합류", tag: "테미스" },
  { year: "2029", title: "키퍼 · 톡신, 창립기 테미스 합류", tag: "테미스" },
  { year: "2029", title: "러스트, 수개월 후 테미스 입사", tag: "테미스" },
  { year: "2029", title: "루멘 각성 · 테미스 편입", tag: "테미스" },
  { year: "2029", title: "아이테르 테미스 합류", desc: "프로토게노이 판정 · 이사회 직속 배치", tag: "테미스" },
  { year: "2029", title: "헤로인 각성 · 테미스 합류", tag: "테미스" },
  { year: "2029", title: "바인더 각성", desc: "개문 1년차 각성", tag: "각성" },
  { year: "2029", title: "하사 각성 (백택 각인)", tag: "각성" },
  { year: "2029", title: "스위퍼 각성", desc: "PMC 임무 중 민간인 학살 재목격이 계기", tag: "각성" },
  { year: "2029", title: "트러블 · 팽 각성", tag: "각성" },
  { year: "2029", title: "모비딕, 테미스 한국 본부 합류", tag: "테미스" },
  { year: "2029", title: "피그말리온 테미스 합류", tag: "테미스" },
  { year: "2029", title: "리멤버 테미스 합류", desc: "실제로는 ■■가 신병 확보 (연구소 추정)", tag: "테미스", spoiler: true },
  { year: "2029", title: "트러블, 테미스 미국 지부 합류", tag: "테미스" },
  { year: "2029", title: "팽, 테미스 홍콩 3팀 합류", tag: "테미스" },
  { year: "2029", title: "애쉬 테미스 합류", tag: "테미스" },
  { year: "2029", title: "레드 · 뮤트 · 불 각성 · 테미스 합류", tag: "테미스" },
  { year: "2029", title: "아멘 사제 서품 · 연말 MUSE 등록", tag: "테미스" },
  { year: "2029", title: "피그말리온, 갈라테이아에 의해 사망 후 실종", tag: "사건", key: true },

  // ── 2030
  { year: "2030", title: "MUSE 신설", tag: "설립", key: true },
  { year: "2030", title: "카산 · 이온 각성 · 테미스 합류", tag: "테미스" },
  { year: "2030", title: "아트로포스 각성", tag: "각성" },
  { year: "2030", title: "마운틴 각성", tag: "각성" },
  { year: "2030", title: "바인더 한국 입국 · 테미스 한국 본부 합류", tag: "테미스" },
  { year: "2030", title: "프로메테우스, ZERO팀 팀장 부임", tag: "테미스", key: true },
  { year: "2030", title: "하트 각성 · 콘센테스 합류", desc: "볼텍스의 제안으로 각성 직후 합류 · 콘센테스는 THEMIS US(미국 지부) 소속<br>각성 시점은 29~30년 사이", tag: "테미스" },
  { year: "2030", title: "트러블, 한국 본부 올림피안 팀 합류", tag: "테미스" },
  { year: "2030", title: "스위퍼 테미스 편입", tag: "테미스" },
  { year: "2030", title: "스펙터 창설 (스위퍼)", tag: "설립", key: true },
  { year: "2030", date: "2030년 늦봄", title: "메어 각성", tag: "각성" },
  { year: "2030", date: "2030년 가을", title: "메어, 테미스 독일 지부 등록", tag: "테미스" },

  // ── 2031
  { year: "2031", title: "팔랑크스 팀 전멸 사건", desc: "키퍼 · 톡신 전락 및 이탈", tag: "사건", key: true },
  { year: "2031", title: "아트로포스, ZERO팀 부팀장 부임", tag: "테미스" },
  { year: "2031", title: "아멘 환속 신청 · 스펙터 상주 파견", tag: "테미스" },
  { year: "2031", date: "2031년 봄", title: "블랭크 각성", tag: "각성" },

  // ── 2032
  { year: "2032", title: "넬, 시설 탈출 후 테미스 편입", desc: "테미스 관할권 확립 이전 일본의 인공 각성자 제작 계획 — 관할 강화로 폐쇄 진행 중 탈출", tag: "테미스", spoiler: true },
  { year: "2032", title: "모르페오 각성 · 테미스 합류", tag: "테미스" },
  { year: "2032", title: "샌즈 각성", tag: "각성" },
  { year: "2032", title: "압주 조성", desc: "키퍼가 균열 경계에 기틀을 세우고 관리자로 정착", tag: "설립", key: true },
  { year: "2032", title: "모비딕, 올림피안 임무 중 실종 · 전락", tag: "사건", key: true },
  { year: "2032", title: "트러블 전락 증세 발현 · 이탈 후 전락", tag: "사건" },
  { year: "2032", title: "알렉토 창설", desc: "압주에 유입된 모비딕이 제안을 받아 창설", tag: "설립", key: true },
  { year: "2032", title: "모비딕, 전락한 트러블 회수 · 압주 합류", tag: "압주" },
  { year: "2032", title: "애쉬 · 뮤트 전락 · 압주 합류", tag: "압주" },
  { year: "2032", title: "비질 · 브레이스 · 엠버, 압주에서 실종", tag: "사건", key: true },
  { year: "2032", title: "마스크, 테미스 일본 지부 등록", tag: "테미스" },
  { year: "2032", title: "블랭크, 오스트리아 지부 자진 등록 · 스펙터 배속", tag: "테미스" },

  // ── 2033
  { year: "2033", title: "베스탈 설립", tag: "설립", key: true },
  { year: "2033", title: "굿독 각성", desc: "베스탈 창설 순간 각성", tag: "각성" },
  { year: "2033", title: "하사, 이형전 치명상 · 압주 합류", desc: "백택(영하) 분리 · <b>명경당 개업</b>", tag: "압주" },
  { year: "2033", title: "아이테르 이탈 · 압주 합류", desc: "\"사상 차이\"를 공언하고 이탈", tag: "압주" },
  { year: "2033", title: "피그말리온 이탈 · 압주 합류", desc: "개인적 목적으로 압주행 · 알렉토 첫 가이드로 합류", tag: "압주" },
  { year: "2033", title: "테미스 홍콩 지부 재앙", desc: "홍콩 지부 3팀 인명 피해 · 팽 전락", tag: "사건", key: true },
  { year: "2033", title: "레드 · 불 이탈 · 압주 합류", tag: "압주" },
  { year: "2033", date: "2033년 초", title: "레퀴엠 테미스 등록 · 장의사 겸직", tag: "테미스" },
  { year: "2033", date: "2033년 하반기", title: "레퀴엠 스펙터 합류", tag: "테미스" },
  { year: "2033", title: "메어 정식 요원 임용", tag: "테미스" },
  { year: "2033", title: "마스크 스펙터 편입", desc: "변신 능력 관리 명목", tag: "테미스" },
  { year: "2033", title: "아멘 환속 · 독신 의무 관면 완료", tag: "사건" },

  // ── 2034
  { year: "2034", title: "귀소 창설 (애쉬)", tag: "설립", key: true },
  { year: "2034", title: "센터 각성", tag: "각성" },
  { year: "2034", title: "핸섬 각성 · 테미스 거부 · 압주 합류", tag: "압주" },
  { year: "2034", title: "리멤버 알렉토 합류", tag: "압주" },
  { year: "2034", title: "팽, 전락 후 압주 유입 · 보호", tag: "압주" },
  { year: "2034", title: "샌즈 이탈", tag: "사건" },
  { year: "2034", title: "메어 스펙터 자원 · 본부 전출", tag: "테미스" },

  // ── 2035
  { year: "2035", title: "데메테르 각성 · ZERO팀 합류", tag: "테미스" },
  { year: "2035", title: "피피 이탈 · 압주 재합류", desc: "팔랑크스 팀 전멸 사건 은폐 사실 인지 후 이탈", tag: "압주", key: true },
  { year: "2035", title: "하트 이탈", tag: "사건", key: true },
  { year: "2035", title: "콘센테스, 하트 추적 개시", tag: "사건" },
  { year: "2035", title: "특급 이형 최초 목격", desc: "바다이빨 · 칼잠 · 스티처 · 칼레이도스코프", tag: "사건", key: true },
  { year: "2035", title: "작품 기준 시점 — 가급구 · 베스탈 · 통불스급 · 언압흐 · 귀소 · 빌대환", desc: "개인 채팅 캐릭터는 기준 시점 개별 확인 요망", tag: "현재", key: true },

  // ── 2036
  { year: "2036", title: "현재 (균열 8년차)", desc: "작품 기준 시점 — 빌대환 · 미꼴통 · ZERO부터", tag: "현재", key: true },
  { year: "2036", title: "베놈, ZERO팀 팀장 부임", tag: "테미스" },
  { year: "2036", title: "프로메테우스, ZERO팀 부팀장으로 이동", tag: "테미스" },
  { year: "2036", title: "아트로포스, ZERO팀 팀원으로 이동", tag: "테미스" },

  // ── 2037
  { year: "2037", title: "작품 기준 시점 — 스티처 · 바다이빨", tag: "현재", key: true }
];

/* 인물 목록 — 팀별 [코드네임, 본명, 각인 · 상태, 캐릭터 챗 링크]  (themis-view 기준) */
const CHARS = {
  "COUNCIL · THEMIS 최고 수장단": [
    ["코스모스","백윤","프로토게노이 카오스","https://share.crack.wrtn.ai/szbp54"],
    ["N","■■■■","프로토게노이 닉스","https://share.crack.wrtn.ai/7ugcka"],
    ["로드","서시찬","프로토게노이 가이아","https://share.crack.wrtn.ai/lknvvk"],
    ["아이테르","아르준 프라카시","프로토게노이 아이테르","https://share.crack.wrtn.ai/8pzfu55"]
  ],
  "센티넬 · OLYMPIAN": [
    ["베인","서도혁","올림포스 포세이돈","https://share.crack.wrtn.ai/7ugcka"],
    ["러스트","반우진","티탄 이아페토스","https://share.crack.wrtn.ai/7ugcka"],
    ["뱅가드","데이비드 하트","티탄 보레아스","https://share.crack.wrtn.ai/7ugcka"],
    ["넬","카즈마","타르타로스 타나토스","https://share.crack.wrtn.ai/7ugcka"],
    ["베놈","강독무","타르타로스 티폰","https://share.crack.wrtn.ai/0st8oew"],
    ["풀멘","기태온","올림포스 제우스","https://share.crack.wrtn.ai/535jk6u"]
  ],
  "센티넬 · PHALANX": [
    ["헤일로","윤제이","티탄 헬리오스","https://share.crack.wrtn.ai/yxf9i6"],
    ["카산","송요한","올림포스 아폴론","https://share.crack.wrtn.ai/45m4hq"],
    ["이온","서태윤","티탄 오케아노스","https://share.crack.wrtn.ai/45m4hq"],
    ["모르페오","이현강","타르타로스 헤카테","https://share.crack.wrtn.ai/45m4hq"]
  ],
  "가이드 · MUSE": [
    ["헤로인","주지호","타르타로스 히프노스","https://share.crack.wrtn.ai/3q7fwr"],
    ["루멘","라키안 아스테어","티탄 히메로스","https://share.crack.wrtn.ai/7ugcka"],
    ["피피","필리포 피오레","올림포스 헤스티아","https://share.crack.wrtn.ai/gov6s1"]
  ],
  "가이드 · VESTAL": [
    ["바인더","린쉬한","올림포스 크라토스","https://share.crack.wrtn.ai/balrte"],
    ["마운틴","김대철","올림포스 스틱스","https://share.crack.wrtn.ai/balrte"],
    ["굿독","강아현","타르타로스 케르베로스","https://share.crack.wrtn.ai/balrte"],
    ["센터","아이 토오루","타르타로스 필로테스","https://share.crack.wrtn.ai/balrte"]
  ],
  "특수팀 · ZERO": [
    ["프로메테우스","김진묵","티탄 프로메테우스","https://share.crack.wrtn.ai/0st8oew"],
    ["아트로포스","임시원","타르타로스 아트로포스","https://share.crack.wrtn.ai/0st8oew"],
    ["데메테르","동정우","올림포스 데메테르","https://share.crack.wrtn.ai/0st8oew"]
  ],
  "특수팀 · SPECTER": [
    ["스위퍼","잭슨 블랙우드","타르타로스 네메시스","https://share.crack.wrtn.ai/p08ieh0"],
    ["레퀴엠","테오도라 마브로스","타르타로스 마카리아","https://share.crack.wrtn.ai/p08ieh0"],
    ["메어","프리다 힌터베르거","타르타로스 에피알레스","https://share.crack.wrtn.ai/p08ieh0"],
    ["마스크","아마기 렌","크세노스 이나리","https://share.crack.wrtn.ai/p08ieh0"],
    ["아멘","한서일","크세노스 관세음보살","https://share.crack.wrtn.ai/p08ieh0"],
    ["블랭크","요나스 브란트","타르타로스 아이도스","https://share.crack.wrtn.ai/p08ieh0"]
  ],
  "THEMIS US · CONSENTES": [
    ["맥퀸","로즈/로빈 테일러","올림포스 헤르마프로디토스","https://share.crack.wrtn.ai/5x7auvn"],
    ["볼텍스","캘런 언더우드","올림포스 유피테르","https://share.crack.wrtn.ai/5x7auvn"],
    ["메테오","제이","올림포스 마르스","https://share.crack.wrtn.ai/5x7auvn"],
    ["데우스","이안 피츠버그","올림포스 불카누스","https://share.crack.wrtn.ai/5x7auvn"],
    ["그레이","딘 오코넬","올림포스 미네르바","https://share.crack.wrtn.ai/5x7auvn"],
    ["로드리고","니코","올림포스 바쿠스","https://share.crack.wrtn.ai/5x7auvn"]
  ],
  "THE FORSAKEN · APSU 압주 거주": [
    ["하트","니콜라이","올림포스 하르모니아 · 이탈자","https://share.crack.wrtn.ai/jhgpjo"],
    ["리멤버","■■■","타르타로스 레테 · 불명","https://share.crack.wrtn.ai/jhgpjo"],
    ["피그말리온","빌헬름 아이젠하르트","타르타로스 안테로스 · 불명","https://share.crack.wrtn.ai/jhgpjo"],
    ["팽","서명월","올림포스 리케이오스 · 전락자","https://share.crack.wrtn.ai/jhgpjo"],
    ["트러블","케일럽 에반스","타르타로스 데이모스 · 전락자","https://share.crack.wrtn.ai/jhgpjo"],
    ["모비딕","호세 페레이라","타르타로스 케토스 · 전락자","https://share.crack.wrtn.ai/jhgpjo"],
    ["애쉬","천해무","크세노스 현무·야차 · 이탈자","https://share.crack.wrtn.ai/j55u8w"],
    ["레드","주호연","크세노스 월하노인 · 이탈자","https://share.crack.wrtn.ai/j55u8w"],
    ["뮤트","처태용","크세노스 처용 · 전락자","https://share.crack.wrtn.ai/j55u8w"],
    ["불","하오하오","크세노스 치우 · 이탈자","https://share.crack.wrtn.ai/j55u8w"],
    ["키퍼","레비 라자루스","크세노스 티아마트 · 전락자","https://share.crack.wrtn.ai/8pzfu55"],
    ["톡신","자드 갈라노스","크세노스 요르문간드 · 전락자","https://share.crack.wrtn.ai/8pzfu55"],
    ["피피","필리포 피오레","올림포스 헤스티아 · 이탈자","https://share.crack.wrtn.ai/8pzfu55"],
    ["핸섬","디에고 몬테로","타르타로스 하데스 · 이탈자","https://share.crack.wrtn.ai/8pzfu55"],
    ["하사","우하","크세노스 백택 · 이탈자","https://share.crack.wrtn.ai/8pzfu55"],
    ["아이테르","아르준 프라카시","프로토게노이 아이테르 · 이탈자","https://share.crack.wrtn.ai/8pzfu55"],
    ["비질","서지한","크세노스 이골로낙 · 전락자 · 묵언병원 수간호사","https://share.crack.wrtn.ai/1a1bnl2"],
    ["브레이스","이도윤","크세노스 이골로낙 · 전락자 · 묵언병원 간호사","https://share.crack.wrtn.ai/1a1bnl2"],
    ["엠버","최진혁","크세노스 크투가 · 전락자 · 묵언병원 외상외과 전문의","https://share.crack.wrtn.ai/1a1bnl2"]
  ],
  "THE FORSAKEN · 도시 밖 거주": [
    ["모스","백도담","타르타로스 오이지스 · 이탈자","https://share.crack.wrtn.ai/0st8oew"],
    ["비아","■■■","타르타로스 비아 · 전락자","https://share.crack.wrtn.ai/0st8oew"],
    ["샌즈","서은결","크세노스 엔네아드 · 세트 · 이탈자","https://share.crack.wrtn.ai/2s7bzo"],
    ["체르노","강묵","타르타로스 에레보스 · 이탈자","https://share.crack.wrtn.ai/8on9sr"]
  ],
  "THE TRESPASSERS · 이형": [
    ["바다이빨","해록","크세노스 르뤼에 · 다곤","https://share.crack.wrtn.ai/k2odhxv"],
    ["칼잠","칸","크세노스 야디스 · 슈브 니구라스","https://share.crack.wrtn.ai/k2odhxv"],
    ["스티처","제온","크세노스 아스가르드 · 오딘","https://share.crack.wrtn.ai/dq20np"],
    ["칼레이도스코프","스빅","크세노스 아스가르드 · 로키","https://share.crack.wrtn.ai/dq20np"],
    ["영하","영하","크세노스 백택","https://share.crack.wrtn.ai/8pzfu55"],
    ["네임리스","무명(無名)","크세노스 이골로낙 · 묵언병원 환자번호 000","https://share.crack.wrtn.ai/1a1bnl2"]
  ]
};

/* 시대 구분 — 연도 범위마다 머리말이 붙어요 (WORLD GUIDE 2036 기준) */
const ERAS = [
  { from: 2028, to: 2028, no: "01", en: "THE BREAK",   ko: "개문",      span: "원년",
    desc: "균열 · 이형 출현, 첫 각성. 군경 대응 실패." },
  { from: 2029, to: 2030, no: "02", en: "FOUNDING",    ko: "설립",      span: "1–2년",
    desc: "프로토게노이 4인이 THEMIS 설립, 초국가 관할 확보." },
  { from: 2031, to: 2032, no: "03", en: "BUILD-UP",    ko: "체계 구축", span: "3–4년",
    desc: "지부 · 직급 · MUSE 구축. 하급 이형 감소, \"위기는 끝났다\"는 여론." },
  { from: 2033, to: 2035, no: "04", en: "FALSE CALM",  ko: "표면 안정", span: "5–7년",
    desc: "상급 이형 등장, 빌런 전향 증가. 파벌 갈등이 수면 아래로." },
  { from: 2036, to: 2040, no: "05", en: "FRACTURE",    ko: "붕괴 징후", span: "8년차 — NOW",
    desc: "8~10년차 구간 진입. 표면 안정이 무너지기 시작했다.",
    alert: ["상급 이형 급증", "전락자 발생률 상승", "ZERO팀 가동률 포화", "베놈, ZERO팀 전입"] }
];

/* 팀 분류 필터 — group: 인물 목록(CHARS)의 팀 이름, words: 팀 자체를 가리키는 단어 */
const TEAMS = [
  { label: "COUNCIL",     group: "COUNCIL · THEMIS 최고 수장단", words: ["프로토게노이", "THEMIS 설립"] },
  { label: "OLYMPIAN",    group: "센티넬 · OLYMPIAN",          words: ["올림피안"] },
  { label: "PHALANX",     group: "센티넬 · PHALANX",           words: ["팔랑크스"] },
  { label: "MUSE",        group: "가이드 · MUSE",              words: ["MUSE"] },
  { label: "VESTAL",      group: "가이드 · VESTAL",            words: ["베스탈"] },
  { label: "ZERO",        group: "특수팀 · ZERO",              words: ["ZERO팀"] },
  { label: "SPECTER",     group: "특수팀 · SPECTER",           words: ["스펙터"] },
  { label: "CONSENTES",   group: "THEMIS US · CONSENTES",      words: ["콘센테스"] },
  { label: "APSU",        group: "THE FORSAKEN · APSU 압주 거주", words: ["압주", "알렉토", "귀소", "명경당"] },
  { label: "도시 밖",      group: "THE FORSAKEN · 도시 밖 거주",  words: [] },
  { label: "TRESPASSERS", group: "THE TRESPASSERS · 이형",     words: ["특급 이형"] }
];

/* 코드네임 영문 표기 — 인물 목록에 표시돼요 */
const EN = {
  "코스모스": "COSMOS",
  "N": "N",
  "로드": "LORD",
  "아이테르": "AETHER",
  "베인": "BANE",
  "러스트": "RUST",
  "뱅가드": "VANGUARD",
  "넬": "NELL",
  "베놈": "VENOM",
  "풀멘": "FULMEN",
  "헤일로": "HALO",
  "카산": "KASAN",
  "이온": "ION",
  "모르페오": "MORFEO",
  "헤로인": "HEROINE",
  "루멘": "LUMEN",
  "피피": "PIPI",
  "바인더": "BINDER",
  "마운틴": "MOUNTAIN",
  "굿독": "GOOD DOG",
  "센터": "CENTER",
  "프로메테우스": "PROMETHEUS",
  "아트로포스": "ATROPOS",
  "데메테르": "DEMETER",
  "스위퍼": "SWEEPER",
  "레퀴엠": "REQUIEM",
  "메어": "MARE",
  "마스크": "MASK",
  "아멘": "AMEN",
  "블랭크": "BLANK",
  "맥퀸": "MCQUEEN",
  "볼텍스": "VORTEX",
  "메테오": "METEO",
  "데우스": "DEUS",
  "그레이": "GREY",
  "로드리고": "RODRIGO",
  "하트": "HEART",
  "리멤버": "REMEMBER",
  "피그말리온": "PYGMALION",
  "팽": "FANG",
  "트러블": "TROUBLE",
  "모비딕": "MOBY DICK",
  "애쉬": "ASH",
  "레드": "RED",
  "뮤트": "MUTE",
  "불": "BULL",
  "키퍼": "KEEPER",
  "톡신": "TOXIN",
  "핸섬": "HANDSOME",
  "하사": "HASA",
  "비질": "VIGIL",
  "브레이스": "BRACE",
  "엠버": "EMBER",
  "모스": "MOSS",
  "비아": "BIA",
  "샌즈": "SANDS",
  "체르노": "CHERNO",
  "바다이빨": "SEATOOTH",
  "칼잠": "KALJAM",
  "스티처": "STITCHER",
  "칼레이도스코프": "KALEIDOSCOPE",
  "영하": "YEONGHA",
  "네임리스": "NAMELESS"
};

/* 맨 아래 '확인 필요' 목록 — 다 채우면 [] 로 비우면 사라져요 */
const TODO = [
  /* [대상, 미확인 사항, 처리 상태] — 기록이 확인되면 이 줄을 지우고 연표(EVENTS)에 옮겨 주세요 */
  ["모스", "각성 시점 · 이탈 시점 미확인", "조사 중"],
  ["맥퀸 · 볼텍스 · 메테오 · 데우스 · 그레이 · 로드리고", "THEMIS US 소속 — 연대 기록 미확인", "조회 요청"],
  ["비질 · 브레이스 · 엠버", "2032년 압주 실종 이후 전락 시점 미확인", "조사 중"],
  ["네임리스", "묵언병원 입원 시점 미확인 · 환자번호 000", "조사 중"],
  ["비아", "기록 말살", "열람 불가"]
];
