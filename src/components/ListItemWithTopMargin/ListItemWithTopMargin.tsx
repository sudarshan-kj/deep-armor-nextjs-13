export default function ListItemWithTopMargin({
  children,
  marginTopValue = "1rem",
}: {
  children: React.ReactNode;
  marginTopValue?: string;
}) {
  return <li style={{ marginTop: marginTopValue }}>{children}</li>;
}
