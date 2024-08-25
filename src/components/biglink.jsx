export default function BigLink(props) {
    return (<p><a href={props.href} className={`${props.extraClasses} link-body-emphasis big-text`}>{props.text}</a></p>)
}