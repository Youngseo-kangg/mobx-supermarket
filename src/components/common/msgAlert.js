import useStore from '../../store/useStore';
import { observer } from 'mobx-react';
import { MsgAlertBackdrop, MsgAlertComponent } from '../../styles/msgAlert';

function MsgAlert() {
  const { msgAlert } = useStore();
  return (
    <MsgAlertBackdrop>
      <MsgAlertComponent>
        <p>{msgAlert.currentMsg}</p>
        <button onClick={() => msgAlert.closeMsgAlert()}>닫기</button>
      </MsgAlertComponent>
    </MsgAlertBackdrop>
  );
}

export default observer(MsgAlert);
