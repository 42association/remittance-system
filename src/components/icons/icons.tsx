'use client';
import { IconButton } from '@chakra-ui/react';
import { FaHome, FaPiggyBank } from 'react-icons/fa';
import { TbCoins } from "react-icons/tb";
import { FaRankingStar } from "react-icons/fa6";

export const RankButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('rank clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <IconButton
      aria-label="Rank"
      icon={<FaRankingStar />}
      onClick={handleClick}
    />
  );
};

export const HomeIconButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('Home icon clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <IconButton
      aria-label="Home"
      icon={<FaHome />}
      onClick={handleClick}
    />
  );
};

export const PiggyBankButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('Piggy clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <IconButton
      aria-label="PiggyBank"
      icon={<FaPiggyBank />}
      onClick={handleClick}
    />
  );
};

export const CoinExchangeButton = () => {
  // クリックイベントハンドラ
  const handleClick = () => {
    console.log('exchange clicked');
    // ここでクリックイベントに対する処理を実装
  };

  return (
    <IconButton
      aria-label="CoinExchange"
      icon={<TbCoins />}
      onClick={handleClick}
    />
  );
};

export default HomeIconButton;
