import { makeAutoObservable } from 'mobx';

const initialMsgAlertStore = {
  view: false,
  msg: '',
};

const msgAlert = makeAutoObservable({
  ...initialMsgAlertStore,
  // TODO : 메세지를 열고 보여줄 openMsgAlert를 작성하세요.
  openMsgAlert(message) {
    this.view = true;
    this.msg = message;
  },
  // TODO : 메세지를 닫을 closeMsgAlert를 작성하세요.
  closeMsgAlert() {
    this.view = false;
    this.msg = '';
  },
  // TODO : 메세지의 msg부분만 뽑아낼 action currentMsg를 작성하세요.
  get currentMsg() {
    return this.msg;
  },
});

export default msgAlert;
