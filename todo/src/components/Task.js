export function Task ({name, id, priority, completed, description, handleClick}) {
    const onCheckBoxClick = (e) => {
       handleClick({completed: e.target.checked, id: e.target.id})
    }
    return (
        <>
            <li>
                <span>
                    <input type="checkbox" id={id} checked={completed} onChange={onCheckBoxClick}/>
                </span>
                <span>
                    {name} - {description}
                </span>
                <span>
                    {priority}
                </span>
            </li>
        </>
    )
}