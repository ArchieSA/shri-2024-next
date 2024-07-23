export function HeadphoneDetails({ headphone }) {
  if (!headphone) {
    return <div>Empty</div>;
  }

  const { name } = headphone;

  return <div>{name}</div>;
}
