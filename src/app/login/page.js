'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Input, Heading, VStack, Text, Field } from '@chakra-ui/react';

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/records');
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Heading mb="6" textAlign="center">
        Log in
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <Field.Root label="Email">
            <Field.Label>Email</Field.Label>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Field.Root>
          <Field.Root label="Password">
            <Field.Label>Password</Field.Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Field.Root>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="blue" width="full">
            Sign in
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
