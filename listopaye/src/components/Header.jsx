import React from 'react';

const Header = () => {
	return (
		<header data-testid="header" >
			<img src={process.env.PUBLIC_URL + "/assets/listopaye.png"} 
				alt="listopayeLogo"
				data-testid="listopayeLogo"
			 />
		</header>
	)
}

Header.propTypes = {
	
}

export default Header;