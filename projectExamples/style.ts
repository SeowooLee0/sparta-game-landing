import styled from "@emotion/styled";

export const HeaderContainer = styled.div<{ isSticky: boolean }>`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    border-bottom: 1px solid #D7E0E6;
    background-color: #FFFFFF;
    overflow-x: scroll;
    padding: 10px 16px 0 16px;

    top: ${({ isSticky }) => (isSticky ? "0" : "50px")};
    z-index: 20;
    &::-webkit-scrollbar {
    display: none;
    }
}
`;

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    a {
        white-space: nowrap;
        display: flex;
        padding: 6px 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-family: Pretendard;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #141617;
        color: #9DA7AE;
        transition: all 0.3s ease-in-out;
        border-radius: 10px;
        position: relative;
        }
}
`;

export const BottomLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: #FF6C7A;
    opacity: 0; 
    transition: opacity 0.3s ease-in-out;
}
`;

export const ProjectTopSec = styled.section`
   background-color: #141617;
    padding: 80px 0;
    width: 100%;
}
`;

export const ProjectTopSecSec = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
`;

export const ProjectTopInfoDiv = styled.div`
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FF6C7A !important;
    display: block;
    margin-bottom: 8px;
    text-align: center;
}
`;

export const ProjectTopInfoH3 = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: white !important;
    text-align: center;
    
}
`;

export const ProjectInfoH4 = styled.h4`
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: white !important;
    text-align: center;
    margin: 8px 0 16px 0;
    
}
`;

export const ProjectInfoDetail = styled.p`
 font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #9DA7AE !important;
    text-align: center;
}
`;

export const ProjectImgSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export const ProjectImg1 = styled.img`
    width: 328px;
    aspect-ratio: auto 328 / 234;
    height: 234px;
}
`;

export const ProjectImg1Info = styled.p`
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #141617;
    color: #F2F6F8 !important;
    margin-top: 40px;
    text-align: center;
}
`;

export const ProjectSection = styled.section`
    padding: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141617;
    overflow: hidden !important;
    -webkit-box-align: center;
    flex-direction: row;
}

`;

export const ProjectSecSec = styled.section`
    width: 100%;
    min-width: 328px;
    max-width: 600px;
    margin-top: 0px;
    margin-right: 16px;
    margin-bottom: 0px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;

}
`;

export const ProjectInfoSec = styled.section`
    display: flex;
    justify-content: center;

}
`;

export const ProjectDetailSec = styled.section`
    display: block;
    unicode-bidi: isolate;
    display: flex;
    flex-direction: column;
}
`;

export const ProjectDetailSecSec = styled.section`
    width: 100%;
    height: auto;
}
`;

export const ProjectDetailVideoDiv = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    transform: translateZ(0);
    ::before {
        content: '';
        display: block;
        padding-top: 56.1%;
    }
}
`;

export const VscController = styled.div`
  user-select: none;
  white-space: normal;
`;

export const ProjectDetailVideo = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  object-fit: contain;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

export const VideoDetailInfo = styled.section`
  transform: translateY(-60px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const VideoDetailInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 20px 0 20px;
  background: linear-gradient(180deg, rgba(20, 22, 23, 0) 0%, #141617 22%);
`;

export const ViedoDetailDivTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #ff6c7a !important;
  }
  h2 {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #fff !important;
  }
`;

export const ViedoDetailDivTitleP2 = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #9da7ae !important;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const ViedoDetailSkillImage = styled.img`
  width: 116px;
  aspect-ratio: auto 116 / 30;
  height: 30px;
`;

export const ProjectToggle = styled.div`
  border-radius: 12px;
  background: #25282a;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`;

export const ProjectToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #141617;
  color: #e4ebf0 !important;
`;
