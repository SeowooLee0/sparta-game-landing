import React from "react";
import { ViedoDetailSkillImage } from "../style";
import Image from "next/image";
import * as C from "../copy";
import * as S from "../style";
import type { ProjectDetail } from "../copy";

export default function ProjectVideoEx() {
  return (
    <>
      {C.projectDetails.map((project: ProjectDetail, index: number) => (
        <S.DetailSec key={index}>
          <S.DetailSecSec>
            <S.DetailVideoDiv>
              <S.DetailVideo
                src={project.videoSrc}
                autoPlay
                loop
                controlsList="nodownload"
                playsInline
                muted
              >
                <source src={project.videoSrc} type="video/mp4" />
              </S.DetailVideo>
            </S.DetailVideoDiv>
            <S.DetailSecSec>
              <S.VideoDetailInfo>
                <S.VideoDetailInfoDiv>
                  <S.ViedoDetailDivTitle>
                    <p>{project.detailDivTitle.title}</p>
                    <h2>{project.detailDivTitle.subTitle}</h2>
                    <S.ViedoDetailDivTitleP2>
                      {project.detailDivTitle.description}{" "}
                    </S.ViedoDetailDivTitleP2>
                  </S.ViedoDetailDivTitle>
                  <S.ViedoDetailSkillImage
                    src={project.detailSkillImage.src}
                    alt={project.detailSkillImage.alt}
                    // width={ project.}
                    // height={project.}
                  />
                </S.VideoDetailInfoDiv>
                <S.Toggle>
                  <S.ToggleDiv>{project.projectToggleDiv}</S.ToggleDiv>
                </S.Toggle>
              </S.VideoDetailInfo>
            </S.DetailSecSec>
          </S.DetailSecSec>
        </S.DetailSec>
      ))}
    </>
  );
}
