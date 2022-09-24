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
  width: 90%;
  color: #5B61E2;
  text-align:;
  display: grid;
  gap: 0.1em;
  margin: 2px auto;
  grid-template-columns: auto auto;
`

export const TechnologyItem = Styled.div` 
  padding: 4px 3px;
  margin:2px;
  border-radius: 4em;
  font-size:12px;
  font-weight:444;
  /*border: 1px solid #5B61E2;*/
  /*background: #1A1942;*/
`

export const DescriptionWrapper = Styled.p` 
  font-weight: 444;
  font-size: 0.8em;
`