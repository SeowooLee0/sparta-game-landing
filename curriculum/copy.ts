export interface InnerDetail {
  title: string;
  titleEx: string;
  listItems: string[];
  bottomLine: boolean;
}

export interface CurriculumItem {
  number: string;
  title: string;
  explain: string;
  stackDetails: string[];
  innerDetails: InnerDetail[];
}

export const copy: CurriculumItem[] = [
  {
    number: "01",
    title: "웹 개발 미니 프로젝트",
    explain: `웹 개발 기초 강의를 수강하며 웹 개발 전반의 흐름을 이해하고 이를 활용한 미니 프로젝트를 통해 기본기를 다지고 협업 경험을 합니다.`,
    stackDetails: ["1주 과정", "미니 프로젝트", "실시간 세션"],
    innerDetails: [
      {
        title: "미니프로젝트",
        titleEx: "팀 소개 페이지",
        listItems: [
          "웹 페이지 동작 이해",
          "Git, Github 실습 (현업을 위한 버전 관리)",
        ],
        bottomLine: true,
      },
      {
        title: "실시간 세션",
        titleEx: "개발자 직무 이해",
        listItems: [
          "대기업 출신 개발자가 소개하는 개발의 모든 것",
          "개발 역량을 베이스로 할 수 있는 커리어 패스",
        ],
        bottomLine: false,
      },
    ],
  },
  {
    number: "02",
    title: "Javascript 언어 기초와 활용",
    explain: "선택한 트랙의 언어 기본기와 프로그래밍 기초를 학습 합니다.",
    stackDetails: ["2주 과정", "실시간 세션"],
    innerDetails: [
      {
        title: "실시간세션",
        titleEx: "좋은 개발자의 비밀",
        listItems: [
          "개발사 대표가 소개하는 좋은 개발자의 자질",
          "주니어 개발자로서 차별점을 가질 수 있는 방법",
        ],
        bottomLine: true,
      },
      {
        title: "",
        titleEx: "Javascript 언어 기초, 심화 문법 이해",
        listItems: [
          "자료형과 연산자의 이해",
          "조건문, 반복문 이해와 활용",
          "변수, 함수 객체의 이해와 활용",
          "콜백 함수와 동기/비동기 처리",
        ],
        bottomLine: false,
      },
      {
        title: "",
        titleEx: "CS 기초 강화",
        listItems: [
          "1일 1알고리즘 문제 풀이",
          "알고리즘 실시간 세션 진행",
          "배열, 리스트, 스택, 큐 등 자료구조 학습",
        ],
        bottomLine: false,
      },
    ],
  },

  {
    number: "03",
    title: "Node.js 기초와 활용",
    explain: `게임 서버 개발의 기본부터 응용까지 배우고, 실습을 통해 REST API 기반 게임 서버를 구축하는 과정을 진행합니다.`,
    stackDetails: ["4주 과정", "프로젝트"],
    innerDetails: [
      {
        title: "프로젝트",
        titleEx: "풋살 온라인 게임",
        listItems: [
          "실제 게임과 유사하게 선수 데이터 사전 준비",
          "준비된 선수 데이터 기반으로 랜덤하게 선수 뽑는 기능 구현",
          "뽑은 선수들로 나만의 팀을 구성하고 관리",
          "간단한 게임 로직을 통해 유저 간 촉구 경기를 진행 후 랭킹 비교",
        ],
        bottomLine: true,
      },
      {
        title: "실시간 세션",
        titleEx: "게임 서버 개발자가 되기 위해서 알아야 할 것",
        listItems: [
          "게임 서버를 위한 네트워크",
          "TCP / 소켓 프로그래밍 이해",
          "패킷 분석 실습",
        ],
        bottomLine: false,
      },
    ],
  },
  {
    number: "04",
    title: "Node.js 심화와 적용",
    explain: `게임 서버 실무에 활용되는 내용을 배우고, 실제 게임 클라이언트와 WebSocket 기반으로 통신하는 게임 서버를 구현해 봅니다.`,
    stackDetails: ["2주 과정", "프로젝트", "실시간 세션"],
    innerDetails: [
      {
        title: "프로젝트",
        titleEx: "타워 디펜스 게임",
        listItems: [
          "회원가입 / 로그인 기능 구현을 통한 인증 및 인가",
          "WebSocket을 이용한 클라이언트-서버 간 실시간 통신",
          "유저 별 게임 데이터 관리 (몬스터 레벨, 스코어, 타워 위치 등)",
          "서버 주도로 클라이언트에 상태 동기화",
          "현업 개발자의 코드 리뷰 및 개선점 피드백",
        ],
        bottomLine: true,
      },
      {
        title: "실시간 세션",
        titleEx: "게임 서버 개발자가 되기 위해서 알아야 할 것",
        listItems: [
          "멀티스레드에 대한 개념 및 동기화 기법 소개",
          "TCP / 소켓 프로그래밍 이해",
          "패킷 분석 실습",
        ],
        bottomLine: false,
      },
    ],
  },
  {
    number: "05",
    title: "게임 서버의 전반적인 이해와 활용",
    explain: `TCP 서버를 배워 클라이언트와 연동하는 법을 배워 신입 개발자로서 경쟁력을 갖춥니다.`,
    stackDetails: ["3주 과정", "프로젝트"],
    innerDetails: [
      {
        title: "프로젝트",
        titleEx: "타워 디펜스 게임",
        listItems: [
          "회원가입 / 로그인 기능 구현을 통한 인증 및 인가",
          "WebSocket을 이용한 클라이언트-서버 간 실시간 통신",
          "유저 별 게임 데이터 관리 (몬스터 레벨, 스코어, 타워 위치 등)",
          "서버 주도로 클라이언트에 상태 동기화",
          "현업 개발자의 코드 리뷰 및 개선점 피드백",
        ],
        bottomLine: true,
      },
      {
        title: "실시간 세션",
        titleEx: "게임 서버 개발자가 되기 위해서 알아야 할 것",
        listItems: [
          "멀티스레드에 대한 개념 및 동기화 기법 소개",
          "TCP / 소켓 프로그래밍 이해",
          "패킷 분석 실습",
        ],
        bottomLine: false,
      },
    ],
  },
  {
    number: "06",
    title: "최종 프로젝트",
    explain: `실제 유저가 있는 서비스를 론칭하여 단순구현이 아니라 운영-보수-개선의 경험을 합니다.`,
    stackDetails: ["6주 과정", "프로젝트"],
    innerDetails: [
      {
        title: "1주차",
        titleEx: "타워 디펜스 게임",
        listItems: [
          "회원가입 / 로그인 기능 구현을 통한 인증 및 인가",
          "WebSocket을 이용한 클라이언트-서버 간 실시간 통신",
          "유저 별 게임 데이터 관리 (몬스터 레벨, 스코어, 타워 위치 등)",
          "서버 주도로 클라이언트에 상태 동기화",
          "현업 개발자의 코드 리뷰 및 개선점 피드백",
        ],
        bottomLine: true,
      },
      {
        title: "실시간 세션",
        titleEx: "게임 서버 개발자가 되기 위해서 알아야 할 것",
        listItems: [
          "멀티스레드에 대한 개념 및 동기화 기법 소개",
          "TCP / 소켓 프로그래밍 이해",
          "패킷 분석 실습",
        ],
        bottomLine: false,
      },
    ],
  },
];
