import React from 'react';

/**
 * Componente Botão com Icon
 * Classes do Bootstrap [primary, secondary, success, dangers, info, light, dark]
 */
const BtnIcon = (props) => {
    let color =  props.color || 'primary';
    let style = props.outline? `outline-` : '';
    console.log(`btn btn-${style}${color}`);
    return (
        <button onClick={props.onClick} className={`btn btn-${style}${color}`}>
            <i className={props.icon}></i> {props.children}
        </button>
    )
}
export default BtnIcon;