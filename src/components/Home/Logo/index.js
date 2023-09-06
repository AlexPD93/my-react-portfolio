import './index.scss'

import A from '../../../assets/images/large-a.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={A} alt="a" />
    </div>
  )
}

export default Logo
