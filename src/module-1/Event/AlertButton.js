//You can pass props to Event Handlers same as components.
//Here message contains the text that appears in the alert box.
//children is the value that is the text in the button.


function AlertButton({message, children}) {
  return(
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default AlertButton;