import React from 'react';

const Header = () => {
	return (
		<header>
			<img src={process.env.PUBLIC_URL + "/assets/listopaye.png"} alt="listopaye logo" />
		</header>
	)
}

Header.propTypes = {
	
}

export default Header;