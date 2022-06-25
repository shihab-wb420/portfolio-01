import Styled from "styled-components"

export const CardContainer = Styled.div` 
  height: auto;
  margin: 11px;
  position: relative;
  border-bottom-right-radius: 3em;
  padding-bottom: 15px;
  border-bottom: 1px solid #4C3EB8;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
  background: linear-gradient(#10112D,#1D1C51);
  /*background:#272A71;
  background: linear-gradient(#10112D,#363A8C);
  
  */
`

export const ThumbnailWrapper = Styled.div`
    height: 12em;
      & img{
        width: 100%;
        height: 100%;
        opacity: 0.8;
      }
`

export const ProjectTitle = Styled.h2` 
  padding:7px;
  margin-top:4px;
  font-size: 1.1em;
  font-weight: bold;
  color: var(--light);
/*  background: linear-gradient(#538FFB, #5B54FA);*/
`

export const TechnologyTitle = Styled.p` 
  margin: 0px;
  font-size: 14px;
  font-weight: 390;
  color: #5B61E2;
`

export const TechnologyWrapper = Styled.div` 
  width: 90%;
  color: #5B61E2;
  display: grid;
  gap: 0.1em;
  margin: 2px auto;
  grid-template-columns: auto auto;
`

export const TechnologyItem = Styled.div` 
  padding: 4px;
  margin:2px;
  border-radius: 4em;
  border: 1px solid #5B61E2;
  /*background: #1A1942;*/
`

export const DescriptionWrapper = Styled.p` 
  font-weight: 444;
  font-size: 0.8em;
`