import ReactDOM from 'react-dom'
import { type MouseEventHandler, type FC } from 'react'
import { type CloseModal } from '../../Interfaces/Movies'
import './Modal.css'



export const Modal: FC<CloseModal> = ({closeModal, children}) => {
    const portal = document.getElementById('portal')
    const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
    }

  return ReactDOM.createPortal(
        <div className='overlay' onClick={handleOverlayClick}>
            {children}
        </div>,
        portal as HTMLElement
    )
}
