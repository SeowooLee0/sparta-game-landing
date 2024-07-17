import * as S from "../style";
import * as C from "../copy";

export default function Info() {
  return (
    <S.ScheduleInfo>
      <S.ScheduleInfoDive>
        <S.InfoDiv>
          <S.InfoDivDiv>
            {C.gameTopScheduleInfoData.map(
              (info: C.ScheduleInfo, index: number) => (
                <div key={index}>
                  <S.InfoValue>{info.label}</S.InfoValue>
                  <S.InfoValue2>{info.value}</S.InfoValue2>
                </div>
              )
            )}
          </S.InfoDivDiv>
        </S.InfoDiv>
      </S.ScheduleInfoDive>
    </S.ScheduleInfo>
  );
}
