import { VStack, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link"
import { IconType } from 'react-icons';
import { Icon } from '@chakra-ui/react'
import styles from "./NavItem.module.css";

interface NavButtonProps {
	icon: IconType;
	label: string;
	href: string,
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, href }) => {
	return (
		<Link href={href} className={styles.className} as={NextLink}>
			<VStack spacing={1}>
				<Icon as={icon} boxSize={9} />
				<Text>{label}</Text>
			</VStack>
		</Link>
	);
};

export default NavButton;
