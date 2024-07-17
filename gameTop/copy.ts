export type ScheduleInfo = {
  label: string;
  value: string;
};

export type SlideInfo = {
  src: string;
  alt: string;
};

export const gameTopScheduleInfoData: ScheduleInfo[] = [
  { label: "교육 기간", value: "24.08.05(월) ~ 24.12.23(월)" },
  { label: "교육 방법", value: "100% 온라인 (평일 오전 9시 ~ 오후 9시)" },
  { label: "교육 비용", value: "전액 무료 (내일배움카드 국비지원)" },
  { label: "접수 마감", value: "24.08.02(금)" },
];

export const slideData: SlideInfo[] = [
  { src: "/assets/mo_card_0.png", alt: "Image 1" },
  { src: "/assets/mo_card_1.png", alt: "Image 2" },
  { src: "/assets/mo_card_2.png", alt: "Image 3" },
  { src: "/assets/mo_card_3.png", alt: "Image 4" },
  { src: "/assets/mo_card_0.png", alt: "Image 5" },
  { src: "/assets/mo_card_1.png", alt: "Image 6" },
  { src: "/assets/mo_card_2.png", alt: "Image 7" },
  { src: "/assets/mo_card_3.png", alt: "Image 8" },
];
