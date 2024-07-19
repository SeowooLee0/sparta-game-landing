import { Colors, CommonFont } from "@/styles/fontStyles";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div<{ isSticky: boolean }>`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    border-bottom: 1px solid ${Colors.lightGray};
    background-color:${Colors.white};
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
      ${CommonFont};
        white-space: nowrap;
        display: flex;
        padding: 6px 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
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
    background-color: ${Colors.highlightRed};
    opacity: 0; 
    transition: opacity 0.3s ease-in-out;
}
`;

export const TopSec = styled.section`
   background-color: ${Colors.black};
    padding: 80px 0;
    width: 100%;
}
`;

export const TopSecSec = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
`;

export const TopInfoDiv = styled.div`
    ${CommonFont};
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${Colors.highlightRed}!important;
    display: block;
    margin-bottom: 8px;
    text-align: center;
}
`;

export const TopInfoH3 = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: ${Colors.white} !important;
    text-align: center;
    
}
`;

export const InfoH4 = styled.h4`
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: ${Colors.white}  !important;
    text-align: center;
    margin: 8px 0 16px 0;
    
}
`;

export const InfoDetail = styled.p`
 font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #9DA7AE !important;
    text-align: center;
}
`;

export const ImgSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export const Img1 = styled.img`
    width: 328px;
    aspect-ratio: auto 328 / 234;
    height: 234px;
}
`;

export const Img1Info = styled.p`
   ${CommonFont};
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #F2F6F8 !important;
    margin-top: 40px;
    text-align: center;
}
`;

export const Section = styled.section`
    padding: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.black};
    overflow: hidden !important;
    flex-direction: row;
}

`;

export const SecSec = styled.section`
    width: 100%;
    min-width: 328px;
    max-width: 600px;
    margin: 0px 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;

}
`;

export const InfoSec = styled.section`
    display: flex;
    justify-content: center;

}
`;

export const DetailSec = styled.section`
    display: block;
    display: flex;
    flex-direction: column;
}
`;

export const DetailSecSec = styled.section`
    width: 100%;
    height: auto;
}
`;

export const DetailVideoDiv = styled.div`
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

export const DetailVideo = styled.video`
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
    ${CommonFont};
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: ${Colors.highlightRed} !important;
  }
  h2 {
    ${CommonFont};
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: ${Colors.white} !important;
  }
`;

export const ViedoDetailDivTitleP2 = styled.div`
  ${CommonFont};
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

export const Toggle = styled.div`
  border-radius: 12px;
  background: #25282a;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`;

export const ToggleDiv = styled.div`
  ${CommonFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: ${Colors.bottomLine} !important;
`;
