import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import styles from './loading.module.css';
const DroidLoading = () => {
  return (
    <Flex justifyContent="center" alignItems="center" className={styles.loading}>
      <Spinner size="xl" />
    </Flex>
  );
};

export default DroidLoading;
