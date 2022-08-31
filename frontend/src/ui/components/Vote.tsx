import React from 'react'
import { User } from '../../models/User'

interface IVoteProps {
  user: Omit<User, 'observer'>
  hidden: boolean
  hovered?: string
}

export function Vote({ user, hidden, hovered }: IVoteProps) {
  if (hidden) return <div className="card small">✓</div>
  return <div className={`card small${hovered === user.vote ? ' hovered' : ''}`}>{user.vote}</div>
}
