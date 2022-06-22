import Styled from "styled-components"

export const CardContainer = Styled.div` 
    height: auto;
  margin: 11px;
  background: #10112D;
  padding-bottom: 15px;
  position: relative;
  border-bottom: 1px solid #4C3EB8;
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
  margin: 0.5em;
  font-size: 1.1em;
  font-weight: bold;
`

export const TechnologyTitle = Styled.p` 
  margin: 0px;
  font-size: 14px;
  font-weight: 390;
`

export const TechnologyWrapper = Styled.div` 
  width: 90%;
  display: grid;
  gap: 0.1em;
  margin: 2px auto;
  grid-template-columns: auto auto;
`

export const TechnologyItem = Styled.div` 
  padding: 4px;
  margin:2px;
  border-radius: 4em;
  background: #1A1942;
`

export const DescriptionWrapper = Styled.p` 
  font-weight: 444;
  font-size: 0.8em;
`