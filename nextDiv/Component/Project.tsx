import { useRef, useEffect } from "react";
import {
  ProjectDetailSec,
  ProjectDetailSecSec,
  ProjectDetailVideo,
  ProjectDetailVideoDiv,
  ProjectImg1,
  ProjectImg1Info,
  ProjectImgSection,
  ProjectInfoDetail,
  ProjectInfoH4,
  ProjectInfoSec,
  ProjectSecSec,
  ProjectSection,
  ProjectTopInfoDiv,
  ProjectTopInfoH3,
  ProjectTopSec,
  ProjectTopSecSec,
  VideoDetailInfo,
  VideoDetailInfoDiv,
  ViedoDetailDivTitle,
  ViedoDetailDivTitleP2,
  VscController,
  ViedoDetailSkillImage,
  ProjectToggle,
  ProjectToggleDiv,
} from "../style";

const Project = () => {
  return (
    <>
      <ProjectTopSec>
        <ProjectTopSecSec>
          <div>
            <ProjectTopInfoDiv>누구나 시작할 수 있도록</ProjectTopInfoDiv>

            <ProjectTopInfoH3>
              게임 업계 취업을 위한
              <br />
              게임 서버 개발 부트캠프
            </ProjectTopInfoH3>
          </div>
          <ProjectImgSection>
            <ProjectImg1
              src={"/assets/unity_sold_out_mo.webp"}
              alt={"/assets/unity_sold_out_mo.webp"}
            />
            <ProjectImg1Info>
              Node.js 게임 서버 개발자 국비부트캠프는
              <br />
              스타르타 내일배움캠프가 유일합니다.
            </ProjectImg1Info>
          </ProjectImgSection>
        </ProjectTopSecSec>
      </ProjectTopSec>
      <ProjectSection>
        <ProjectSecSec>
          <ProjectInfoSec>
            <div>
              <ProjectTopInfoDiv>프로젝트 예시</ProjectTopInfoDiv>
              <ProjectInfoH4>
                실제 현업과 동일한
                <br />
                {`게임 서버를 '직접' 개발합니다`}
              </ProjectInfoH4>
              <ProjectInfoDetail>
                아래 프로젝트 외에도 풋살 게임, 액션 게임, 전략 게임 등<br />
                다양한 장르의 게임을 직접 개발해봅니다.
              </ProjectInfoDetail>
            </div>
          </ProjectInfoSec>

          <ProjectDetailSec>
            <ProjectDetailSecSec>
              <ProjectDetailVideoDiv>
                <ProjectDetailVideo
                  src="/assets/resized_game_video_1.mp4"
                  autoPlay
                  loop
                  controlsList="nodownload"
                  playsInline
                  muted
                >
                  <source
                    src="/assets/resized_game_video_1.mp4"
                    type="video/mp4"
                  />
                </ProjectDetailVideo>
              </ProjectDetailVideoDiv>
            </ProjectDetailSecSec>
            <VideoDetailInfo>
              <VideoDetailInfoDiv>
                <ViedoDetailDivTitle>
                  <p>프로젝트 01</p>
                  <h2>아이템 시뮬레이터 서비스</h2>
                  <ViedoDetailDivTitleP2>
                    현재 게임 아이템 상황 및 다른 사람들의 게임 아이템 상황을 볼
                    수 있도록 정보를 제공하는 서비스
                  </ViedoDetailDivTitleP2>
                </ViedoDetailDivTitle>
                <ViedoDetailSkillImage
                  src={"/assets/project_logo1.png"}
                  alt={"/assets/project_logo1.png"}
                />
              </VideoDetailInfoDiv>
              <ProjectToggle>
                <ProjectToggleDiv>프로젝트 더 알아보기</ProjectToggleDiv>
              </ProjectToggle>
            </VideoDetailInfo>
          </ProjectDetailSec>
        </ProjectSecSec>
      </ProjectSection>
    </>
  );
};

export default Project;
