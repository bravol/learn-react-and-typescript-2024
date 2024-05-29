export function Greetings(props) {
  console.log(props);
  return (
    <div>
      <p>
        Hi {props.firstName} {props.children}
      </p>
    </div>
  );
}
