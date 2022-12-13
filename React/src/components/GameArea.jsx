import React from 'react'
import { useState } from 'react'
import {
  TextInput,
  Button,
  Group,
  ActionIcon,
  MantineProvider,
  Text,
} from '@mantine/core'

export default function GameArea() {
  const [answerNum, setAnswerNum] = useState(0)
  return (
    <div style={{ maxWidth: 800, margin: 'auto' }}>
      <MantineProvider>
        <Text mt="xl" color="blue.3">
          "You're bringing..."
        </Text>
        <TextInput
          rightSection={<ActionIcon>{'🚀'}</ActionIcon>}
          placeholder=""
          style={{ color: 'blue.3' }}
          disabled={answerNum === 0 ? false : true}
        />
        <Text mt="xl" color="blue.3">
          "You're bringing..."
        </Text>
        <TextInput
          rightSection={<ActionIcon>{'🚀'}</ActionIcon>}
          placeholder=""
          disabled={answerNum === 1 ? false : true}
        />
        <Text mt="xl" color="blue.3">
          "You're bringing..."
        </Text>
        <TextInput
          rightSection={<ActionIcon>{'🚀'}</ActionIcon>}
          placeholder=""
          disabled={answerNum === 2 ? false : true}
        />
        <Text mt="xl" color="blue.3">
          "You're bringing..."
        </Text>
        <TextInput
          rightSection={<ActionIcon>{'🚀'}</ActionIcon>}
          placeholder=""
          disabled={answerNum === 3 ? false : true}
        />
        <Text mt="xl" color="blue.3">
          "You're bringing..."
        </Text>
        <TextInput
          rightSection={<ActionIcon>{'🚀'}</ActionIcon>}
          placeholder=""
          disabled={answerNum === 4 ? false : true}
        />
        <Group position="center" mt="xl">
          <Button variant="outline">Shoot The Moon</Button>
        </Group>
      </MantineProvider>
    </div>
  )
}
