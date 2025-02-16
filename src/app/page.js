'use client';
import React from 'react';
import { Box, Heading, Button, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box p={4}>
      <Center>
        <Flex direction="column">
          <Heading mb={4}>Welcome to my Interview task app</Heading>
          <Center>
            <Text mb={4}>Auth just imitation</Text>
          </Center>
          <Button colorScheme="blue" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}
