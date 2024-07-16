import {
  IntroduceTrackSection,
  IntroduceTrackB,
  IntroduceTitleDiv,
  IntroduceTitleH3,
  IntroduceGrowthDiv,
  IntroduceGrowthSection,
  IntroduceGrowhText,
  IntroduceGrowhTextS,
  IntroduceGrowthImage,
  IntroduceGrowhTextB,
  IntroduceGrowthImageH3,
  IntroduceGameCareerText,
  IntroduceCareerPathBox,
  IntroduceCareerPathBoxSection,
  IntroduceCareerPathInnerBox,
  IntroduceCareerPathInnerBoxTitle,
  IntroduceCareerPathInnerBoxText,
  IntroduceCareerPathInnerBoxIcon,
} from "./style";

const IntroduceTrack = () => {
  return (
    <div>
      <IntroduceTrackB>
        <IntroduceTrackSection>
          <div>
            <IntroduceTitleDiv>왜 게임 서버 개발자인가요?</IntroduceTitleDiv>
            <IntroduceTitleH3>
              높아지는 게임 업계 연봉
              <br />
              늘어나는 서버 개발자 수요
            </IntroduceTitleH3>
          </div>
          <IntroduceGrowthSection>
            <IntroduceGrowthDiv>
              <IntroduceGrowhText>
                <IntroduceGrowhTextB>
                  국내 게임 성장의 성장세
                </IntroduceGrowhTextB>
                <IntroduceGrowhTextS>
                  국내 게임 시간은 계속해서 가파르게 성장하고 있고, 시장 규모가
                  커짐에 따라 자연스레 게임 개발자 수요도 늘어나고 있습니다.
                </IntroduceGrowhTextS>
              </IntroduceGrowhText>
              <IntroduceGrowthImageH3>
                <IntroduceGrowthImage
                  src={"assets/game_server_market_1.webp"}
                  alt={"assets/game_server_market_1.webp"}
                />
              </IntroduceGrowthImageH3>
            </IntroduceGrowthDiv>
          </IntroduceGrowthSection>
          <IntroduceGrowthSection>
            <IntroduceGrowthDiv>
              <IntroduceGrowhText>
                <IntroduceGrowhTextB>
                  스타트업부터 대기업까지
                </IntroduceGrowhTextB>
                <IntroduceGrowhTextS>
                  대형 게임 개발사뿐만 아니라 많은 스타트업에서도 Node.js를
                  활용하는 게임 서비 개발자를 찾고 있습니다.
                </IntroduceGrowhTextS>
              </IntroduceGrowhText>
              <IntroduceGrowthImageH3>
                <IntroduceGrowthImage
                  src={"assets/game_server_market_2.webp"}
                  alt={"assets/game_server_market_2.webp"}
                />
              </IntroduceGrowthImageH3>
            </IntroduceGrowthDiv>
          </IntroduceGrowthSection>
        </IntroduceTrackSection>
      </IntroduceTrackB>
      <IntroduceTrackB>
        <IntroduceTrackSection>
          <div>
            <IntroduceTitleDiv>트랙 소개</IntroduceTitleDiv>
            <IntroduceTitleH3>
              시간이 원하는 기술로
              <br />
              대체 불가한 인재가 됩니다
            </IntroduceTitleH3>
          </div>
          <IntroduceCareerPathBoxSection>
            <IntroduceGameCareerText>
              게임 서버의 대세, Node.js
            </IntroduceGameCareerText>
            <IntroduceCareerPathBoxSection>
              <IntroduceCareerPathBox>
                <IntroduceCareerPathInnerBox>
                  <IntroduceCareerPathInnerBoxTitle>
                    클라이언트 호환성
                  </IntroduceCareerPathInnerBoxTitle>
                  <IntroduceCareerPathInnerBoxText>
                    Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게
                    통신합니다.
                  </IntroduceCareerPathInnerBoxText>
                </IntroduceCareerPathInnerBox>
                <IntroduceCareerPathInnerBox>
                  <IntroduceCareerPathInnerBoxTitle>
                    클라이언트 호환성
                  </IntroduceCareerPathInnerBoxTitle>
                  <IntroduceCareerPathInnerBoxText>
                    Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게
                    통신합니다.
                  </IntroduceCareerPathInnerBoxText>
                </IntroduceCareerPathInnerBox>
                <IntroduceCareerPathInnerBox>
                  <IntroduceCareerPathInnerBoxTitle>
                    클라이언트 호환성
                  </IntroduceCareerPathInnerBoxTitle>
                  <IntroduceCareerPathInnerBoxText>
                    Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게
                    통신합니다.
                  </IntroduceCareerPathInnerBoxText>
                </IntroduceCareerPathInnerBox>
              </IntroduceCareerPathBox>
            </IntroduceCareerPathBoxSection>
          </IntroduceCareerPathBoxSection>
          <IntroduceCareerPathBoxSection>
            <IntroduceGameCareerText>
              4개월 후, 더 많은 취업 기회
            </IntroduceGameCareerText>
            <IntroduceCareerPathBox>
              <IntroduceCareerPathInnerBox>
                <IntroduceCareerPathInnerBoxIcon
                  src={"assets/programmer.png"}
                  alt={"assets/programmer.png"}
                />
                <IntroduceCareerPathInnerBoxTitle>
                  게임 서버 개발자
                </IntroduceCareerPathInnerBoxTitle>
                <IntroduceCareerPathInnerBoxText>
                  개발 클라이언트와 서버 간의 통신 담당
                </IntroduceCareerPathInnerBoxText>
              </IntroduceCareerPathInnerBox>
              <IntroduceCareerPathInnerBox>
                <IntroduceCareerPathInnerBoxIcon
                  src={"assets/programmer.png"}
                  alt={"assets/programmer.png"}
                />
                <IntroduceCareerPathInnerBoxTitle>
                  게임 서버 개발자
                </IntroduceCareerPathInnerBoxTitle>
                <IntroduceCareerPathInnerBoxText>
                  개발 클라이언트와 서버 간의 통신 담당
                </IntroduceCareerPathInnerBoxText>
              </IntroduceCareerPathInnerBox>
            </IntroduceCareerPathBox>
          </IntroduceCareerPathBoxSection>
        </IntroduceTrackSection>
      </IntroduceTrackB>
    </div>
  );
};

export default IntroduceTrack;
