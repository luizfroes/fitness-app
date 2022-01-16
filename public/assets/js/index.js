console.log("Hello, world!!");

const targetSearch = $("#exTargetBtn");

const handleExTarget = async (event) => {
  event.preventDefault();
  const target = $("#exTarget").val();
  //   console.log(target);
  const response = await fetch(`/api/exercise/${target}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

targetSearch.on("click", handleExTarget);
