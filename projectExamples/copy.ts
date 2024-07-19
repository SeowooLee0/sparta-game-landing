export type DetailDivTitle = {
  title: string;
  subTitle: string;
  description: string;
};

export type DetailSkillImage = {
  src: string;
  alt: string;
};

export type ProjectHeader = {
  menu: string;
};

export type ProjectDetail = {
  videoSrc: string;
  detailDivTitle: DetailDivTitle;
  detailSkillImage: DetailSkillImage;
  projectToggleDiv: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    videoSrc: "/assets/resized_game_video_1.mp4",
    detailDivTitle: {
      title: "프로젝트 01",
      subTitle: "아이템 시뮬레이터 서비스",
      description:
        "현재 게임 아이템 상황 및 다른 사람들의 게임 아이템 상황을 볼 수 있도록 정보를 제공하는 서비스",
    },
    detailSkillImage: {
      src: "/assets/project_logo1.png",
      alt: "아이템 시뮬레이터 서비스 스킬 로고",
      // width: ,
      // height: ,
    },
    projectToggleDiv: "프로젝트 더 알아보기",
  },
  {
    videoSrc: "/assets/resized_game_video_1.mp4",
    detailDivTitle: {
      title: "프로젝트 02",
      subTitle: "데이터베이스 모델링",
      description:
        "로그인/인증 기능을 통해 게임 아이템 시뮬레이터 고도화(아이템 테이블과 유저 데이터베이스 모델링)",
    },
    detailSkillImage: {
      src: "/assets/project_logo2.png",
      alt: "아이템 시뮬레이터 서비스 스킬 로고",
    },
    projectToggleDiv: "프로젝트 더 알아보기",
  },
  {
    videoSrc: "/assets/resized_game_video_1.mp4",
    detailDivTitle: {
      title: "프로젝트 03",
      subTitle: "데이터베이스 모델링",
      description:
        "실제 게임 서버를 구현하고 클라이언트 코드에 연결하기(인증/관리, WebSocket 통신, 클라이언트 연동)",
    },
    detailSkillImage: {
      src: "/assets/project_logo3.png",
      alt: "아이템 시뮬레이터 서비스 스킬 로고",
    },
    projectToggleDiv: "프로젝트 더 알아보기",
  },
];

const menuItems = [
  { text: "프로젝트" },
  { text: "트랙 소개" },
  { text: "커리큘럼" },
];

export const projectHeader: ProjectHeader[] = [
  {
    menu: "프로젝트",
  },
  {
    menu: "트랙 소개",
  },

  {
    menu: "커리큘럼",
  },

  {
    menu: "취업 서포트",
  },
  {
    menu: "모집 개요",
  },
];
