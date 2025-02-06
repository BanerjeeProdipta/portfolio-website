interface Props {
  children: React.ReactNode;
  title: string;
}
function SectionLayout(props: Props) {
  const { children, title } = props;

  return (
    <section className="flex flex-col w-full md:px-8 items-center py-2 justify-center">
      <div className="bg-bgDark/80 rounded border border-gray-500/20 w-full flex flex-col justify-center items-center">
        <h2 className="mb-8 p-1 text-4xl font-medium text-center custom-border">
          {title}
        </h2>{' '}
        <div className="max-w-5xl w-full p-8">{children}</div>
      </div>
    </section>
  );
}

SectionLayout.propTypes = {};

export default SectionLayout;
