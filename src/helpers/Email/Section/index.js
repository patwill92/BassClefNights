import React from 'react'

export default props => {
    return (
        <table width="100%">
            <tr align={props.align} valign={props.valign}>
                {props.children}
            </tr>
        </table>
    )
}