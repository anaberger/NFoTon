import React, { useCallback, useMemo, useState } from 'react'
import { Accordion, InternalWrapper, Title, Text, Number, Container, Button } from './styles'

interface ToogleProps {
  isListItem?: boolean
}

function Toogle({ isListItem = true }: ToogleProps) {
  const [open, setOpen] = useState(false)

  const iconName = useMemo(() => {
    if (isListItem) {
      return open ? 'arrow-up' : 'arrow-down'
    }

    return open ? 'minus' : 'plus'
  }, [open])

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <Accordion isListItem={isListItem}>
        <Container>
          {isListItem && <Number open={open}>01</Number>}
          <Title>How does it work?</Title>
        </Container>
        <Button onClick={handleClick}>
          <img src={`/assets/${iconName}.svg`} alt="" />
        </Button>
      </Accordion>

      <InternalWrapper open={open}>
        <Text>
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </Text>
      </InternalWrapper>
    </>
  )
}

export default Toogle
