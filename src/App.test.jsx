import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('affiche le bouton avec le compteur à 0', () => {
    render(<App />)
    expect(screen.getByRole('button')).toHaveTextContent('count is 0')
  })

  it('incrémente le compteur au clic', () => {
    render(<App />)
    const bouton = screen.getByRole('button')
    fireEvent.click(bouton)
    expect(bouton).toHaveTextContent('count is 1')
  })
})
