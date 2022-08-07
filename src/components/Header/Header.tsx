import React from 'react';
import classes from './Header.module.css';

type HeaderType = {}

function Header(props: HeaderType) {
    return (
        <header className={classes.header}>
            <img src='https://avatars.mds.yandex.net/i?id=e07292fbe030b6500f16e162187409ab-4231170-images-thumbs&n=13'/>
        </header>
    )
}

export default Header;