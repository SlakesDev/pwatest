export default function Details({ content }: { content: string }) {
  return (
    <div className=" w-full h-screen justify-center items-center flex flex-col gap-2">
      <div className=" fullShadow  w-[400px]  pl-4 pr-4 p-2 bg-white border-2 rounded-2xl font-bold flex justify-between items-center text-text">
        <p>{content} Todo Details</p>
      </div>
    </div>
  );
}
