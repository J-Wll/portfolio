export default function BigLink(props) {
    return (<p className={`${props.extraClasses}`}><a href={props.href} className={`${props.extraClasses} link-body-emphasis big-text`}>{props.text}</a></p>)
}