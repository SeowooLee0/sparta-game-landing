import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    border-bottom: 1px solid #D7E0E6;
    background-color: #FFFFFF;
    overflow-x: scroll;
    padding: 10px 16px 0 16px;
    top: 50px;
    z-index: 20;
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
    -webkit-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
}
`;
