import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Modal = ({ isToggled, children, setToggle }) => {
	return (
		<AnimatePresence>
			{isToggled && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{
						position: 'fixed',
						top: '30px',
						left: '50%',
						transform: 'translate3d(-50%, 0, 0)',
					}}
				>
					<motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 30 }}>
						<button onClick={() => setToggle(false)}>Close</button>
						{children}
					</motion.div>
				</motion.div>
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
