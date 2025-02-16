'use client';
import React from 'react';
import { Flex, Heading, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { ColorModeButton } from '../ui/color-mode';

const Navbar = () => {
  return (
    <Flex as="nav" p={5} alignItems="center" shadow="sm" mb={3}>
      <Heading>
        <Link href="/">Breweries</Link>
      </Heading>
      <Spacer />
      <ColorModeButton />
    </Flex>
  );
};

export default Navbar;
