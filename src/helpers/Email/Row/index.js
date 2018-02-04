import React from 'react'


export default props => {
    return (
        <table className='wrapper' border="0" cellPadding="0" cellSpacing="0" width="500" align="center">
            <tr align={props.align}>
                {props.children}
            </tr>
        </table>
    )
}