export const DashBoardData = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-background p-6">
      <div className="flex justify-center text-center">
        <div>
          <p className="font-medium text-muted-foreground">{data.title}</p>
          <h3 className="mt-4 text-4xl font-bold">{data.value}</h3>
        </div>
      </div>
    </div>
  );
};
