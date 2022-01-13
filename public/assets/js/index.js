console.log("Hello, world!!");
const targetSearch = $("#exTargetBtn");

const handleExTarget = async (event) => {
  event.preventDefault();
  const target = $("#exTarget").val();

  console.log(target);
};

targetSearch.on("click", handleExTarget);
