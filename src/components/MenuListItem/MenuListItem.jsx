import { useState } from 'react';
import s from './style.module.css';

export const MenuListItem = (props) => {
	const [isHovered, setIsHover] = useState(false);
	const activate = () => {
		setIsHover(true);
	};
	const deactivate = () => {
		setIsHover(false);
	};
	const getBackgroundColor = () => {
		if (isHovered) {
			return '#a5e9ff';
		} else {
			if (props.Selected) {
				return '#26baea';
			} else {
				return 'eff0ef';
			}
		}
	};
	const onItemClick = () => {
		props.onClick(props.difficulty);
	};
	return (
		<div
			onClick={onItemClick}
			className={s.container}
			onMousseENter={activate}
			onMousseLeave={deactivate}
			style={{ backgroundColor: getBackgroundColor() }}
		>
			Set to: {props.difficulty}
		</div>
	);
};
