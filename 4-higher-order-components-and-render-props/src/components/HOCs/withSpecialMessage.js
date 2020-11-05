const withSpecialMessage = () => (Component) => (props) => {
  // could get this from something like a push notification.
  const specialMessage = "Talk on angular cancelled at 10:30AM";
  return <Component {...props} specialMessage={specialMessage}></Component>;
};

export default withSpecialMessage;
