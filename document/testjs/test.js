const Vex = () => {};

// Default log function sends all arguments to console.
Vex.L = (block, args) => {
  if (!args) return;
  const line = Array.prototype.slice.call(args).join(' ');
  window.console.log(block + ': ' + line);
};


console.log(Vex);
