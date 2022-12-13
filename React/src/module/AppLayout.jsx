import React from 'react'
import { Rocket } from 'tabler-icons-react'
import {
  ActionIcon,
  AppShell,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from '@mantine/core'
import GameArea from '../components/GameArea'
import RiddleArea from '../components/RiddleArea'

export default function AppLayout() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs" padding={50}>
          <Rocket size={48} strokeWidth={1.5} color={'#bf5440'} />
          Moonage Daily
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colors.gray[8] },
      })}
    >
      <div style={{ padding: 40 }}>
        <RiddleArea />
        <GameArea />
      </div>
    </AppShell>
  )
}
