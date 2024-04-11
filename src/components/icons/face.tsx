import { Avatar } from '@chakra-ui/react';

interface FaceProps {
	photoUrl?: string;
	userName?: string;
}

const userPhotoUrl = 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const Face: React.FC<FaceProps> = ({ photoUrl = undefined, userName = 'User Name' }) => {
	const photoSource = photoUrl || userPhotoUrl;
	return <Avatar size="md" name={userName} src={photoSource} />;
};

export default Face;