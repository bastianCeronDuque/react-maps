import { useState } from 'react';
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty.jsx';
import MenuList from './components/MenuList/MenuList.jsx';
import s from './style.module.css';

// STATEFULL COMPONENT
export function App() {
	const [currentDifficulty, setCurrentDifficulty] = useState('');

	const onMenuListItemClick = (difficulty) => {
		setCurrentDifficulty(difficulty);
	};
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				{' '}
				Select your React difficulty
			</h1>
			<div className={s.workspace}>
				<MenuList
					difficulty={currentDifficulty}
					onItemClick={onMenuListItemClick}
				/>
				<DisplayDifficulty difficulty={currentDifficulty} />
			</div>
		</div>
	);
}
