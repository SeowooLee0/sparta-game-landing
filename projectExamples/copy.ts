export type DetailDivTitle = {
  title: string;
  subTitle: string;
  description: string;
};

export type DetailSkillImage = {
  src: string;
  alt: string;
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
    },
    projectToggleDiv: "프로젝트 더 알아보기",
  },
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
    },
    projectToggleDiv: "프로젝트 더 알아보기",
  },
];
