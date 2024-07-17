export interface GrowthSection {
  title: string;
  description: string;
  imageSrc: string;
}

export interface CareerPathItem1 {
  title: string;
  text: string;
}

export interface CareerPathItem2 {
  iconSrc: string;
  iconAlt: string;
  title: string;
  text: string;
}

export const growthSections: GrowthSection[] = [
  {
    title: "국내 게임 성장의 성장세",
    description:
      "국내 게임 시간은 계속해서 가파르게 성장하고 있고, 시장 규모가 커짐에 따라 자연스레 게임 개발자 수요도 늘어나고 있습니다.",
    imageSrc: "assets/game_server_market_1.webp",
  },
  {
    title: "스타트업부터 대기업까지",
    description:
      "대형 게임 개발사뿐만 아니라 많은 스타트업에서도 Node.js를 활용하는 게임 서비 개발자를 찾고 있습니다.",
    imageSrc: "assets/game_server_market_2.webp",
  },
];

export const careerPathData1: CareerPathItem1[] = [
  {
    title: "클라이언트 호환성",
    text: "Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게 통신합니다.",
  },
  {
    title: "클라이언트 호환성",
    text: "Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게 통신합니다.",
  },
  {
    title: "클라이언트 호환성",
    text: "Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게 통신합니다.",
  },
];

export const careerPathData2: CareerPathItem2[] = [
  {
    iconSrc: "assets/programmer.png",
    iconAlt: "assets/programmer.png",
    title: "게임 서버 개발자",
    text: "개발 클라이언트와 서버 간의 통신 담당",
  },
  {
    iconSrc: "assets/programmer.png",
    iconAlt: "assets/programmer.png",
    title: "게임 서버 개발자",
    text: "개발 클라이언트와 서버 간의 통신 담당",
  },
];
