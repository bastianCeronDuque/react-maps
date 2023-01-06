import { MenuListItem } from '../MenuListItem/MenuListItem';
import React from 'react';
import s from './style.module.css';
import { DIFFICULTIES } from './constant';

const MenuList = (props) => {
	return (
		<div className={s.container}>
			{DIFFICULTIES.map((difficulty) => (
				<MenuListItem
					key={difficulty}
					isSelected={props.difficulty === difficulty}
					onClick={props.onItemClick}
					difficulty={difficulty}
				/>
			))}
		</div>
	);
};

export default MenuList;
