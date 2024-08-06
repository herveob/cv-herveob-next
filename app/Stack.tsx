const Stack = ({stack}: {stack:string[]}) => {
  return (
    <div className="stack mt-4">
    <p className="text-lg mb-4">Stack technique :</p>
    <div className="mt-1 ml-4 flex flex-wrap">
      {stack.map((tech, techIndex) => (
        <span key={techIndex} className="mb-2 mr-2 bg-cyan-800 text-neutral-900 p-1 rounded-lg">{tech}</span>
      ))}
    </div>
  </div>
  );
};

export default Stack;