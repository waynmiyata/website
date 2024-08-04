type SplitContentProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

function SplitContentEqual(props: SplitContentProps) {
  return (
    <div className="grid grid-flow-col grid-cols-2">
      <div className="grid flex-grow place-items-start">{props.left}</div>
      <div className="grid flex-grow place-items-center">{props.right}</div>
    </div>
  );
}
export default SplitContentEqual;
