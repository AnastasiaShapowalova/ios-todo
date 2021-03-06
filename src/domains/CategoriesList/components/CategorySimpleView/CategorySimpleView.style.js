import styled from 'styled-components'

export const CategorySimpleViewWrapper = styled.div`
  display: flex;
  outline: none;
  align-items: center;
  color: var(--white);
  border-radius: var(--border-radius-md);
  padding: var(--p-sm) var(--p-xs) var(--p-sm) var(--p-md);
  &:active {
    background-color: var(--blue-darken);
  }
  margin: var(--m-0) var(--m-sm);
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  outline: none;
  align-items: center;

  color: var(--white);
  border-radius: var(--border-radius-md);
  padding: var(--p-sm) var(--p-xs) var(--p-sm) var(--p-md);

  align-items: center;
  background-color: var(--blue-darken);
  margin: var(--m-0) var(--m-sm);
`
