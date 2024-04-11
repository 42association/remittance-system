'use client';
import { IconButton, VStack, Text } from '@chakra-ui/react';
import { FaHome, FaPiggyBank, FaListOl } from 'react-icons/fa';
import { TbCoins } from "react-icons/tb";

export const RankButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('rank clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <VStack spacing={2}>
      <IconButton
        aria-label="Rank"
        icon={<FaListOl />}
        onClick={handleClick}
      />
      <Text fontSize="sm">順位</Text>
    </VStack>
  );
};

export const HomeIconButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('Home icon clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <VStack spacing={2}>
      <IconButton
        aria-label="Home"
        icon={<FaHome />}
        onClick={handleClick}
      />
    </VStack>
  );
};

export const PiggyBankButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('Piggy clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <VStack spacing={2}>

      <IconButton
        aria-label="PiggyBank"
        icon={<FaPiggyBank />}
        onClick={handleClick}
      />
    </VStack>
  );
};

export const CoinExchangeButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('exchange clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <VStack spacing={2}>
      <IconButton
        aria-label="CoinExchange"
        icon={<TbCoins />}
        onClick={handleClick}
      />
    </VStack>
  );
};

export default HomeIconButton;
