
import { message } from 'antd';

const ToastModular = () => {

  const [messageApi, contextHolder] = message.useMessage();

  return { messageApi, contextHolder };

};

export default ToastModular;