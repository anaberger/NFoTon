import styled from 'styled-components'

import { colors } from '../../theme/colors'

type AccordionProps = {
  isListItem?: boolean
}

export const Accordion = styled.section<AccordionProps>`
  display: flex;
  border-bottom: ${(props) => props.isListItem && `2px solid ${colors.neutrals.white[600]}`};
  border-top: ${(props) => !props.isListItem && `2px solid ${colors.neutrals.white[600]}`};

  align-items: center;
  padding: ${(props) => (props.isListItem ? '0 0 10px' : '10px 0 0')};
`

export const Container = styled.div`
  display: flex;
`

export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.neutrals.black[400]};
`

export const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  color: #777e91;
  margin-top: 20px;
`

export const Number = styled.p<{ open: boolean }>`
  color: ${(props) => (props.open ? `${colors.primary.blue}` : `${colors.neutrals.gray[500]}`)};
  font-weight: 500;
  font-size: 16px;
  margin-right: 10px;
  font-weight: 600;
`

export const Button = styled.button<AccordionProps>`
  margin-left: auto;
  margin-right: 5px;
`

export const InternalWrapper = styled.div<{ open: boolean }>`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '100px' : '0')};
  transition: max-height 0.3s ease-in-out;
`
