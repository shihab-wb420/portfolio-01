import Styled from "styled-components"

export const CardContainer = Styled.div` 
  height: auto;
  margin: 11px;
  position: relative;
  text-align:left;
  border-radius:4px;
  border-bottom-right-radius: 1.1em;
  padding-bottom: 15px;
  border-bottom: 0px solid #4C3EB8;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.09);
  
`

export const ThumbnailWrapper = Styled.div`
    height: 15em;
    padding:0.8em;
      & img{
        width: 100%;
        height: 100%;
        border-radius:7px;
        opacity: ;
      }
`

export const ProjectTitle = Styled.h2` 
  padding:7px;
  margin-top:4px;
  margin-left:0.6em;
  font-size: 1.1em;
  font-weight: bold;
  color: var(--secondary-color);
/*  background: linear-gradient(#538FFB, #5B54FA);*/
`

export const TechnologyTitle = Styled.p` 
  margin: 0px;
  font-size: 12px;
  font-weight: 444;
  color: var(--text-muted);
  margin-left:1.5em;
`

export const TechnologyWrapper = Styled.div` 
  width: 70%;
  display: flex;
  flex-wrap:wrap;
  gap: 0.35em;
  margin: 2px 1.5em;
  
`

export const TechnologyItem = Styled.div` 
  padding: 0px 7px;
  margin:2px;
  border-radius: 9px;
  font-size:12px;
  font-weight:450;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
`

export const DescriptionWrapper = Styled.p` 
  font-weight: 444;
  font-size: 0.8em;
`