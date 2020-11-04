const withData = (masSpeakersToShow) => (Component) => () => {
  return <Component speakers={speakers}></Component>
}

export default withData;