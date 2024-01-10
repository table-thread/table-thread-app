import { message } from 'antd';

function ToastComponent(props :any) {
const { type = null , title} = props 
  return (
  
    message.info(type ? title :props)
  //   type === "success"  ? message.success(title) : (type === "error" ? message.error(title) : (type === "warning" ? message.warning(title) :(type === "loading"  ?message.loading(title) : message.info(title)) ))
  // ;
  )

}

export default ToastComponent;