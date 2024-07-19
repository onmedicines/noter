export default function SidebarTags(props) {
  return (
    <p id={props.id} className="before:content-['#'] text-white text-2xl ml-4">
      {props.tagName}
    </p>
  );
}
