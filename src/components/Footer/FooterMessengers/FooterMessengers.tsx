import { ReactSVG } from 'react-svg';

// Styles
import './FooterMessengers.less';

function FooterMessengers() {
  return (
    <div className="footer-messengers">
      <div className="messenger-list">
        <div className="messengers">
          <ReactSVG
            className="messenger"
            src={require('../../../UI/icons/messenger/facebook.svg').default}
          />
          <ReactSVG
            className="messenger"
            src={require('../../../UI/icons/messenger/instagram.svg').default}
          />
          <ReactSVG
            className="messenger"
            src={require('../../../UI/icons/messenger/discord.svg').default}
          />
          <ReactSVG
            className="messenger"
            src={require('../../../UI/icons/messenger/skype.svg').default}
          />
          <ReactSVG
            className="messenger"
            src={require('../../../UI/icons/messenger/telegram.svg').default}
          />
        </div>
        <span className="footer-mail">timasarakaev@gmail.com</span>
      </div>
    </div>
  );
}

export default FooterMessengers;
