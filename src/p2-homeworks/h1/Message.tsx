import React from 'react';
import cl from './Message.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={cl.message}>
            <img src={props.avatar} alt={'Friend'} className={cl.profile_img}/>
            <div className={cl.message_bubble}>
                <div className={cl.message_body}>
                    <span className={cl.name}>{props.name}</span>
                    <span className={cl.message_send}>{props.message}</span>
                </div>
                <span className={cl.time}>{props.time}</span>
            </div>
        </div>
    );
};
