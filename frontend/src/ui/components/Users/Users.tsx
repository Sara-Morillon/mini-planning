import { HTMLTable } from '@blueprintjs/core'
import React from 'react'
import { User } from '@src/models/User'
import { SmallCard } from '@src/ui/components/Card/Card'

interface IUsersProps {
  users: User[]
  hidden: boolean
  hovered?: string
}

export function Users({ users, hidden, hovered }: IUsersProps): JSX.Element {
  return (
    <HTMLTable striped className="flex-auto mr2">
      <tbody>
        {users.map(({ name, observer, vote }) => (
          <tr key={name}>
            <td style={{ width: '100%' }}>{name}</td>
            <td>
              {(vote || observer) && (
                <SmallCard active intent={vote === hovered ? 'primary' : 'none'} $nohover>
                  {observer ? '👀' : hidden ? '✓' : vote}
                </SmallCard>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  )
}
