
import { message } from 'antd';

const ToastCustomComponent = (type :any ,title:any) => {

  // console.log("this is props in custom toast " , props)

  // const {type ,title} =props

  

  const setcolor = () => { 
    let color ="#FFFFFF" ;
    if(type==="success"){
      color ="#673275"
    }else{
      color = "#ea5c0a"
    }
    return color      
  }

  const [messageApi, contextHolder] = message.useMessage();

  return (    
    messageApi.open({ type: type, content: title  })
  );

};

export default ToastCustomComponent;