import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Modal = ({ isToggled, children, setToggle }) => {
	return (
		<AnimatePresence>
			{isToggled && (
				<>
					<div>
						<button onClick={() => setToggle(false)}>Close</button>
						{children}
					</div>
				</>
			)}
		</AnimatePresence>
	)
}

export default Modal

Modal.propTypes = {
	isToggled: PropTypes.bool,
	children: PropTypes.element,
	setToggle: PropTypes.func,
}
